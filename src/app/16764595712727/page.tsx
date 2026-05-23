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

const SNS_LIST = [
  {
    icon: '💬',
    name: 'LINE公式アカウント',
    handle: '@marriage_road',
    desc: '婚活パーティ情報・婚活診断を配信中！お気軽にお友達追加ください。',
    url: 'https://lin.ee/UxgdZ7F',
    label: 'LINEを追加する',
    color: '#06C755',
  },
  {
    icon: '📝',
    name: '公式note',
    handle: 'marriage_road',
    desc: '婚活お役立ち情報を発信中。婚活のコツや体験談など読み応えのある記事をご用意しています。',
    url: 'https://note.com/marriage_road',
    label: 'noteを読む',
    color: '#41C9B4',
  },
  {
    icon: '🐦',
    name: 'X（旧Twitter）',
    handle: '@marriage_road',
    desc: '最新情報や婚活に関するTipsを随時発信中。フォローしてお得な情報をゲットしてください。',
    url: 'https://x.com/marriage_road',
    label: 'Xをフォローする',
    color: '#000000',
  },
  {
    icon: '▶️',
    name: 'YouTubeチャンネル',
    handle: '@marriage_road',
    desc: '婚活動画を配信中。カウンセラーによる婚活アドバイス、相談所紹介などをお届けします。',
    url: 'https://www.youtube.com/@marriage_road',
    label: 'YouTubeを見る',
    color: '#FF0000',
  },
]

export default function SnsPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>SNS</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            公式SNS
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            マレッジロードジャパンの公式SNSをフォローして、最新情報をお受け取りください。
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {SNS_LIST.map((sns, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{sns.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', color: TEXT }}>{sns.name}</div>
                  <div style={{ fontSize: '0.75rem', color: MUTED, marginBottom: '0.5rem' }}>{sns.handle}</div>
                  <div style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.7, marginBottom: '1rem' }}>{sns.desc}</div>
                  <a href={sns.url} target="_blank" rel="noopener noreferrer"
                    style={{ background: sns.color, color: 'white', textDecoration: 'none', padding: '0.5rem 1.25rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.8rem', display: 'inline-block' }}>
                    {sns.label} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            LINE・ZOOMどちらでもご相談いただけます。
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
