'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const NAV_LINKS = [
  ['特徴・強み', '/feature'],
  ['プラン', '/plan'],
  ['ご入会の流れ', '/flow'],
  ['カウンセラー紹介', '/greeting'],
  ['よくある質問', '/faq'],
  ['商工会議所', '/chamber'],
]

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

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header style={{
      background: 'rgba(250,247,245,0.97)',
      borderBottom: `1px solid ${BORDER}`,
      backdropFilter: 'blur(8px)',
      boxShadow: scrolled ? '0 2px 12px rgba(45,32,32,0.08)' : 'none',
      transition: 'box-shadow 0.3s ease',
    }} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" style={{ textDecoration: 'none' }}>
          <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>マレッジロードジャパン</div>
          <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
        </a>
        <nav className="hidden md:flex items-center gap-4 text-xs">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:opacity-70 transition-opacity" style={{ color: MUTED, textDecoration: 'none' }}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/m-contact" className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談 <ArrowRight size={14} />
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: BASE, borderTop: `1px solid ${BORDER}` }} className="md:hidden px-4 py-4 space-y-3">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm" style={{ color: MUTED, textDecoration: 'none' }}>{label}</a>
          ))}
          <a href="/m-contact" onClick={() => setMenuOpen(false)}
            className="block text-center py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談を予約する →
          </a>
        </div>
      )}
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
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3">
        <a href="/feature" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特徴・強み</a>
        <a href="/plan" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プラン</a>
        <a href="/flow" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>ご入会の流れ</a>
        <a href="/greeting" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>カウンセラー紹介</a>
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

export default function FlowPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>ご登録・結婚までの流れ</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>入会からご成婚までの流れ</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>6ステップでご成婚へ。すべてのステップをカウンセラーがサポートします。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          {steps.map((step, idx) => (
            <div key={step.num} className="flex gap-4 rounded-xl p-6"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: PRIMARY }}>
                  {step.num}
                </div>
                {idx < steps.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: BORDER, margin: '4px 0', minHeight: '20px' }} />
                )}
              </div>
              <div>
                <div className="text-2xl mb-2">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: MUTED }}>まずは無料相談からスタート！</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/m-contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY, textDecoration: 'none' }}>
              📅 Zoom無料相談予約
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#06C755', textDecoration: 'none' }}>
              💬 LINE相談
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
