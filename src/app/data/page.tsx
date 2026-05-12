'use client'

const PRIMARY = '#c9836f'
const ACCENT = '#d4a96a'
const BASE = '#fff8f5'
const SURFACE = '#fff1eb'
const TEXT = '#3d2c2c'
const MUTED = '#8a6a60'
const BORDER = '#e8d5cc'

const navLinks = [
  { label: 'トップ', href: '/' },
  { label: '初めての方へ', href: '/readme' },
  { label: '選ばれる理由', href: '/feature' },
  { label: 'プラン', href: '/plan' },
  { label: 'カウンセラー', href: '/greeting' },
  { label: '流れ', href: '/flow' },
  { label: 'FAQ', href: '/faq' },
  { label: 'お問合せ', href: '/16760950606960' },
]

function Header() {
  return (
    <header style={{ background: '#fff', borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <a href="/" style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '18px', color: PRIMARY, textDecoration: 'none' }}>
          マレッジロードジャパン
        </a>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif", fontSize: '13px', color: TEXT, textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ background: TEXT, color: '#fff', padding: '40px 16px', marginTop: '80px', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div style={{ fontWeight: 700, fontSize: '18px', color: PRIMARY, marginBottom: '16px' }}>マレッジロードジャパン</div>
        <div style={{ fontSize: '14px', color: '#ccc', lineHeight: '2' }}>
          <div>〒243-0424 神奈川県海老名市社家6-5-2-301</div>
          <div>TEL: 050-1807-3163</div>
          <div>MAIL: info@marriage-road.jp</div>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px', fontSize: '13px' }}>
          <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>プライバシーポリシー</a>
          <a href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>利用規約</a>
          <a href="/tokusho" style={{ color: '#aaa', textDecoration: 'none' }}>特定商取引法</a>
        </div>
        <div style={{ marginTop: '16px', fontSize: '12px', color: '#888' }}>© 2024 マレッジロードジャパン All rights reserved.</div>
      </div>
    </footer>
  )
}

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

export default function DataPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>会員データ</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px' }}>IBJ会員データ</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>日本マーケティングリサーチ機構調べ・業界No.1</p>
        </div>
      </section>

      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '48px 16px' }}>

        {/* サマリーカード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          {[
            { label: '総会員数', value: '81,721名', sub: '2023年1月現在' },
            { label: '月平均入会数', value: '4,022名', sub: '毎月増加中' },
            { label: '2021年成婚者数', value: '14,671名', sub: '前年度比125%UP' },
          ].map(card => (
            <div key={card.label} style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: MUTED, marginBottom: '8px' }}>{card.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: PRIMARY }}>{card.value}</div>
              <div style={{ fontSize: '12px', color: MUTED, marginTop: '4px' }}>{card.sub}</div>
            </div>
          ))}
        </div>

        {/* 年間成婚者数 */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: TEXT, marginBottom: '8px' }}>年間成婚者数推移</h2>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', fontSize: '14px', color: MUTED }}>
            <span>2019年: 11,909名</span>
            <span>／</span>
            <span>2020年: 12,249名</span>
            <span>／</span>
            <span>2021年: 14,671名</span>
          </div>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: TEXT, marginBottom: '16px' }}>IBJ会員同士の成婚数推移</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '160px' }}>
            {seikonData.map(d => (
              <div key={d.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ fontSize: '11px', color: MUTED, marginBottom: '4px' }}>{d.value.toLocaleString()}</div>
                <div style={{
                  width: '100%',
                  background: `linear-gradient(180deg, ${ACCENT} 0%, ${PRIMARY} 100%)`,
                  borderRadius: '4px 4px 0 0',
                  height: `${(d.value / maxSeikon) * 130}px`,
                }} />
                <div style={{ fontSize: '11px', color: MUTED, marginTop: '4px' }}>{d.year}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '12px', background: SURFACE, borderRadius: '8px', padding: '10px 16px', fontSize: '14px', color: PRIMARY, fontWeight: 700 }}>
            🎉 2021年 前年度比 125% UP！
          </div>
        </div>

        {/* 年齢分布 */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: TEXT, marginBottom: '20px' }}>年齢分布</h2>
          {ageData.map(d => (
            <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '80px', fontSize: '13px', color: MUTED, flexShrink: 0 }}>{d.label}</div>
              <div style={{ flex: 1, background: SURFACE, borderRadius: '4px', height: '20px', overflow: 'hidden' }}>
                <div style={{
                  width: `${(d.value / maxAge) * 100}%`,
                  background: `linear-gradient(90deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
                  height: '100%',
                  borderRadius: '4px',
                }} />
              </div>
              <div style={{ width: '70px', fontSize: '13px', color: TEXT, textAlign: 'right', flexShrink: 0 }}>{d.value.toLocaleString()}名</div>
            </div>
          ))}
        </div>

        {/* 年収分布 */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: TEXT, marginBottom: '20px' }}>年収分布</h2>
          {incomeData.map(d => (
            <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{ width: '100px', fontSize: '13px', color: MUTED, flexShrink: 0 }}>{d.label}</div>
              <div style={{ flex: 1, background: SURFACE, borderRadius: '4px', height: '20px', overflow: 'hidden' }}>
                <div style={{
                  width: `${(d.value / maxIncome) * 100}%`,
                  background: `linear-gradient(90deg, ${ACCENT} 0%, ${PRIMARY} 100%)`,
                  height: '100%',
                  borderRadius: '4px',
                }} />
              </div>
              <div style={{ width: '70px', fontSize: '13px', color: TEXT, textAlign: 'right', flexShrink: 0 }}>{d.value.toLocaleString()}名</div>
            </div>
          ))}
        </div>

        {/* 学歴 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '48px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: TEXT, marginBottom: '12px' }}>学歴</h2>
          <div style={{ fontSize: '40px', fontWeight: 800, color: PRIMARY, marginBottom: '8px' }}>70%以上</div>
          <p style={{ fontSize: '15px', color: MUTED }}>短大・四大・大学院卒の会員が全体の70%以上を占めます。</p>
        </div>

      </div>
      <Footer />
    </div>
  )
}
