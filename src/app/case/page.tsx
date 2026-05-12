'use client'
import { useState } from 'react'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const CASES = [
  {
    male: { name: 'Aさん', age: 37, job: '会社員（IT系）', pref: '神奈川県' },
    female: { name: 'Bさん', age: 33, job: '看護師', pref: '東京都' },
    period: '8ヶ月',
    comment: 'プロフィール写真のアドバイスをいただき、お見合いが増えました。カウンセラーさんのサポートで自信が持てました。入会当初は不安でしたが、一歩ずつ丁寧に進めてくださったので、自然体でいられました。',
    tags: ['ZOOM婚活', 'オンライン活動', 'IT系×医療系'],
  },
  {
    male: { name: 'Cさん', age: 41, job: '自営業', pref: '神奈川県' },
    female: { name: 'Dさん', age: 36, job: '会社員', pref: '神奈川県' },
    period: '11ヶ月',
    comment: '年齢的に諦めかけていましたが、IBJのネットワークで同じ価値観の方と出会えました。焦らせず自分のペースを尊重してくださったのが一番良かったです。担当カウンセラーへの信頼が婚活の支えになりました。',
    tags: ['神奈川在住', 'ペース重視', 'プレミアムプラン'],
  },
  {
    male: { name: 'Eさん', age: 29, job: '公務員', pref: '東京都' },
    female: { name: 'Fさん', age: 28, job: '事務職', pref: '神奈川県' },
    period: '5ヶ月',
    comment: 'マッチングアプリで2年間うまくいかず、半信半疑で相談しました。カウンセラーにプロフィールを一緒に見直してもらってから、お見合いの数が一気に増えました。入会から5ヶ月という短期間で成婚できて感謝しています。',
    tags: ['短期成婚', '20代', 'アプリからの乗り換え'],
  },
]


function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP',         icon: '🏠', href: '/' },
    { label: '特徴・強み',   icon: '✨', href: '/feature' },
    { label: 'プラン・料金', icon: '💰', href: '/plan' },
    { label: '入会の流れ',   icon: '📋', href: '/flow' },
    { label: 'カウンセラー', icon: '👤', href: '/greeting' },
    { label: 'よくある質問', icon: '❓', href: '/faq' },
    { label: '実績データ',   icon: '📊', href: '/data' },
    { label: '商工会議所',   icon: '🏛️', href: '/chamber' },
    { label: '男性相談',     icon: '👨', href: '/m-contact' },
    { label: '女性相談',     icon: '👩', href: '/w-contact' },
  ]
  return (
    <div style={{
      position: 'fixed', bottom: '20px', right: '12px', zIndex: 9999,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px',
    }}>
      {open && (
        <div style={{
          background: 'rgba(45,26,26,0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '10px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          minWidth: '148px',
        }}>
          {links.map(({ label, icon, href }) => (
            <a key={href} href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '7px 12px', borderRadius: '10px',
                color: 'rgba(255,255,255,0.85)',
                textDecoration: 'none', fontSize: '13px', fontWeight: 500,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(183,110,121,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontSize: '15px', width: '20px', textAlign: 'center' }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: '#b76e79',
          color: 'white', border: 'none', cursor: 'pointer',
          fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(183,110,121,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        title="ページナビ"
        aria-label="ページナビゲーションを開く"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  )
}

export default function CasePage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Success Stories</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            ご成婚事例紹介
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            マレッジロードジャパンでご成婚された方々のご報告をご紹介します。<br />
            <span style={{ fontSize: '0.75rem' }}>※ プライバシー保護のため、お名前・一部情報は匿名化しています。</span>
          </p>
        </div>

        {/* 実績数値 */}
        <div style={{ background: PRIMARY, borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>50%</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>成婚率（IBJ全体）</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>8ヶ月</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>平均活動期間</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>100%</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>成婚後満足度</div>
            </div>
          </div>
        </div>

        {/* 成婚事例カード */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          {CASES.map((c, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '1rem', overflow: 'hidden' }}>
              {/* カードヘッダー */}
              <div style={{ background: `linear-gradient(135deg, ${PRIMARY}20 0%, ${ACCENT}15 100%)`, padding: '1.25rem 1.5rem', borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: TEXT }}>
                    {c.male.name}（{c.male.age}歳 男性）× {c.female.name}（{c.female.age}歳 女性）
                  </span>
                  <span style={{ background: PRIMARY, color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.625rem', borderRadius: '9999px' }}>
                    ✓ ご成婚
                  </span>
                </div>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.75rem', color: MUTED }}>
                    👨 {c.male.job}・{c.male.pref}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: MUTED }}>
                    👩 {c.female.job}・{c.female.pref}
                  </div>
                </div>
              </div>

              {/* カードボディ */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.5rem', padding: '0.375rem 0.875rem', fontSize: '0.8rem', fontWeight: 600, color: TEXT }}>
                    活動期間：{c.period}
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: TEXT, lineHeight: 1.8, marginBottom: '1rem', fontStyle: 'italic' }}>
                  「{c.comment}」
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {c.tags.map((tag, j) => (
                    <span key={j} style={{ background: `rgba(183,110,121,0.1)`, color: PRIMARY, fontSize: '0.7rem', padding: '0.2rem 0.625rem', borderRadius: '9999px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* メッセージ */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: TEXT, lineHeight: 1.8 }}>
            「あなたの幸せが、私たちの使命です。」<br />
            <span style={{ color: MUTED, fontSize: '0.8rem' }}>次はあなたのご成婚事例をこちらに掲載させてください。</span>
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            ご成婚者の方々と同じように、カウンセラーが全力でサポートします。
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
      <QuickNav />
    </div>
  )
}
