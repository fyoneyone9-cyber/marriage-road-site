'use client'
import Footer from '@/components/Footer'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const SECTIONS = [
  {
    title: 'サービス案内',
    icon: '💒',
    links: [
      { label: 'トップページ', href: '/', desc: 'マレッジロードジャパン トップ' },
      { label: '特徴・強み', href: '/feature', desc: '選ばれる3つの理由' },
      { label: 'プラン・料金', href: '/plan', desc: 'ライト・スタンダード・プレミアム' },
      { label: 'ご入会の流れ', href: '/flow', desc: '相談から成婚までのステップ' },
      { label: 'カウンセラー紹介', href: '/greeting', desc: '担当カウンセラーについて' },
      { label: 'よくある質問', href: '/faq', desc: 'FAQ・よくあるご質問' },
      { label: '実績データ', href: '/data', desc: '成婚実績・統計データ' },
      { label: '成婚者インタビュー', href: '/interview', desc: 'ご成婚者の体験談' },
      { label: '成婚事例', href: '/case', desc: '実際の成婚事例紹介' },
      { label: 'アクセス', href: '/access', desc: '所在地・アクセス方法' },
    ],
  },
  {
    title: '婚活情報・コラム',
    icon: '📚',
    links: [
      { label: 'IBJについて', href: '/ibj', desc: '日本結婚相談所連盟とは' },
      { label: 'IBJ正規加盟店認定証', href: '/16763909961240', desc: '登録番号No.01226' },
      { label: 'マッチングアプリとの違い', href: '/16770013730359', desc: '結婚相談所とアプリの比較' },
      { label: 'AIマッチング機能', href: '/16765078654055', desc: 'IBJSのAIマッチングについて' },
      { label: 'お見合い検索システム', href: '/16764708414344', desc: 'IBJSシステムの使い方' },
      { label: 'なぜ今、利用者が増えているか', href: '/16774296731302', desc: '結婚相談所が選ばれる理由' },
      { label: 'なぜWeb面接が必要なのか', href: '/16774301352630', desc: 'オンライン面談の重要性' },
      { label: '独身証明書とは？', href: '/16774362542623', desc: '独身証明書の取得方法' },
      { label: '婚活へのこだわり', href: '/16767377701305', desc: '当社の婚活サポート方針' },
      { label: 'オンライン契約の流れ', href: '/16767435923382', desc: 'Web完結での入会手続き' },
    ],
  },
  {
    title: 'データ・実績',
    icon: '📊',
    links: [
      { label: '男性会員データ', href: '/16770016031373', desc: '男性会員の年齢・職業分布' },
      { label: '女性会員データ', href: '/16770016529040', desc: '女性会員の年齢・職業分布' },
      { label: 'ご成婚白書2025', href: '/16770442332695', desc: '2025年の成婚統計レポート' },
      { label: '活動実績2024年', href: '/16770811329988', desc: '2024年の活動・成婚実績' },
      { label: 'ご成婚の定義', href: '/16771848793719', desc: 'IBJにおける成婚の定義' },
      { label: '成婚後のフォロー', href: '/16771361261377', desc: '成婚後のアフターサポート' },
      { label: 'SDGsへの取り組み', href: '/16776585117840', desc: '社会課題への取り組み' },
    ],
  },
  {
    title: 'イベント・特別サービス',
    icon: '🎉',
    links: [
      { label: '婚活パーティー情報', href: '/16772438559724', desc: 'IBJ主催パーティーのご案内' },
      { label: '専属占い師紹介サービス', href: '/17250964253681', desc: '婚活をサポートする占いサービス' },
      { label: '公式SNS', href: '/16764595712727', desc: 'Instagram・X・YouTubeなど' },
    ],
  },
  {
    title: 'お問い合わせ',
    icon: '📩',
    links: [
      { label: '男性 無料相談フォーム', href: '/m-contact', desc: '男性の方はこちらから' },
      { label: '女性 無料相談フォーム', href: '/w-contact', desc: '女性の方はこちらから' },
      { label: 'お問い合わせ（一般）', href: '/16760950606960', desc: 'ご質問・その他のお問い合わせ' },
    ],
  },
  {
    title: '法的情報',
    icon: '📋',
    links: [
      { label: 'プライバシーポリシー', href: '/privacy', desc: '個人情報の取り扱いについて' },
      { label: '利用規約', href: '/terms', desc: 'サービス利用規約' },
      { label: '特定商取引法に基づく表記', href: '/tokusho', desc: '事業者情報・特商法表記' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif", minHeight: '100vh' }}>

      {/* ヘッダー */}
      <header style={{ background: 'rgba(250,247,245,0.97)', borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
            マレッジロードジャパン
          </a>
          <a href="/" style={{ fontSize: '0.8rem', color: MUTED, textDecoration: 'none' }}>← トップに戻る</a>
        </div>
      </header>

      {/* ヒーロー */}
      <section style={{ background: `linear-gradient(160deg, #fde8df 0%, #faf7f5 100%)`, padding: '48px 16px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY, marginBottom: '8px' }}>Sitemap</p>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>サイトマップ</h1>
        <p style={{ fontSize: '0.875rem', color: MUTED }}>マレッジロードジャパン 全ページ一覧</p>
      </section>

      {/* コンテンツ */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gap: '32px' }}>
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', paddingBottom: '8px', borderBottom: `2px solid ${BORDER}` }}>
                <span style={{ fontSize: '1.25rem' }}>{section.icon}</span>
                <h2 style={{ fontSize: '1rem', fontWeight: 700, color: TEXT, margin: 0 }}>{section.title}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px' }}>
                {section.links.map(({ label, href, desc }) => (
                  <a
                    key={href}
                    href={href}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '12px 16px',
                      background: 'white',
                      border: `1px solid ${BORDER}`,
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = PRIMARY
                      ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 2px 8px rgba(183,110,121,0.15)`
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = BORDER
                      ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
                    }}
                  >
                    <span style={{ color: ACCENT, flexShrink: 0, marginTop: '2px', fontSize: '0.75rem' }}>▶</span>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: PRIMARY, marginBottom: '2px' }}>{label}</div>
                      <div style={{ fontSize: '0.75rem', color: MUTED }}>{desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '48px',
          background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`,
          borderRadius: '1rem',
          padding: '32px',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '20px' }}>ZOOM・LINE・電話でお気軽にご相談ください。</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              style={{ background: PRIMARY, color: 'white', textDecoration: 'none', padding: '10px 24px', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem' }}>
              📅 ZOOM無料相談を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              style={{ background: '#06C755', color: 'white', textDecoration: 'none', padding: '10px 24px', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem' }}>
              💬 LINEで相談する
            </a>
          </div>
        </div>
      </div>

      {/* フッター */}
      <Footer />
    </div>
  )
}
