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

export default function CertPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Certificate</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            IBJ正規加盟店認定証
          </h1>
          <p style={{ fontSize: '0.875rem', color: MUTED }}>相談所 NO：01226</p>
        </div>

        {/* 認定証カード */}
        <div style={{
          background: 'white',
          border: `2px solid ${ACCENT}`,
          borderRadius: '1rem',
          padding: '2.5rem',
          textAlign: 'center',
          marginBottom: '2rem',
          boxShadow: `0 8px 24px rgba(201,169,110,0.15)`,
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🏅</div>
          <div style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '0.5rem' }}>日本結婚相談所連盟（IBJ）</div>
          <div style={{ fontSize: '1.375rem', fontWeight: 700, color: TEXT, marginBottom: '0.5rem' }}>
            IBJ正規加盟店認定証
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: ACCENT, marginBottom: '1rem' }}>
            相談所 NO：01226
          </div>
          <div style={{ width: '100%', height: '1px', background: BORDER, marginBottom: '1rem' }} />
          <div style={{ fontSize: '1rem', fontWeight: 700, color: PRIMARY }}>
            【結婚相談所】マレッジロードジャパン
          </div>
          <div style={{ fontSize: '0.8rem', color: MUTED, marginTop: '0.25rem' }}>代表者：米山 文貴</div>
        </div>

        {/* 説明 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: TEXT }}>IBJ正規加盟店とは</h2>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            IBJ（日本結婚相談所連盟）は東証プライム上場企業であり、全国3,000以上の結婚相談所が加盟する日本最大の結婚相談所ネットワークです。
          </p>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            IBJ正規加盟店として認定を受けるためには、IBJが定める厳格な審査基準を満たす必要があります。マレッジロードジャパンはこの審査に合格し、IBJ正規加盟店（登録番号：No.01226）として認定されています。
          </p>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8 }}>
            正規加盟店であることにより、IBJのシステム・ネットワーク・サービスを正式に利用し、会員様に安心・安全な婚活サポートを提供することができます。
          </p>
        </div>

        {/* 信頼性ポイント */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            { icon: '🔐', title: '審査通過済み', desc: 'IBJの厳格な審査基準をクリア' },
            { icon: '📋', title: '登録番号発行', desc: '正規加盟店証明 No.01226' },
            { icon: '🤝', title: '全国ネットワーク', desc: '3,000以上の相談所と連携' },
            { icon: '⭐', title: '東証上場企業', desc: 'IBJは東証プライム上場' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem', color: TEXT }}>{item.title}</div>
              <div style={{ fontSize: '0.75rem', color: MUTED }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            IBJ正規加盟店マレッジロードジャパンへのお問い合わせはこちらから。
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
