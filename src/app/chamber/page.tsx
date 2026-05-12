'use client'

const PRIMARY = '#b76e79'
const BASE = '#fff8f5'
const SURFACE = '#fff0eb'
const BORDER = '#e8d5d0'
const TEXT = '#3d2c2c'
const MUTED = '#8a6a6a'

function SiteHeader() {
  return (
    <header style={{ background: 'white', borderBottom: `1px solid ${BORDER}` }} className="sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" style={{ textDecoration: 'none', color: PRIMARY }} className="font-bold text-base">
          💒 マレッジロードジャパン
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {[
            { href: '/feature', label: '特徴' },
            { href: '/plan', label: 'プラン' },
            { href: '/flow', label: '流れ' },
            { href: '/greeting', label: 'カウンセラー' },
            { href: '/chamber', label: '商工会議所' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ color: TEXT, textDecoration: 'none' }} className="hover:opacity-70 transition-opacity">
              {label}
            </a>
          ))}
        </nav>
        <a href="/m-contact"
          className="text-xs font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90"
          style={{ background: PRIMARY, color: 'white', textDecoration: 'none' }}>
          無料相談
        </a>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer style={{ background: '#2d1a1a', color: 'rgba(255,255,255,0.7)' }} className="py-10 px-4 text-center text-xs">
      <div className="mb-2">
        <span className="font-semibold text-sm text-white">マレッジロードジャパン</span>
        <span className="ml-2 opacity-60">Marriage Road Japan</span>
      </div>
      <p className="mb-1">〒243-0424 神奈川県海老名市泉6-5-2-301</p>
      <p className="mb-1">
        <a href="tel:050-1807-3163" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>050-1807-3163</a>
        {' · '}
        <a href="mailto:info@marriage-road.jp" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>info@marriage-road.jp</a>
      </p>
      <p className="mb-4 opacity-70">日本結婚相談所連盟（IBJ）正規加盟店 · 登録番号No.01226</p>
      <p className="mb-4 opacity-70">海老名商工会議所 会員 · 会員No.4954</p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3">
        <a href="/feature" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特徴・強み</a>
        <a href="/plan" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プラン</a>
        <a href="/flow" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>ご入会の流れ</a>
        <a href="/greeting" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>カウンセラー紹介</a>
        <a href="/chamber" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>商工会議所活動</a>
        <a href="/faq" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>よくある質問</a>
        <a href="/data" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>実績データ</a>
      </div>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4">
        <a href="/privacy" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プライバシーポリシー</a>
        <a href="/terms" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>利用規約</a>
        <a href="/tokusho" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特定商取引法</a>
      </div>
      <p className="opacity-40">© 2024 Marriage Road Japan. All rights reserved.</p>
    </footer>
  )
}

export default function ChamberPage() {
  const activities = [
    {
      date: '2024年',
      title: '海老名商工会議所へ入会',
      desc: '地域の経済団体として海老名商工会議所に正式加入。会員No.4954として地域の事業者コミュニティに参加しました。',
      icon: '🏛️',
    },
    {
      date: '活動中',
      title: '地域ネットワーク構築',
      desc: '海老名・厚木エリアの事業者との連携を深め、地域に根ざした婚活サポートのネットワークを拡大しています。',
      icon: '🤝',
    },
    {
      date: '継続中',
      title: '地域密着型の婚活支援',
      desc: '商工会議所を通じた地域情報の収集・発信により、海老名・厚木エリアでの生活に詳しいカウンセリングを提供しています。',
      icon: '💼',
    },
  ]

  const merits = [
    {
      title: '信頼性の証明',
      desc: '海老名商工会議所公認の事業者として、地域で認められた信頼ある相談所です。',
      icon: '✅',
    },
    {
      title: '地域密着のネットワーク',
      desc: '地元の事業者・行政との幅広いつながりで、海老名・厚木エリアの情報を熟知しています。',
      icon: '🗾',
    },
    {
      title: '安心して相談できる',
      desc: '公的機関に認められた事業者として、個人情報管理・運営の透明性を徹底しています。',
      icon: '🔐',
    },
    {
      title: '地域の発展に貢献',
      desc: '婚活支援を通じて海老名・厚木エリアの少子化対策・地域活性化に貢献しています。',
      icon: '🌸',
    },
  ]

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ヒーロー：バナー写真 */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '360px' }}>
        <img
          src="/chamber-banner.jpg"
          alt="海老名商工会議所 会員之証"
          className="w-full object-cover"
          style={{ maxHeight: '360px', objectPosition: 'center' }}
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: 'rgba(45,26,26,0.55)' }}>
          <p className="text-xs font-medium tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            EBINA CHAMBER OF COMMERCE &amp; INDUSTRY
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center leading-tight mb-2">
            海老名商工会議所 公認
          </h1>
          <p className="text-sm md:text-base text-white opacity-80">会員No. 4954</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* 認定バッジセクション */}
        <section className="rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-8"
          style={{ background: 'white', border: `2px solid ${PRIMARY}` }}>
          <img
            src="/chamber-badge.jpg"
            alt="海老名商工会議所 会員之証"
            className="rounded-xl flex-shrink-0"
            style={{ width: '160px', height: '160px', objectFit: 'cover', border: `2px solid ${BORDER}` }}
          />
          <div>
            <p className="text-xs font-medium tracking-wider mb-1" style={{ color: PRIMARY }}>OFFICIAL MEMBER</p>
            <h2 className="text-xl font-bold mb-2" style={{ color: TEXT }}>海老名商工会議所 正式会員</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: MUTED }}>
              マレッジロードジャパンは、海老名商工会議所の正式会員として認定されています。
              地域の商工業者として認められた信頼ある結婚相談所として、
              神奈川県海老名市・厚木市エリアの皆さまの婚活をサポートします。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                会員No. 4954
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                海老名市公認
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                IBJ加盟店
              </span>
            </div>
          </div>
        </section>

        {/* 商工会議所会員であることのメリット */}
        <section className="mb-10">
          <p className="text-xs font-medium tracking-wider mb-1 text-center" style={{ color: PRIMARY }}>WHY IT MATTERS</p>
          <h2 className="text-xl font-bold text-center mb-6">商工会議所会員だから安心できる理由</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {merits.map((m, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <h3 className="text-base font-semibold mb-2" style={{ color: TEXT }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活動履歴 */}
        <section className="mb-10">
          <p className="text-xs font-medium tracking-wider mb-1 text-center" style={{ color: PRIMARY }}>ACTIVITIES</p>
          <h2 className="text-xl font-bold text-center mb-6">商工会議所での活動</h2>
          <div className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="rounded-xl p-6 flex gap-4"
                style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                <div className="text-2xl flex-shrink-0">{a.icon}</div>
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>{a.date}</p>
                  <h3 className="text-base font-semibold mb-1" style={{ color: TEXT }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 海老名商工会議所について */}
        <section className="rounded-xl p-6 mb-10" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <h2 className="text-base font-bold mb-3" style={{ color: TEXT }}>🏛️ 海老名商工会議所とは</h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            海老名商工会議所（EBINA CHAMBER OF COMMERCE &amp; INDUSTRY）は、神奈川県海老名市の地域経済団体です。
            地域の商工業者が集まり、ビジネスの発展・地域活性化・会員相互の親睦を目的として活動しています。
            当会議所の会員として認定されることは、地域に根ざした信頼ある事業者である証明です。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-sm mb-4" style={{ color: MUTED }}>地域密着の信頼ある結婚相談所に、まずはお気軽にご相談ください</p>
          <a href="/m-contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談を予約する →
          </a>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
