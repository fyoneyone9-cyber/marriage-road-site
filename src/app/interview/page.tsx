import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '成婚者インタビュー|マレッジロードジャパン',
  description: 'マレッジロードジャパンで成婚されたカップルのインタビュー。婚活体験談と成婚までの道のりをご紹介。',
  alternates: { canonical: 'https://marriage-road.jp/interview' },
  openGraph: {
    title: '成婚者インタビュー|マレッジロードジャパン',
    description: 'マレッジロードジャパンで成婚されたカップルのインタビュー。婚活体験談と成婚までの道のりをご紹介。',
    url: 'https://marriage-road.jp/interview',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚者インタビュー|マレッジロードジャパン',
    description: 'マレッジロードジャパンで成婚されたカップルのインタビュー。婚活体験談と成婚までの道のりをご紹介。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

﻿'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ArrowRight, Heart } from 'lucide-react'
import Footer from '@/components/Footer'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const QA = [
  {
    q: '結婚相談所を開業しようと思ったきっかけは何ですか？',
    a: '身近な友人が婚活で苦労しているのを見ていたんです。マッチングアプリで出会っても、真剣度がバラバラで疲弊していく姿を何人も見てきました。「ちゃんと結婚を考えている人だけが集まる場所があれば」と思ったのが最初のきっかけです。',
  },
  {
    q: 'なぜIBJ（日本結婚相談所連盟）に加盟したんですか？',
    a: '規模と信頼性です。82,000人以上の会員がいて、全員が入会審査済み。サンマリエやツヴァイと同じプラットフォームを使えるというのは、個人の相談所としては大きな強みです。お客様に「本物の出会い」を提供したいなら、ここしかないと思いました。',
  },
  {
    q: '神奈川・海老名という場所を選んだ理由は？',
    a: '地元だからですね（笑）。でも実は、海老名・厚木・大和エリアって意外と結婚相談所が少ないんですよ。東京や横浜に出るほどでもないけど、地元でちゃんと相談できる場所が欲しいという方が多い。だからこそ需要があると思いました。',
  },
  {
    q: 'オンライン対応にこだわっているのはなぜですか？',
    a: '婚活って、忙しい人ほど必要としていると思うんです。仕事が終わって夜にZOOMで30分相談できる、それだけで全然違う。交通費も時間もかからない。オンラインで全国対応にしたことで、遠方の方からもご相談いただけるようになりました。',
  },
  {
    q: '実際に成婚された方を見てどう感じましたか？',
    a: '正直、毎回ジーンとします。最初にご相談いただいたときの不安そうな顔と、成婚報告のときの表情がまったく違うんです。「あの一歩を踏み出してよかった」と言ってもらえる瞬間が、この仕事を続ける一番の理由ですね。',
  },
  {
    q: '婚活で一番大事なことって何だと思いますか？',
    a: '「自分を知ること」だと思います。どんな相手を求めているかより、自分がどんな人間で、何を大切にしているかを整理することが先。それができると、プロフィールも変わるし、お見合いでの話し方も変わる。自然と相手に伝わるものが変わってくるんです。',
  },
  {
    q: 'マッチングアプリと何が違うのか、正直に教えてください。',
    a: '一言で言うと「覚悟の違い」です。相談所に登録する人は、お金と時間をかけて来ている。それだけで、真剣度がまるで違う。アプリは気軽に始められる分、気軽にやめられる。相談所は、ちゃんと結婚したい人だけが集まる場所です。',
  },
  {
    q: '開業して一番しんどかったことは？',
    a: '最初のお客様を迎えるまでの期間ですね（笑）。「本当に来てくれるのか」という不安は正直ありました。でも一人目のお客様が「ここに相談してよかった」と言ってくださって、それで吹っ切れました。今は一人ひとりに全力で向き合うだけだと思っています。',
  },
  {
    q: 'どんな人に来てほしいですか？',
    a: '「そろそろ本気で考えないといけないけど、どこから始めればいいかわからない」という方に来てほしいですね。完璧に準備できていなくていい。まず話を聞きに来てください。一緒に考えます。',
  },
  {
    q: 'これから婚活を始める人へ一言。',
    a: '「始めるのに遅すぎることはない」。これだけです。迷っている時間が一番もったいない。最初の無料相談は完全にノーリスク。気が向いたらいつでも来てください。お待ちしています。',
  },
]


function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP',         icon: '🏠', href: '/' },
    { label: '特徴・強み',   icon: '✨', href: '/feature' },
    { label: 'プラン・料金', icon: '💰', href: '/plan' },
    { label: '入会の流れ',   icon: '📋', href: '/flow' },
    { label: 'カウンセラー', icon: '👤', href: '/greeting' },
    { label: 'よくある質問', icon: '❓', href: '/faq' },
    { label: '実績データ',   icon: '📊', href: '/data' },
    { label: '商工会議所',   icon: '🏛️', href: '/chamber' },
    { label: '男性相談',     icon: '👨', href: '/m-contact' },
    { label: '女性相談',     icon: '👩', href: '/w-contact' },
  ]
  return (
    <div style={{
      position: 'fixed', bottom: '20px', right: '12px', zIndex: 9999,
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
          background: '#b76e79',
          color: 'white', border: 'none', cursor: 'pointer',
          fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(183,110,121,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        title="ページナビ"
        aria-label="ページナビゲーションを開く"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  )
}

export default function InterviewPage() {
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
            <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>マレッジロードジャパン</div>
            <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm" style={{ color: MUTED }}>
            <a href="/feature" className="hover:opacity-70 transition-opacity">特徴・強み</a>
            <a href="/plan" className="hover:opacity-70 transition-opacity">プラン</a>
            <a href="/flow" className="hover:opacity-70 transition-opacity">ご入会の流れ</a>
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
            {[
              ['特徴・強み', '/feature'], ['プラン', '/plan'], ['ご入会の流れ', '/flow'],
              ['カウンセラー紹介', '/greeting'], ['対談', '/interview'], ['よくある質問', '/faq'],
              ['実績データ', '/data'], ['お問い合わせ', '/m-contact'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm" style={{ color: MUTED }}>{label}</a>
            ))}
            <a href="/m-contact" onClick={() => setMenuOpen(false)}
              className="block text-center py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: PRIMARY }}>
              無料相談を予約する →
            </a>
          </div>
        )}
      </header>

      {/* ヒーロー */}
      <section className="pt-32 pb-12 px-4" style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, ${BASE} 100%)` }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{ background: `${PRIMARY}18`, color: PRIMARY, border: `1px solid ${PRIMARY}30` }}>
            <Heart size={12} /> カウンセラーインタビュー
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4" style={{ color: TEXT }}>
            なぜ私は<br />結婚相談所を始めたのか
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            マレッジロードジャパン代表カウンセラーへの10の質問。<br />
            開業のきっかけから、婚活への想い、成婚者との出会いまで——本音でお答えします。
          </p>
        </div>
      </section>

      {/* 対談本文 */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {QA.map((item, i) => (
            <div key={i}>
              {/* 質問 */}
              <div className="flex gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: MUTED }}>
                  Q
                </div>
                <div className="flex-1 rounded-xl rounded-tl-none px-4 py-3 text-sm font-medium leading-relaxed"
                  style={{ background: '#f0e8e4', color: TEXT }}>
                  {item.q}
                </div>
              </div>
              {/* 回答 */}
              <div className="flex gap-3 justify-end">
                <div className="flex-1 rounded-xl rounded-tr-none px-4 py-3 text-sm leading-relaxed"
                  style={{ background: SURFACE, color: TEXT, border: `1px solid ${BORDER}` }}>
                  {item.a}
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: PRIMARY }}>
                  A
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vol.2 導線 */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <a href="/interview-vol2" className="flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all hover:opacity-90"
            style={{ background: SURFACE, border: `1px solid ${PRIMARY}30` }}>
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>続編が公開されました</p>
              <p className="font-medium" style={{ color: TEXT }}>
                Vol.2「カウンセラーが語る本当の婚活」を読む →
              </p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>婚活疲れ・地域密着の強み・成婚する人の共通点</p>
            </div>
            <Heart size={20} style={{ color: PRIMARY, flexShrink: 0 }} />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center rounded-2xl p-10"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <Heart size={28} className="mx-auto mb-4" style={{ color: PRIMARY }} />
          <h2 className="text-xl font-bold mb-3" style={{ color: TEXT }}>まずは無料相談から</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
            話を聞くだけでも大丈夫です。<br />
            一歩踏み出すきっかけを、一緒に見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/m-contact"
              className="px-6 py-3 rounded-full text-sm font-semibold text-white text-center hover:opacity-90 transition-opacity"
              style={{ background: PRIMARY }}>
              男性の方はこちら →
            </a>
            <a href="/w-contact"
              className="px-6 py-3 rounded-full text-sm font-semibold text-center hover:opacity-80 transition-opacity"
              style={{ background: BASE, border: `1.5px solid ${PRIMARY}`, color: PRIMARY }}>
              女性の方はこちら →
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <Footer />
      <QuickNav />
    </div>
  )
}
