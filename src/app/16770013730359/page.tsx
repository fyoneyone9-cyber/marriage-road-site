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

const ADVANTAGES = [
  {
    icon: '💎',
    title: '出会いの質が高い',
    desc: '条件が両思いの相手のみにアプローチ。結婚観の相性を重視したマッチングで、真剣な出会いが生まれます。',
  },
  {
    icon: '🤝',
    title: 'プロのサポートで婚活成功率アップ',
    desc: '婚活コンシェルジュが活動全般をサポート。プロフィール作成・お見合いのアドバイスで成婚率が大きく向上します。',
  },
  {
    icon: '🔐',
    title: '独身証明・審査済みで安心安全',
    desc: '全会員が独身証明書を提出済み。身元確認もしっかり行われており、マッチングアプリより安全に婚活できます。',
  },
  {
    icon: '💌',
    title: 'お断り代行など婚活しやすい仕組み',
    desc: 'お断りの連絡は相談所が代行。傷つかずに活動を続けられるため、自然体で婚活に集中できます。',
  },
]

const COMPARISON = [
  { item: '独身証明', agency: '✅ 必須（全員）', app: '❌ 任意（未確認多数）' },
  { item: '専任サポート', agency: '✅ カウンセラーが担当', app: '❌ 基本なし' },
  { item: '成婚率', agency: '✅ 約50%（IBJ定義）', app: '⚠️ 約5〜10%' },
  { item: 'お断り代行', agency: '✅ あり', app: '❌ 自分で対応' },
  { item: '身元確認', agency: '✅ 審査済み', app: '❌ 自己申告のみ' },
  { item: '費用感', agency: '月額数万円〜', app: '無料〜月額数千円' },
  { item: '対象', agency: '真剣な結婚希望者のみ', app: '様々な目的の方が混在' },
]

export default function ComparisonPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Comparison</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            マッチングアプリとの違い
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            結婚相談所とマッチングアプリ、何が違うのか。<br />
            データで比較してわかりやすくご説明します。
          </p>
        </div>

        {/* 成婚率比較 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center', color: TEXT }}>成婚率の比較</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'white', border: `2px solid ${PRIMARY}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: MUTED, marginBottom: '0.5rem' }}>結婚相談所（IBJ）</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: PRIMARY }}>50%</div>
              <div style={{ fontSize: '0.7rem', color: MUTED }}>IBJ定義</div>
            </div>
            <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: MUTED, marginBottom: '0.5rem' }}>マッチングアプリ</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: MUTED }}>5〜10%</div>
              <div style={{ fontSize: '0.7rem', color: MUTED }}>成婚到達率</div>
            </div>
          </div>
        </div>

        {/* 結婚相談所の優位性 */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>結婚相談所の4つの優位性</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {ADVANTAGES.map((adv, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{adv.icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem', color: TEXT }}>{adv.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{adv.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 比較表 */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>詳細比較表</h2>
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', overflow: 'hidden', marginBottom: '2rem' }}>
          {/* ヘッダー */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', background: PRIMARY, padding: '0.75rem 1rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>比較項目</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', textAlign: 'center' }}>結婚相談所</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', textAlign: 'center' }}>マッチングアプリ</div>
          </div>
          {COMPARISON.map((row, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr 1.2fr',
              padding: '0.875rem 1rem',
              borderTop: `1px solid ${BORDER}`,
              background: i % 2 === 0 ? 'white' : BASE,
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: TEXT, display: 'flex', alignItems: 'center' }}>{row.item}</div>
              <div style={{ fontSize: '0.75rem', color: TEXT, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.agency}</div>
              <div style={{ fontSize: '0.75rem', color: MUTED, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{row.app}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            結婚相談所のメリットについて、詳しくご説明します。
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
