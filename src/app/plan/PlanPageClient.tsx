'use client'

 useState, useEffect } from 'react'
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

const plans = [
  {
    name: 'ライトプラン',
    tag: '全国対応',
    popular: false,
    icon: '💻',
    monthlyFee: '8,000円／月',
    omiai: '1,000円／回（10件まで／月）',
    seikon: '200,000円',
    desc: 'サポートを最低限必要に押さえることで低価格を実現。オンラインでお客さまご自身のペースで日本最大の婚活システム（IBJS）でお相手を探し、お見合いを行っていただくプランです。',
    supports: [
      '定期的なヒアリング（オンラインのみ）',
      '都度相談（LINE・電話・メール）',
      '会員プロフィール作成',
      '対面お見合いのセッティング',
      'オンラインお見合いのセッティング',
      'お見合い結果の取次',
      '交際から成婚までのフォロー',
    ],
    benefits: [
      'IBJ会員限定の婚活メソッドのご提供',
      'IBJ提携先フォトスタジオのご紹介',
    ],
  },
  {
    name: 'スタンダードプラン',
    tag: '全国対応',
    popular: true,
    icon: '💑',
    monthlyFee: '9,800円／月',
    omiai: '無料（100件まで／月）',
    seikon: '200,000円',
    desc: 'ライトプランの内容に加え、交際から成婚までのフォローとIBJが長年培ってきた婚活メソッドをオンラインで実施させていただくプランです。ご要望があれば当相談所が厳選したオススメのお見合い相手のご紹介も可能です。',
    supports: [
      '定期的なヒアリング（オンラインのみ）',
      '都度相談（LINE・電話・メール）',
      '会員プロフィール作成',
      '対面お見合いのセッティング',
      'オンラインお見合いのセッティング（Zoom）',
      'お見合い結果の取次',
      '交際から成婚までのフォロー',
    ],
    benefits: [
      'IBJ会員限定の婚活メソッドのご提供',
      'IBJ提携先フォトスタジオのご紹介',
    ],
  },
  {
    name: 'プレミアムプラン',
    tag: '神奈川・東京限定',
    popular: false,
    icon: '👑',
    monthlyFee: '18,000円／月',
    omiai: '無料（200件まで／月）',
    seikon: '200,000円',
    desc: '全ての活動をサポートさせていただくプラン。神奈川県・東京都の方のみお選びいただける地元密着プランです。',
    supports: [
      '定期的なヒアリング（対面 or オンライン）',
      '都度相談（LINE・電話・メール）',
      '会員プロフィール作成',
      '対面お見合いのセッティング',
      'オンラインお見合いのセッティング',
      'お見合い相手のご紹介',
      'お見合い結果の取次',
      '交際から成婚までのフォロー',
      '成婚後のアフターフォロー',
    ],
    benefits: [
      'IBJ会員限定の婚活メソッドのご提供',
      'IBJ提携先フォトスタジオのご紹介',
      '同行サービス（撮影・買い物・お見合い）',
    ],
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
    <>
      {/* 口コミ */}
      <section className="py-12 md:py-16 px-4" style={{ background: SURFACE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>Reviews</p>
            <h2 className="text-xl font-semibold">プランを選んだ方の声</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '30代女性・会社員', plan: 'ライトプラン', text: 'まず費用を抑えて試してみたくてライトプランから。自分のペースで動ける点が良くて、途中で迷ったときもすぐ相談に乗ってもらえました。自分に合っていました。', stars: 5 },
              { name: '30代男性・エンジニア', plan: 'スタンダードプラン', text: '毎月ご紹介いただけるのが良かった。自分では探せない方と出会えて、6ヶ月で成婚できました。料金も明瞭で安心して始められました。', stars: 5 },
              { name: '40代女性・医療従事者', plan: 'プレミアムプラン', text: '対面でカウンセリングしていただけるのが決め手でした。同行サービスで撮影も手伝っていただき、活動中ずっと安心感がありました。', stars: 5 },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-6 bg-white" style={{ border: `1px solid ${BORDER}` }}>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(r.stars)].map((_, j) => <span key={j} style={{ color: ACCENT }}>★</span>)}
                </div>
                <p className="text-xs mb-2 font-semibold" style={{ color: PRIMARY }}>{r.plan}</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: TEXT }}>「{r.text}」</p>
                <div className="text-xs font-semibold" style={{ color: MUTED }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
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

export default function PlanPageClient() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ヒーロー */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: PRIMARY, color: '#fff' }}>プラン・料金</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>プランのご案内</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            ライフスタイルに合わせた3つのプランをご用意。<br />
            全プランで<strong style={{ color: TEXT }}>初月月会費無料</strong>キャンペーン実施中。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* 全プラン共通費用 */}
        <div className="rounded-xl p-5 mb-10 flex flex-wrap items-center justify-between gap-4"
          style={{ background: 'white', border: `1px solid ${BORDER}` }}>
          <div className="flex flex-wrap gap-6">
            {[['入会金（契約時のみ）', '28,000円'], ['IBJSシステム登録料（契約時のみ）', '9,800円'], ['支払い方法', '銀行振込・メルペイ・d払い']].map(([l, v]) => (
              <div key={l} className="text-sm">
                <span style={{ color: MUTED }}>{l}：</span>
                <span className="font-bold ml-1" style={{ color: TEXT }}>{v}</span>
              </div>
            ))}
          </div>
          <span className="text-xs font-semibold px-4 py-2 rounded-full" style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}`, whiteSpace: 'nowrap' }}>
            🎉 初月月会費無料キャンペーン中
          </span>
        </div>

        {/* プランカード */}
        <div className="space-y-8 mb-10">
          {plans.map((plan, i) => (
            <div key={plan.name} className="rounded-2xl overflow-hidden"
              style={{
                border: plan.popular ? `2px solid ${PRIMARY}` : `1px solid ${BORDER}`,
                boxShadow: plan.popular ? `0 8px 32px rgba(183,110,121,0.18)` : '0 2px 8px rgba(45,26,26,0.05)',
                background: 'white',
                position: 'relative',
              }}>

              {/* カラートップバー */}
              <div className="h-1.5" style={{ background: plan.popular ? PRIMARY : i === 2 ? '#c9a96e' : BORDER }} />

              {plan.popular && (
                <div className="absolute top-5 right-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: PRIMARY }}>⭐ 人気No.1</span>
                </div>
              )}

              <div className="p-7">
                {/* プランヘッダー */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-3xl">{plan.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="text-xl font-bold" style={{ color: TEXT }}>{plan.name}</h2>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                        【{plan.tag}】
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>{plan.desc}</p>

                <div className="flex flex-col md:flex-row gap-6">
                  {/* 左: 料金 */}
                  <div className="md:w-56 flex-shrink-0">
                    <div className="rounded-xl p-4" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                      <p className="text-xs font-semibold mb-3" style={{ color: PRIMARY }}>料金</p>
                      {[
                        ['IBJ月会費', plan.monthlyFee],
                        ['お見合セッティング', plan.omiai],
                        ['ご成婚料', plan.seikon],
                      ].map(([l, v]) => (
                        <div key={l} className="pb-2 mb-2" style={{ borderBottom: `1px solid ${BORDER}` }}>
                          <div className="text-xs mb-0.5" style={{ color: MUTED }}>{l}</div>
                          <div className="text-sm font-bold" style={{ color: plan.popular ? PRIMARY : TEXT }}>{v}</div>
                        </div>
                      ))}
                      <p className="text-xs mt-1" style={{ color: MUTED }}>※ 初月無料</p>
                    </div>
                  </div>

                  {/* 右: サポート詳細 + 特典 */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold mb-2" style={{ color: MUTED }}>【サポート詳細】</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                      {plan.supports.map((s, j) => (
                        <div key={j} className="flex items-start gap-1.5 text-sm" style={{ color: TEXT }}>
                          <CheckCircle size={13} style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }} />
                          {s}
                        </div>
                      ))}
                    </div>

                    <p className="text-xs font-semibold mb-2" style={{ color: MUTED }}>【特典】</p>
                    <div className="space-y-1 mb-5">
                      {plan.benefits.map((b, j) => (
                        <div key={j} className="flex items-start gap-1.5 text-sm" style={{ color: TEXT }}>
                          <CheckCircle size={13} style={{ color: PRIMARY, flexShrink: 0, marginTop: 3 }} />
                          {b}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                        style={{
                          background: plan.popular ? PRIMARY : 'white',
                          color: plan.popular ? 'white' : PRIMARY,
                          border: `2px solid ${PRIMARY}`,
                          textDecoration: 'none',
                        }}>
                        📅 無料説明会を予約
                      </a>
                      <a href={`/plan${i + 1}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-80"
                        style={{
                          background: 'transparent',
                          color: MUTED,
                          border: `1px solid ${BORDER}`,
                          textDecoration: 'none',
                        }}>
                        詳細を見る →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div className="rounded-xl p-5 mb-8 text-xs" style={{ background: 'white', border: `1px solid ${BORDER}`, color: MUTED }}>
          <p>※ 記載の料金はすべて税込です。</p>
          <p>※ ご成婚料は成婚退会時のみ発生します。</p>
          <p>※ クーリングオフ制度（契約後8日以内）が適用されます。</p>
        </div>

        {/* CTA */}
        <div className="text-center py-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)` }}>
          <p className="text-base font-bold mb-1" style={{ color: TEXT }}>どのプランが合うか迷ったら</p>
          <p className="text-sm mb-2" style={{ color: MUTED }}>無料相談でプランを一緒に決めましょう。</p>
          <p className="text-xs mb-6" style={{ color: MUTED }}>受付時間：10:00〜23:00（年中無休）</p>
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
          <p className="mt-4">
            <a href="tel:050-1807-3163" className="text-sm font-semibold hover:opacity-80" style={{ color: PRIMARY }}>
              📞 050-1807-3163
            </a>
          </p>
        </div>
      </div>

      <SiteFooter />
      <QuickNav />
    </div>
  )
}
