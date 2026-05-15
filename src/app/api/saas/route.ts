import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ──────────────────────────────────────────
// Supabase クライアント（service_role）
// ──────────────────────────────────────────
const supabaseUrl = process.env.SUPABASE_URL ?? ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

function getSupabase() {
  return createClient(supabaseUrl, supabaseServiceKey)
}

// ──────────────────────────────────────────
// ツール定義
// ──────────────────────────────────────────
type ToolName =
  | 'profile_review'
  | 'match_message'
  | 'follow_email'
  | 'rejection_message'
  | 'interview_prep'
  | 'monthly_report'

const TOOL_PROMPTS: Record<ToolName, string> = {
  profile_review:
    'あなたは結婚相談所のプロカウンセラーです。以下の会員プロフィール文を添削し、より魅力的で誠実な文章に改善してください。改善後の文章と改善ポイントを日本語で回答してください。',
  match_message:
    'あなたは結婚相談所のプロカウンセラーです。以下の情報をもとに、お見合い申し込みの丁寧で魅力的なメッセージ文を作成してください。',
  follow_email:
    'あなたは結婚相談所のカウンセラーです。以下の状況に合わせた、温かみのあるフォローメールのテンプレートを作成してください。',
  rejection_message:
    'あなたは結婚相談所のカウンセラーです。以下の状況に合わせた、相手の気持ちを傷つけない丁寧なお断りメッセージを作成してください。',
  interview_prep:
    'あなたは結婚相談所のカウンセラーです。以下の会員情報をもとに、初回面談の準備チェックリストと想定質問集を作成してください。',
  monthly_report:
    'あなたは結婚相談所の運営アシスタントです。以下の会員データをもとに、月次活動レポートのサマリーを作成してください。',
}

const VALID_TOOLS: ToolName[] = [
  'profile_review',
  'match_message',
  'follow_email',
  'rejection_message',
  'interview_prep',
  'monthly_report',
]

// ──────────────────────────────────────────
// ダミーレスポンス（OpenAI未設定時）
// ──────────────────────────────────────────
const DUMMY_RESPONSES: Record<ToolName, string> = {
  profile_review: `【プロフィール添削結果】

■ 改善後の文章：
趣味は読書と料理で、週末は新しいレシピに挑戦するのが楽しみです。仕事は営業職で、人と話すことが好きです。将来は互いを思いやれる温かい家庭を築きたいと思っています。

■ 改善ポイント：
① 具体的なエピソードを追加しました（「新しいレシピに挑戦」）
② 仕事内容と好きな理由を自然につなげました
③ 「温かい家庭」という結婚後のビジョンを明確化しました
④ 全体的に読みやすく、誠実さが伝わる文体に調整しました
⑤ 相手に対する誠実さと前向きな姿勢を前面に出しました`,

  match_message: `【マッチング申し込みメッセージ】

はじめまして。プロフィールを拝見し、共通の趣味や価値観にとても共感しました。

特に休日の過ごし方や将来に対する考え方が似ていると感じ、ぜひ一度お話しできればと思いメッセージいたしました。

もしよろしければ、お見合いの機会をいただけますと幸いです。どうぞよろしくお願いいたします。`,

  follow_email: `【フォローメールテンプレート】

件名：先日はありがとうございました

○○様

先日はお時間をいただき、誠にありがとうございました。
お話しする中で、共通の話題が多く、とても楽しいひとときを過ごすことができました。

特に○○のお話がとても印象に残っております。

もしよろしければ、改めてお会いできる機会をいただけますでしょうか。
ご検討いただけますと大変嬉しく思います。

どうぞよろしくお願いいたします。`,

  rejection_message: `【丁寧なお断りメッセージ】

○○様

先日はお時間をいただき、誠にありがとうございました。
慎重に考えました結果、今回はご縁をお繋ぎすることが難しいと判断いたしました。

○○様のお人柄はとても素晴らしく、必ず素敵なご縁に恵まれると思います。

今後のご活動が実り多きものになりますよう、心よりお祈り申し上げます。`,

  interview_prep: `【初回面談 準備チェックリスト & 想定質問集】

■ 準備チェックリスト：
□ プロフィールの内容を再確認する
□ 自己紹介（2分程度）を準備する
□ 趣味・休日の過ごし方を具体的に話せるよう準備
□ 結婚後の生活イメージを整理する
□ 服装・身だしなみを整える
□ 時間に余裕を持って到着する

■ 想定質問集：
Q1. 現在のお仕事について教えてください
Q2. 休日はどのように過ごされていますか？
Q3. どんな家庭を築きたいとお考えですか？
Q4. 結婚後の住まいや生活スタイルについてお考えはありますか？
Q5. 趣味を一緒に楽しめるパートナーをお探しですか？`,

  monthly_report: `【月次活動レポート サマリー】

■ 今月の活動概況：
・お見合い実施数：〇件
・交際申し込み数：〇件
・成立件数：〇件
・マッチング率：〇%

■ 主な成果：
・新規会員〇名のプロフィールを作成・改善
・〇名のお見合いが成立、うち〇名が交際へ進展

■ 来月に向けた課題：
・プロフィール写真の更新を促進
・活動が停滞している会員へのフォロー強化
・新規会員獲得施策の継続

■ カウンセラーからのコメント：
今月は積極的なアプローチが実を結び、良い結果が出ました。
来月も引き続き丁寧なサポートを続けてまいります。`,
}

// ──────────────────────────────────────────
// OpenAI呼び出し
// ──────────────────────────────────────────
async function callAI(tool: ToolName, input: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return DUMMY_RESPONSES[tool]
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: TOOL_PROMPTS[tool] },
          { role: 'user', content: input },
        ],
        max_tokens: 1000,
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
// POST /api/saas
// ──────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. リクエスト解析
  let body: { email?: string; tool?: string; input?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const { email, tool, input } = body

  // バリデーション
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ success: false, error: 'emailは必須です' }, { status: 400 })
  }

  if (!tool || !VALID_TOOLS.includes(tool as ToolName)) {
    return NextResponse.json(
      { success: false, error: `toolが無効です。有効なツール: ${VALID_TOOLS.join(', ')}` },
      { status: 400 }
    )
  }

  if (!input || typeof input !== 'string' || input.trim().length === 0) {
    return NextResponse.json({ success: false, error: 'inputは必須です' }, { status: 400 })
  }

  const supabase = getSupabase()
  const now = new Date()

  // 2. サブスクリプション検索 or 自動登録
  let { data: subscription, error: fetchError } = await supabase
    .from('saas_subscriptions')
    .select('*, saas_plans(*)')
    .eq('email', email.toLowerCase().trim())
    .single()

  if (fetchError && fetchError.code === 'PGRST116') {
    // 新規登録（freeプラン）
    const { data: newSub, error: insertError } = await supabase
      .from('saas_subscriptions')
      .insert({
        email: email.toLowerCase().trim(),
        plan_id: 'free',
        usage_count: 0,
        usage_reset_at: new Date(
          Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)
        ).toISOString(),
      })
      .select('*, saas_plans(*)')
      .single()

    if (insertError || !newSub) {
      console.error('Insert error:', insertError)
      return NextResponse.json({ success: false, error: 'ユーザー登録に失敗しました' }, { status: 500 })
    }
    subscription = newSub
  } else if (fetchError) {
    console.error('Fetch error:', fetchError)
    return NextResponse.json({ success: false, error: 'データベースエラーが発生しました' }, { status: 500 })
  }

  if (!subscription) {
    return NextResponse.json({ success: false, error: 'サブスクリプションが見つかりません' }, { status: 500 })
  }

  // 3. 月リセットチェック
  const resetAt = new Date(subscription.usage_reset_at)
  if (now >= resetAt) {
    const nextReset = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1))
    await supabase
      .from('saas_subscriptions')
      .update({ usage_count: 0, usage_reset_at: nextReset.toISOString(), updated_at: now.toISOString() })
      .eq('id', subscription.id)
    subscription.usage_count = 0
    subscription.usage_reset_at = nextReset.toISOString()
  }

  // 4. 使用量チェック
  const plan = subscription.saas_plans
  const monthlyLimit: number = plan?.monthly_limit ?? 5
  const usageCount: number = subscription.usage_count ?? 0
  const planId: string = subscription.plan_id ?? 'free'

  if (monthlyLimit !== -1 && usageCount >= monthlyLimit) {
    return NextResponse.json(
      {
        success: false,
        error: '月間利用上限に達しました。プランをアップグレードしてください。',
        plan: planId,
        upgrade_url: '/saas/upgrade',
      },
      { status: 429 }
    )
  }

  // 5. AI生成
  const result = await callAI(tool as ToolName, input.trim())

  // 6. ログ記録 & カウントインクリメント
  await Promise.all([
    supabase.from('saas_usage_logs').insert({
      subscription_id: subscription.id,
      tool,
      input_length: input.trim().length,
    }),
    supabase
      .from('saas_subscriptions')
      .update({ usage_count: usageCount + 1, updated_at: now.toISOString() })
      .eq('id', subscription.id),
  ])

  const remaining = monthlyLimit === -1 ? 9999 : monthlyLimit - usageCount - 1

  return NextResponse.json({
    success: true,
    tool,
    result,
    plan: planId,
    remaining,
    limit: monthlyLimit,
  })
}
