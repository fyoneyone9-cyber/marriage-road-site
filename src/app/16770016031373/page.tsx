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

const AGE_DATA = [
  { label: '20代', pct: 18 },
  { label: '30代前半', pct: 32 },
  { label: '30代後半', pct: 28 },
  { label: '40代前半', pct: 14 },
  { label: '40代後半〜', pct: 8 },
]

const INCOME_DATA = [
  { label: '300万円未満', pct: 8 },
  { label: '300〜400万円', pct: 22 },
  { label: '400〜500万円', pct: 28 },
  { label: '500〜600万円', pct: 21 },
  { label: '600〜800万円', pct: 14 },
  { label: '800万円以上', pct: 7 },
]

const JOB_DATA = [
  { label: '会社員（正社員）', pct: 62 },
  { label: '公務員・教員', pct: 12 },
  { label: '自営業・経営者', pct: 10 },
  { label: '医療・福祉', pct: 8 },
  { label: 'その他', pct: 8 },
]

export default function MaleDataPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Member Data</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            男性会員データ
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            IBJ（日本結婚相談所連盟）全体の男性会員データをご紹介します。<br />
            会員数104,859名（2025年末時点）のうち男性データです。
          </p>
        </div>

        {/* 年齢分布 */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>👨 年齢層の分布</h2>
          {AGE_DATA.map((d, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.8rem', color: MUTED }}>
                <span>{d.label}</span>
                <span style={{ fontWeight: 600, color: PRIMARY }}>{d.pct}%</span>
              </div>
              <div style={{ background: BORDER, borderRadius: '9999px', height: '0.75rem' }}>
                <div style={{ width: `${d.pct * 3}%`, height: '100%', background: PRIMARY, borderRadius: '9999px' }} />
              </div>
            </div>
          ))}
          <p style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.75rem' }}>※ 30代が全体の60%を占め、最も多い年齢層となっています。</p>
        </div>

        {/* 年収分布 */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>💰 年収分布</h2>
          {INCOME_DATA.map((d, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.8rem', color: MUTED }}>
                <span>{d.label}</span>
                <span style={{ fontWeight: 600, color: ACCENT }}>{d.pct}%</span>
              </div>
              <div style={{ background: BORDER, borderRadius: '9999px', height: '0.75rem' }}>
                <div style={{ width: `${d.pct * 3}%`, height: '100%', background: ACCENT, borderRadius: '9999px' }} />
              </div>
            </div>
          ))}
          <p style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.75rem' }}>※ 400〜500万円台が最多層。幅広い年収層の方が活動されています。</p>
        </div>

        {/* 職業分布 */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>💼 職業の内訳</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            {JOB_DATA.map((d, i) => (
              <div key={i} style={{ background: SURFACE, borderRadius: '0.5rem', padding: '0.875rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: PRIMARY }}>{d.pct}%</div>
                <div style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.25rem' }}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '2rem' }}>
          ※ データはIBJ公式データに基づいた参考値です。実際の数値は変動する場合があります。
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            あなたに合った男性会員をご紹介します。まずはお気軽にご相談ください。
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
