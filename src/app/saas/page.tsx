'use client'

import { useState } from 'react'
import Link from 'next/link'

const PRIMARY = '#c0392b'
const PRIMARY_LIGHT = '#e74c3c'
const BASE = '#fff8f5'
const SURFACE = '#fff2ee'
const TEXT = '#2d1a1a'
const MUTED = '#8a5a5a'
const BORDER = '#f0d0cc'

type ToolName =
  | 'profile_review'
  | 'match_message'
  | 'follow_email'
  | 'rejection_message'
  | 'interview_prep'
  | 'monthly_report'

interface Tool {
  id: ToolName
  icon: string
  label: string
  placeholder: string
  availableFor: string[]
}

const TOOLS: Tool[] = [
  {
    id: 'profile_review',
    icon: '✍️',
    label: 'プロフィール添削AI',
    placeholder: '添削したい会員のプロフィール文を入力してください...',
    availableFor: ['free', 'standard', 'premium'],
  },
  {
    id: 'match_message',
    icon: '💌',
    label: 'マッチング提案文AI',
    placeholder: 'お見合い申し込みに必要な会員情報（年齢・職業・趣味など）を入力してください...',
    availableFor: ['free', 'standard', 'premium'],
  },
  {
    id: 'follow_email',
    icon: '📧',
    label: 'フォローメールAI',
    placeholder: 'お見合い後の状況や会員の特徴を入力してください...',
    availableFor: ['free', 'standard', 'premium'],
  },
  {
    id: 'rejection_message',
    icon: '🙏',
    label: '断り文句AI',
    placeholder: 'お断りする状況や相手の特徴を入力してください...',
    availableFor: ['standard', 'premium'],
  },
  {
    id: 'interview_prep',
    icon: '📋',
    label: '初回面談準備AI',
    placeholder: '会員の基本情報（年齢・職業・趣味・希望条件など）を入力してください...',
    availableFor: ['standard', 'premium'],
  },
  {
    id: 'monthly_report',
    icon: '📊',
    label: '月次レポートAI',
    placeholder: '今月の会員データ（活動数・お見合い数・成立数など）を入力してください...',
    availableFor: ['standard', 'premium'],
  },
]

export default function SaasPage() {
  const [email, setEmail] = useState('')
  const [selectedTool, setSelectedTool] = useState<ToolName>('profile_review')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [planInfo, setPlanInfo] = useState<{
    plan: string
    remaining: number
    limit: number
  } | null>(null)
  const [upgradePrompt, setUpgradePrompt] = useState(false)

  const activeTool = TOOLS.find((t) => t.id === selectedTool)!
  const planLabel =
    planInfo?.plan === 'premium'
      ? 'プレミアム'
      : planInfo?.plan === 'standard'
      ? 'スタンダード'
      : '無料'

  const handleSubmit = async () => {
    setError('')
    setResult('')
    setUpgradePrompt(false)

    if (!email.trim()) {
      setError('メールアドレスを入力してください')
      return
    }
    if (!input.trim()) {
      setError('入力テキストを入力してください')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/saas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tool: selectedTool, input }),
      })

      const data = await res.json()

      if (!data.success) {
        if (res.status === 429) {
          setUpgradePrompt(true)
          setError(data.error)
        } else {
          setError(data.error || 'エラーが発生しました')
        }
        return
      }

      setResult(data.result)
      setPlanInfo({ plan: data.plan, remaining: data.remaining, limit: data.limit })
    } catch {
      setError('通信エラーが発生しました。もう一度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`, padding: '40px 20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.15)', borderRadius: 20,
            padding: '6px 16px', marginBottom: 16, fontSize: 12, color: 'white'
          }}>
            🤝 NextraLabs × マレッジロードジャパン 共同提供
          </div>
          <h1 style={{ color: 'white', fontSize: 26, fontWeight: 700, margin: '0 0 8px' }}>
            結婚相談所向け AIアシスタント
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, margin: 0 }}>
            業務を AI でサポート。プロフィール添削・提案文・フォローメールを瞬時に生成
          </p>
          {planInfo && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.2)', borderRadius: 12,
              padding: '6px 14px', marginTop: 14, fontSize: 12, color: 'white'
            }}>
              📦 現在のプラン: <strong>{planLabel}プラン</strong>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 16px' }}>
        {/* メール入力 */}
        <div style={{
          background: 'white', borderRadius: 16, padding: 24,
          border: `1px solid ${BORDER}`, marginBottom: 20,
          boxShadow: '0 2px 8px rgba(192,57,43,0.06)'
        }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 8 }}>
            📧 メールアドレス（初回登録 / ログイン）
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{
              width: '100%', padding: '10px 14px', borderRadius: 10, fontSize: 14,
              border: `1.5px solid ${BORDER}`, outline: 'none', boxSizing: 'border-box',
              color: TEXT,
            }}
          />
          <p style={{ fontSize: 11, color: MUTED, margin: '6px 0 0' }}>
            初回入力時に無料プランで自動登録されます
          </p>
        </div>

        {/* ツール選択タブ */}
        <div style={{
          background: 'white', borderRadius: 16, padding: 20,
          border: `1px solid ${BORDER}`, marginBottom: 20,
          boxShadow: '0 2px 8px rgba(192,57,43,0.06)'
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 12 }}>🛠️ ツールを選択</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
            {TOOLS.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedTool(tool.id)
                  setInput('')
                  setResult('')
                  setError('')
                  setUpgradePrompt(false)
                }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 14px', borderRadius: 10, fontSize: 13,
                  border: selectedTool === tool.id ? `2px solid ${PRIMARY}` : `1.5px solid ${BORDER}`,
                  background: selectedTool === tool.id ? `rgba(192,57,43,0.06)` : 'white',
                  color: selectedTool === tool.id ? PRIMARY : TEXT,
                  fontWeight: selectedTool === tool.id ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.15s',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 18 }}>{tool.icon}</span>
                <span style={{ fontSize: 12 }}>{tool.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 入力エリア */}
        <div style={{
          background: 'white', borderRadius: 16, padding: 24,
          border: `1px solid ${BORDER}`, marginBottom: 20,
          boxShadow: '0 2px 8px rgba(192,57,43,0.06)'
        }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 8 }}>
            {activeTool.icon} {activeTool.label}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={activeTool.placeholder}
            rows={6}
            style={{
              width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: 13,
              border: `1.5px solid ${BORDER}`, outline: 'none', resize: 'vertical',
              boxSizing: 'border-box', color: TEXT, lineHeight: 1.7,
            }}
          />

          {error && (
            <div style={{
              marginTop: 12, padding: '10px 14px', borderRadius: 10,
              background: '#fff5f5', border: '1px solid #fecaca',
              color: PRIMARY_LIGHT, fontSize: 13,
            }}>
              ⚠️ {error}
            </div>
          )}

          {upgradePrompt && (
            <div style={{
              marginTop: 12, padding: '14px 16px', borderRadius: 12,
              background: `linear-gradient(135deg, rgba(192,57,43,0.05), rgba(231,76,60,0.05))`,
              border: `1.5px solid ${BORDER}`,
            }}>
              <p style={{ fontSize: 13, color: TEXT, fontWeight: 600, margin: '0 0 8px' }}>
                🚀 プランをアップグレードして制限なく利用しましょう
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Link href="/saas/upgrade" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 8, fontSize: 12, fontWeight: 600,
                  background: PRIMARY, color: 'white', textDecoration: 'none',
                }}>
                  プランを確認する →
                </Link>
              </div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              marginTop: 14, width: '100%', padding: '14px',
              borderRadius: 10, fontSize: 15, fontWeight: 700,
              background: loading
                ? '#ccc'
                : `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`,
              color: 'white', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s', letterSpacing: 0.5,
            }}
          >
            {loading ? '⏳ AI生成中...' : '✨ AI生成'}
          </button>
        </div>

        {/* 結果表示 */}
        {result && (
          <div style={{
            background: 'white', borderRadius: 16, padding: 24,
            border: `1.5px solid ${PRIMARY}`, marginBottom: 20,
            boxShadow: '0 4px 16px rgba(192,57,43,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 20 }}>🎉</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: PRIMARY }}>AI生成結果</span>
            </div>
            <div style={{
              background: SURFACE, borderRadius: 10, padding: 16,
              fontSize: 13, color: TEXT, lineHeight: 1.9, whiteSpace: 'pre-wrap',
              border: `1px solid ${BORDER}`,
            }}>
              {result}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(result)
              }}
              style={{
                marginTop: 12, padding: '8px 16px', borderRadius: 8,
                fontSize: 12, fontWeight: 600, border: `1.5px solid ${BORDER}`,
                background: 'white', color: MUTED, cursor: 'pointer',
              }}
            >
              📋 コピー
            </button>
          </div>
        )}

        {/* 使用量バー */}
        {planInfo && (
          <div style={{
            background: 'white', borderRadius: 16, padding: 20,
            border: `1px solid ${BORDER}`, marginBottom: 20,
            boxShadow: '0 2px 8px rgba(192,57,43,0.06)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>📈 今月の使用量</span>
              <span style={{ fontSize: 12, color: MUTED }}>
                {planInfo.limit === -1
                  ? '無制限'
                  : `残り ${planInfo.remaining} 回 / ${planInfo.limit} 回`}
              </span>
            </div>
            {planInfo.limit !== -1 && (
              <div style={{
                width: '100%', height: 8, borderRadius: 4,
                background: '#f0e0de', overflow: 'hidden',
              }}>
                <div style={{
                  width: `${Math.min(100, ((planInfo.limit - planInfo.remaining) / planInfo.limit) * 100)}%`,
                  height: '100%', borderRadius: 4,
                  background: planInfo.remaining <= 1
                    ? PRIMARY
                    : `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                  transition: 'width 0.5s ease',
                }} />
              </div>
            )}
          </div>
        )}

        {/* プランアップグレードCTA */}
        <div style={{
          borderRadius: 16, padding: 24,
          background: `linear-gradient(135deg, rgba(192,57,43,0.08) 0%, rgba(231,76,60,0.08) 100%)`,
          border: `1.5px solid ${BORDER}`,
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, margin: '0 0 6px' }}>
            🚀 もっと使いたい方はプランアップグレード
          </p>
          <p style={{ fontSize: 12, color: MUTED, margin: '0 0 16px' }}>
            スタンダード 3,980円/月（50回）・プレミアム 9,800円/月（無制限）
          </p>
          <Link href="/saas/upgrade" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '12px 28px', borderRadius: 10, fontSize: 13, fontWeight: 700,
            background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`,
            color: 'white', textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(192,57,43,0.25)',
          }}>
            プランを比較する →
          </Link>
        </div>
      </div>
    </div>
  )
}
