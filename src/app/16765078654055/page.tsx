'use client'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const HOW_IT_WORKS = [
  { step: '01', title: 'データ収集', desc: '会員の活動履歴（閲覧・申込み・お断り履歴等）を継続的に収集します。' },
  { step: '02', title: '機械学習', desc: '収集したデータをAIが機械学習。相性の良いパターンを自動で学習します。' },
  { step: '03', title: '相性分析', desc: '価値観・趣味・生活習慣などの多角的な観点から相性を分析します。' },
  { step: '04', title: 'おすすめ紹介', desc: '相性の高いお相手をAIがピックアップし、優先的にご紹介します。' },
]

export default function AiMatchingPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>AI Matching</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            AIマッチング機能
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            IBJが誇る最先端のAIマッチングエンジンで、<br />
            より精度の高いお相手のご紹介を実現します。
          </p>
        </div>

        {/* メインキャッチ */}
        <div style={{ background: `linear-gradient(135deg, #2d2020 0%, #4a2a2a 100%)`, borderRadius: '1rem', padding: '2rem', color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🤖</div>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.9 }}>
            「AIが過去のお見合いデータ・会員の活動履歴などを機械学習し、<br />
            相性が良さそうなお相手をピックアップし異性をご紹介」
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.7rem', opacity: 0.6 }}>— IBJ公式 AIマッチング機能より</div>
        </div>

        {/* 仕組み */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>AIマッチングの仕組み</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {HOW_IT_WORKS.map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '0.5rem',
                background: `rgba(183,110,121,0.12)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontWeight: 700,
                fontSize: '0.7rem',
                color: PRIMARY,
              }}>
                STEP<br />{item.step}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem', color: TEXT }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 特徴 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: TEXT }}>AIマッチングの特徴</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              '機械学習ベースのレコメンドエンジン搭載',
              '利用者の行動履歴・価値観を多角的に分析',
              '条件検索だけでは見つからない相性の良い相手を発見',
              '使えば使うほど精度が向上するパーソナライズ機能',
              'プロカウンセラーのサポートと組み合わせてさらに効果的',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.625rem', fontSize: '0.875rem', color: MUTED }}>
                <span style={{ color: ACCENT, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            AIマッチングを活用した婚活について詳しくご説明します。
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
