import { NextRequest, NextResponse } from 'next/server'

// ──────────────────────────────────────────
// レート制限（in-memory）
// APIキーごとに1時間10リクエストまで
// ──────────────────────────────────────────
const RATE_LIMIT_MAX = 10
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1時間

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

function checkRateLimit(apiKey: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(apiKey)

  if (!entry || now > entry.resetAt) {
    // 新規 or ウィンドウリセット
    rateLimitMap.set(apiKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  entry.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count }
}

// ──────────────────────────────────────────
// ツール定義
// ──────────────────────────────────────────
type ToolName = 'profile_review' | 'match_message' | 'follow_email'

const TOOL_PROMPTS: Record<ToolName, string> = {
  profile_review: `あなたは結婚相談所の専門カウンセラーです。
以下の会員プロフィールを読み、婚活で魅力的に見えるよう具体的な添削アドバイスを日本語で提供してください。
改善ポイントを箇条書きで3〜5点挙げ、修正案も示してください。`,

  match_message: `あなたは結婚相談所のカウンセラーです。
以下の情報をもとに、相手に送るマッチング提案文（お見合い申込メッセージ）を日本語で作成してください。
丁寧で誠実、かつ自然な文体で200〜300文字程度にまとめてください。`,

  follow_email: `あなたは結婚相談所のカウンセラーです。
以下の情報をもとに、お見合い後のフォローメールテンプレートを日本語で作成してください。
温かみがあり、次のステップ（交際）へ自然につながる内容にしてください。`,
}

const DUMMY_RESPONSES: Record<ToolName, string> = {
  profile_review: `【プロフィール添削アドバイス（サンプル）】

① 自己紹介文に具体的なエピソードを追加しましょう
「料理が好き」→「毎週末に和食を作り、だし巻き卵が得意です」

② 趣味は「何のためにするか」まで書くと深みが出ます
「読書」→「月3〜4冊読み、最近はビジネス書と小説を交互に読んでいます」

③ 結婚後の生活イメージを具体的に
「家庭的な生活」→「休日は一緒に料理したり、近所を散歩するような穏やかな生活を望んでいます」

④ 写真は笑顔の自然体ショットを1枚追加することをお勧めします

⑤ 「相手に求める条件」より「一緒に楽しみたいこと」を前面に出すと印象が良くなります`,

  match_message: `【マッチング提案文（サンプル）】

はじめまして。プロフィールを拝見し、共通の趣味が多いことに惹かれてメッセージさせていただきました。

休日の過ごし方や価値観がとても似ていると感じ、ぜひ一度お話しできればと思います。

もしよろしければ、お見合いの機会をいただけますか？よろしくお願いいたします。`,

  follow_email: `【フォローメールテンプレート（サンプル）】

件名：先日はありがとうございました

○○様

先日はお時間をいただき、ありがとうございました。
お話しできてとても楽しく、あっという間に時間が過ぎました。

いただいたお話の中で、○○のことがとても印象に残っています。

もしよろしければ、また改めてお会いできればと思っています。
ご検討いただけますと幸いです。

どうぞよろしくお願いいたします。`,
}

// ──────────────────────────────────────────
// OpenAI呼び出し（APIキーがある場合）
// ──────────────────────────────────────────
async function callOpenAI(tool: ToolName, input: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return DUMMY_RESPONSES[tool]
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: TOOL_PROMPTS[tool] },
          { role: 'user', content: input },
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    })

    if (!res.ok) {
      console.error('OpenAI error:', await res.text())
      return DUMMY_RESPONSES[tool]
    }

    const data = await res.json()
    return data.choices?.[0]?.message?.content ?? DUMMY_RESPONSES[tool]
  } catch (err) {
    console.error('OpenAI fetch error:', err)
    return DUMMY_RESPONSES[tool]
  }
}

// ──────────────────────────────────────────
// POST /api/tools
// ──────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. APIキー認証
  const apiKey = req.headers.get('x-api-key') ?? ''
  const validKeys = (process.env.TOOLS_API_KEYS ?? '').split(',').map(k => k.trim()).filter(Boolean)

  if (!apiKey || !validKeys.includes(apiKey)) {
    return NextResponse.json({ success: false, error: 'Invalid API key' }, { status: 401 })
  }

  // 2. レート制限チェック
  const { allowed, remaining } = checkRateLimit(apiKey)
  if (!allowed) {
    return NextResponse.json(
      { success: false, error: 'Rate limit exceeded. Try again later.' },
      { status: 429 }
    )
  }

  // 3. リクエスト解析
  let body: { tool?: string; input?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const { tool, input } = body
  const VALID_TOOLS: ToolName[] = ['profile_review', 'match_message', 'follow_email']

  if (!tool || !VALID_TOOLS.includes(tool as ToolName)) {
    return NextResponse.json(
      { success: false, error: `Invalid tool. Must be one of: ${VALID_TOOLS.join(', ')}` },
      { status: 400 }
    )
  }

  if (!input || typeof input !== 'string' || input.trim().length === 0) {
    return NextResponse.json({ success: false, error: 'input is required' }, { status: 400 })
  }

  // 4. AI呼び出し
  const result = await callOpenAI(tool as ToolName, input.trim())

  return NextResponse.json({
    success: true,
    tool,
    result,
    remaining,
  })
}
