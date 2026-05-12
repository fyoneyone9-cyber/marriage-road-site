'use client'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const SERVICES = [
  {
    icon: '📸',
    title: 'プロフィール写真のこだわり',
    desc: '出張撮影サービスと提携。プロカメラマンが魅力を最大限に引き出す写真を撮影します。第一印象を大きく左右する写真だからこそ、徹底的にこだわります。',
  },
  {
    icon: '✍️',
    title: '自己紹介文のプロサポート',
    desc: 'カウンセラーがあなたの魅力・個性を引き出す自己紹介文を一緒に作成。お見合い成立率を高める文章表現をアドバイスします。',
  },
  {
    icon: '👗',
    title: '婚活ファッション・美容サポート',
    desc: '婚活に適したファッションコーディネートや美容・ヘアスタイルのアドバイス。第一印象から好印象を与えるためのトータルサポートです。',
  },
  {
    icon: '💪',
    title: 'ダイエット・美容サービス連携',
    desc: '提携ダイエット・美容サービスをご紹介。婚活期間中に自分磨きを応援します。内面だけでなく外見の自信も婚活成功の重要な鍵です。',
  },
  {
    icon: '💒',
    title: '成婚までトータルサポート',
    desc: '入会から成婚まで一貫したサポート体制。お見合い・交際・プロポーズまで、すべてのステージでカウンセラーが全力でサポートします。',
  },
]

export default function KodawariPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Our Commitment</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            婚活までこだわる
          </h1>
          <div style={{ display: 'inline-block', background: `rgba(201,169,110,0.15)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '9999px', padding: '0.375rem 1.25rem', fontSize: '0.8rem', fontWeight: 700, color: '#7a6020', marginTop: '0.5rem' }}>
            徹底的な成婚主義
          </div>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8, marginTop: '1rem' }}>
            婚活のスタートから成婚まで、あらゆる場面でこだわり抜いたサポートを提供します。
          </p>
        </div>

        {/* サービス一覧 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {SERVICES.map((svc, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', flexShrink: 0 }}>{svc.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.375rem', color: TEXT }}>{svc.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.75 }}>{svc.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* メッセージ */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>💍</div>
          <p style={{ fontSize: '0.875rem', color: TEXT, lineHeight: 1.8, fontWeight: 500 }}>
            「ご成婚」こそが私たちの使命。
          </p>
          <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.8, marginTop: '0.5rem' }}>
            マレッジロードジャパンは「徹底的な成婚主義」を掲げ、<br />
            会員様一人ひとりに寄り添った個別サポートを提供します。
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            こだわりのサポート内容について詳しくご説明します。
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
