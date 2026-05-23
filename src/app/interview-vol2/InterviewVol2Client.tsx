'use client'



import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Heart } from 'lucide-react'
import Footer from '@/components/Footer'

const PRIMARY = '#b76e79'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const QA = [
  {
    q: '前回のインタビューを拝見して、カウンセラーとしての熱量がすごく伝わりました。改めて、今どんな思いでこの仕事をされていますか？',
    a: '感謝の声をいただくたびに、「続けてよかった」と思いますね。最近、担当したお客様からお子さんが生まれましたという連絡をいただいて。その喜びって、言葉にならないものがあって。結婚だけじゃなくて、その先の人生にまで関わっているんだと実感する瞬間があります。',
  },
  {
    q: 'マリッジロードジャパンは海老名という場所にありますよね。地方の結婚相談所ならではの強みってありますか？',
    a: 'ありますね。東京や横浜と違って、「ご近所感」があるんです。同じ地域に住む方が多いので、住環境や生活スタイルが近い方同士を繋ぎやすい。「職場が近い」「同じスーパーで買い物してる」みたいな小さな共通点が、意外と関係性を深めるんですよ。都市部の大きなサービスにはない、この"地域密着感"は強みだと思ってます。',
  },
  {
    q: 'IBJという業界最大手のネットワークに加盟されていますよね。具体的にどういうメリットがあるんですか？',
    a: '82,000人以上の会員データベースにアクセスできるので、地域を超えたマッチングができます。たとえば「海老名近辺で探したいけど、なかなかいない」という方でも、神奈川全域、さらには首都圏まで広げて探せる。小さい相談所でも、大手と同じ土俵で戦えるんです。それがIBJ加盟の一番の意味だと思ってます。',
  },
  {
    q: '最近、結婚相談所に来られる方の傾向や変化はありますか？',
    a: '「婚活疲れ」で来られる方が増えた気がします。マッチングアプリを1〜2年やってみたけど、なかなか結果が出なくて。アプリって数が多すぎてかえって選べなくなるんですよね。その点、相談所は「本気で結婚したい人だけ」が集まってるので、質が全然違う。「早く結果を出したい」「もう一人で悩みたくない」という方に特に向いてると思います。',
  },
  {
    q: 'ZOOMでの全国対応もされているんですよね。オンライン婚活の可能性をどう見てますか？',
    a: 'すごく広がってると思います。以前は「対面でないと信頼関係が作れない」と思ってたんですが、ZOOMで1〜2回話してみると意外と深い話ができる。むしろ自宅のリラックスした状態の方が、本音を話しやすいという方もいます。地方在住で、お住まいの近くに相談所がないという方にも、距離の壁なく対応できるのはオンラインならではのメリットです。',
  },
  {
    q: 'カウンセラーとして、成婚に至るお客様に共通することはありますか？',
    a: '「理想を持ちながら、現実も見られる人」ですね。理想が高すぎると絞りすぎてしまう。逆に「誰でもいい」だと自分の気持ちが追いつかない。「ここだけは譲れない」という軸を持ちながら、「ここは状況次第で変えられる」という柔軟性のある方が、比較的早く成婚されてる気がします。そのバランスを一緒に整えていくのが、カウンセラーの役割だと思ってます。',
  },
  {
    q: '婚活中に落ち込んでしまう方へ、どんな言葉をかけていますか？',
    a: '「断られたのは、合わなかっただけ」と伝えています。お見合いで断られると、自分を否定された気分になりますよね。でも実際は、「この人とは生活スタイルが合わなかった」というだけで、あなたに問題があるわけじゃない。自分に合う人に出会えるまで、一緒に歩き続けることが私の仕事だと思ってます。ひとりで抱え込まないでほしいです。',
  },
  {
    q: '料金について、相談所に入ることを迷っている方への率直なメッセージをいただけますか？',
    a: '婚活にかかる費用って、「コスト」じゃなくて「投資」だと思ってほしいんです。理想の出会いを自力で探し続けて3年費やすのと、サポートを受けて1年で結果を出すのとでは、何が安いか。時間も、精神的なエネルギーも、全部有限ですよね。まずは無料相談で話だけ聞いてみてください。入会を迫ることは一切しないので。',
  },
  {
    q: '最後に、今まさに婚活を迷っている方へ一言お願いします。',
    a: '「行動した人だけが変わる」ということです。話を聞くだけ、見学だけでも全然いい。「動いてみる」ことが最初の一歩で、そこから景色が変わります。一人で悩んでる時間がもったいない。ここに来れば、一緒に考える人がいる。それだけ覚えておいてもらえれば嬉しいです。',
  },
]

function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP', icon: '🏠', href: '/' },
    { label: '特徴・強み', icon: '✨', href: '/feature' },
    { label: 'プラン・料金', icon: '💎', href: '/plan' },
    { label: '成婚の流れ', icon: '💑', href: '/flow' },
    { label: 'カウンセラー', icon: '👤', href: '/greeting' },
    { label: 'よくある質問', icon: '❓', href: '/faq' },
    { label: '婚活データ', icon: '📊', href: '/data' },
    { label: '男性相談', icon: '♂', href: '/m-contact' },
    { label: '女性相談', icon: '♀', href: '/w-contact' },
  ]
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '12px', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
      {open && (
        <div style={{ background: 'rgba(45,26,26,0.95)', backdropFilter: 'blur(12px)', borderRadius: '16px', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '2px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', minWidth: '148px' }}>
          {links.map(({ label, icon, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 12px', borderRadius: '10px', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(183,110,121,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontSize: '15px', width: '20px', textAlign: 'center' }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#b76e79', color: 'white', border: 'none', cursor: 'pointer', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(183,110,121,0.5)', transition: 'transform 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        aria-label="ページナビゲーションを開く"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  )
}

export default function InterviewVol2Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>

      {/* ヘッダー */}
      <header style={{
        background: scrolled ? 'rgba(250,247,245,0.97)' : 'rgba(250,247,245,0.95)',
        borderBottom: `1px solid ${BORDER}`,
        backdropFilter: 'blur(8px)',
        boxShadow: scrolled ? '0 2px 12px rgba(45,26,26,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }} className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/">
            <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>マリッジロードジャパン</div>
            <div className="text-xs" style={{ color: MUTED }}>結婚相談所 ｜ IBJ正規加盟店</div>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm" style={{ color: MUTED }}>
            <a href="/feature" className="hover:opacity-70 transition-opacity">特徴・強み</a>
            <a href="/plan" className="hover:opacity-70 transition-opacity">プラン</a>
            <a href="/flow" className="hover:opacity-70 transition-opacity">成婚の流れ</a>
            <a href="/greeting" className="hover:opacity-70 transition-opacity">カウンセラー紹介</a>
            <a href="/interview" className="hover:opacity-70 transition-opacity font-medium" style={{ color: PRIMARY }}>対談</a>
            <a href="/faq" className="hover:opacity-70 transition-opacity">よくある質問</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/m-contact" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY }}>
              無料相談 <ArrowRight size={14} />
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: PRIMARY }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ background: BASE, borderTop: `1px solid ${BORDER}` }} className="md:hidden px-4 py-4 space-y-3">
            {[['特徴・強み', '/feature'], ['プラン', '/plan'], ['成婚の流れ', '/flow'], ['カウンセラー紹介', '/greeting'], ['対談', '/interview'], ['よくある質問', '/faq'], ['お問い合わせ', '/m-contact']].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm" style={{ color: MUTED }}>{label}</a>
            ))}
            <a href="/m-contact" onClick={() => setMenuOpen(false)} className="block text-center py-3 rounded-full text-sm font-semibold text-white" style={{ background: PRIMARY }}>
              無料相談を予約する →
            </a>
          </div>
        )}
      </header>

      {/* ヒーロー */}
      <section className="pt-32 pb-12 px-4" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, ${BASE} 100%)` }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: `${PRIMARY}18`, color: PRIMARY, border: `1px solid ${PRIMARY}30` }}>
              <Heart size={12} /> カウンセラーインタビュー Vol.2
            </div>
            <a href="/interview" className="text-xs hover:opacity-70 underline underline-offset-2" style={{ color: MUTED }}>
              ← Vol.1を読む
            </a>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4" style={{ color: TEXT }}>
            カウンセラーが語る<br />「本当の婚活」とは
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            マリッジロードジャパンのカウンセラーへの第二弾インタビュー。<br />
            婚活疲れ、地域密着の強み、成婚に至る人の共通点——より深い本音をお届けします。
          </p>
        </div>
      </section>

      {/* 対談本文 */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {QA.map((item, i) => (
            <div key={i}>
              <div className="flex gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: MUTED }}>
                  Q
                </div>
                <div className="flex-1 rounded-xl rounded-tl-none px-4 py-3 text-sm font-medium leading-relaxed" style={{ background: '#f0e8e4', color: TEXT }}>
                  {item.q}
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="flex-1 rounded-xl rounded-tr-none px-4 py-3 text-sm leading-relaxed" style={{ background: SURFACE, color: TEXT, border: `1px solid ${BORDER}` }}>
                  {item.a}
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: PRIMARY }}>
                  A
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vol.1 導線 */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <a href="/interview" className="flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all hover:opacity-90"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div>
              <p className="text-xs mb-1" style={{ color: MUTED }}>前回のインタビューも読む</p>
              <p className="font-medium" style={{ color: TEXT }}>
                Vol.1「なぜ私は結婚相談所を始めたのか」→
              </p>
            </div>
            <Heart size={20} style={{ color: PRIMARY, flexShrink: 0 }} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-2xl p-10" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <Heart size={28} className="mx-auto mb-4" style={{ color: PRIMARY }} />
          <h2 className="text-xl font-bold mb-3" style={{ color: TEXT }}>まずは無料相談から</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
            話を聞くだけでも大丈夫です。<br />
            入会を迫ることは一切しません。一緒に考えましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/m-contact" className="px-6 py-3 rounded-full text-sm font-semibold text-white text-center hover:opacity-90 transition-opacity" style={{ background: PRIMARY }}>
              男性の方はこちら →
            </a>
            <a href="/w-contact" className="px-6 py-3 rounded-full text-sm font-semibold text-center hover:opacity-80 transition-opacity" style={{ background: BASE, border: `1.5px solid ${PRIMARY}`, color: PRIMARY }}>
              女性の方はこちら →
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <QuickNav />
    </div>
  )
}
