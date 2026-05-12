'use client'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const NAV_LINKS = [
  ['特徴・強み', '/feature'],
  ['プラン', '/plan'],
  ['ご入会の流れ', '/flow'],
  ['カウンセラー紹介', '/greeting'],
  ['よくある質問', '/faq'],
  ['商工会議所', '/chamber'],
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

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: `1px solid ${BORDER}`,
  borderRadius: '8px',
  fontSize: '14px',
  fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
  background: '#fff',
  color: TEXT,
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: TEXT,
  marginBottom: '6px',
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header style={{
      background: 'rgba(250,247,245,0.97)',
      borderBottom: `1px solid ${BORDER}`,
      backdropFilter: 'blur(8px)',
      boxShadow: scrolled ? '0 2px 12px rgba(45,32,32,0.08)' : 'none',
      transition: 'box-shadow 0.3s ease',
    }} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" style={{ textDecoration: 'none' }}>
          <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>マレッジロードジャパン</div>
          <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
        </a>
        <nav className="hidden md:flex items-center gap-4 text-xs">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:opacity-70 transition-opacity" style={{ color: MUTED, textDecoration: 'none' }}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/m-contact" className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談 <ArrowRight size={14} />
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer' }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div style={{ background: BASE, borderTop: `1px solid ${BORDER}` }} className="md:hidden px-4 py-4 space-y-3">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm" style={{ color: MUTED, textDecoration: 'none' }}>{label}</a>
          ))}
          <a href="/m-contact" onClick={() => setMenuOpen(false)}
            className="block text-center py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: PRIMARY, textDecoration: 'none' }}>
            無料相談を予約する →
          </a>
        </div>
      )}
    </header>
  )
}

function SiteFooter() {
  return (
    <footer style={{ background: '#2d1a1a', color: 'rgba(255,255,255,0.7)' }} className="py-10 px-4 text-center text-xs">
      <div className="mb-2">
        <span className="font-semibold text-sm text-white">マレッジロードジャパン</span>
        <span className="ml-2 opacity-60">Marriage Road Japan</span>
      </div>
      <p className="mb-1">〒243-0424 神奈川県海老名市泉6-5-2-301</p>
      <p className="mb-1">
        <a href="tel:050-1807-3163" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>050-1807-3163</a>
        {' · '}
        <a href="mailto:info@marriage-road.jp" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>info@marriage-road.jp</a>
      </p>
      <p className="mb-4 opacity-70">日本結婚相談所連盟（IBJ）正規加盟店 · 登録番号No.01226</p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3">
        <a href="/feature" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特徴・強み</a>
        <a href="/plan" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プラン</a>
        <a href="/flow" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>ご入会の流れ</a>
        <a href="/greeting" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>カウンセラー紹介</a>
        <a href="/faq" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>よくある質問</a>
        <a href="/data" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>実績データ</a>
      </div>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-4">
        <a href="/privacy" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>プライバシーポリシー</a>
        <a href="/terms" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>利用規約</a>
        <a href="/tokusho" className="hover:opacity-80" style={{ color: 'inherit', textDecoration: 'none' }}>特定商取引法</a>
      </div>
      <p className="opacity-40">© 2024 Marriage Road Japan. All rights reserved.</p>
    </footer>
  )
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
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: '#3b82f6', color: '#fff' }}>男性向け</div>
          <h1 className="text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>男性無料相談</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>まずはお気軽にご相談ください。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          {/* 電話 */}
          <div className="rounded-xl p-6 mb-8 text-center" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
            <a href="tel:050-1807-3163" className="text-2xl font-bold" style={{ color: PRIMARY, textDecoration: 'none' }}>📞 050-1807-3163</a>
            <p className="text-xs mt-2" style={{ color: MUTED }}>受付時間 10:00〜23:00 ／ 年中無休</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              <p className="text-xs mb-1" style={{ color: MUTED }}>※対面相談は神奈川県・東京都のみ</p>
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

            <div className="flex items-start gap-3">
              <input type="checkbox" id="agree" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ marginTop: '3px', flexShrink: 0 }} />
              <label htmlFor="agree" className="text-xs" style={{ color: MUTED }}>
                <a href="/privacy" style={{ color: PRIMARY }}>プライバシーポリシー</a>に同意します
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY, border: 'none', cursor: 'pointer', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
            >
              無料相談する
            </button>
          </form>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
