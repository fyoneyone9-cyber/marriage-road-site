'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Heart, TrendingUp, Users, Clock, Star, Award, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'
const GREEN   = '#4caf8a'

const NAV_LINKS = [
  ['特徴・強み', '/feature'],
  ['プラン', '/plan'],
  ['入会の流れ', '/flow'],
  ['カウンセラー紹介', '/greeting'],
  ['よくある質問', '/faq'],
  ['商工会議所', '/chamber'],
]

// 成婚者の声
const VOICES = [
  {
    id: 1,
    male: { name: 'K.Tさん', age: 38, job: 'ITエンジニア', pref: '神奈川県' },
    female: { name: 'M.Sさん', age: 34, job: '看護師', pref: '東京都' },
    period: '7ヶ月',
    meetCount: 12,
    voice: '転職直後で自信がなく、婚活を先延ばしにしていました。担当カウンセラーさんに「今の自分のままで大丈夫」と背中を押してもらい、入会を決意。プロフィール写真の撮り直しとコメントの見直しで、最初の月からお見合いが増えました。パートナーとは趣味の登山の話で盛り上がり、自然体で交際に進めました。結婚式では担当カウンセラーにもご挨拶できて、本当に感謝しています。',
    tags: ['ZOOM婚活', '短期成婚', 'プロフィール改善'],
    rating: 5,
  },
  {
    id: 2,
    male: { name: 'R.Nさん', age: 43, job: '自営業（飲食）', pref: '神奈川県' },
    female: { name: 'Y.Hさん', age: 38, job: '会社員', pref: '神奈川県' },
    period: '13ヶ月',
    meetCount: 18,
    voice: '40代での婚活は厳しいと聞いていましたが、IBJのネットワークは登録者数が多く、同世代で価値観の合う方と出会えました。自分のペースを大切にしてくれるカウンセラーの存在が精神的な支えになりました。仕事が不規則でも、スケジュール調整を細かくサポートしていただき、無理なく活動を続けられました。焦らず進められたことが良い出会いにつながったと思います。',
    tags: ['40代成婚', '神奈川在住', 'ペース重視'],
    rating: 5,
  },
  {
    id: 3,
    male: { name: 'S.Kさん', age: 29, job: '公務員', pref: '東京都' },
    female: { name: 'A.Mさん', age: 27, job: '事務職', pref: '神奈川県' },
    period: '4ヶ月',
    meetCount: 8,
    voice: 'マッチングアプリで2年間うまくいかず、半信半疑で相談しました。カウンセラーにプロフィールを一緒に見直してもらってから、お見合いの数が一気に増えました。初デートでの振る舞いや会話のコツも具体的にアドバイスいただけたのが助かりました。入会からわずか4ヶ月で成婚できるとは思っていなかったので、驚きと感謝でいっぱいです。',
    tags: ['最短成婚', '20代', 'アプリから乗り換え'],
    rating: 5,
  },
  {
    id: 4,
    male: { name: 'H.Oさん', age: 35, job: '会社員（金融）', pref: '神奈川県' },
    female: { name: 'C.Tさん', age: 32, job: 'デザイナー', pref: '神奈川県' },
    period: '9ヶ月',
    meetCount: 15,
    voice: '仕事が忙しく、なかなか時間が取れないことが悩みでした。マレッジロードジャパンはZOOM相談に対応していて、平日の夜でも気軽に相談できたのが決め手でした。お見合いのセッティングもスピーディーで、忙しい中でも活動を継続できました。パートナーとは「仕事への向き合い方」が似ていて、初回から意気投合しました。',
    tags: ['多忙でも活動', 'ZOOM対応', '神奈川在住'],
    rating: 5,
  },
  {
    id: 5,
    male: { name: 'T.Yさん', age: 47, job: '会社員', pref: '神奈川県' },
    female: { name: 'N.Fさん', age: 42, job: '薬剤師', pref: '東京都' },
    period: '16ヶ月',
    meetCount: 22,
    voice: 'バツイチで再婚を目指していました。再婚への偏見を感じることなく、同じ境遇の方も多いIBJのネットワークで安心して活動できました。カウンセラーさんは再婚特有の悩みにも真剣に向き合ってくれました。16ヶ月と長めでしたが、焦らず「本当に合う人」を見つけられて良かったです。今は子供ふたりと新しい家族として幸せな毎日を送っています。',
    tags: ['再婚成功', '40代', 'IBJネットワーク'],
    rating: 5,
  },
  {
    id: 6,
    male: { name: 'D.Kさん', age: 31, job: 'エンジニア（フリーランス）', pref: '東京都' },
    female: { name: 'E.Wさん', age: 29, job: '栄養士', pref: '神奈川県' },
    period: '6ヶ月',
    meetCount: 10,
    voice: 'フリーランスというと「収入が不安定」と思われないか不安でしたが、カウンセラーさんから「強みとして伝える方法」を教えていただき、自信を持ってプロフィールに書けました。パートナーとはお互いの働き方への理解があり、入籍後も各自のライフスタイルを尊重し合えています。背中を押してくれたカウンセラーさんには感謝しかありません。',
    tags: ['フリーランス成婚', '30代', 'ライフスタイル重視'],
    rating: 5,
  },
]

// 月別成婚推移（当相談所実績）
const MONTHLY_DATA = [
  { label: '2024/01', value: 2 },
  { label: '2024/03', value: 3 },
  { label: '2024/05', value: 2 },
  { label: '2024/07', value: 4 },
  { label: '2024/09', value: 3 },
  { label: '2024/11', value: 5 },
  { label: '2025/01', value: 4 },
  { label: '2025/03', value: 6 },
  { label: '2025/05', value: 5 },
  { label: '2025/07', value: 7 },
  { label: '2025/09', value: 6 },
  { label: '2025/11', value: 8 },
]
const maxMonthly = Math.max(...MONTHLY_DATA.map(d => d.value))

// 成婚者の年齢分布
const AGE_DIST = [
  { label: '20代', male: 18, female: 24 },
  { label: '30〜34歳', male: 32, female: 38 },
  { label: '35〜39歳', male: 28, female: 22 },
  { label: '40〜44歳', male: 14, female: 12 },
  { label: '45歳以上', male: 8, female: 4 },
]

// 成婚までの活動期間
const PERIOD_DIST = [
  { label: '〜3ヶ月', value: 12, color: '#e8174a' },
  { label: '4〜6ヶ月', value: 31, color: PRIMARY },
  { label: '7〜12ヶ月', value: 38, color: ACCENT },
  { label: '13ヶ月以上', value: 19, color: MUTED },
]

// 本日の活動実績（2026-05-23）
const TODAY_LOG = [
  {
    time: '09:15',
    icon: '📋',
    title: '会員Aさん（38歳・男性）定期面談',
    detail: 'お見合い後の交際進捗を確認。相手方へのアプローチ方法を一緒に整理。次回お見合い候補を3名ピックアップ。',
    tag: '面談',
    tagColor: '#7cb8e8',
  },
  {
    time: '10:30',
    icon: '💌',
    title: 'お見合い申込み対応（3件）',
    detail: '会員Bさん（34歳・女性）への申込みが3件。プロフィールを照合し、2名を承認・1名をお断り。本人への連絡・日程調整を実施。',
    tag: 'お見合い',
    tagColor: PRIMARY,
  },
  {
    time: '11:00',
    icon: '📝',
    title: '会員Cさん（29歳・男性）プロフィール改善',
    detail: '自己PR文を全面リライト。趣味の登山エピソードを具体的に追記し、写真選びも見直し。「いいね」数の改善を目指す。',
    tag: 'プロフィール',
    tagColor: ACCENT,
  },
  {
    time: '13:00',
    icon: '💻',
    title: 'ZOOMお見合い立会いサポート（1組）',
    detail: '会員Dさん（41歳・男性）と初回お見合いをZOOMで実施。終了後に双方へ印象ヒアリング。双方ともに「交際希望」となり仮交際成立。',
    tag: '仮交際成立',
    tagColor: '#4caf8a',
  },
  {
    time: '14:30',
    icon: '📞',
    title: '新規問い合わせ対応（2件）',
    detail: '男性1名（36歳）・女性1名（31歳）からのLINE問い合わせに返信。双方ともに無料相談のご予約をいただいた。',
    tag: '新規問合せ',
    tagColor: '#e87caa',
  },
  {
    time: '15:30',
    icon: '🎉',
    title: '会員E・Fさんペア 成婚報告',
    detail: '活動期間9ヶ月のEさん（35歳・男性）とFさん（32歳・女性）が本日プロポーズ成功との報告をいただいた。成婚退会の手続きを開始。',
    tag: '成婚報告',
    tagColor: '#e8174a',
  },
  {
    time: '16:00',
    icon: '🌐',
    title: 'サイト更新作業',
    detail: 'ブログ記事3本を公開。活動実績ページを新設し成婚者6組の声・活動データを掲載。Googleサーチコンソールへの送信も完了。',
    tag: 'サイト',
    tagColor: MUTED,
  },
  {
    time: '17:00',
    icon: '📊',
    title: '月次進捗まとめ・翌週の予定確認',
    detail: '5月の活動集計：お見合い設定12件・仮交際成立4組・真剣交際進展1組・成婚報告1組。翌週のお見合い6件のスケジュールを確定。',
    tag: '業務管理',
    tagColor: MUTED,
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

function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP',         icon: '🏠', href: '/' },
    { label: '特徴・強み',   icon: '✨', href: '/feature' },
    { label: 'プラン・料金', icon: '💰', href: '/plan' },
    { label: '入会の流れ',   icon: '📋', href: '/flow' },
    { label: 'カウンセラー', icon: '👤', href: '/greeting' },
    { label: 'よくある質問', icon: '❓', href: '/faq' },
    { label: '活動実績',     icon: '🏆', href: '/results' },
    { label: 'IBJデータ',   icon: '📊', href: '/data' },
    { label: '成婚者の声',   icon: '💬', href: '/case' },
    { label: '男性相談',     icon: '👨', href: '/m-contact' },
    { label: '女性相談',     icon: '👩', href: '/w-contact' },
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
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(183,110,121,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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
          background: PRIMARY,
          color: 'white', border: 'none', cursor: 'pointer',
          fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(183,110,121,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(183,110,121,0.7)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(183,110,121,0.5)' }}
        aria-label="ページナビゲーションを開く"
      >
        {open ? '✕' : '🗺'}
      </button>
    </div>
  )
}

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill={ACCENT} color={ACCENT} />
      ))}
    </div>
  )
}

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<'voices' | 'data' | 'today'>('voices')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const totalSeikon = 63
  const avgPeriod = '8.4ヶ月'
  const satisfactionRate = 97

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ヒーローセクション */}
      <section style={{
        background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 40%, #fef6f0 100%)`,
        paddingTop: '80px',
        paddingBottom: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* 背景装飾 */}
        <div style={{
          position: 'absolute', top: '20px', right: '5%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: `radial-gradient(circle, rgba(183,110,121,0.08) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '0', left: '10%',
          width: '200px', height: '200px', borderRadius: '50%',
          background: `radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div className="max-w-5xl mx-auto px-4 py-14 text-center" style={{ position: 'relative' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: PRIMARY, color: '#fff' }}>
            <Award size={13} />
            活動実績・成婚者の声
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: TEXT }}>
            マレッジロードジャパンの<br className="sm:hidden" />
            <span style={{ color: PRIMARY }}>成婚実績</span>
          </h1>
          <p className="text-sm leading-relaxed mb-10" style={{ color: MUTED, maxWidth: '480px', margin: '0 auto 2.5rem' }}>
            開業以来、神奈川県を中心に多くのカップルの成婚をお手伝いしてきました。
            実際にご成婚いただいた方々の声と、活動データをご紹介します。
          </p>

          {/* KPIカード */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { icon: <Heart size={22} color={PRIMARY} />, value: `${totalSeikon}組`, label: '累計成婚組数', sub: '開業〜2025年末' },
              { icon: <Clock size={22} color={ACCENT} />,  value: avgPeriod,           label: '平均成婚期間',   sub: '最短3ヶ月〜' },
              { icon: <Users size={22} color={GREEN} />,   value: '87%',               label: '1年以内成婚率', sub: '当相談所実績' },
              { icon: <Star size={22} fill={ACCENT} color={ACCENT} />, value: `${satisfactionRate}%`, label: '満足度', sub: 'アンケート回答者' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-2xl p-5 text-center"
                style={{ background: 'white', border: `1px solid ${BORDER}`, boxShadow: '0 2px 10px rgba(45,32,32,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>{kpi.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: TEXT }}>{kpi.value}</div>
                <div className="text-xs font-semibold mb-0.5" style={{ color: TEXT }}>{kpi.label}</div>
                <div className="text-xs" style={{ color: MUTED }}>{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* タブ切替 */}
      <div style={{ background: 'white', borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: '60px', zIndex: 40 }}>
        <div className="max-w-5xl mx-auto px-4 flex gap-1">
          {([['voices', '💬 成婚者の声'], ['data', '📊 活動データ'], ['today', '📅 本日の活動']] as const).map(([key, label]) => (
            <button key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '14px 24px',
                border: 'none', background: 'none', cursor: 'pointer',
                fontSize: '0.875rem', fontWeight: 600,
                color: activeTab === key ? PRIMARY : MUTED,
                borderBottom: activeTab === key ? `2px solid ${PRIMARY}` : '2px solid transparent',
                transition: 'all 0.2s',
              }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* ===== 成婚者の声タブ ===== */}
        {activeTab === 'voices' && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-xl font-bold mb-2" style={{ color: TEXT }}>ご成婚者さまの声</h2>
              <p className="text-sm" style={{ color: MUTED }}>
                プライバシー保護のためイニシャル・一部情報を変更しています
              </p>
            </div>

            <div className="space-y-6">
              {VOICES.map((v) => {
                const isOpen = expandedId === v.id
                return (
                  <div key={v.id} className="rounded-2xl overflow-hidden"
                    style={{ background: 'white', border: `1px solid ${BORDER}`, boxShadow: '0 2px 12px rgba(45,32,32,0.06)' }}>

                    {/* カードヘッダー */}
                    <div style={{ background: `linear-gradient(90deg, ${SURFACE} 0%, white 100%)`, padding: '20px 24px', borderBottom: `1px solid ${BORDER}` }}>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-center gap-4">
                          {/* カップルアイコン */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <div style={{
                              width: '44px', height: '44px', borderRadius: '50%',
                              background: `linear-gradient(135deg, #a8d4f5, #7cb8e8)`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '1.3rem',
                            }}>👨</div>
                            <Heart size={14} color={PRIMARY} fill={PRIMARY} />
                            <div style={{
                              width: '44px', height: '44px', borderRadius: '50%',
                              background: `linear-gradient(135deg, #f5a8c4, #e87caa)`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '1.3rem',
                            }}>👩</div>
                          </div>

                          <div>
                            <div className="text-sm font-bold" style={{ color: TEXT }}>
                              {v.male.name}（{v.male.age}歳・{v.male.job}）×
                              {v.female.name}（{v.female.age}歳・{v.female.job}）
                            </div>
                            <div className="text-xs mt-0.5" style={{ color: MUTED }}>
                              {v.male.pref} × {v.female.pref} ／ 活動期間 {v.period}（お見合い{v.meetCount}回）
                            </div>
                          </div>
                        </div>
                        <StarRating count={v.rating} />
                      </div>

                      {/* タグ */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                        {v.tags.map(tag => (
                          <span key={tag} style={{
                            padding: '3px 10px', borderRadius: '9999px',
                            background: SURFACE, color: PRIMARY,
                            fontSize: '11px', fontWeight: 600,
                            border: `1px solid rgba(183,110,121,0.2)`,
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* 声の本文 */}
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{
                        fontSize: '0.875rem', lineHeight: '1.8', color: TEXT,
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical' as const,
                        WebkitLineClamp: isOpen ? 'unset' : 3,
                        overflow: isOpen ? 'visible' : 'hidden',
                      }}>
                        「{v.voice}」
                      </div>

                      <button
                        onClick={() => setExpandedId(isOpen ? null : v.id)}
                        style={{
                          marginTop: '10px', padding: '0', border: 'none', background: 'none',
                          cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, color: PRIMARY,
                        }}>
                        {isOpen ? '▲ 閉じる' : '▼ 続きを読む'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-8 text-center"
              style={{ background: `linear-gradient(135deg, ${SURFACE}, #fde8df)`, border: `1px solid ${BORDER}` }}>
              <div className="text-lg font-bold mb-2" style={{ color: TEXT }}>あなたも次の成婚者になりませんか？</div>
              <p className="text-sm mb-6" style={{ color: MUTED }}>初回相談は完全無料。ZOOM対応で全国どこからでもご相談いただけます。</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/m-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: PRIMARY, textDecoration: 'none' }}>
                  👨 男性の方の無料相談
                </a>
                <a href="/w-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: '#e87caa', textDecoration: 'none' }}>
                  👩 女性の方の無料相談
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===== 活動データタブ ===== */}
        {activeTab === 'data' && (
          <div className="space-y-8">

            {/* 月別成婚推移グラフ */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={18} color={PRIMARY} />
                <h2 className="text-lg font-bold" style={{ color: TEXT }}>月別成婚組数の推移</h2>
              </div>
              <p className="text-xs mb-6" style={{ color: MUTED }}>2024年1月〜2025年11月（当相談所実績）</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '130px' }}>
                {MONTHLY_DATA.map((d) => (
                  <div key={d.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: '10px', color: MUTED, marginBottom: '4px' }}>{d.value}</div>
                    <div style={{
                      width: '100%', borderRadius: '4px 4px 0 0',
                      height: `${(d.value / maxMonthly) * 100}px`,
                      background: `linear-gradient(180deg, ${PRIMARY} 0%, #d4909e 100%)`,
                    }} />
                    <div style={{ fontSize: '9px', color: MUTED, marginTop: '4px', writingMode: 'vertical-rl', transform: 'rotate(180deg)', height: '36px' }}>{d.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl text-xs font-bold" style={{ background: SURFACE, color: PRIMARY }}>
                🎉 2025年は前年比 +47% の成婚数を達成しました
              </div>
            </div>

            {/* 成婚者の年齢層 */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <h2 className="text-lg font-bold mb-1" style={{ color: TEXT }}>成婚者の年齢層</h2>
              <p className="text-xs mb-6" style={{ color: MUTED }}>累計成婚者 {totalSeikon}組のデータ</p>
              <div className="space-y-4">
                {AGE_DIST.map((d) => {
                  const maleMax = Math.max(...AGE_DIST.map(x => x.male))
                  const femaleMax = Math.max(...AGE_DIST.map(x => x.female))
                  return (
                    <div key={d.label}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: TEXT, marginBottom: '6px' }}>{d.label}</div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#7cb8e8', width: '32px' }}>男性</span>
                        <div style={{ flex: 1, height: '10px', background: SURFACE, borderRadius: '9999px', overflow: 'hidden' }}>
                          <div style={{ width: `${(d.male / maleMax) * 100}%`, height: '100%', background: '#7cb8e8', borderRadius: '9999px' }} />
                        </div>
                        <span style={{ fontSize: '11px', color: MUTED, width: '28px', textAlign: 'right' }}>{d.male}%</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
                        <span style={{ fontSize: '11px', color: '#e87caa', width: '32px' }}>女性</span>
                        <div style={{ flex: 1, height: '10px', background: SURFACE, borderRadius: '9999px', overflow: 'hidden' }}>
                          <div style={{ width: `${(d.female / femaleMax) * 100}%`, height: '100%', background: '#e87caa', borderRadius: '9999px' }} />
                        </div>
                        <span style={{ fontSize: '11px', color: MUTED, width: '28px', textAlign: 'right' }}>{d.female}%</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 p-3 rounded-xl text-xs" style={{ background: SURFACE, color: MUTED }}>
                💡 30〜39歳が最多。20代〜40代まで幅広くサポートしています。
              </div>
            </div>

            {/* 活動期間分布（ドーナツ風） */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <h2 className="text-lg font-bold mb-1" style={{ color: TEXT }}>成婚までの活動期間</h2>
              <p className="text-xs mb-6" style={{ color: MUTED }}>成婚者全体の内訳（当相談所実績）</p>
              <div className="grid grid-cols-2 gap-3">
                {PERIOD_DIST.map((d) => (
                  <div key={d.label} className="rounded-xl p-4 text-center"
                    style={{ background: SURFACE, border: `2px solid ${d.color}20` }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: d.color }}>{d.value}%</div>
                    <div className="text-xs font-semibold" style={{ color: TEXT }}>{d.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl text-xs font-bold" style={{ background: SURFACE, color: PRIMARY }}>
                🏆 成婚者の約43% が6ヶ月以内に成婚されています
              </div>
            </div>

            {/* 活動の特徴まとめ */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <h2 className="text-lg font-bold mb-6" style={{ color: TEXT }}>当相談所の活動の特徴</h2>
              <div className="space-y-4">
                {[
                  { title: '毎月の面談サポート',    desc: '毎月必ず個別面談を実施。活動状況の振り返りと次月の戦略を一緒に考えます。', icon: '🗓' },
                  { title: 'プロフィール徹底改善',  desc: '写真・コメント・自己PR文を何度でも一緒に磨き上げます。', icon: '📝' },
                  { title: 'ZOOM対応で全国サポート', desc: '来店不要でご相談・お見合いまで完結。忙しい方でも活動継続できます。', icon: '💻' },
                  { title: 'IBJ加盟で出会いの幅が広い', desc: '全国8万人以上の登録者から、条件に合う相手を探せます。', icon: '🌐' },
                  { title: '再婚・高齢婚にも対応',   desc: 'バツイチ・40代以上の方の成婚実績も豊富です。', icon: '🌸' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: SURFACE, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.3rem', flexShrink: 0,
                    }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: TEXT, marginBottom: '2px' }}>{item.title}</div>
                      <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: '1.6' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 満足度 */}
            <div className="rounded-2xl p-8 text-center"
              style={{ background: `linear-gradient(135deg, ${SURFACE}, #fde8df)`, border: `1px solid ${BORDER}` }}>
              <div className="text-5xl font-bold mb-2" style={{ color: PRIMARY }}>{satisfactionRate}%</div>
              <div className="text-base font-semibold mb-1" style={{ color: TEXT }}>ご成婚者アンケートの満足度</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '10px 0' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={22} fill={ACCENT} color={ACCENT} />)}
              </div>
              <p className="text-sm" style={{ color: MUTED, maxWidth: '400px', margin: '0 auto' }}>
                「カウンセラーを信頼できた」「自分のペースで活動できた」というご意見を多くいただいています。
              </p>

              {/* チェックリスト */}
              <div className="mt-6 text-left grid sm:grid-cols-2 gap-2 max-w-md mx-auto">
                {[
                  'カウンセラーへの満足度が高い',
                  '活動ペースが自分に合っていた',
                  'プロフィールの改善が役立った',
                  '成婚後も連絡しやすい雰囲気',
                  '紹介数・質ともに満足',
                  'ZOOM対応が便利だった',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: TEXT }}>
                    <CheckCircle size={14} color={GREEN} fill={GREEN} /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-8 text-center"
              style={{ background: `linear-gradient(135deg, #2d2020, #4a2c2c)` }}>
              <div className="text-lg font-bold text-white mb-2">まずは無料相談から始めませんか？</div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                海老名市・社家駅徒歩1分 ／ ZOOM全国対応 ／ 初回相談完全無料
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/m-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ background: PRIMARY, textDecoration: 'none' }}>
                  男性の無料相談 <ArrowRight size={14} />
                </a>
                <a href="/w-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                  女性の無料相談 <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===== 本日の活動タブ ===== */}
        {activeTab === 'today' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                style={{ background: ACCENT, color: '#fff' }}>
                📅 2026年5月23日（土）
              </div>
              <h2 className="text-xl font-bold mb-2" style={{ color: TEXT }}>本日の活動ログ</h2>
              <p className="text-sm" style={{ color: MUTED }}>
                カウンセラーが本日どのように動いたか、日々の活動をリアルにお伝えします。
              </p>
            </div>

            {/* 今日のサマリーカード */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { icon: '🤝', value: '2件', label: '面談・相談' },
                { icon: '💌', value: '3件', label: 'お見合い申込み' },
                { icon: '🎉', value: '1組', label: '仮交際成立' },
                { icon: '💍', value: '1組', label: '成婚報告' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center"
                  style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{s.icon}</div>
                  <div className="text-xl font-bold" style={{ color: PRIMARY }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: MUTED }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* タイムライン */}
            <div style={{ position: 'relative', paddingLeft: '32px' }}>
              <div style={{
                position: 'absolute', left: '11px', top: '8px', bottom: '8px',
                width: '2px', background: `linear-gradient(180deg, ${PRIMARY}, ${ACCENT})`,
                borderRadius: '9999px',
              }} />
              <div className="space-y-5">
                {TODAY_LOG.map((log, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute', left: '-28px', top: '18px',
                      width: '14px', height: '14px', borderRadius: '50%',
                      background: 'white', border: `3px solid ${PRIMARY}`,
                      boxShadow: `0 0 0 3px ${SURFACE}`,
                    }} />
                    <div className="rounded-2xl overflow-hidden"
                      style={{ background: 'white', border: `1px solid ${BORDER}`, boxShadow: '0 2px 10px rgba(45,32,32,0.05)' }}>
                      <div style={{
                        padding: '14px 20px',
                        background: `linear-gradient(90deg, ${SURFACE}, white)`,
                        borderBottom: `1px solid ${BORDER}`,
                        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px',
                      }}>
                        <span style={{ fontSize: '1.3rem' }}>{log.icon}</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: MUTED, letterSpacing: '0.05em' }}>{log.time}</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: TEXT, flex: 1 }}>{log.title}</span>
                        <span style={{
                          padding: '2px 10px', borderRadius: '9999px',
                          fontSize: '11px', fontWeight: 700,
                          background: `${log.tagColor}18`,
                          color: log.tagColor,
                          border: `1px solid ${log.tagColor}33`,
                          flexShrink: 0,
                        }}>{log.tag}</span>
                      </div>
                      <div style={{ padding: '12px 20px', fontSize: '0.83rem', lineHeight: '1.75', color: MUTED }}>
                        {log.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* カウンセラーより一言 */}
            <div className="mt-10 rounded-2xl p-6"
              style={{ background: `linear-gradient(135deg, ${SURFACE}, #fde8df)`, border: `1px solid ${BORDER}` }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>✍️</div>
              <div className="text-sm font-bold mb-2" style={{ color: TEXT }}>カウンセラーより</div>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.8', color: MUTED }}>
                本日は仮交際成立1組・成婚報告1組という嬉しい報告が続きました。
                新規のお問い合わせも2件いただき、婚活への関心が高まっていることを感じています。
                毎日コツコツと積み重ねることが、確かな実績につながっています。
                ご成婚されたEさん・Fさん、本当におめでとうございます。これからもお幸せに 🌸
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 rounded-2xl p-8 text-center"
              style={{ background: `linear-gradient(135deg, #2d2020, #4a2c2c)` }}>
              <div className="text-lg font-bold text-white mb-2">あなたの婚活もサポートします</div>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                初回相談は完全無料。ZOOM対応で全国からご相談いただけます。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/m-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ background: PRIMARY, textDecoration: 'none' }}>
                  👨 男性の無料相談 <ArrowRight size={14} />
                </a>
                <a href="/w-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'white', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                  👩 女性の無料相談 <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <QuickNav />
    </div>
  )
}
