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

export default function ReadmePage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>初めての方へ</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px', lineHeight: 1.4 }}>婚活のお悩み・不安を<br />しっかりサポート</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>あなたをご成婚へと導きます！</p>
        </div>
      </section>

      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '48px 16px' }}>

        {/* 課題2パターン */}
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: TEXT, marginBottom: '24px', textAlign: 'center' }}>こんなお悩みはありませんか？</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {/* 女性 */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>👩</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: PRIMARY }}>女性のお悩み</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['職場が男性ばかりで出会いがない', 'コミュニケーションが不安…', '自分に自信が持てない'].map(item => (
                <li key={item} style={{ padding: '10px 0', borderBottom: `1px solid ${BORDER}`, fontSize: '15px', color: TEXT, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: PRIMARY }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* 男性 */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '24px' }}>👨</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: ACCENT }}>男性のお悩み</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['職場が女性ばかりで出会いが少ない', '理想の人に出会えるか不安…', '理想が高いと言われてしまう'].map(item => (
                <li key={item} style={{ padding: '10px 0', borderBottom: `1px solid ${BORDER}`, fontSize: '15px', color: TEXT, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: ACCENT }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* サポートメッセージ */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: MUTED, marginBottom: '12px' }}>当結婚相談所は、全ての方にご利用しやすく、手厚いサポートをご用意しております。</p>
          <blockquote style={{ fontStyle: 'italic', fontSize: '16px', color: TEXT, lineHeight: 1.8, borderLeft: `4px solid ${PRIMARY}`, paddingLeft: '20px', textAlign: 'left', margin: '0 auto', maxWidth: '640px' }}>
            「人生最大の決断と言っても過言ではない結婚。あなたの理想のパートナーを見つけて結ばれるお手伝いを、私の経験とスキルを活かしてサポートします。気軽に相談できる「親戚のおじさん」だと思って、ぜひ私を頼ってください。」
          </blockquote>
        </div>

        {/* ご成婚第一主義 */}
        <div style={{ background: '#fff', border: `2px solid ${PRIMARY}`, borderRadius: '12px', padding: '24px', marginBottom: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>💍</div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: PRIMARY, marginBottom: '8px' }}>一年以内でのご成婚第一主義</h2>
          <p style={{ color: MUTED, fontSize: '15px' }}>目標を明確にし、最短ルートでご成婚へ導きます。</p>
        </div>

        {/* 対応エリア */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: TEXT, marginBottom: '16px' }}>📍 対応エリア</h2>
          <p style={{ fontSize: '15px', color: TEXT, lineHeight: 1.8 }}>
            海老名市・厚木市を中心に、茅ヶ崎市・大和市・寒川町・横浜みなとみらい地区など<strong>神奈川県全域</strong>、および<strong>東京都一部</strong>に対応しております。<br />
            オンライン相談は<strong>全国対応</strong>可能です。
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: TEXT, marginBottom: '24px' }}>まずは無料相談から</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/16760950606960" style={{ background: PRIMARY, color: '#fff', padding: '14px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>
              📅 Zoom無料相談予約
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer" style={{ background: '#06C755', color: '#fff', padding: '14px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>
              💬 LINE相談
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
