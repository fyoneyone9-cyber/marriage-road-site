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

const SERVICES = [
  'タロット鑑定',
  'ダウジング',
  '数秘術',
  '姓名鑑定',
  '心理カウンセリング',
  '浮気心理カウンセリング',
  'DM鑑定',
  'LINE鑑定',
  'オンライン鑑定',
]

export default function FortuneTellerPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Special Service</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            専属占い師紹介サービス
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            マレッジロードジャパン会員様限定の特典サービスです。
          </p>
        </div>

        {/* 会員特典バッジ */}
        <div style={{ background: `rgba(201,169,110,0.15)`, border: `2px solid ${ACCENT}`, borderRadius: '0.75rem', padding: '0.875rem 1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7a6020' }}>🎁 マレッジロードジャパン会員様限定「マリッジ割引」あり</span>
        </div>

        {/* 占い師プロフィール */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🔮</div>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.25rem', color: TEXT }}>Ri※（リ）</h2>
          <p style={{ fontSize: '0.8rem', color: PRIMARY, fontWeight: 600, marginBottom: '0.75rem' }}>
            姓名鑑定 ⭐️ タロット数秘術占い師
          </p>
          <div style={{ width: '3rem', height: '1px', background: BORDER, margin: '0 auto 1rem' }} />
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8, marginBottom: '0.75rem', fontStyle: 'italic' }}>
            「1人でも多くの方に届いてほしい言葉」
          </p>
          <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>
            複雑恋愛・お仕事のお悩みを受け付けています。<br />
            婚活中の恋愛相談・パートナー選びもお任せください。
          </p>
        </div>

        {/* 対応サービス */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>対応メニュー</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '2rem' }}>
          {SERVICES.map((svc, i) => (
            <div key={i} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.5rem', padding: '0.625rem', textAlign: 'center', fontSize: '0.75rem', color: TEXT }}>
              {svc}
            </div>
          ))}
        </div>

        {/* 受付中のお悩み */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem', color: TEXT }}>💌 こんなお悩みにお答えします</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              '複雑な恋愛関係について悩んでいる',
              '婚活がうまくいかない・自信が持てない',
              'お仕事・人間関係のお悩み',
              'パートナーとの相性を確認したい',
              '浮気・不倫問題の心理カウンセリング',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.5rem', fontSize: '0.8rem', color: MUTED }}>
                <span style={{ color: ACCENT, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* マリッジ割引説明 */}
        <div style={{ background: `rgba(183,110,121,0.08)`, border: `1px solid rgba(183,110,121,0.25)`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', color: TEXT }}>🎁 マリッジ割引について</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>
            マレッジロードジャパンの会員様は特別割引でご利用いただけます。
            詳細は下記メールアドレスまでお問い合わせください。
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <a href="mailto:info@marriage-road.jp"
              style={{ color: PRIMARY, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
              📧 info@marriage-road.jp
            </a>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            専属占い師サービスの詳細は無料相談でもご案内します。
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
