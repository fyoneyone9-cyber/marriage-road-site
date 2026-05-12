'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, CheckCircle } from 'lucide-react'

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

const plans = [
  {
    name: 'ライトプラン',
    popular: false,
    monthlyFee: '8,000円/月',
    omiai: '1,000円/回（10件まで/月）',
    seikon: '200,000円',
  },
  {
    name: 'スタンダードプラン',
    popular: true,
    monthlyFee: '9,800円/月',
    omiai: '無料（100件まで/月）',
    seikon: '200,000円',
  },
  {
    name: 'プレミアムプラン',
    popular: false,
    monthlyFee: '18,000円/月',
    omiai: '無料（200件まで/月）',
    seikon: '200,000円',
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
    <>
      {/* ── 口コミ ── */}
      <section className="py-16 px-4" style={{ background: '#fff2ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: '#b76e79' }}>Reviews</p>
            <h2 className="text-xl font-semibold">プランを選んだ方の声</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '30代女性・会社員',
                plan: 'ライトプラン利用',
                text: 'まず費用を抑えて試してみたくてライトプランから。自分のペースで動けるのが良くて、途中で迷ったときもすぐ相談に乗ってもらえました。自分には合っていました。',
                stars: 5,
              },
              {
                name: '30代男性・エンジニア',
                plan: 'スタンダードプラン利用',
                text: '毎月ご紹介いただけるのが良かった。自分では探せない方と出会えて、結果的に6ヶ月で成婚できました。料金も他の相談所と比べて明瞭で安心して始めました。',
                stars: 5,
              },
              {
                name: '40代女性・医療従事者',
                plan: 'プレミアムプラン利用',
                text: '対面でカウンセリングしていただけるのが決め手でした。些細な悩みも話しやすくて、活動中ずっと安心感がありました。神奈川在住の方には特におすすめです。',
                stars: 5,
              },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-6 bg-white" style={{ border: `1px solid ${'#e8d5d0'}` }}>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} style={{ color: '#c9a96e' }}>★</span>
                  ))}
                </div>
                <div className="text-xs font-medium mb-3" style={{ color: '#b76e79' }}>{r.plan}</div>
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
    </>
  )
}

export default function PlanPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>プラン・料金</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>料金プラン</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>あなたのライフスタイルに合ったプランをお選びください。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* 全プラン共通費用 */}
        <div className="rounded-xl p-6 mb-10" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: TEXT }}>全プラン共通（契約時のみ）</h2>
          <div className="space-y-3">
            {[
              ['入会金', '28,000円'],
              ['IBJSシステム登録料', '9,800円'],
              ['支払い方法', '銀行振り込み・メルペイ・d払い'],
            ].map(([label, val]) => (
              <div key={label} className="flex items-center justify-between py-2 text-sm" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ color: MUTED }}>{label}</span>
                <span className="font-semibold" style={{ color: TEXT }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* プランカード */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-xl overflow-hidden"
              style={{
                background: plan.popular ? PRIMARY : 'white',
                border: plan.popular ? `2px solid ${PRIMARY}` : `1px solid ${BORDER}`,
                boxShadow: plan.popular ? `0 8px 24px rgba(183,110,121,0.25)` : 'none',
              }}>
              {plan.popular && (
                <div className="text-center py-2 text-xs font-bold" style={{ background: 'rgba(0,0,0,0.15)', color: 'white' }}>
                  ⭐ 人気No.1
                </div>
              )}
              <div className="p-6">
                <div className="inline-block mb-3 px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.2)', color: plan.popular ? 'white' : PRIMARY }}>
                  初月無料
                </div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: plan.popular ? 'white' : TEXT }}>{plan.name}</h3>
                <div className="space-y-3">
                  {[
                    ['IBJ月会費', plan.monthlyFee],
                    ['お見合セッティング', plan.omiai],
                    ['ご成婚料', plan.seikon],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-start justify-between text-sm" style={{ borderBottom: `1px solid ${plan.popular ? 'rgba(255,255,255,0.2)' : BORDER}`, paddingBottom: '8px' }}>
                      <span style={{ color: plan.popular ? 'rgba(255,255,255,0.7)' : MUTED }}>{label}</span>
                      <span className="font-semibold text-right ml-2" style={{ color: plan.popular ? 'white' : TEXT }}>{val}</span>
                    </div>
                  ))}
                </div>
                <a href="/m-contact"
                  className="block text-center mt-5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: plan.popular ? 'white' : PRIMARY,
                    color: plan.popular ? PRIMARY : 'white',
                    textDecoration: 'none',
                  }}>
                  無料相談で詳細を聞く →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div className="rounded-xl p-6 mb-8 text-xs" style={{ background: 'white', border: `1px solid ${BORDER}`, color: MUTED }}>
          <p>※ 記載の料金はすべて税込です。</p>
          <p>※ ご成婚料は成婚退会時のみ発生します。</p>
          <p>※ クーリングオフ制度（契約後8日以内）が適用されます。</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: MUTED }}>プランのご相談は無料相談にて承ります</p>
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
