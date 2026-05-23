import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}


const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const MONTHLY_STATS = [
  { label: '現在会員数', value: '104,859名', icon: '👥' },
  { label: '12月新規入会', value: '6,185名', icon: '✨' },
  { label: '月間お見合い成立', value: '79,094件', icon: '💑' },
  { label: '年間お見合い成立', value: '969,782件', icon: '📊' },
]

export default function HakushoPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Data Report</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            ご成婚白書 2025
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            IBJ（日本結婚相談所連盟）の最新成婚データをご報告します。
          </p>
        </div>

        {/* 年間成婚ハイライト */}
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, #c9879e 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center', color: 'white', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: '0.5rem' }}>2025年 年間成婚数（IBJ全体）</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1 }}>19,112組</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '0.5rem' }}>12月単月 2,013名（過去最高）</div>
          <div style={{ marginTop: '1.25rem', display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '0.375rem 1rem', fontSize: '0.8rem' }}>
            IBJ全体 成婚率 50%
          </div>
        </div>

        {/* 月次データ */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>最新月次データ</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
          {MONTHLY_STATS.map((stat, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: PRIMARY, marginBottom: '0.25rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.7rem', color: MUTED }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 成婚率グラフ風 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>成婚率の推移</h2>
          <div style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1rem' }}>IBJ全体（参考値）</div>
          {[
            { year: '2021年', rate: 40, value: '40%' },
            { year: '2022年', rate: 44, value: '44%' },
            { year: '2023年', rate: 47, value: '47%' },
            { year: '2024年', rate: 49, value: '49%' },
            { year: '2025年', rate: 50, value: '50%' },
          ].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.625rem' }}>
              <div style={{ width: '3rem', fontSize: '0.75rem', color: MUTED, flexShrink: 0 }}>{d.year}</div>
              <div style={{ flex: 1, background: BORDER, borderRadius: '9999px', height: '1.25rem', overflow: 'hidden' }}>
                <div style={{ width: `${d.rate * 2}%`, height: '100%', background: PRIMARY, borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '0.5rem' }}>
                  <span style={{ fontSize: '0.65rem', color: 'white', fontWeight: 700 }}>{d.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 補足 */}
        <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '2rem', padding: '0 0.25rem' }}>
          ※ データはIBJ（日本結婚相談所連盟）公式発表に基づきます。成婚率はIBJ独自の定義による数値です。
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            高い成婚実績を持つIBJネットワークで、あなたの婚活をサポートします。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              style={{ background: PRIMARY, color: 'white', textDecoration: 'none', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              📅 ZOOM無料相談を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              style={{ background: '#06C755', color: 'white', textDecoration: 'none', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              💬 LINEで相談する
            </a>
            <a href="tel:050-1807-3163"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none', padding: '0.625rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              📞 050-1807-3163
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
