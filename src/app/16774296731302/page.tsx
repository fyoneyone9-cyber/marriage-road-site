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

const REASONS = [
  {
    num: '01',
    icon: '💎',
    title: '婚活アプリより「出会いの質」が高い',
    desc: '結婚相談所では条件が両思いの相手のみにアプローチするため、出会いの質が根本的に異なります。結婚観の相性を重視したマッチングで、真剣な出会いが生まれます。マッチングアプリに比べ、相手も真剣に結婚を考えている方ばかりです。',
  },
  {
    num: '02',
    icon: '🤝',
    title: 'プロのサポートで婚活成功率アップ',
    desc: '専任の婚活コンシェルジュが活動全般をサポート。プロフィール作成・お見合いのアドバイス・お断り代行など、婚活に集中できる仕組みが整っています。一人で悩まずプロと一緒に進められるため、成婚率が大きく向上します。',
  },
  {
    num: '03',
    icon: '🌐',
    title: 'コロナ禍以降のオンライン対応強化',
    desc: 'コロナ禍以降、結婚相談所のオンライン対応が大幅に強化されました。ZOOMでの相談・お見合い・契約が全国どこからでも可能に。時間・場所を選ばない利便性が向上し、利用者が急増しています。',
  },
  {
    num: '04',
    icon: '📈',
    title: '少子化・晩婚化への社会的関心の高まり',
    desc: '日本の少子化・晩婚化問題への社会的関心が高まり、政府・自治体も婚活支援に力を入れています。「いつか結婚したい」という意識から「今、真剣に取り組もう」という行動への変化が見られます。',
  },
]

export default function WhyIncreasingPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Why Now</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            なぜ今、利用者が増えている？
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            結婚相談所の利用者が急増している4つの理由をご説明します。
          </p>
        </div>

        {/* 理由カード */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {REASONS.map((reason, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: `rgba(183,110,121,0.1)`,
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: PRIMARY,
                  flexShrink: 0,
                }}>
                  {reason.num}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>{reason.icon}</span>
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: TEXT }}>{reason.title}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>{reason.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* まとめ */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: TEXT, lineHeight: 1.8 }}>
            今こそ結婚相談所を始めるベストタイミング。<br />
            <strong style={{ color: PRIMARY }}>マレッジロードジャパン</strong>でご成婚を目指しませんか？
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            婚活のスタートについて、何でもお気軽にご相談ください。
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
