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

const SDG_GOALS = [
  { num: '3', title: '健康と福祉', desc: '心身ともに健康な状態で婚活に取り組めるよう、メンタルサポートを含む総合的な支援を行います。' },
  { num: '5', title: 'ジェンダー平等', desc: '男女が対等なパートナーシップを築けるよう、性差にとらわれない婚活サポートを提供します。' },
  { num: '10', title: '不平等の縮小', desc: '年齢・職業・収入に関係なく、すべての方が公平に婚活に取り組める環境を整えます。' },
  { num: '17', title: 'パートナーシップ', desc: 'サンマリエ・ツヴァイをはじめ、全国のIBJ加盟相談所とパートナーシップを結び、会員様の成婚を支援します。' },
]

export default function SdgsPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>SDGs</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            SDGsへの取り組み
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            持続可能な開発目標（SDGs）への当相談所の取り組みをご紹介します。
          </p>
        </div>

        {/* キャッチ */}
        <div style={{ background: `linear-gradient(135deg, #2d7a6a 0%, #1a5a4a 100%)`, borderRadius: '1rem', padding: '2rem', color: 'white', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🌍</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            パートナーシップで目標を達成しよう
          </h2>
          <p style={{ fontSize: '0.875rem', opacity: 0.9, lineHeight: 1.8 }}>
            みんなで協力し合い、入会者様の目標を達成しよう！
          </p>
        </div>

        {/* 取り組みメッセージ */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8 }}>
            「サンマリエ様、ツヴァイ様は元より、IBJ所属の結婚相談所連盟の相談所の皆様をパートナーとし、
            会員様と手を取り合い、ご成婚への近道を提供します」
          </p>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8, marginTop: '0.75rem' }}>
            婚活支援を通じた少子化問題への貢献として、マレッジロードジャパンはSDGsの理念に共感し、
            ゴール3・5・10・17を中心に取り組んでいます。
          </p>
        </div>

        {/* SDGsゴール */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>当相談所が取り組むSDGsゴール</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
          {SDG_GOALS.map((goal, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '50%',
                  background: `rgba(183,110,121,0.1)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: PRIMARY,
                  flexShrink: 0,
                }}>
                  {goal.num}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: TEXT }}>{goal.title}</div>
              </div>
              <div style={{ fontSize: '0.75rem', color: MUTED, lineHeight: 1.7 }}>{goal.desc}</div>
            </div>
          ))}
        </div>

        {/* 少子化貢献 */}
        <div style={{ background: `rgba(201,169,110,0.12)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', color: TEXT }}>👶 少子化問題への貢献</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>
            マレッジロードジャパンは婚活支援を通じて、日本の少子化・晩婚化問題の解決に貢献します。
            一組でも多くのカップルの誕生が、日本の未来を豊かにすると信じています。
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            一緒に素晴らしい出会いを見つけましょう。
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
