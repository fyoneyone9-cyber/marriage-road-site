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

const FEATURES = [
  { icon: '🔍', title: '条件指定検索', desc: '年齢・身長・職業・居住地・年収など詳細条件で絞り込み検索が可能。理想の条件で相手を探せます。' },
  { icon: '👤', title: 'プロフィール閲覧', desc: '顔写真・自己紹介文・趣味・価値観など詳細なプロフィールを確認できます。' },
  { icon: '📩', title: 'お見合い申込み', desc: '気になる方へ直接お見合いを申込み。承認されたらお見合いが成立します。' },
  { icon: '🤖', title: 'AIマッチング補助', desc: 'AIが活動履歴・相性データをもとにおすすめの相手をピックアップしてご紹介します。' },
]

export default function MatchingSystemPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Matching System</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            お見合い検索システム
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            日本最大の婚活システム「IBJS」で104,859名以上から理想の相手を検索できます。
          </p>
        </div>

        {/* 会員数バナー */}
        <div style={{ background: PRIMARY, borderRadius: '1rem', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>IBJSシステム 登録会員数</div>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>104,859名+</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>サンマリエ・ツヴァイと同じプラットフォーム</div>
        </div>

        {/* 機能説明 */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>システムの主な機能</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{f.icon}</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.375rem', color: TEXT }}>{f.title}</div>
              <div style={{ fontSize: '0.75rem', color: MUTED, lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* プラットフォーム説明 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: TEXT }}>💡 IBJSとは？</h2>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8, marginBottom: '0.75rem' }}>
            IBJSは日本最大の婚活システムで、IBJ（日本結婚相談所連盟）が提供するプラットフォームです。サンマリエ・ツヴァイなど大手結婚相談所も同じシステムを利用しており、全国の結婚相談所会員にアクセスできます。
          </p>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8 }}>
            マレッジロードジャパンの会員様は、このIBJSシステムを通じて104,859名以上の会員と出会うことができます。AI補助機能も搭載しており、より精度の高いマッチングを実現します。
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            IBJSシステムの詳細や活用方法について、丁寧にご説明します。
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
