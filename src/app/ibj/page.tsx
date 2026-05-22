'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IBJ(日本結婚相談所連盟)加盟店|マレッジロードジャパン',
  description: 'マレッジロードジャパンはIBJ(日本結婚相談所連盟)加盟店(No.01226)。全国82,000人以上の会員ネットワークでお相手探しをサポート。',
  alternates: { canonical: 'https://marriage-road.jp/ibj' },
  openGraph: {
    title: 'IBJ(日本結婚相談所連盟)加盟店|マレッジロードジャパン',
    description: 'マレッジロードジャパンはIBJ(日本結婚相談所連盟)加盟店(No.01226)。全国82,000人以上の会員ネットワークでお相手探しをサポート。',
    url: 'https://marriage-road.jp/ibj',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBJ(日本結婚相談所連盟)加盟店|マレッジロードジャパン',
    description: 'マレッジロードジャパンはIBJ(日本結婚相談所連盟)加盟店(No.01226)。全国82,000人以上の会員ネットワークでお相手探しをサポート。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}


import { useState } from 'react'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const FEATURES = [
  { title: '広範なネットワーク', desc: '全国3,000以上の加盟相談所が連携。どの地域でも最適なパートナー探しが可能です。' },
  { title: '高い成婚率', desc: 'IBJ全体の成婚率は50%（IBJ定義）。業界トップクラスの実績を誇ります。' },
  { title: '多様な支援サービス', desc: '専任カウンセラーによるプロフィール作成支援、お見合いのセッティング、交際・成婚まで一貫サポート。' },
  { title: 'ITとデータ活用', desc: 'AIマッチングシステムを搭載。機械学習で相性の良い相手をピックアップしてご紹介します。' },
  { title: '信頼性と実績', desc: '東証プライム上場企業。年間成婚数19,112名（2025年）、12月単月2,013名（過去最高）。' },
  { title: '無料相談毎日実施', desc: 'ZOOM無料相談を毎週4枠実施。まずはお気軽にご相談ください。' },
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

export default function IbjPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>IBJ</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            IBJとは？
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            日本最大の結婚相談所ネットワーク「日本結婚相談所連盟（IBJ）」についてご紹介します。
          </p>
        </div>

        {/* 概要カード */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>
            IBJ（日本結婚相談所連盟）概要
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              { label: '加盟相談所数', value: '3,000以上' },
              { label: '会員数', value: '104,859名' },
              { label: '年間成婚数', value: '19,112名' },
              { label: '12月単月成婚（過去最高）', value: '2,013名' },
              { label: '上場市場', value: '東証プライム' },
              { label: '当所登録番号', value: 'No.01226' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '0.75rem', padding: '1rem', border: `1px solid ${BORDER}` }}>
                <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '0.25rem' }}>{item.label}</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: PRIMARY }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 特徴6点 */}
        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>
          IBJの6つの特徴
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: `rgba(183,110,121,0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, fontSize: '0.75rem', color: PRIMARY }}>
                0{i + 1}
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.9rem' }}>{f.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 登録番号 */}
        <div style={{ background: `rgba(201,169,110,0.12)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.75rem', color: MUTED, marginBottom: '0.25rem' }}>マレッジロードジャパン IBJ登録番号</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: ACCENT }}>No. 01226</div>
          <div style={{ fontSize: '0.75rem', color: MUTED, marginTop: '0.25rem' }}>正規加盟店として安心してご利用いただけます</div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>IBJネットワークを活用した婚活について、何でもお気軽にご相談ください。</p>
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
