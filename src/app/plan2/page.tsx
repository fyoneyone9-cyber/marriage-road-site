'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, CheckCircle } from 'lucide-react'
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
      background: 'rgba(250,247,245,0.97)', borderBottom: `1px solid ${BORDER}`,
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
          <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料説明会予約 <ArrowRight size={14} />
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
          <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料説明会を予約する →
          </a>
        </div>
      )}
    </header>
  )
}

const supports = [
  '定期的なヒアリング（オンラインのみ）',
  '都度相談（LINE・電話・メール）',
  '会員プロフィール作成',
  '対面お見合いのセッティング',
  'オンラインお見合いのセッティング（Zoom）',
  'お見合い結果の取次',
  '交際から成婚までのフォロー',
]

const benefits = [
  'IBJ会員限定の婚活メソッドのご提供',
  'IBJ提携先フォトスタジオのご紹介',
]

const faqs = [
  { q: '月100件のお見合いとはどういう意味ですか？', a: 'スタンダードプランではお見合いセッティング料が無料で、月最大100件まで申し込みが可能です。より多くの方にアプローチできます。' },
  { q: 'カウンセラーからお相手を紹介してもらえますか？', a: 'はい。ご要望に応じて、カウンセラーが厳選したおすすめの方をご紹介することができます。' },
  { q: 'ライトプランとの違いは何ですか？', a: '主な違いはお見合い料金（スタンダードは無料）と、カウンセラーによるお相手紹介サービスです。' },
  { q: '成婚料はいつ発生しますか？', a: 'ご成婚退会時のみ発生します（200,000円）。活動中は発生しません。' },
]

export default function Plan2Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ヒーロー */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <a href="/plan" className="text-xs" style={{ color: MUTED, textDecoration: 'none' }}>プラン一覧</a>
            <span style={{ color: MUTED }} className="text-xs">›</span>
            <span className="text-xs" style={{ color: PRIMARY }}>スタンダードプラン</span>
          </div>
          <div className="text-5xl mb-4">💑</div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>全国対応</span>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: PRIMARY }}>⭐ 人気No.1</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: TEXT }}>スタンダードプラン</h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
            ライトプランの内容に加え、お見合いセッティングが無料（月100件）。<br />
            カウンセラーによるお相手紹介も対応。6ヶ月での成婚実績多数のバランス型プランです。
          </p>
          <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none', boxShadow: '0 4px 14px rgba(183,110,121,0.4)' }}>
            📅 無料説明会を予約する
          </a>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

        {/* 料金 */}
        <section>
          <h2 className="text-lg font-bold mb-5" style={{ color: TEXT }}>料金</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${PRIMARY}`, background: 'white', boxShadow: `0 8px 32px rgba(183,110,121,0.15)` }}>
            <div className="h-1.5" style={{ background: PRIMARY }} />
            <div className="divide-y" style={{ borderColor: BORDER }}>
              {[
                ['入会金（契約時のみ）', '28,000円'],
                ['IBJSシステム登録料（契約時のみ）', '9,800円'],
                ['IBJ月会費', '9,800円／月　※初月無料'],
                ['お見合いセッティング料', '無料（月100件まで）'],
                ['ご成婚料', '200,000円（成婚退会時のみ）'],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between items-center px-6 py-4 text-sm">
                  <span style={{ color: MUTED }}>{label}</span>
                  <span className="font-bold" style={{ color: TEXT }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs mt-2 ml-1" style={{ color: MUTED }}>※ 記載料金はすべて税込 ／ クーリングオフ制度（契約後8日以内）適用</p>
        </section>

        {/* サポート内容 */}
        <section>
          <h2 className="text-lg font-bold mb-5" style={{ color: TEXT }}>サポート内容</h2>
          <div className="rounded-2xl p-6" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
            <div className="grid sm:grid-cols-2 gap-3">
              {supports.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm" style={{ color: TEXT }}>
                  <CheckCircle size={14} style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 特典 */}
        <section>
          <h2 className="text-lg font-bold mb-5" style={{ color: TEXT }}>特典</h2>
          <div className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-sm" style={{ color: TEXT }}>
                  <CheckCircle size={14} style={{ color: PRIMARY, flexShrink: 0, marginTop: 3 }} />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* こんな方に */}
        <section>
          <h2 className="text-lg font-bold mb-5" style={{ color: TEXT }}>こんな方におすすめ</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '💑', text: 'バランスよくサポートを受けたい方' },
              { icon: '🌏', text: '全国どこからでも活動したい方' },
              { icon: '📨', text: 'たくさんの方にアプローチしたい方' },
              { icon: '👤', text: 'カウンセラーに相手を紹介してほしい方' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm" style={{ color: TEXT }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 他プランとの比較 */}
        <section>
          <h2 className="text-lg font-bold mb-5" style={{ color: TEXT }}>プラン比較</h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: SURFACE }}>
                  <th className="p-3 text-left" style={{ color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>項目</th>
                  <th className="p-3 text-center" style={{ color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>ライト</th>
                  <th className="p-3 text-center" style={{ color: PRIMARY, fontWeight: 700, borderBottom: `1px solid ${BORDER}`, background: '#fde8df' }}>スタンダード ← 今ここ</th>
                  <th className="p-3 text-center" style={{ color: MUTED, fontWeight: 600, borderBottom: `1px solid ${BORDER}` }}>プレミアム</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['月会費', '8,000円', '9,800円', '18,000円'],
                  ['お見合料', '1,000円/回', '無料（100件/月）', '無料（200件/月）'],
                  ['対応エリア', '全国', '全国', '神奈川・東京'],
                  ['対面カウンセリング', '—', '—', '✓'],
                  ['同行サービス', '—', '—', '✓'],
                ].map(([label, v1, v2, v3]) => (
                  <tr key={label} style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <td className="p-3" style={{ color: MUTED }}>{label}</td>
                    <td className="p-3 text-center" style={{ color: TEXT }}>{v1}</td>
                    <td className="p-3 text-center font-bold" style={{ color: PRIMARY, background: '#fde8df' }}>{v2}</td>
                    <td className="p-3 text-center" style={{ color: TEXT }}>{v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-3 mt-4 justify-end text-xs">
            <a href="/plan1" style={{ color: MUTED, textDecoration: 'none' }}>ライトプランを見る →</a>
            <a href="/plan3" style={{ color: ACCENT, textDecoration: 'none' }}>プレミアムプランを見る →</a>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-lg font-bold mb-5" style={{ color: TEXT }}>よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left text-sm font-semibold"
                  style={{ background: 'white', color: TEXT, cursor: 'pointer', border: 'none' }}>
                  <span>Q. {faq.q}</span>
                  <span style={{ color: PRIMARY }}>{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-sm leading-relaxed" style={{ background: SURFACE, color: MUTED }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 rounded-2xl" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)` }}>
          <p className="text-base font-bold mb-1" style={{ color: TEXT }}>スタンダードプランが気になったら</p>
          <p className="text-sm mb-6" style={{ color: MUTED }}>無料説明会で詳しくご説明します。まずお気軽にどうぞ。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY, textDecoration: 'none', boxShadow: '0 4px 14px rgba(183,110,121,0.35)' }}>
              📅 無料説明会を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#06C755', textDecoration: 'none' }}>
              💬 LINEで相談する
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
