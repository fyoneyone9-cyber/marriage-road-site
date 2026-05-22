'use client'

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

const MONTHLY_DATA = [
  { month: '1月', inquiry_m: 8, inquiry_f: 12, consultation: 6, joined: 3, omiai: 14 },
  { month: '2月', inquiry_m: 10, inquiry_f: 14, consultation: 8, joined: 4, omiai: 18 },
  { month: '3月', inquiry_m: 14, inquiry_f: 18, consultation: 11, joined: 6, omiai: 24 },
  { month: '4月', inquiry_m: 12, inquiry_f: 16, consultation: 9, joined: 5, omiai: 20 },
  { month: '5月', inquiry_m: 11, inquiry_f: 13, consultation: 8, joined: 4, omiai: 19 },
  { month: '6月', inquiry_m: 9, inquiry_f: 11, consultation: 7, joined: 3, omiai: 16 },
  { month: '7月', inquiry_m: 10, inquiry_f: 14, consultation: 8, joined: 4, omiai: 20 },
  { month: '8月', inquiry_m: 8, inquiry_f: 10, consultation: 6, joined: 3, omiai: 15 },
  { month: '9月', inquiry_m: 12, inquiry_f: 15, consultation: 9, joined: 5, omiai: 22 },
  { month: '10月', inquiry_m: 13, inquiry_f: 16, consultation: 10, joined: 5, omiai: 24 },
  { month: '11月', inquiry_m: 11, inquiry_f: 14, consultation: 9, joined: 4, omiai: 21 },
  { month: '12月', inquiry_m: 10, inquiry_f: 13, consultation: 8, joined: 4, omiai: 19 },
]

const ANNUAL = {
  inquiry: 232,
  consultation: 99,
  joined: 50,
  omiai: 232,
}

export default function ActivityPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Activity Report</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            活動実績 2024年
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            マレッジロードジャパンの2024年の活動実績をご報告します。
          </p>
        </div>

        {/* 年間サマリー */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            { label: '年間お問い合わせ総数', value: `${ANNUAL.inquiry}件`, icon: '📩' },
            { label: '年間無料面談実施', value: `${ANNUAL.consultation}名`, icon: '🎥' },
            { label: '年間新規ご入会', value: `${ANNUAL.joined}名`, icon: '✨' },
            { label: '年間お見合い実施', value: `${ANNUAL.omiai}件`, icon: '💑' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.375rem' }}>{item.icon}</div>
              <div style={{ fontSize: '1.375rem', fontWeight: 700, color: PRIMARY }}>{item.value}</div>
              <div style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.25rem' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* 月次テーブル */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>月次実績詳細</h2>
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
          {/* ヘッダー */}
          <div style={{ display: 'grid', gridTemplateColumns: '3rem 1fr 1fr 1fr 1fr', background: PRIMARY, padding: '0.75rem 0.875rem', gap: '0.5rem' }}>
            {['月', '問合(男)', '問合(女)', '面談', '入会'].map((h, i) => (
              <div key={i} style={{ fontSize: '0.65rem', fontWeight: 700, color: 'white', textAlign: 'center' }}>{h}</div>
            ))}
          </div>
          {MONTHLY_DATA.map((row, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '3rem 1fr 1fr 1fr 1fr',
              padding: '0.625rem 0.875rem',
              borderTop: `1px solid ${BORDER}`,
              background: i % 2 === 0 ? 'white' : BASE,
              gap: '0.5rem',
            }}>
              <div style={{ fontSize: '0.75rem', color: TEXT, textAlign: 'center', fontWeight: 600 }}>{row.month}</div>
              <div style={{ fontSize: '0.75rem', color: MUTED, textAlign: 'center' }}>{row.inquiry_m}件</div>
              <div style={{ fontSize: '0.75rem', color: MUTED, textAlign: 'center' }}>{row.inquiry_f}件</div>
              <div style={{ fontSize: '0.75rem', color: MUTED, textAlign: 'center' }}>{row.consultation}名</div>
              <div style={{ fontSize: '0.75rem', color: PRIMARY, textAlign: 'center', fontWeight: 600 }}>{row.joined}名</div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '2rem' }}>
          ※ 上記データはマレッジロードジャパンの実績に基づく参考値です。個人情報保護のため一部加工しています。
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            活動実績や婚活の進め方について詳しくご説明します。
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
