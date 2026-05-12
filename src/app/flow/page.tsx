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

const steps = [
  {
    num: 1,
    icon: '💻',
    title: '無料相談（ZOOM or 対面）',
    desc: 'Zoomは毎週4枠ご用意しております。対面相談は神奈川県内のカフェや当事務所にて承ります。まずはお気軽にご相談ください。',
  },
  {
    num: 2,
    icon: '📄',
    title: '書類送付・準備',
    desc: 'IBJ婚活システム登録に必要な書類（身分証明書・独身証明書・収入証明書等）をご用意いただきます。必須書類一式を当事務所の住所へ送付いただき、返信用封筒にて返送いたします。',
  },
  {
    num: 3,
    icon: '✅',
    title: 'IBJSへ仮登録 → 本登録',
    desc: 'プロフィールの最終確認後に本登録が完了します。ログインIDとパスワードが自動送信されますので、すぐにシステムをご利用いただけます。',
  },
  {
    num: 4,
    icon: '🚀',
    title: '婚活スタート！ファーストカウンセリング',
    desc: 'IBJSでいつでもどこでもお相手を検索できます。ZoomまたはLINEでファーストカウンセリング（任意）を実施。「いつまでに」「どんな相手と」結婚したいか、一緒に目標を設定します。',
  },
  {
    num: 5,
    icon: '💑',
    title: 'お見合い → デート → 交際',
    desc: '気になった異性に「お見合い申請」→ マッチング成立 → お見合い。カウンセラーがお見合い前後をオンラインでサポートします。交際に進んだ後も的確なアドバイスをお届けします。',
  },
  {
    num: 6,
    icon: '💍',
    title: '婚約・ご成婚',
    desc: 'カウンセラーが全力でサポート。プロポーズのアドバイスや成婚後のアフターフォローも充実しております。新しい人生のスタートを一緒にお祝いします！',
  },
]

export default function FlowPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>ご登録・結婚までの流れ</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px' }}>入会からご成婚までの流れ</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>6ステップでご成婚へ。すべてのステップをカウンセラーがサポートします。</p>
        </div>
      </section>

      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '48px 16px' }}>

        {/* ステップ一覧 */}
        <div style={{ position: 'relative' }}>
          {steps.map((step, idx) => (
            <div key={step.num} style={{ display: 'flex', gap: '24px', marginBottom: '32px', alignItems: 'flex-start' }}>
              {/* ステップ番号 */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '20px',
                }}>
                  {step.num}
                </div>
                {idx < steps.length - 1 && (
                  <div style={{ width: '2px', height: '40px', background: BORDER, margin: '4px 0' }} />
                )}
              </div>
              {/* コンテンツ */}
              <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '20px', flex: 1 }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{step.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: MUTED, lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ color: MUTED, marginBottom: '16px' }}>まずは無料相談からスタート！</p>
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
