'use client'

import { useState } from 'react'

const PRIMARY = '#c9836f'
const ACCENT = '#d4a96a'
const BASE = '#fff8f5'
const SURFACE = '#fff1eb'
const TEXT = '#3d2c2c'
const MUTED = '#8a6a60'
const BORDER = '#e8d5cc'

const navLinks = [
  { label: 'トップ', href: '/' },
  { label: '初めての方へ', href: '/readme' },
  { label: '選ばれる理由', href: '/feature' },
  { label: 'プラン', href: '/plan' },
  { label: 'カウンセラー', href: '/greeting' },
  { label: '流れ', href: '/flow' },
  { label: 'FAQ', href: '/faq' },
  { label: 'お問合せ', href: '/16760950606960' },
]

function Header() {
  return (
    <header style={{ background: '#fff', borderBottom: `1px solid ${BORDER}`, position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <a href="/" style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif", fontWeight: 700, fontSize: '18px', color: PRIMARY, textDecoration: 'none' }}>
          マレッジロードジャパン
        </a>
        <nav style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif", fontSize: '13px', color: TEXT, textDecoration: 'none' }}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ background: TEXT, color: '#fff', padding: '40px 16px', marginTop: '80px', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        <div style={{ fontWeight: 700, fontSize: '18px', color: PRIMARY, marginBottom: '16px' }}>マレッジロードジャパン</div>
        <div style={{ fontSize: '14px', color: '#ccc', lineHeight: '2' }}>
          <div>〒243-0424 神奈川県海老名市社家6-5-2-301</div>
          <div>TEL: 050-1807-3163</div>
          <div>MAIL: info@marriage-road.jp</div>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px', fontSize: '13px' }}>
          <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none' }}>プライバシーポリシー</a>
          <a href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>利用規約</a>
          <a href="/tokusho" style={{ color: '#aaa', textDecoration: 'none' }}>特定商取引法</a>
        </div>
        <div style={{ marginTop: '16px', fontSize: '12px', color: '#888' }}>© 2024 マレッジロードジャパン All rights reserved.</div>
      </div>
    </footer>
  )
}

const faqs = [
  {
    q: 'まずはプランの内容について直接お話を聞きたいのですが？',
    a: 'ホームページ記載の電話番号かメールフォームまでお気軽にお問い合わせください。',
  },
  {
    q: '無料相談で強引な勧誘はされませんか？',
    a: 'いたしません。勧誘行為は一切行っておりませんのでご安心ください。',
  },
  {
    q: '無料相談の場所はどこでも大丈夫ですか？',
    a: 'カフェや図書館などどこでも大丈夫です。オンラインなら全国対応。対面は神奈川県内のみとなります。',
  },
  {
    q: '忙しくて時間が取れなくても大丈夫？',
    a: '対応いたします。可能な限りお時間を合わせますのでお気軽にご相談ください。',
  },
  {
    q: '入会審査はありますか？',
    a: 'ございます。必ずオンラインもしくは対面で無料説明会を実施し、ご意志確認後に本入会となります。',
  },
  {
    q: '離婚歴がありますが、入会できますか？',
    a: 'もちろんです。離婚されて入会している方も多数所属しております。お気軽にご相談ください。',
  },
  {
    q: '支払方法について教えてください。',
    a: '現金払い・お振り込み・クレジットカードのいずれかをご選択いただけます。',
  },
  {
    q: '会社を辞めて独立したばかりで収入が安定していません。',
    a: 'まずはご相談ください。IBJ正規加盟店としての規定がありますので、状況をヒアリングした上でご案内いたします。',
  },
  {
    q: '人見知りなのでパーティやイベント参加が不安です。',
    a: 'もちろんサポートします。イベント参加自体、無理しなくても問題ございません。あなたのペースに合わせてサポートします。',
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: `1px solid ${BORDER}`, borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          background: open ? SURFACE : '#fff',
          border: 'none',
          padding: '18px 20px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'left',
          fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
        }}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flex: 1 }}>
          <span style={{ background: PRIMARY, color: '#fff', fontWeight: 700, fontSize: '13px', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>Q</span>
          <span style={{ fontSize: '15px', fontWeight: 600, color: TEXT }}>{q}</span>
        </div>
        <span style={{ color: PRIMARY, fontSize: '20px', flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
      </button>
      {open && (
        <div style={{ background: '#fff', padding: '16px 20px', borderTop: `1px solid ${BORDER}` }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ background: ACCENT, color: '#fff', fontWeight: 700, fontSize: '13px', padding: '2px 8px', borderRadius: '4px', flexShrink: 0 }}>A</span>
            <p style={{ fontSize: '15px', color: MUTED, lineHeight: 1.8, margin: 0 }}>{a}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>よくある質問</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '16px' }}>よくある質問</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>お気軽にご質問ください。</p>
        </div>
      </section>

      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '48px 16px' }}>

        <div style={{ marginBottom: '48px' }}>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        {/* その他の質問 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '15px', color: MUTED, marginBottom: '16px' }}>その他、ご不明な点はお気軽にお問い合わせください。</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:050-1807-3163" style={{ background: PRIMARY, color: '#fff', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              📞 050-1807-3163
            </a>
            <a href="/16760950606960" style={{ background: '#fff', color: PRIMARY, border: `2px solid ${PRIMARY}`, padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '15px' }}>
              メールで問い合わせ
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
