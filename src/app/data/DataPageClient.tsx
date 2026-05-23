'use client'

 useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
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

const ageData = [
  { label: '〜29才', value: 5301 },
  { label: '30〜34才', value: 13774 },
  { label: '35〜39才', value: 16805 },
  { label: '40〜44才', value: 12963 },
  { label: '45〜49才', value: 10161 },
  { label: '50〜54才', value: 5680 },
  { label: '55〜59才', value: 3024 },
  { label: '60才〜', value: 2940 },
]
const maxAge = Math.max(...ageData.map(d => d.value))

const incomeData = [
  { label: '〜399万', value: 5214 },
  { label: '400〜499万', value: 6565 },
  { label: '500〜699万', value: 10912 },
  { label: '700〜999万', value: 6524 },
  { label: '1000万〜', value: 3704 },
]
const maxIncome = Math.max(...incomeData.map(d => d.value))

const seikonData = [
  { year: '2016', value: 4739 },
  { year: '2017', value: 5708 },
  { year: '2018', value: 6344 },
  { year: '2019', value: 7847 },
  { year: '2020', value: 8624 },
  { year: '2021', value: 10803 },
]
const maxSeikon = Math.max(...seikonData.map(d => d.value))

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

export default function DataPageClient() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>会員データ</div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>IBJ会員データ</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>日本マーケティングリサーチ機構調べ・業界No.1</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">

        {/* サマリーカード */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: '総会員数', value: '81,721名', sub: '2023年1月現在' },
            { label: '月平均入会数', value: '4,022名', sub: '毎月増加中' },
            { label: '2021年成婚者数', value: '14,671名', sub: '前年度比125%UP' },
          ].map(card => (
            <div key={card.label} className="rounded-xl p-6 text-center"
              style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <div className="text-xs mb-2" style={{ color: MUTED }}>{card.label}</div>
              <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: PRIMARY }}>{card.value}</div>
              <div className="text-xs" style={{ color: MUTED }}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* 年間成婚者数 */}
        <div className="rounded-xl p-6 mb-8" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-2" style={{ color: TEXT }}>年間成婚者数推移</h2>
          <div className="flex gap-4 mb-4 text-xs" style={{ color: MUTED }}>
            <span>2019年: 11,909名</span>
            <span>/</span>
            <span>2020年: 12,249名</span>
            <span>/</span>
            <span>2021年: 14,671名</span>
          </div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: TEXT }}>IBJ会員同士の成婚数推移</h3>
          <div className="flex items-end gap-2" style={{ height: '140px' }}>
            {seikonData.map(d => (
              <div key={d.year} className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="text-xs mb-1" style={{ color: MUTED }}>{d.value.toLocaleString()}</div>
                <div style={{
                  width: '100%',
                  background: PRIMARY,
                  borderRadius: '4px 4px 0 0',
                  height: `${(d.value / maxSeikon) * 110}px`,
                  opacity: 0.85,
                }} />
                <div className="text-xs mt-1" style={{ color: MUTED }}>{d.year}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl p-3 text-xs font-bold" style={{ background: SURFACE, color: PRIMARY }}>
            🎉 2021年 前年度比 125% UP！
          </div>
        </div>

        {/* 年齢分布 */}
        <div className="rounded-xl p-6 mb-8" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: TEXT }}>年齢分布</h2>
          <div className="space-y-3">
            {ageData.map(d => (
              <div key={d.label} className="flex items-center gap-3">
                <div className="text-xs w-20 flex-shrink-0" style={{ color: MUTED }}>{d.label}</div>
                <div className="flex-1 rounded h-4 overflow-hidden" style={{ background: SURFACE }}>
                  <div style={{
                    width: `${(d.value / maxAge) * 100}%`,
                    background: PRIMARY,
                    height: '100%',
                    borderRadius: '4px',
                    opacity: 0.8,
                  }} />
                </div>
                <div className="text-xs w-16 text-right flex-shrink-0" style={{ color: TEXT }}>{d.value.toLocaleString()}名</div>
              </div>
            ))}
          </div>
        </div>

        {/* 年収分布 */}
        <div className="rounded-xl p-6 mb-8" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: TEXT }}>年収分布</h2>
          <div className="space-y-3">
            {incomeData.map(d => (
              <div key={d.label} className="flex items-center gap-3">
                <div className="text-xs w-24 flex-shrink-0" style={{ color: MUTED }}>{d.label}</div>
                <div className="flex-1 rounded h-4 overflow-hidden" style={{ background: SURFACE }}>
                  <div style={{
                    width: `${(d.value / maxIncome) * 100}%`,
                    background: ACCENT,
                    height: '100%',
                    borderRadius: '4px',
                    opacity: 0.8,
                  }} />
                </div>
                <div className="text-xs w-16 text-right flex-shrink-0" style={{ color: TEXT }}>{d.value.toLocaleString()}名</div>
              </div>
            ))}
          </div>
        </div>

        {/* 学歴 */}
        <div className="rounded-xl p-6 text-center" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <h2 className="text-xl font-semibold mb-3" style={{ color: TEXT }}>学歴</h2>
          <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: PRIMARY }}>70%以上</div>
          <p className="text-sm" style={{ color: MUTED }}>短大・四大・大学院卒の会員が全体の70%以上を占めます。</p>
        </div>
      </div>

      <SiteFooter />
      <QuickNav />
    </div>
  )
}
