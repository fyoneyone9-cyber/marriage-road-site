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

const features = [
  {
    icon: '🛡️',
    title: 'クーリングオフ制度あり',
    desc: '消費者庁が定めたクーリングオフ制度を適用しています。ライト・スタンダード・プレミアムの全プランで、契約後8日以内であれば無条件でキャンセル可能。安心して入会いただけます。',
  },
  {
    icon: '🏆',
    title: 'IBJ正規加盟・上級仲人カウンセラー資格',
    desc: '日本最大の結婚相談所ネットワーク「IBJ（日本結婚相談所連盟）」の正規加盟店。上級仲人カウンセラー資格を持つプロフェッショナルが、責任を持ってサポートいたします。',
  },
  {
    icon: '🌐',
    title: 'オンライン全国対応',
    desc: 'ZoomなどのビデオツールでどこからでもカウンセリングOK。忙しい方や遠方の方も安心してご利用いただけます。IBJシステムへの登録・お相手検索もオンラインで完結します。',
  },
]

export default function FeaturePage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>選ばれる理由</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px', lineHeight: 1.4 }}>マレッジロードジャパンが<br />選ばれる3つの理由</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>安心・実績・全国対応で、あなたのご成婚を全力サポートします。</p>
        </div>
      </section>

      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '48px 16px' }}>

        {/* 3つの特徴カード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '32px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: PRIMARY, marginBottom: '12px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* クーリングオフ詳細 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '32px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: TEXT, marginBottom: '16px' }}>🛡️ クーリングオフ制度について</h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8, marginBottom: '12px' }}>
            消費者庁が定めたクーリングオフ制度に基づき、ご契約後<strong>8日以内</strong>であれば、理由を問わず無条件でご契約を解除することができます。
          </p>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8 }}>
            対象プランは <strong>ライト・スタンダード・プレミアム</strong> の全プランです。初めて結婚相談所をご検討の方も、安心してご入会いただけます。
          </p>
        </div>

        {/* IBJ加盟 */}
        <div style={{ background: '#fff', border: `2px solid ${ACCENT}`, borderRadius: '12px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏅</div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: TEXT, marginBottom: '12px' }}>IBJ正規加盟店</h2>
          <p style={{ fontSize: '15px', color: MUTED, lineHeight: 1.8 }}>
            日本最大級の結婚相談所ネットワーク「IBJ（日本結婚相談所連盟）」に正規加盟。<br />
            全国<strong>81,721名</strong>以上の会員の中からお相手をお探しいただけます。
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/16760950606960" style={{ background: PRIMARY, color: '#fff', padding: '14px 40px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
            無料相談を予約する
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}
