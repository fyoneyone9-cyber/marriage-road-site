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

export default function FeaturePage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>選ばれる理由</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>
            マレッジロードジャパンが選ばれる3つの理由
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>安心・実績・全国対応で、あなたのご成婚を全力サポートします。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* 3つの特徴カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl p-6 text-center"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: PRIMARY }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* クーリングオフ詳細 */}
        <div className="rounded-xl p-6 mb-8" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: TEXT }}>🛡️ クーリングオフ制度について</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>
            消費者庁が定めたクーリングオフ制度に基づき、ご契約後<strong>8日以内</strong>であれば、理由を問わず無条件でご契約を解除することができます。
          </p>
          <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
            対象プランは <strong>ライト・スタンダード・プレミアム</strong> の全プランです。初めて結婚相談所をご検討の方も、安心してご入会いただけます。
          </p>
        </div>

        {/* IBJ加盟 */}
        <div className="rounded-xl p-6 mb-8 text-center" style={{ background: 'white', border: `2px solid ${ACCENT}` }}>
          <div className="text-4xl mb-3">🏅</div>
          <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT }}>IBJ正規加盟店</h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            日本最大級の結婚相談所ネットワーク「IBJ（日本結婚相談所連盟）」に正規加盟。<br />
            全国<strong>81,721名</strong>以上の会員の中からお相手をお探しいただけます。
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="/m-contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談を予約する →
          </a>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
