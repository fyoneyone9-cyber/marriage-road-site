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

export default function GreetingPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>カウンセラー紹介</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px' }}>メインカウンセラー紹介</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>婚活をお考えの皆さまへ</p>
        </div>
      </section>

      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '48px 16px' }}>

        {/* アバター & プロフィール */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '48px',
            fontWeight: 800,
            color: '#fff',
          }}>
            Y
          </div>
          <div style={{ fontSize: '14px', color: MUTED }}>代表カウンセラー</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: TEXT, marginTop: '4px' }}>マレッジロードジャパン</div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '12px', flexWrap: 'wrap' }}>
            <span style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: '4px 12px', borderRadius: '9999px', fontSize: '13px', color: MUTED }}>IBJ正規加盟</span>
            <span style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: '4px 12px', borderRadius: '9999px', fontSize: '13px', color: MUTED }}>上級仲人カウンセラー資格</span>
            <span style={{ background: SURFACE, border: `1px solid ${BORDER}`, padding: '4px 12px', borderRadius: '9999px', fontSize: '13px', color: MUTED }}>上級心理カウンセラー</span>
          </div>
        </div>

        {/* 婚活をお考えの方へ */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: PRIMARY, marginBottom: '16px' }}>💌 婚活をお考えの皆さまへ</h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8, marginBottom: '12px' }}>
            オンライン対応に力を入れており、Zoomなどを活用した全国での婚活支援が可能です。お住まいの地域を問わず、安心してご相談いただけます。
          </p>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8 }}>
            <strong>ご成婚第一主義</strong>で誠心誠意対応いたします。一年以内でのご成婚を目標に、一緒に頑張りましょう。
          </p>
        </div>

        {/* 開業の理由 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: TEXT, marginBottom: '16px' }}>🌱 私が結婚相談所を始めた理由</h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8, marginBottom: '12px' }}>
            結婚は一生涯のパートナー選び。失敗する方が一人でも減り、幸せのキューピットになれればと思い開業しました。
          </p>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8 }}>
            私自身、2度の離婚を経験し、その後10歳年下の女性と再婚しました。その経験から、<strong>「結婚前に話し合うべきこと」</strong>や<strong>「日常生活に支障が出ない相手選び」</strong>の大切さを身をもって知っています。この経験をあなたの婚活に活かします。
          </p>
        </div>

        {/* 代表の想い */}
        <div style={{ background: '#fff', border: `2px solid ${PRIMARY}`, borderRadius: '12px', padding: '32px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: PRIMARY, marginBottom: '16px' }}>💬 代表カウンセラーの想い</h2>
          <blockquote style={{ fontStyle: 'italic', fontSize: '16px', color: TEXT, lineHeight: 1.8, borderLeft: `4px solid ${PRIMARY}`, paddingLeft: '20px', margin: 0 }}>
            「人生最大の決断と言っても過言ではない結婚。あなたの理想のパートナーを見つけて結ばれるお手伝いを、私の経験とスキルを活かしてサポートします。気軽に相談できる<strong>「親戚のおじさん」</strong>だと思って、ぜひ私を頼ってください。」
          </blockquote>
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
