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

const prefectures = [
  '北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県',
  '茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県',
  '新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県',
  '静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県',
  '奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県',
  '徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県',
  '熊本県','大分県','宮崎県','鹿児島県','沖縄県',
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

export default function MContactPage() {
  const [form, setForm] = useState({
    name: '', kana: '', age: '', income: '', phone: '', pref: '', email: '',
    date1: '', date2: '', date3: '', question: '',
  })
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      alert('プライバシーポリシーへの同意が必要です。')
      return
    }
    alert('送信しました。担当者よりご連絡いたします。')
  }

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <Header />

      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, padding: '48px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#3b82f6', color: '#fff', padding: '4px 16px', borderRadius: '9999px', fontSize: '13px', marginBottom: '16px' }}>男性向け</div>
          <h1 style={{ fontSize: '32px', fontWeight: 800, color: TEXT, marginBottom: '8px' }}>男性無料相談</h1>
          <p style={{ fontSize: '16px', color: MUTED }}>まずはお気軽にご相談ください。</p>
        </div>
      </section>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 16px' }}>

        {/* 電話 */}
        <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '12px', padding: '20px', marginBottom: '32px', textAlign: 'center' }}>
          <a href="tel:050-1807-3163" style={{ fontSize: '24px', fontWeight: 800, color: PRIMARY, textDecoration: 'none' }}>📞 050-1807-3163</a>
          <p style={{ color: MUTED, fontSize: '14px', marginTop: '8px', margin: '8px 0 0' }}>受付時間 10:00〜23:00 ／ 年中無休</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gap: '20px' }}>

            <div>
              <label style={labelStyle}>お名前 <span style={{ color: 'red' }}>*</span></label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="山田 太郎" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>お名前フリガナ <span style={{ color: 'red' }}>*</span></label>
              <input name="kana" value={form.kana} onChange={handleChange} required placeholder="ヤマダ タロウ" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>年齢 <span style={{ color: 'red' }}>*</span></label>
              <input name="age" value={form.age} onChange={handleChange} required placeholder="35" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>年収（任意）</label>
              <input name="income" value={form.income} onChange={handleChange} placeholder="500万円" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>電話番号 <span style={{ color: 'red' }}>*</span></label>
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="080-1234-5678" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>都道府県（任意）</label>
              <select name="pref" value={form.pref} onChange={handleChange} style={inputStyle}>
                <option value="">選択してください</option>
                {prefectures.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            <div>
              <label style={labelStyle}>メールアドレス <span style={{ color: 'red' }}>*</span></label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="example@email.com" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>希望日時 第1希望 <span style={{ color: 'red' }}>*</span></label>
              <p style={{ fontSize: '12px', color: MUTED, margin: '0 0 6px' }}>※対面相談は神奈川県・東京都のみ</p>
              <input name="date1" value={form.date1} onChange={handleChange} required placeholder="例: 5月20日（火）19:00〜" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>希望日時 第2希望（任意）</label>
              <input name="date2" value={form.date2} onChange={handleChange} placeholder="例: 5月22日（木）20:00〜" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>希望日時 第3希望（任意）</label>
              <input name="date3" value={form.date3} onChange={handleChange} placeholder="例: 5月25日（日）15:00〜" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>ご質問（任意）</label>
              <textarea name="question" value={form.question} onChange={handleChange} rows={4} placeholder="ご質問があればご記入ください" style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ marginTop: '3px', flexShrink: 0 }} />
              <label htmlFor="agree" style={{ fontSize: '14px', color: MUTED }}>
                <a href="/privacy" style={{ color: PRIMARY }}>プライバシーポリシー</a>に同意します
              </label>
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
              無料相談する
            </button>

          </div>
        </form>

      </div>
      <Footer />
    </div>
  )
}
