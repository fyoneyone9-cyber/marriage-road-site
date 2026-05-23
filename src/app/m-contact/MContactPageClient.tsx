'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Footer from '@/components/Footer'

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
    <Footer />
  )
}

function QuickNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'TOP',       icon: '🏠', href: '/' },
    { label: '特徴・強み', icon: '✨', href: '/feature' },
    { label: 'プラン・料金', icon: '💰', href: '/plan' },
    { label: '入会の流れ', icon: '📋', href: '/flow' },
    { label: 'カウンセラー', icon: '👤', href: '/greeting' },
    { label: 'よくある質問', icon: '❓', href: '/faq' },
    { label: '実績データ', icon: '📊', href: '/data' },
    { label: '商工会議所', icon: '🏛️', href: '/chamber' },
    { label: '男性相談',  icon: '👨', href: '/m-contact' },
    { label: '女性相談',  icon: '👩', href: '/w-contact' },
  ]
  return (
    <div style={{
      position: 'fixed', bottom: '24px', right: '16px', zIndex: 9999,
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
                background: typeof window !== 'undefined' && window.location.pathname === href
                  ? 'rgba(183,110,121,0.5)' : 'transparent',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(183,110,121,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background =
                typeof window !== 'undefined' && window.location.pathname === href
                  ? 'rgba(183,110,121,0.5)' : 'transparent')}
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
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(183,110,121,0.7)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(183,110,121,0.5)'; }}
        title="ページナビ"
        aria-label="ページナビゲーションを開く"
      >
        {open ? '✕' : '☰'}
      </button>
    </div>
  )
}

export default function MContactPageClient() {
  const [form, setForm] = useState({
    name: '', kana: '', age: '', income: '', phone: '', pref: '', email: '',
    date1: '', date2: '', date3: '', question: '',
  })
  const [agreed, setAgreed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      alert('プライバシーポリシーへの同意が必要です。')
      return
    }
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gender: 'male', ...form }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setSubmitError(data.error || '送信に失敗しました。お電話にてお問い合わせください。')
      }
    } catch {
      setSubmitError('ネットワークエラーが発生しました。お電話にてお問い合わせください。')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif", color: TEXT }}>
      <SiteHeader />

      {/* ページタイトル */}
      <section style={{ background: `linear-gradient(135deg, ${SURFACE} 0%, #fde8df 100%)`, paddingTop: '80px' }} className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: '#3b82f6', color: '#fff' }}>男性向け</div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ color: TEXT }}>男性無料相談</h1>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>まずはお気軽にご相談ください。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          {/* TimeRex 予約バナー */}
          <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-xl p-5 mb-3 transition-all hover:opacity-90"
            style={{ background: PRIMARY, textDecoration: 'none', boxShadow: '0 4px 16px rgba(183,110,121,0.35)' }}>
            <div>
              <p className="text-white font-bold text-sm mb-0.5">📅 無料説明会をオンライン予約</p>
              <p className="text-white/80 text-xs">日程を選ぶだけ。Zoom・対面どちらも対応。</p>
            </div>
            <span className="text-white text-lg flex-shrink-0">→</span>
          </a>

          {/* LINE相談ボタン */}
          <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl p-4 mb-5 transition-all hover:opacity-90"
            style={{ background: '#06C755', textDecoration: 'none', boxShadow: '0 4px 16px rgba(6,199,85,0.3)' }}>
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-white font-bold text-sm">LINEで気軽に相談する</p>
              <p className="text-white/80 text-xs">公式LINEに登録してトーク</p>
            </div>
          </a>

          {/* 送信完了画面 */}
          {submitted ? (
            <div className="rounded-2xl p-10 text-center" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h2 className="text-xl font-bold mb-3" style={{ color: PRIMARY }}>送信完了しました</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
                お申し込みありがとうございます。<br />
                担当者より 1〜2営業日以内にご連絡いたします。
              </p>
              <a href="/" className="inline-block px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: PRIMARY, textDecoration: 'none' }}>
                トップページへ戻る
              </a>
            </div>
          ) : (
          <>

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

            {submitError && (
              <div className="rounded-lg p-4 text-sm" style={{ background: '#fff0f0', border: '1px solid #ffcccc', color: '#cc0000' }}>
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
              style={{ background: PRIMARY, border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
            >
              {submitting ? '送信中...' : '無料相談する'}
            </button>
          </form>
          </>
          )}
        </div>
      </div>

      <SiteFooter />
      <QuickNav />
    </div>
  )
}
