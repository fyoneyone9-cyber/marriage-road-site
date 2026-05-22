'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'マレッジロードジャパンの物語|開業の経緯と想い',
  description: '結婚相談所マレッジロードジャパンが誕生した経緯と代表者の想い。海老名市で婚活支援を始めた理由をご紹介。',
  alternates: { canonical: 'https://marriage-road.jp/story' },
  openGraph: {
    title: 'マレッジロードジャパンの物語|開業の経緯と想い',
    description: '結婚相談所マレッジロードジャパンが誕生した経緯と代表者の想い。海老名市で婚活支援を始めた理由をご紹介。',
    url: 'https://marriage-road.jp/story',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マレッジロードジャパンの物語|開業の経緯と想い',
    description: '結婚相談所マレッジロードジャパンが誕生した経緯と代表者の想い。海老名市で婚活支援を始めた理由をご紹介。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}


import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Quote } from 'lucide-react'
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
  ['入会の流れ', '/flow'],
  ['カウンセラー紹介', '/greeting'],
  ['よくある質問', '/faq'],
  ['商工会議所', '/chamber'],
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
          <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ加盟</div>
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
            無料相談を予約する ❯
          </a>
        </div>
      )}
    </header>
  )
}

const SECTIONS = [
  {
    q: '婚活の仕事を始めたきっかけは何でしたか？',
    a: `自分自身が、2度の別れを経験しています。1度目は20代後半。仕事に夢中で、大切な人との時間を後回しにし続けた結果でした。2度目は30代。今度こそと思いながらも、「どう伝えればいいか」「どう向き合えばいいか」が分からず、すれ違ったまま終わってしまいました。

その10年間、ずっと感じていたのは「もっと早く、誰かに話せていたら」という後悔でした。孤独に考え込んで、間違えて、また後悔する。そのループを何度繰り返したか分かりません。

だから、この仕事を始めました。同じ後悔をする人を、一人でも減らしたかった。それだけです。`,
  },
  {
    q: '婚活で一番大切なことは何だと思いますか？',
    a: `「焦らないこと」と答えたいところですが、それだけじゃ足りないと思っています。

大切なのは、「自分が何を求めているかを、ちゃんと知ること」だと思います。条件ではなく、一緒にいてどう感じるか。笑える話題が合うか。沈黙が苦にならないか。そういう、言葉にしにくいことを無視して条件だけで選ぶと、たいてい後でズレが出てきます。

私はいつも会員の方に「紙に書いた条件より、実際に会って感じたことを信じてください」と伝えています。データはあくまで入口です。`,
  },
  {
    q: 'どんな人を支援したいですか？',
    a: `「自分なんて」と思っている人に、一番来てほしいです。

年齢が気になる方、バツイチの方、仕事が不規則な方、人見知りな方。そういう「自分には難しいかも」と感じている方ほど、実は丁寧にサポートすることで大きく変わっていきます。

婚活はスペックの競争じゃありません。ちゃんと向き合える人が、ちゃんと出会えます。そのお手伝いをするのが私の仕事です。`,
  },
  {
    q: '成婚した方を見て、どんなことを感じますか？',
    a: `正直に言うと、毎回泣きそうになります（笑）。

特に、最初に来られたときに「もう無理かも」と言っていた方が、笑顔で「決まりました」と報告してくれるときは、何とも言えない気持ちになります。

この仕事の報酬は、お金じゃなくてその瞬間だと思っています。だから続けられる。`,
  },
  {
    q: '最後に、婚活を迷っている方へ一言お願いします。',
    a: `「まだ早い」「もう少し自分磨きをしてから」と先延ばしにしている方がたくさんいます。でも、その「もう少し」は永遠に来ないことが多い。

完璧な自分になってから動くのではなく、今の自分で動き始めることが大事です。動きながら変わっていけばいい。

一人で考え続けるより、誰かと話してみてください。それだけで、見えてくるものが全然違います。まずは無料相談から、気軽にどうぞ。`,
  },
]

export default function StoryPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ヒーロー */}
      <section style={{
        background: `linear-gradient(160deg, #2d2020 0%, #4a2c2c 50%, #6b3a3a 100%)`,
        paddingTop: '80px',
      }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(183,110,121,0.3)', color: '#f5c8cf', border: '1px solid rgba(183,110,121,0.4)' }}>
            代表インタビュー
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-6" style={{ color: '#fff' }}>
            代表・米山が語る<br />
            「婚活と向き合う理由」
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto' }}>
            2度の別れ、10年間の後悔。<br />
            それでもこの仕事を続ける理由を、正直に話します。
          </p>
        </div>
      </section>

      {/* プロフィール帯 */}
      <div style={{ background: 'white', borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center gap-4">
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: PRIMARY, color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', fontWeight: 700, flexShrink: 0,
          }}>Y</div>
          <div>
            <div className="text-sm font-bold" style={{ color: TEXT }}>米山（代表カウンセラー）</div>
            <div className="text-xs" style={{ color: MUTED }}>マレッジロードジャパン / IBJ正規加盟店 / 上級心理カウンセラー</div>
          </div>
        </div>
      </div>

      {/* 本文 */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {SECTIONS.map((sec, i) => (
          <div key={i}>
            {/* Q */}
            <div className="flex items-start gap-3 mb-5">
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: PRIMARY, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: 700,
              }}>Q</div>
              <p className="text-base font-bold pt-1" style={{ color: TEXT }}>{sec.q}</p>
            </div>

            {/* A */}
            <div style={{
              borderLeft: `3px solid ${ACCENT}`,
              paddingLeft: '20px',
              marginLeft: '8px',
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', opacity: 0.4 }}>
                <Quote size={18} color={ACCENT} />
              </div>
              {sec.a.split('\n\n').map((para, j) => (
                <p key={j} className="text-sm leading-8 mb-4 last:mb-0" style={{ color: TEXT }}>
                  {para}
                </p>
              ))}
            </div>

            {/* セパレーター */}
            {i < SECTIONS.length - 1 && (
              <div style={{ height: '1px', background: BORDER, marginTop: '56px' }} />
            )}
          </div>
        ))}

        {/* 締め */}
        <div className="rounded-2xl p-8 text-center"
          style={{ background: `linear-gradient(135deg, ${SURFACE}, #fde8df)`, border: `1px solid ${BORDER}` }}>
          <div className="text-2xl mb-4">🌸</div>
          <p className="text-sm leading-8 mb-6" style={{ color: MUTED }}>
            まずは気軽に話してみてください。<br />
            初回相談は完全無料。ZOOM対応で全国からご利用いただけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/m-contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: PRIMARY, textDecoration: 'none' }}>
              👨 男性の無料相談
            </a>
            <a href="/w-contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ background: '#e87caa', textDecoration: 'none' }}>
              👩 女性の無料相談
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
