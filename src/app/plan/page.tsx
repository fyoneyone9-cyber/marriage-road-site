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
  ['商工会議所', '/chamber'],
  ['お問い合わせ', '/m-contact'],
]

const plans = [
  {
    name: 'ライトプラン',
    tag: '全国対応',
    popular: false,
    monthlyFee: '8,000円/月',
    omiai: '1,000円/回（10件まで/月）',
    seikon: '200,000円',
    image: '/plan-light.jpg',
    color: '#f9f2ee',
    features: [
      '定期的なヒアリング（オンラインのみ）',
      '婚約相談（LINE・電話・メール）',
      '会員プロフィール作成',
      'お見合いのセッティング',
      'お見合い結果のお知らせ',
      '交際から成婚までのフォロー',
    ],
    desc: 'サポートは最低限必要なもののみとし、オンラインでお客さま自身のペースで活動を促し、対面・もしくはオンラインでお見合いを行っていただくプランです。',
  },
  {
    name: 'スタンダードプラン',
    tag: '全国対応',
    popular: true,
    monthlyFee: '9,800円/月',
    omiai: '無料（100件まで/月）',
    seikon: '200,000円',
    image: '/plan-standard.jpg',
    color: PRIMARY,
    features: [
      '定期的なヒアリング（オンライン/対面）',
      '婚約相談（LINE・電話・メール）',
      '会員プロフィール作成',
      'お見合いのセッティング',
      'お見合い結果のお知らせ',
      '交際から成婚までのフォロー',
      '成婚後のアフターフォロー',
    ],
    desc: '交際から成婚までのフォローも充実。オンラインでお客さま自身のペースで活動を促し、お見合いを行っていただくプランです。',
  },
  {
    name: 'プレミアムプラン',
    tag: '神奈川県限定',
    popular: false,
    monthlyFee: '18,000円/月',
    omiai: '無料（100件まで/月）',
    seikon: '200,000円',
    image: '/plan-premium.jpg',
    color: '#2d1a1a',
    features: [
      '定期的なヒアリング（対面/オンライン）',
      '婚約相談（LINE・電話・メール）',
      '会員プロフィール作成',
      'お見合いのセッティング',
      'お見合い結果のお知らせ',
      '交際から成婚までのフォロー',
      '成婚後のアフターフォロー',
    ],
    desc: 'スタンダードプランに加え、地元だからこそ実現できる、対面でのアドバイス・交際カウンセリングに加え、お見合いに行けたり、婚活における全ての支援サポートをしていただけます。',
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
                text: 'まず費用を抑えて試してみたくてライトプランから。自分のペースで動ける点が良くて、途中で迷ったときもすぐ相談に乗ってもらえました。自分に合っていました。',
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
                <p className="text-xs mb-2 font-medium" style={{ color: '#b76e79' }}>{r.plan}</p>
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
        <p className="mb-4 opacity-70">海老名商工会議所 会員 · 会員No.4954</p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3">
          <a href="/feature" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特徴・強み</a>
          <a href="/plan" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プラン</a>
          <a href="/flow" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>ご入会の流れ</a>
          <a href="/greeting" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>カウンセラー紹介</a>
          <a href="/chamber" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>商工会議所活動</a>
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
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>プランのご案内</h1>
          <p className="text-sm leading-relaxed max-w-xl mx-auto" style={{ color: MUTED }}>
            結婚相談所は、オンライン特化プランから、地元密着型プランまで、幅広く丁寧い3種類のサポートをご用意しています。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* 全プラン共通費用 */}
        <div className="rounded-xl p-6 mb-10 flex flex-wrap gap-6 items-center justify-between"
          style={{ background: 'white', border: `2px solid ${BORDER}` }}>
          <div>
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>全プラン共通（契約時のみ）</p>
            <div className="flex flex-wrap gap-6 mt-2">
              {[
                ['入会金', '28,000円'],
                ['IBJシステム登録費', '9,800円'],
                ['初月月会費', '無料キャンペーン中'],
              ].map(([label, val]) => (
                <div key={label} className="text-sm">
                  <span style={{ color: MUTED }}>{label}：</span>
                  <span className="font-semibold ml-1" style={{ color: TEXT }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs px-4 py-2 rounded-full font-semibold"
            style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}`, whiteSpace: 'nowrap' }}>
            🎉 初月月会費無料キャンペーン実施中
          </div>
        </div>

        {/* プランカード（縦並び・写真付き） */}
        <div className="space-y-8 mb-10">
          {plans.map((plan, i) => (
            <div key={plan.name} className="rounded-2xl overflow-hidden"
              style={{
                border: plan.popular ? `2px solid ${PRIMARY}` : `1px solid ${BORDER}`,
                boxShadow: plan.popular ? `0 8px 32px rgba(183,110,121,0.2)` : '0 2px 8px rgba(45,26,26,0.06)',
                background: 'white',
                position: 'relative',
              }}>

              {/* 人気バッジ */}
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white shadow"
                    style={{ background: PRIMARY }}>⭐ 人気No.1</span>
                </div>
              )}

              {/* 上部カラーバー */}
              <div className="h-1.5 w-full" style={{ background: plan.popular ? PRIMARY : BORDER }} />

              <div className="flex flex-col md:flex-row">
                {/* 左: テキスト */}
                <div className="flex-1 p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                      {plan.tag}
                    </span>
                    {plan.popular && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `rgba(183,110,121,0.1)`, color: PRIMARY }}>
                        おすすめ
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-bold mb-2" style={{ color: TEXT }}>
                    {plan.name}【{plan.tag}】
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{plan.desc}</p>

                  {/* 料金 */}
                  <div className="flex flex-wrap gap-4 mb-5 p-4 rounded-xl" style={{ background: SURFACE }}>
                    {[
                      ['月会費（IBJ）', plan.monthlyFee],
                      ['お見合いセッティング', plan.omiai],
                      ['ご成婚料', plan.seikon],
                    ].map(([label, val]) => (
                      <div key={label} className="text-sm">
                        <div className="text-xs mb-0.5" style={{ color: MUTED }}>{label}</div>
                        <div className="font-bold" style={{ color: plan.popular ? PRIMARY : TEXT }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* サポート詳細 */}
                  <div className="mb-5">
                    <p className="text-xs font-medium mb-2" style={{ color: MUTED }}>▼ サポート詳細</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm" style={{ color: TEXT }}>
                          <CheckCircle size={13} style={{ color: ACCENT, flexShrink: 0 }} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="/m-contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                    style={{
                      background: plan.popular ? PRIMARY : 'white',
                      color: plan.popular ? 'white' : PRIMARY,
                      border: `2px solid ${PRIMARY}`,
                      textDecoration: 'none',
                    }}>
                    詳細はこちら →
                  </a>
                </div>

                {/* 右: 装飾パネル（プラン番号 + アイコン） */}
                <div className="md:w-48 flex flex-col items-center justify-center p-6 md:border-l"
                  style={{ borderColor: BORDER, background: i % 2 === 0 ? SURFACE : 'white' }}>
                  <div className="text-5xl font-bold mb-2 opacity-10" style={{ color: PRIMARY }}>
                    0{i + 1}
                  </div>
                  <div className="text-3xl mb-3">
                    {i === 0 ? '💻' : i === 1 ? '💑' : '👑'}
                  </div>
                  <div className="text-xs text-center font-medium" style={{ color: MUTED }}>
                    {i === 0 ? 'オンライン特化' : i === 1 ? '全国・バランス型' : '地元・完全サポート'}
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
          <p>※ 支払い方法：銀行振り込み・メルペイ・d払い</p>
        </div>

        {/* CTA */}
        <div className="text-center py-8 rounded-2xl" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)` }}>
          <p className="text-base font-semibold mb-1" style={{ color: TEXT }}>どのプランが合うか迷ったら</p>
          <p className="text-sm mb-5" style={{ color: MUTED }}>無料相談でプランを一緒に決めましょう。費用・内容・活動期間など何でもお気軽に。</p>
          <a href="/m-contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談を予約する →
          </a>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
