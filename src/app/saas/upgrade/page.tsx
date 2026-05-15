import Link from 'next/link'

const PRIMARY = '#c0392b'
const PRIMARY_LIGHT = '#e74c3c'
const BASE = '#fff8f5'
const SURFACE = '#fff2ee'
const TEXT = '#2d1a1a'
const MUTED = '#8a5a5a'
const BORDER = '#f0d0cc'

const PLANS = [
  {
    id: 'free',
    name: '無料プラン',
    price: '0円',
    period: '',
    limit: '月5回まで',
    highlight: false,
    badge: null,
    features: [
      { label: 'プロフィール添削AI', included: true },
      { label: 'マッチング提案文AI', included: true },
      { label: 'フォローメールAI', included: true },
      { label: '断り文句AI', included: false },
      { label: '初回面談準備AI', included: false },
      { label: '月次レポートAI', included: false },
      { label: '優先サポート', included: false },
    ],
    cta: 'まずは無料で試す',
    ctaHref: '/saas',
    ctaStyle: 'outline',
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    price: '3,980円',
    period: '/月',
    limit: '月50回まで',
    highlight: true,
    badge: '人気No.1',
    features: [
      { label: 'プロフィール添削AI', included: true },
      { label: 'マッチング提案文AI', included: true },
      { label: 'フォローメールAI', included: true },
      { label: '断り文句AI', included: true },
      { label: '初回面談準備AI', included: true },
      { label: '月次レポートAI', included: true },
      { label: '優先サポート', included: false },
    ],
    cta: 'スタンダードに申し込む',
    ctaHref: null,
    ctaStyle: 'primary',
  },
  {
    id: 'premium',
    name: 'プレミアムプラン',
    price: '9,800円',
    period: '/月',
    limit: '無制限',
    highlight: false,
    badge: null,
    features: [
      { label: 'プロフィール添削AI', included: true },
      { label: 'マッチング提案文AI', included: true },
      { label: 'フォローメールAI', included: true },
      { label: '断り文句AI', included: true },
      { label: '初回面談準備AI', included: true },
      { label: '月次レポートAI', included: true },
      { label: '優先サポート', included: true },
    ],
    cta: 'プレミアムに申し込む',
    ctaHref: null,
    ctaStyle: 'primary',
  },
]

export default function UpgradePage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <div style={{
        background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`,
        padding: '40px 20px', textAlign: 'center',
      }}>
        <h1 style={{ color: 'white', fontSize: 26, fontWeight: 700, margin: '0 0 8px' }}>
          料金プラン
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, margin: 0 }}>
          結婚相談所の業務規模に合わせてお選びください
        </p>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '40px 16px' }}>
        {/* プラン比較カード */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          marginBottom: 48,
        }}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: '28px 24px',
                border: plan.highlight ? `2px solid ${PRIMARY}` : `1.5px solid ${BORDER}`,
                boxShadow: plan.highlight
                  ? `0 8px 32px rgba(192,57,43,0.15)`
                  : '0 2px 8px rgba(192,57,43,0.06)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: `linear-gradient(90deg, ${PRIMARY}, ${PRIMARY_LIGHT})`,
                  color: 'white', fontSize: 11, fontWeight: 700,
                  padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap',
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700, color: TEXT, margin: '0 0 10px' }}>
                  {plan.name}
                </h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
                  <span style={{ fontSize: 32, fontWeight: 800, color: plan.highlight ? PRIMARY : TEXT }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontSize: 13, color: MUTED }}>{plan.period}</span>
                  )}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: SURFACE, borderRadius: 8, padding: '4px 10px',
                  fontSize: 12, color: plan.highlight ? PRIMARY : MUTED, fontWeight: 600,
                }}>
                  📊 {plan.limit}
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '7px 0', borderBottom: i < plan.features.length - 1 ? `1px solid ${BORDER}` : 'none',
                    fontSize: 13,
                    color: f.included ? TEXT : '#ccc',
                  }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>
                      {f.included ? '✅' : '❌'}
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>

              {plan.ctaHref ? (
                <Link
                  href={plan.ctaHref}
                  style={{
                    display: 'block', textAlign: 'center', padding: '12px',
                    borderRadius: 10, fontSize: 13, fontWeight: 700,
                    border: `2px solid ${PRIMARY}`,
                    background: 'white', color: PRIMARY, textDecoration: 'none',
                  }}
                >
                  {plan.cta}
                </Link>
              ) : (
                <button
                  disabled
                  style={{
                    width: '100%', padding: '12px',
                    borderRadius: 10, fontSize: 13, fontWeight: 700,
                    background: plan.highlight
                      ? `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`
                      : SURFACE,
                    color: plan.highlight ? 'white' : TEXT,
                    border: 'none', cursor: 'default',
                  }}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 申し込み方法 */}
        <div style={{
          background: 'white', borderRadius: 20, padding: '32px 24px',
          border: `1.5px solid ${BORDER}`,
          boxShadow: '0 4px 16px rgba(192,57,43,0.08)',
          textAlign: 'center',
          marginBottom: 32,
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: TEXT, margin: '0 0 8px' }}>
            📩 お申し込み方法
          </h2>
          <p style={{ fontSize: 13, color: MUTED, margin: '0 0 24px', lineHeight: 1.8 }}>
            現在、オンライン決済は準備中です。<br />
            お申し込みはLINEまたはメールにてお問い合わせください。
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://lin.ee/UxgdZ7F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', borderRadius: 10, fontSize: 14, fontWeight: 700,
                background: '#06C755', color: 'white', textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(6,199,85,0.25)',
              }}
            >
              <span style={{ fontSize: 20 }}>💬</span>
              LINEで問い合わせる
            </a>
            <a
              href="mailto:info@marriage-road.jp?subject=AIアシスタントプラン申し込み"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', borderRadius: 10, fontSize: 14, fontWeight: 700,
                background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`,
                color: 'white', textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(192,57,43,0.25)',
              }}
            >
              <span style={{ fontSize: 20 }}>📧</span>
              メールで問い合わせる
            </a>
          </div>

          <p style={{ fontSize: 12, color: MUTED, margin: '20px 0 0' }}>
            メール: info@marriage-road.jp
          </p>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: TEXT, marginBottom: 16, textAlign: 'center' }}>
            よくあるご質問
          </h2>
          {[
            {
              q: '無料プランはクレジットカード不要ですか？',
              a: 'はい。メールアドレスのみで利用開始できます。登録費用は一切かかりません。',
            },
            {
              q: '月の使用回数はいつリセットされますか？',
              a: '毎月1日にリセットされます。翌月の残り回数は月初に更新されます。',
            },
            {
              q: '途中でプランを変更できますか？',
              a: 'はい。LINEまたはメールにてお問い合わせいただければ、翌月からプラン変更が可能です。',
            },
            {
              q: 'OPENAI_API_KEYがない場合でも使えますか？',
              a: 'はい。API未設定の場合は高品質なサンプルテキストで動作します。',
            },
          ].map((faq, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 12, padding: '16px 20px',
              border: `1px solid ${BORDER}`, marginBottom: 10,
            }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: TEXT, margin: '0 0 6px' }}>Q. {faq.q}</p>
              <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.7 }}>A. {faq.a}</p>
            </div>
          ))}
        </div>

        {/* 戻るリンク */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/saas"
            style={{
              fontSize: 13, color: PRIMARY, textDecoration: 'none', fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}
          >
            ← AIアシスタントに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
