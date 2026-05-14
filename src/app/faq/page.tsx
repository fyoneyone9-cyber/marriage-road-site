'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Footer from '@/components/Footer'

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
  {
    q: '料金の内訳を教えてください。',
    a: '全プラン共通で、入会金28,000円とIBJSシステム登録料9,800円が契約時に必要です。月会費はライトプラン8,000円、スタンダードプラン9,800円、プレミアムプラン18,000円です。初月月会費は無料です。成婚時のみ成婚料200,000円が発生します。',
  },
  {
    q: 'オンラインだけで完結できますか？',
    a: 'はい、ライト・スタンダードプランはZOOM完全対応でオンラインのみで完結します。プレミアムプランは神奈川・東京の方に対面サポートも提供しています。',
  },
  {
    q: '活動期間はどのくらいですか？',
    a: '平均的な活動期間は6ヶ月〜1年程度です。真剣に活動される方は3〜6ヶ月で成婚されるケースも多くあります。',
  },
  {
    q: 'プロフィール写真はどうすればいいですか？',
    a: '明るく清潔感のある写真が大切です。スマートフォンの写真でも丁寧に撮影すれば十分です。プロフィール作成時にカウンセラーが詳しくアドバイスします。',
  },
  {
    q: '男性・女性の会員比率はどのくらいですか？',
    a: 'IBJネットワーク全体では男性約55%・女性約45%と比較的均衡しています。年齢層は20代後半〜40代が中心です。',
  },
  {
    q: '休会・退会はできますか？',
    a: '休会・退会は可能です。退会の場合は所定の手続きが必要です。詳細は無料相談でお気軽にお聞きください。',
  },
  {
    q: '他の結婚相談所と並行して活動できますか？',
    a: 'IBJに加盟する他の相談所との並行活動はIBJのルール上お断りしています。IBJ非加盟の相談所やマッチングアプリとの並行は可能です。',
  },
  {
    q: 'お見合いはどこで行いますか？',
    a: 'お互いが合意した場所（カフェ・ファミレスなど）での1時間程度のお茶から始まります。オンラインお見合いにも対応しています。',
  },
  {
    q: '成婚後のサポートはありますか？',
    a: 'はい、成婚後もアフターフォローを実施しています。プロポーズのタイミングや入籍に向けてのアドバイスなど、ゴールまで全力でサポートします。',
  },
  {
    q: '海老名市以外に住んでいても利用できますか？',
    a: 'もちろんです。全国どこからでもオンラインで活動いただけます。神奈川県内（厚木・相模原・茅ヶ崎・大和・横浜など）の方は対面相談も可能です。',
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-4 md:p-6 text-left hover:opacity-80 transition-opacity"
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
        <div className="px-4 md:px-6 pb-4 md:pb-6 pt-3" style={{ background: BASE }}>
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
    <Footer />
  )
}


function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP',       icon: '🏠', href: '/' },
    { label: '特徴・強み', icon: '✨', href: '/feature' },
    { label: 'プラン・料金', icon: '💰', href: '/plan' },
    { label: '入会の流れ', icon: '📋', href: '/flow' },
    { label: 'カウンセラー', icon: '👤', href: '/greeting' },
    { label: 'よくある質問', icon: '❓', href: '/faq' },
    { label: '実績データ', icon: '📊', href: '/data' },
    { label: '商工会議所', icon: '🏛️', href: '/chamber' },
    { label: '男性相談',  icon: '👨', href: '/m-contact' },
    { label: '女性相談',  icon: '👩', href: '/w-contact' },
  ]
  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '16px', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px',
    }}>
      {open && (
        <div style={{
          background: 'rgba(45,26,26,0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '10px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          minWidth: '148px',
        }}>
          {links.map(({ label, icon, href }) => (
            <a key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '7px 12px', borderRadius: '10px',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none', fontSize: '13px', fontWeight: 500,
                transition: 'background 0.15s',
                background: typeof window !== 'undefined' && window.location.pathname === href
                  ? 'rgba(183,110,121,0.5)' : 'transparent',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(183,110,121,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background =
                typeof window !== 'undefined' && window.location.pathname === href
                  ? 'rgba(183,110,121,0.5)' : 'transparent')}
            >
              <span style={{ fontSize: '15px', width: '20px', textAlign: 'center' }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: '#b76e79',
          color: 'white', border: 'none', cursor: 'pointer',
          fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(183,110,121,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(183,110,121,0.7)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(183,110,121,0.5)'; }}
        title="ページナビ"
        aria-label="ページナビゲーションを開く"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
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
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>よくある質問</h1>
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
      <QuickNav />
    </div>
  )
}
