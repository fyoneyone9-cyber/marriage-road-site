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

const CONDITIONS = [
  { num: 1, title: 'プロポーズ成功', desc: '基本は男性からのアプローチによるプロポーズ成功をもってご成婚とします。' },
  { num: 2, title: '結婚の口約束', desc: 'お互いが明確に結婚を約束した場合もご成婚退会の対象となります。' },
  { num: 3, title: '婚前交渉・同棲', desc: 'IBJルールに基づき、婚前交渉・同棲が確認された場合はご成婚扱いとなります。' },
  { num: 4, title: '宿泊を伴う旅行', desc: '交際相手と宿泊を伴う旅行をされた場合も、ご成婚退会の対象です。' },
  { num: 5, title: '交際期間6ヶ月経過', desc: '交際期間が6ヶ月を経過した場合、ご成婚退会となります。6ヶ月以内に結婚するかどうかご判断ください。' },
]

export default function SuccessDefinitionPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Definition</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            ご成婚の定義
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem' }}>
            ご成婚退会（寿退会）について
          </p>
        </div>

        {/* 概要 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8 }}>
            マレッジロードジャパンはIBJ（日本結婚相談所連盟）の基本ルールに準拠しています。<br />
            以下の条件のいずれかに該当した場合、ご成婚退会（寿退会）となります。
          </p>
        </div>

        {/* ご成婚の条件 */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>ご成婚の条件</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {CONDITIONS.map((cond, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: PRIMARY,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.8rem',
                flexShrink: 0,
              }}>
                {cond.num}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem', color: TEXT }}>{cond.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{cond.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div style={{ background: `rgba(183,110,121,0.08)`, border: `1px solid rgba(183,110,121,0.25)`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: TEXT }}>📌 ご注意事項</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>
            <li>・6ヶ月以内に結婚するかどうかをご判断いただくのが基本です</li>
            <li>・基本的にはプロポーズ成功がご成婚の定義です</li>
            <li>・IBJのルールに基づく運用のため、詳細はカウンセラーにご確認ください</li>
            <li>・ご成婚後もアフターフォローサポートをご利用いただけます</li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            ご成婚の定義や活動の進め方について詳しくご説明します。
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
