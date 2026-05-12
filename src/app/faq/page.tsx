'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

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

const faqs = [
  {
    q: 'まずはプランの内容について直接お話を聞きたいのですが？',
    a: 'ホームページ記載の電話番号かメールフォームまでお気軽にお問い合わせください。',
  },
  {
    q: '無料相談で強引な勧誘はされませんか？',
    a: 'いたしません。勧誘行為は一切行っておりませんのでご安心ください。',
  },
  {
    q: '無料相談の場所はどこでも大丈夫ですか？',
    a: 'カフェや図書館などどこでも大丈夫です。オンラインなら全国対応。対面は神奈川県内のみとなります。',
  },
  {
    q: '忙しくて時間が取れなくても大丈夫？',
    a: '対応いたします。可能な限りお時間を合わせますのでお気軽にご相談ください。',
  },
  {
    q: '入会審査はありますか？',
    a: 'ございます。必ずオンラインもしくは対面で無料説明会を実施し、ご意志確認後に本入会となります。',
  },
  {
    q: '離婚歴がありますが、入会できますか？',
    a: 'もちろんです。離婚されて入会している方も多数所属しております。お気軽にご相談ください。',
  },
  {
    q: '支払方法について教えてください。',
    a: '現金払い・お振り込み・クレジットカードのいずれかをご選択いただけます。',
  },
  {
    q: '会社を辞めて独立したばかりで収入が安定していません。',
    a: 'まずはご相談ください。IBJ正規加盟店としての規定がありますので、状況をヒアリングした上でご案内いたします。',
  },
  {
    q: '人見知りなのでパーティやイベント参加が不安です。',
    a: 'もちろんサポートします。イベント参加自体、無理しなくても問題ございません。あなたのペースに合わせてサポートします。',
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:opacity-80 transition-opacity"
        style={{ background: open ? SURFACE : 'white', border: 'none', cursor: 'pointer', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
      >
        <div className="flex gap-3 items-start flex-1">
          <span className="px-2 py-0.5 rounded text-xs font-bold flex-shrink-0" style={{ background: PRIMARY, color: 'white' }}>Q</span>
          <span className="text-sm font-semibold" style={{ color: TEXT }}>{q}</span>
        </div>
        {open
          ? <ChevronUp size={16} style={{ color: PRIMARY, flexShrink: 0 }} />
          : <ChevronDown size={16} style={{ color: PRIMARY, flexShrink: 0 }} />}
      </button>
      {open && (
        <div className="px-6 pb-6 pt-3" style={{ background: BASE }}>
          <div className="flex gap-3 items-start">
            <span className="px-2 py-0.5 rounded text-xs font-bold flex-shrink-0" style={{ background: ACCENT, color: 'white' }}>A</span>
            <p className="text-sm leading-relaxed" style={{ color: MUTED, margin: 0 }}>{a}</p>
          </div>
        </div>
      )}
    </div>
  )
}

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

export default function FaqPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>よくある質問</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>よくある質問</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>お気軽にご質問ください。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-3 mb-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* その他の質問 */}
        <div className="max-w-2xl mx-auto rounded-xl p-6 text-center mb-8"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <p className="text-sm mb-4" style={{ color: MUTED }}>その他、ご不明な点はお気軽にお問い合わせください。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:050-1807-3163" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY, textDecoration: 'none' }}>
              📞 050-1807-3163
            </a>
            <a href="/m-contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none' }}>
              メールで問い合わせ
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
