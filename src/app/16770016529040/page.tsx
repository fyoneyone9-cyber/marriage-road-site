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
  { label: '20代前半', pct: 12 },
  { label: '20代後半', pct: 24 },
  { label: '30代前半', pct: 30 },
  { label: '30代後半', pct: 22 },
  { label: '40代〜', pct: 12 },
]

const EDUCATION_DATA = [
  { label: '大学卒・大学院卒', pct: 52 },
  { label: '短大・専門学校卒', pct: 28 },
  { label: '高校卒', pct: 14 },
  { label: 'その他', pct: 6 },
]

const JOB_DATA = [
  { label: '会社員（正社員）', pct: 50 },
  { label: '医療・福祉', pct: 16 },
  { label: '公務員・教員', pct: 12 },
  { label: 'パート・アルバイト', pct: 10 },
  { label: 'その他', pct: 12 },
]

export default function FemaleDataPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Member Data</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            女性会員データ
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            IBJ（日本結婚相談所連盟）全体の女性会員データをご紹介します。<br />
            会員数104,859名（2025年末時点）のうち女性データです。
          </p>
        </div>

        {/* 年齢分布 */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>👩 年齢層の分布</h2>
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
          <p style={{ fontSize: '0.7rem', color: MUTED, marginTop: '0.75rem' }}>※ 20代後半〜30代前半が最も多い年齢層となっています。</p>
        </div>

        {/* 学歴分布 */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.25rem' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>🎓 最終学歴</h2>
          {EDUCATION_DATA.map((d, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.8rem', color: MUTED }}>
                <span>{d.label}</span>
                <span style={{ fontWeight: 600, color: ACCENT }}>{d.pct}%</span>
              </div>
              <div style={{ background: BORDER, borderRadius: '9999px', height: '0.75rem' }}>
                <div style={{ width: `${d.pct * 1.5}%`, height: '100%', background: ACCENT, borderRadius: '9999px' }} />
              </div>
            </div>
          ))}
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
            あなたに合った女性会員をご紹介します。まずはお気軽にご相談ください。
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
