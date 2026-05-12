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
  ['実績データ', '/data'],
  ['お問い合わせ', '/m-contact'],
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
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" style={{ textDecoration: 'none' }}>
          <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>マレッジロードジャパン</div>
          <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
        </a>
        <nav className="hidden md:flex items-center gap-5 text-sm">
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
    
      {/* ── 口コミ ── */}
      <section className="py-16 px-4" style={{ background: '#fff2ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: '#b76e79' }}>Reviews</p>
            <h2 className="text-xl font-semibold">カウンセラーへの感謝の声</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '30代女性',
                text: '話しやすくて、婚活の悩みを正直に打ち明けられました。弱音を吐いても否定せず、一緒に考えてくれる姿勢がずっと心強かったです。',
                stars: 5,
              },
              {
                name: '30代男性',
                text: 'プロフィール写真のアドバイスが的確で、修正後にお見合いの申し込み数が3倍になりました。細かいところまで見てもらえて本当に助かりました。',
                stars: 5,
              },
              {
                name: '40代男性',
                text: '焦らせず、自分のペースを尊重してくれたのが一番良かったです。「この人がいるから大丈夫」と思えるカウンセラーに出会えたことが成婚につながったと思います。',
                stars: 5,
              },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-6 bg-white" style={{ border: `1px solid ${'#e8d5d0'}` }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} style={{ color: '#c9a96e' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#2d2020' }}>「{r.text}」</p>
                <div className="text-xs font-semibold" style={{ color: '#8a6a6a' }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default function GreetingPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>カウンセラー紹介</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>メインカウンセラー紹介</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>婚活をお考えの皆さまへ</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* アバター & プロフィール */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold text-white"
            style={{ background: PRIMARY }}>
            Y
          </div>
          <div className="text-xs mb-1" style={{ color: MUTED }}>代表カウンセラー</div>
          <div className="text-xl font-semibold" style={{ color: TEXT }}>マレッジロードジャパン</div>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {['IBJ正規加盟', '上級仲人カウンセラー資格', '上級心理カウンセラー'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs"
                style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: MUTED }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* 婚活をお考えの方へ */}
        <div className="rounded-xl p-6 mb-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: PRIMARY }}>💌 婚活をお考えの皆さまへ</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>
            オンライン対応に力を入れており、Zoomなどを活用した全国での婚活支援が可能です。お住まいの地域を問わず、安心してご相談いただけます。
          </p>
          <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
            <strong>ご成婚第一主義</strong>で誠心誠意対応いたします。一年以内でのご成婚を目標に、一緒に頑張りましょう。
          </p>
        </div>

        {/* 開業の理由 */}
        <div className="rounded-xl p-6 mb-6" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: TEXT }}>🌱 私が結婚相談所を始めた理由</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>
            結婚は一生涯のパートナー選び。失敗する方が一人でも減り、幸せのキューピットになれればと思い開業しました。
          </p>
          <p className="text-sm leading-relaxed" style={{ color: TEXT }}>
            私自身、2度の離婚を経験し、その後10歳年下の女性と再婚しました。その経験から、<strong>「結婚前に話し合うべきこと」</strong>や<strong>「日常生活に支障が出ない相手選び」</strong>の大切さを身をもって知っています。この経験をあなたの婚活に活かします。
          </p>
        </div>

        {/* 代表の想い */}
        <div className="rounded-xl p-6 mb-10" style={{ background: 'white', border: `2px solid ${PRIMARY}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: PRIMARY }}>💬 代表カウンセラーの想い</h2>
          <blockquote className="text-sm leading-relaxed italic" style={{ borderLeft: `4px solid ${PRIMARY}`, paddingLeft: '16px', color: TEXT, margin: 0 }}>
            「人生最大の決断と言っても過言ではない結婚。あなたの理想のパートナーを見つけて結ばれるお手伝いを、私の経験とスキルを活かしてサポートします。気軽に相談できる<strong>「親戚のおじさん」</strong>だと思って、ぜひ私を頼ってください。」
          </blockquote>
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
