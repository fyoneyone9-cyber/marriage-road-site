'use client'

ooter from '@/components/Footer'

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

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  border: `1px solid ${BORDER}`,
  borderRadius: '6px',
  fontSize: '15px',
  fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
  background: '#fff',
  color: TEXT,
  boxSizing: 'border-box' as const,
}

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 600,
  color: TEXT,
  marginBottom: '6px',
}

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: '', email: '', question: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('送信しました。')
  }

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '64px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: PRIMARY, color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>お問合せ</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '8px' }}>お問合せはコチラ</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>ご質問・ご不明な点はお気軽にどうぞ。</p>
        </div>
      </section>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '48px 16px' }}>

        {/* LINE */}
        <div style={{ background: '#fff', border: `2px solid #06C755`, borderRadius: '12px', padding: '20px', marginBottom: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#06C755', marginBottom: '8px' }}>💬 LINEでもご相談受付中</div>
          <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
            style={{ background: '#06C755', color: '#fff', padding: '12px 32px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '15px', display: 'inline-block' }}>
            LINEで相談する
          </a>
        </div>

        {/* フォーム */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '32px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: TEXT, marginBottom: '24px' }}>お問合せフォーム</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={labelStyle}>お名前 <span style={{ color: 'red' }}>*</span></label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="山田 太郎" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>メールアドレス <span style={{ color: 'red' }}>*</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="example@email.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>ご質問 <span style={{ color: 'red' }}>*</span></label>
                <textarea name="question" value={form.question} onChange={handleChange} required rows={5} placeholder="ご質問をご記入ください" style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button
                type="submit"
                style={{
                  background: PRIMARY,
                  color: '#fff',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
                }}
              >
                送信する
              </button>
            </div>
          </form>
          <p style={{ fontSize: '13px', color: MUTED, marginTop: '16px' }}>
            入力がうまくいかない場合は直接メールをお送りください：
            <a href="mailto:info@marriage-road.jp" style={{ color: PRIMARY }}>info@marriage-road.jp</a>
          </p>
        </div>

        {/* 無料相談フォームへのリンク */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: TEXT, marginBottom: '16px' }}>無料相談をご希望の方はこちら</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/m-contact" style={{ background: '#3b82f6', color: '#fff', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
              👨 男性無料相談フォーム
            </a>
            <a href="/w-contact" style={{ background: '#ec4899', color: '#fff', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '14px' }}>
              👩 女性無料相談フォーム
            </a>
          </div>
        </div>

        {/* Googleクチコミ */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: TEXT, marginBottom: '12px' }}>⭐ Googleクチコミ</h3>
          <p style={{ fontSize: '14px', color: MUTED, marginBottom: '12px' }}>ご利用いただいたお客様のご感想をお聞かせください。</p>
          <a href="https://g.page/r/CUEfOZ1F6gu7EAI/review" target="_blank" rel="noopener noreferrer"
            style={{ background: '#4285f4', color: '#fff', padding: '10px 24px', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '14px', display: 'inline-block' }}>
            クチコミを書く
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}
