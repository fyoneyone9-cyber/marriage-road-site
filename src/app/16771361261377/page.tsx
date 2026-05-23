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

const FOLLOWUPS = [
  {
    icon: '💍',
    title: '婚約後のサポート',
    desc: '婚約後も安心してください。婚約期間中の不安や悩みへの相談を受け付けます。人生の大切なステップをしっかりサポートします。',
  },
  {
    icon: '⛪',
    title: '結婚準備サポート',
    desc: '結婚式場・婚約指輪・記念撮影など提携企業をご紹介します。スムーズな結婚準備をトータルでサポートします。',
  },
  {
    icon: '💬',
    title: '夫婦カウンセリング',
    desc: '代表カウンセラーは上級心理カウンセラー資格を保有。結婚後の夫婦関係・コミュニケーションのお悩みにも対応します。',
  },
  {
    icon: '🤝',
    title: 'IBJ加盟店アフターフォロー',
    desc: 'IBJ加盟店としての様々なアフターフォローが可能です。結婚後も続く丁寧なサポート体制を整えています。',
  },
]

export default function AfterSupportPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>After Support</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            成婚後のフォロー
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            ご成婚はゴールではなく、新たなスタートです。<br />
            マレッジロードジャパンは成婚後もあなたの幸せを応援します。
          </p>
        </div>

        {/* IBJメッセージ */}
        <div style={{ background: `rgba(201,169,110,0.12)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: TEXT, lineHeight: 1.8, fontStyle: 'italic' }}>
            「その他、IBJ加盟店としての様々なアフターフォローが可能です」
          </p>
        </div>

        {/* フォロー内容 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {FOLLOWUPS.map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.375rem', color: TEXT }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.75 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 資格案内 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', color: TEXT }}>🎓 カウンセラー保有資格</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>
            <li>✓ 上級心理カウンセラー</li>
            <li>✓ IBJ上級仲人カウンセラー</li>
            <li>✓ CompTIA Security+（情報セキュリティ）</li>
          </ul>
          <p style={{ fontSize: '0.75rem', color: MUTED, marginTop: '0.75rem' }}>
            心理的サポートを含む幅広いフォローアップが可能です。
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            成婚後のサポート体制についても詳しくご説明します。
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
