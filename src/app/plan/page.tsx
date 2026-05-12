'use client'

const PRIMARY = '#c9836f'
const ACCENT = '#d4a96a'
const BASE = '#fff8f5'
const SURFACE = '#fff1eb'
const TEXT = '#3d2c2c'
const MUTED = '#8a6a60'
const BORDER = '#e8d5cc'

const navLinks = [
  { label: 'トップ', href: '/' },
  { label: '初めての方へ', href: '/readme' },
  { label: '選ばれる理由', href: '/feature' },
  { label: 'プラン', href: '/plan' },
  { label: 'カウンセラー', href: '/greeting' },
  { label: '流れ', href: '/flow' },
  { label: 'FAQ', href: '/faq' },
  { label: 'お問合せ', href: '/16760950606960' },
]

function Header() {
  return (
    <header style={{ background: '#fff', borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <a href="/" style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '18px', color: PRIMARY, textDecoration: 'none' }}>
          マレッジロードジャパン
        </a>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif", fontSize: '13px', color: TEXT, textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ background: TEXT, color: '#fff', padding: '40px 16px', marginTop: '80px', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div style={{ fontWeight: 700, fontSize: '18px', color: PRIMARY, marginBottom: '16px' }}>マレッジロードジャパン</div>
        <div style={{ fontSize: '14px', color: '#ccc', lineHeight: '2' }}>
          <div>〒243-0424 神奈川県海老名市社家6-5-2-301</div>
          <div>TEL: 050-1807-3163</div>
          <div>MAIL: info@marriage-road.jp</div>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px', fontSize: '13px' }}>
          <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>プライバシーポリシー</a>
          <a href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>利用規約</a>
          <a href="/tokusho" style={{ color: '#aaa', textDecoration: 'none' }}>特定商取引法</a>
        </div>
        <div style={{ marginTop: '16px', fontSize: '12px', color: '#888' }}>© 2024 マレッジロードジャパン All rights reserved.</div>
      </div>
    </footer>
  )
}

const plans = [
  {
    name: 'ライトプラン',
    popular: false,
    color: MUTED,
    monthlyFee: '8,000円/月',
    omiai: '1,000円/回（10件まで/月）',
    seikon: '200,000円',
  },
  {
    name: 'スタンダードプラン',
    popular: true,
    color: PRIMARY,
    monthlyFee: '9,800円/月',
    omiai: '無料（100件まで/月）',
    seikon: '200,000円',
  },
  {
    name: 'プレミアムプラン',
    popular: false,
    color: ACCENT,
    monthlyFee: '18,000円/月',
    omiai: '無料（200件まで/月）',
    seikon: '200,000円',
  },
]

export default function PlanPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>プラン・料金</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px' }}>料金プラン</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>あなたのライフスタイルに合ったプランをお選びください。</p>
        </div>
      </section>

      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '48px 16px' }}>

        {/* 全プラン共通費用 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: TEXT, marginBottom: '16px' }}>全プラン共通（契約時のみ）</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                <td style={{ padding: '12px 8px', color: MUTED, width: '50%' }}>入会金</td>
                <td style={{ padding: '12px 8px', fontWeight: 700, color: TEXT }}>28,000円</td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                <td style={{ padding: '12px 8px', color: MUTED }}>IBJSシステム登録料</td>
                <td style={{ padding: '12px 8px', fontWeight: 700, color: TEXT }}>9,800円</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 8px', color: MUTED }}>支払い方法</td>
                <td style={{ padding: '12px 8px', color: TEXT }}>銀行振り込み・メルペイ・d払い</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* プランカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              background: '#fff',
              border: `2px solid ${plan.popular ? PRIMARY : BORDER}`,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: plan.popular ? `0 4px 20px rgba(201,131,111,0.2)` : '0 2px 8px rgba(0,0,0,0.05)',
              position: 'relative'
            }}>
              {plan.popular && (
                <div style={{ background: PRIMARY, color: '#fff', textAlign: 'center', padding: '6px', fontSize: '13px', fontWeight: 700 }}>
                  ⭐ 人気No.1
                </div>
              )}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: plan.color, marginBottom: '8px' }}>{plan.name}</h3>
                <div style={{ display: 'inline-block', background: '#e8f5e9', color: '#2e7d32', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>
                  初月無料
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <tbody>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <td style={{ padding: '10px 0', color: MUTED }}>IBJ月会費</td>
                      <td style={{ padding: '10px 0', fontWeight: 700, color: TEXT, textAlign: 'right' }}>{plan.monthlyFee}</td>
                    </tr>
                    <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
                      <td style={{ padding: '10px 0', color: MUTED }}>お見合セッティング</td>
                      <td style={{ padding: '10px 0', fontWeight: 700, color: TEXT, textAlign: 'right' }}>{plan.omiai}</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 0', color: MUTED }}>ご成婚料</td>
                      <td style={{ padding: '10px 0', fontWeight: 700, color: TEXT, textAlign: 'right' }}>{plan.seikon}<br /><span style={{ fontSize: '12px', color: MUTED, fontWeight: 400 }}>（成婚時のみ）</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '8px', padding: '16px', marginBottom: '48px', fontSize: '13px', color: MUTED }}>
          <p>※ 記載の料金はすべて税込です。</p>
          <p>※ ご成婚料は成婚退会時のみ発生します。</p>
          <p>※ クーリングオフ制度（契約後8日以内）が適用されます。</p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: MUTED, marginBottom: '16px' }}>プランのご相談は無料相談にて承ります</p>
          <a href="/16760950606960" style={{ background: PRIMARY, color: '#fff', padding: '14px 40px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
            無料相談を予約する
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}
