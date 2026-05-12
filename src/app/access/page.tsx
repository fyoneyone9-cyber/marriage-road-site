'use client'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const INFO = [
  { label: '名称', value: '【結婚相談所】マレッジロードジャパン' },
  { label: '代表者', value: '米山 文貴' },
  { label: '住所', value: '〒243-0424 神奈川県海老名市社家6-5-2-301' },
  { label: '電話番号', value: '050-1807-3163' },
  { label: '受付時間', value: '10:00〜23:00' },
  { label: '定休日', value: '年中無休' },
  { label: '資本金', value: '250万円' },
  { label: 'パートナー', value: 'サンマリエ、ツヴァイ、全国IBJ結婚相談所' },
  { label: 'アクセス', value: 'JR相模線 社家駅から徒歩1分、駐車場あり' },
  { label: 'IBJ登録番号', value: 'No.01226' },
]

export default function AccessPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>About Us</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            相談所概要
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            マレッジロードジャパンの基本情報をご案内します。
          </p>
        </div>

        {/* テーブル */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
          {INFO.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              borderBottom: i < INFO.length - 1 ? `1px solid ${BORDER}` : 'none',
            }}>
              <div style={{
                width: '9rem',
                flexShrink: 0,
                padding: '1rem 1.25rem',
                background: SURFACE,
                fontSize: '0.8rem',
                fontWeight: 600,
                color: MUTED,
                display: 'flex',
                alignItems: 'center',
              }}>
                {item.label}
              </div>
              <div style={{
                padding: '1rem 1.25rem',
                fontSize: '0.875rem',
                color: TEXT,
                lineHeight: 1.7,
                flex: 1,
              }}>
                {item.label === '電話番号' ? (
                  <a href="tel:050-1807-3163" style={{ color: PRIMARY, textDecoration: 'none', fontWeight: 600 }}>
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>

        {/* IBJ認定バッジ */}
        <div style={{ background: `rgba(201,169,110,0.12)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>🏅</div>
          <div style={{ fontWeight: 700, color: ACCENT, marginBottom: '0.25rem' }}>IBJ正規加盟店</div>
          <div style={{ fontSize: '0.75rem', color: MUTED }}>日本結婚相談所連盟（IBJ）の正規加盟店として認定されています。</div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            受付時間 10:00〜23:00（年中無休）。お気軽にご連絡ください。
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
