'use client'

import Footer from '@/components/Footer'
import { useState } from 'react'

const PRIMARY = '#b76e79'
const BASE = '#fff8f5'
const SURFACE = '#fff0eb'
const BORDER = '#e8d5d0'
const TEXT = '#3d2c2c'
const MUTED = '#8a6a6a'

function SiteHeader() {
  return (
    <header style={{ background: 'white', borderBottom: `1px solid ${BORDER}` }} className="sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" style={{ textDecoration: 'none', color: PRIMARY }} className="font-bold text-base">
          💒 マレッジロードジャパン
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {[
            { href: '/feature', label: '特徴' },
            { href: '/plan', label: 'プラン' },
            { href: '/flow', label: '流れ' },
            { href: '/greeting', label: 'カウンセラー' },
            { href: '/chamber', label: '商工会議所' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ color: TEXT, textDecoration: 'none' }} className="hover:opacity-70 transition-opacity">
              {label}
            </a>
          ))}
        </nav>
        <a href="/m-contact"
          className="text-xs font-semibold px-4 py-2 rounded-full transition-all hover:opacity-90"
          style={{ background: PRIMARY, color: 'white', textDecoration: 'none' }}>
          無料相談
        </a>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <Footer />
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

export default function ChamberPageClient() {
  const activities = [
    {
      date: '2024年',
      title: '海老名商工会議所へ入会',
      desc: '地域の経済団体として海老名商工会議所に正式加入。会員No.4954として地域の事業者コミュニティに参加しました。',
      icon: '🏛️',
    },
    {
      date: '活動中',
      title: '地域ネットワーク構築',
      desc: '海老名・厚木エリアの事業者との連携を深め、地域に根ざした婚活サポートのネットワークを拡大しています。',
      icon: '🤝',
    },
    {
      date: '継続中',
      title: '地域密着型の婚活支援',
      desc: '商工会議所を通じた地域情報の収集・発信により、海老名・厚木エリアでの生活に詳しいカウンセリングを提供しています。',
      icon: '💼',
    },
  ]

  const merits = [
    {
      title: '信頼性の証明',
      desc: '海老名商工会議所公認の事業者として、地域で認められた信頼ある相談所です。',
      icon: '✅',
    },
    {
      title: '地域密着のネットワーク',
      desc: '地元の事業者・行政との幅広いつながりで、海老名・厚木エリアの情報を熟知しています。',
      icon: '🗾',
    },
    {
      title: '安心して相談できる',
      desc: '公的機関に認められた事業者として、個人情報管理・運営の透明性を徹底しています。',
      icon: '🔐',
    },
    {
      title: '地域の発展に貢献',
      desc: '婚活支援を通じて海老名・厚木エリアの少子化対策・地域活性化に貢献しています。',
      icon: '🌸',
    },
  ]

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ヒーロー：バナー写真 */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '360px' }}>
        <img
          src="/chamber-banner.jpg"
          alt="海老名商工会議所 会員之証"
          className="w-full object-cover"
          style={{ maxHeight: '360px', objectPosition: 'center' }}
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: 'rgba(45,26,26,0.55)' }}>
          <p className="text-xs font-medium tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
            EBINA CHAMBER OF COMMERCE &amp; INDUSTRY
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center leading-tight mb-2">
            海老名商工会議所 公認
          </h1>
          <p className="text-sm md:text-base text-white opacity-80">会員No. 4954</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* 認定バッジセクション */}
        <section className="rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-8"
          style={{ background: 'white', border: `2px solid ${PRIMARY}` }}>
          <img
            src="/chamber-badge.jpg"
            alt="海老名商工会議所 会員之証"
            className="rounded-xl flex-shrink-0"
            style={{ width: '160px', height: '160px', objectFit: 'cover', border: `2px solid ${BORDER}` }}
          />
          <div>
            <p className="text-xs font-medium tracking-wider mb-1" style={{ color: PRIMARY }}>OFFICIAL MEMBER</p>
            <h2 className="text-xl font-bold mb-2" style={{ color: TEXT }}>海老名商工会議所 正式会員</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: MUTED }}>
              マレッジロードジャパンは、海老名商工会議所の正式会員として認定されています。
              地域の商工業者として認められた信頼ある結婚相談所として、
              神奈川県海老名市・厚木市エリアの皆さまの婚活をサポートします。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                会員No. 4954
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                海老名市公認
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${BORDER}` }}>
                IBJ加盟店
              </span>
            </div>
          </div>
        </section>

        {/* 商工会議所会員であることのメリット */}
        <section className="mb-10">
          <p className="text-xs font-medium tracking-wider mb-1 text-center" style={{ color: PRIMARY }}>WHY IT MATTERS</p>
          <h2 className="text-xl font-bold text-center mb-6">商工会議所会員だから安心できる理由</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {merits.map((m, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <h3 className="text-base font-semibold mb-2" style={{ color: TEXT }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活動履歴 */}
        <section className="mb-10">
          <p className="text-xs font-medium tracking-wider mb-1 text-center" style={{ color: PRIMARY }}>ACTIVITIES</p>
          <h2 className="text-xl font-bold text-center mb-6">商工会議所での活動</h2>
          <div className="space-y-4">
            {activities.map((a, i) => (
              <div key={i} className="rounded-xl p-6 flex gap-4"
                style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                <div className="text-2xl flex-shrink-0">{a.icon}</div>
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>{a.date}</p>
                  <h3 className="text-base font-semibold mb-1" style={{ color: TEXT }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 海老名商工会議所について */}
        <section className="rounded-xl p-6 mb-10" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <h2 className="text-base font-bold mb-3" style={{ color: TEXT }}>🏛️ 海老名商工会議所とは</h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            海老名商工会議所（EBINA CHAMBER OF COMMERCE &amp; INDUSTRY）は、神奈川県海老名市の地域経済団体です。
            地域の商工業者が集まり、ビジネスの発展・地域活性化・会員相互の親睦を目的として活動しています。
            当会議所の会員として認定されることは、地域に根ざした信頼ある事業者である証明です。
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-sm mb-4" style={{ color: MUTED }}>地域密着の信頼ある結婚相談所に、まずはお気軽にご相談ください</p>
          <a href="/m-contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談を予約する →
          </a>
        </section>

      </main>

      <SiteFooter />
      <QuickNav />
    </div>
  )
}
