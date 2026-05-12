'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

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
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3">
        <a href="/feature" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特徴・強み</a>
        <a href="/plan" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プラン</a>
        <a href="/flow" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>ご入会の流れ</a>
        <a href="/greeting" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>カウンセラー紹介</a>
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
  )
}

export default function DataPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: PRIMARY, color: '#fff' }}>会員データ</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>IBJ会員データ</h1>
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
              <div className="text-3xl font-bold mb-1" style={{ color: PRIMARY }}>{card.value}</div>
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
          <div className="text-3xl font-bold mb-2" style={{ color: PRIMARY }}>70%以上</div>
          <p className="text-sm" style={{ color: MUTED }}>短大・四大・大学院卒の会員が全体の70%以上を占めます。</p>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
