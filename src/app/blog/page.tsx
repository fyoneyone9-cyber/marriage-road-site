'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X, BookOpen, Tag } from 'lucide-react'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const ARTICLES = [
  { slug: 'konkatsu-hajimekata', title: '婚活の始め方【2026年版】結婚相談所・アプリ・街コン完全比較', category: '入門' },
  { slug: 'soudan-jo-merit', title: '結婚相談所のメリット・デメリット正直に教えます', category: '結婚相談所' },
  { slug: 'marriage-age', title: '婚活に適した年齢は？30代・40代からでも遅くない理由', category: '婚活知識' },
  { slug: 'konkatsu-app-vs-soudan', title: '婚活アプリ vs 結婚相談所 どっちがいい？本音比較', category: '比較' },
  { slug: 'marriage-profile', title: '婚活プロフィールの書き方【写真・自己PR・条件設定】', category: 'プロフィール' },
  { slug: 'first-date', title: '婚活の初デートで気をつけること10選', category: 'デート' },
  { slug: 'konkatsu-budget', title: '婚活にかかる費用の相場【結婚相談所・アプリ・街コン別】', category: 'お金' },
  { slug: 'soudan-jo-erabi', title: '結婚相談所の選び方【失敗しない5つのポイント】', category: '結婚相談所' },
  { slug: 'marriage-road-review', title: 'マリッジロードジャパンの特徴【神奈川・海老名】', category: '当社情報' },
  { slug: 'konkatsu-otoko', title: '婚活男性が知っておくべきこと【女性が見るポイント】', category: '男性向け' },
  { slug: 'konkatsu-joshi', title: '婚活女性が知っておくべきこと【男性が見るポイント】', category: '女性向け' },
  { slug: '30dai-konkatsu', title: '30代からの婚活【成功する人の特徴と具体的な方法】', category: '年代別' },
  { slug: '40dai-konkatsu', title: '40代婚活のリアル【成功事例と気をつけること】', category: '年代別' },
  { slug: 'ai-konkatsu', title: 'AI婚活の時代？最新テクノロジーが婚活を変える', category: 'トレンド' },
  { slug: 'kekkon-jyoken', title: '婚活の条件の決め方【妥協すべき点・してはいけない点】', category: '婚活知識' },
  { slug: 'yokohama-konkatsu', title: '神奈川・横浜の婚活事情【地元で見つける出会い】', category: '地域情報' },
  { slug: 'ebina-konkatsu', title: '海老名・厚木エリアの婚活【マリッジロードジャパンのエリア】', category: '地域情報' },
  { slug: 'online-konkatsu', title: 'オンライン婚活の始め方【ビデオ面談・オンライン街コン】', category: '入門' },
  { slug: 'konkatsu-photo', title: '婚活写真の撮り方【プロフィール写真で差をつける方法】', category: 'プロフィール' },
  { slug: 'marriage-timing', title: '結婚のタイミングはいつ？交際から成婚までの期間', category: '婚活知識' },
  { slug: 'konkatsu-tired', title: '婚活疲れを感じたら？モチベーションの保ち方', category: 'メンタル' },
  { slug: 'first-meeting', title: 'お見合い・初回面談の準備と当日の流れ', category: 'デート' },
  { slug: 'konkatsu-talk', title: '婚活での会話術【話題・NG発言・盛り上がる話】', category: 'コミュニケーション' },
  { slug: 'appearance', title: '婚活の身だしなみ【男女別チェックリスト】', category: '身だしなみ' },
  { slug: 'soudan-jo-cost', title: '結婚相談所の料金体系を徹底解説【入会金・月会費・成婚料】', category: 'お金' },
  { slug: 'matching-pitfall', title: '婚活アプリの落とし穴と注意点【業者・既婚者対策】', category: '婚活知識' },
  { slug: 'konkatsu-success', title: '婚活成功者の共通点【うまくいく人の特徴】', category: '成功法則' },
  { slug: 'rejection', title: '婚活でお断りされたときの立ち直り方', category: 'メンタル' },
  { slug: 'ideal-type', title: '理想の相手像の設定方法【現実的な条件の絞り方】', category: '婚活知識' },
  { slug: 'second-date', title: '婚活の2回目デートに繋げるコツ', category: 'デート' },
  { slug: 'confession-timing', title: '婚活での告白のタイミングと方法', category: '交際' },
  { slug: 'meet-parents', title: '婚活から結婚へ【親への挨拶・プロポーズの準備】', category: '成婚' },
  { slug: 'marriage-after-50', title: '50代からの婚活は可能？成功のための戦略', category: '年代別' },
  { slug: 'divorced-konkatsu', title: '離婚経験者の婚活【バツイチで成功する方法】', category: '再婚' },
  { slug: 'child-custody', title: '子連れ婚活の進め方と注意点', category: '再婚' },
  { slug: 'konkatsu-kakin', title: '婚活にかける時間の目安【いつまでに成婚を目指すか】', category: '婚活知識' },
  { slug: 'marriage-counselor', title: '良い婚活カウンセラーの見つけ方【相性が大切な理由】', category: '結婚相談所' },
  { slug: 'psychology-konkatsu', title: '婚活に心理学を活かす【初対面で好印象を与えるコツ】', category: 'コミュニケーション' },
  { slug: 'self-analysis', title: '婚活前にやるべき自己分析【自分の強みを知る方法】', category: '入門' },
  { slug: 'marriage-money', title: '結婚後のお金の話【共働き・家計管理の基本】', category: 'お金' },
  { slug: 'long-distance', title: '遠距離恋愛からの婚活【距離を超えた出会い】', category: '婚活知識' },
  { slug: 'introvert-konkatsu', title: '内向的な人の婚活術【自分らしさを活かす方法】', category: '個性別' },
  { slug: 'working-woman', title: '仕事が忙しい女性の婚活【時間を有効に使う方法】', category: '女性向け' },
  { slug: 'career-man', title: 'キャリア男性の婚活【仕事と婚活の両立方法】', category: '男性向け' },
  { slug: 'konkatsu-sns', title: '婚活にSNSを活用する方法【Instagram・X（Twitter）】', category: 'トレンド' },
  { slug: 'matching-coffee', title: '婚活コーヒーマッチングとは？新しい出会いの形', category: 'トレンド' },
  { slug: 'communication', title: '婚活で使えるコミュニケーション術【聞き上手になる方法】', category: 'コミュニケーション' },
  { slug: 'marriage-value', title: '結婚に何を求めるか？パートナーへの期待値の整理', category: '婚活知識' },
  { slug: 'konkatsu-mindset', title: '婚活を成功に導くマインドセット【諦めない心の作り方】', category: 'メンタル' },
  { slug: 'marriage-road-story', title: 'マリッジロードジャパン成婚者の声【成功事例紹介】', category: '成婚' },
  { slug: 'jisseki-report', title: 'マリッジロードジャパン 活動実績レポート【IBJ加盟】', category: '当社情報' },
  { slug: 'interview-yoneyama', title: '代表・米山文貴インタビュー【AIと婚活を語る】', category: '当社情報' },
]

const CATEGORIES = ['すべて', ...Array.from(new Set(ARTICLES.map(a => a.category)))]

const CATEGORY_COLORS: Record<string, string> = {
  '入門': '#e8d5f0', '結婚相談所': '#ffd6d6', '比較': '#d6eaff',
  '婚活知識': '#d6f5e8', 'プロフィール': '#fff3d6', 'デート': '#fde8f0',
  'お金': '#e8f0d6', '地域情報': '#d6f0ff', 'トレンド': '#f0d6ff',
  'コミュニケーション': '#d6ffe8', '年代別': '#ffd6e8', 'メンタル': '#e8d6ff',
  '男性向け': '#d6e8ff', '女性向け': '#ffd6f0', '再婚': '#f5d6d6',
  '交際': '#d6ffd6', '成婚': '#fff0d6', '個性別': '#d6ffff',
  '当社情報': '#ffd6d6', '成功法則': '#d6ffed', '身だしなみ': '#f0e8d6',
}

function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP',       icon: '🏠', href: '/' },
    { label: '特徴・強み', icon: '✨', href: '/feature' },
    { label: 'プラン',     icon: '💰', href: '/plan' },
    { label: '入会の流れ', icon: '📋', href: '/flow' },
    { label: 'ブログ',     icon: '📝', href: '/blog' },
    { label: '実績',       icon: '📊', href: '/data' },
    { label: 'FAQ',        icon: '❓', href: '/faq' },
    { label: '男性相談',   icon: '👨', href: '/m-contact' },
    { label: '女性相談',   icon: '👩', href: '/w-contact' },
  ]
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50 }}>
      {open && (
        <div style={{ position: 'absolute', bottom: 64, right: 0, background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 16, width: 200, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 4px', color: TEXT, textDecoration: 'none', fontSize: 14, borderBottom: `1px solid ${BORDER}` }}>
              <span>{l.icon}</span>{l.label}
            </Link>
          ))}
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        style={{ width: 56, height: 56, borderRadius: '50%', background: PRIMARY, color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(183,110,121,0.4)' }}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('すべて')
  const filtered = activeCategory === 'すべて' ? ARTICLES : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <header style={{ background: PRIMARY, color: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: 14, opacity: 0.9 }}>← TOP</Link>
        <span style={{ fontWeight: 700, fontSize: 16 }}>マリッジロードジャパン</span>
        <Link href="/m-contact" style={{ background: '#fff', color: PRIMARY, borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>無料相談</Link>
      </header>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 16px' }}>
        {/* ページタイトル */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: SURFACE, borderRadius: 24, padding: '6px 16px', marginBottom: 12 }}>
            <BookOpen size={16} color={PRIMARY} />
            <span style={{ fontSize: 13, color: PRIMARY, fontWeight: 600 }}>婚活コラム</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: TEXT, margin: '0 0 8px' }}>婚活ブログ</h1>
          <p style={{ color: MUTED, fontSize: 15 }}>婚活のリアルな情報を、マリッジロードジャパンがお届けします</p>
        </div>

        {/* カテゴリフィルター */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32, justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: 'none',
                background: activeCategory === cat ? PRIMARY : SURFACE,
                color: activeCategory === cat ? '#fff' : MUTED,
                transition: 'all 0.2s',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* 記事グリッド */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {filtered.map(article => (
            <Link key={article.slug} href={`/blog/${article.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                background: '#fff', borderRadius: 16, padding: 20,
                border: `1px solid ${BORDER}`, transition: 'all 0.2s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 24px rgba(183,110,121,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <Tag size={12} color={MUTED} />
                  <span style={{
                    fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10,
                    background: CATEGORY_COLORS[article.category] || SURFACE, color: TEXT,
                  }}>{article.category}</span>
                </div>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: TEXT, margin: '0 0 12px', lineHeight: 1.6 }}>{article.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: PRIMARY, fontSize: 13, fontWeight: 600 }}>
                  <span>続きを読む</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: MUTED, marginTop: 16, fontSize: 13 }}>{filtered.length}件の記事</p>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, borderRadius: 20, padding: 32, textAlign: 'center', marginTop: 48, color: '#fff' }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 8px' }}>無料相談、受付中です</h3>
          <p style={{ opacity: 0.9, margin: '0 0 20px', fontSize: 15 }}>記事を読んで気になったこと、何でも聞いてください</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/m-contact" style={{ background: '#fff', color: PRIMARY, padding: '12px 28px', borderRadius: 24, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>👨 男性の方はこちら</Link>
            <Link href="/w-contact" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '12px 28px', borderRadius: 24, fontWeight: 700, textDecoration: 'none', fontSize: 15, border: '2px solid rgba(255,255,255,0.6)' }}>👩 女性の方はこちら</Link>
          </div>
        </div>
      </div>

      <QuickNav />
    </div>
  )
}
