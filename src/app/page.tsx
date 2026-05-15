'use client'
import { useState, useEffect } from 'react'
import {
  Heart, Users, Clock, Star, ChevronDown, ChevronUp,
  Mail, Phone, Youtube, CheckCircle, ArrowRight, Menu, X,
  Shield, Video, CreditCard, MessageCircle, Sparkles, MapPin,
} from 'lucide-react'
import Footer from '@/components/Footer'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const STATS = [
  { value: '82,000人+', label: 'IBJ全国会員数', icon: Users },
  { value: '52,018組+', label: '成婚カップル数', icon: Heart },
  { value: '年中無休', label: '受付時間 10:00〜23:00', icon: Clock },
  { value: 'NO.01226', label: 'IBJ登録番号', icon: Star },
]

const REASONS = [
  {
    icon: Shield,
    title: 'IBJプライバシーの安全性',
    desc: '日本最大級の結婚相談所ネットワーク「IBJ」正規加盟店（登録番号No.01226）。上級仲人カウンセラー資格取得済み。細やかなサポートまでお任せください。',
  },
  {
    icon: Video,
    title: 'オンライン完全対応',
    desc: 'ZOOMでの無料相談は毎週4枠実施。オンラインで全国対応・神奈川県は対面対応も可能。貴重なお時間を使わず遠方でも必要はありません。',
  },
  {
    icon: Heart,
    title: '選びやすい3つのプラン',
    desc: 'ライト・スタンダード・プレミアムの3プランを用意。初月月会費無料キャンペーン実施中。サンマリエ・ツヴァイと同じIBJSプラットフォームで最適なお相手を探せます。',
  },
]

const PLANS = [
  {
    name: 'ライトプラン',
    target: '全国対応',
    monthlyFee: '8,000円',
    omiai: 'お見合い10件まで 1,000円/回',
    features: [
      '無料相談・ヒアリング（オンライン）',
      '随時連絡（LINE・電話・メール）',
      '婚活プロフィール作成',
      '活動サポートミーティング',
      '活動〜成婚までのフォロー',
    ],
    highlight: false,
    note: '自分のペースで活動',
  },
  {
    name: 'スタンダードプラン',
    target: '全国対応',
    monthlyFee: '9,800円',
    omiai: 'お見合い100件まで無料',
    features: [
      '無料相談・ヒアリング（オンライン）',
      '随時連絡（LINE・電話・メール）',
      '婚活プロフィール作成',
      '毎月お相手のご紹介',
      '活動サポートミーティング',
      '活動〜成婚までのフォロー',
      '成婚後のアフターフォロー',
    ],
    highlight: true,
    note: '一番選ばれているプラン',
  },
  {
    name: 'プレミアムプラン',
    target: '神奈川県限定',
    monthlyFee: '18,000円',
    omiai: 'お見合い200件まで無料',
    features: [
      '無料相談・ヒアリング（対面orオンライン）',
      '随時連絡（LINE・電話・メール）',
      '婚活プロフィール作成',
      '毎月お相手のご紹介',
      '活動サポートミーティング',
      '活動全般サポート',
      '対面アドバイス・カウンセリング',
      '活動〜成婚まで全力サポート',
      '成婚後のアフターフォロー',
    ],
    highlight: false,
    note: '神奈川県のフルサポート',
  },
]

const STEPS = [
  { num: 1, title: '無料相談（オンライン or 対面）', desc: 'ZOOMでの無料相談は毎週4枠実施。まずはお気軽にご相談ください。神奈川県にお住まいの方は対面相談も可能です。' },
  { num: 2, title: '登録・プロフィール作成', desc: '身分証明書などの書類確認後、魅力的なプロフィールを一緒に作成。審査を経て最適に仕上げます。' },
  { num: 3, title: 'IBJSでのお相手検索・お見合い', desc: 'サンマリエ・ツヴァイと同じIBJSプラットフォームで82,000人以上の会員にアプローチ。' },
  { num: 4, title: 'デート', desc: '近郊エリアのカフェや結婚式場、またはオンラインでデートを重ねます。緊張しないよう事前しっかりサポートします。' },
  { num: 5, title: '婚約・成婚', desc: 'ご成婚まで、カウンセラーが全力でサポート。成婚後のアフターフォローも充実しています。' },
]

const FAQS = [
  {
    q: '活動に必要な書類は何ですか？',
    a: '身分証明書・卒業証明書（大卒以上の場合）が必要です。男性の方は収入証明書（源泉徴収票等）もお願いしています。Web上での書類提出も可能です。',
  },
  {
    q: 'オンラインでの相談・活動はできますか？',
    a: 'はい、Zoomを使ったオンラインでの無料相談・活動全般に対応しています。全国どこからでもお気軽にご相談いただけます。無料相談は毎週4枠実施しています。',
  },
  {
    q: 'マッチングアプリと何が違いますか？',
    a: '全会員が登録審査済みで、真剣に結婚を考えた方のみが参加しています。IBJSはサンマリエ・ツヴァイと同じプラットフォームで、マッチングアプリよりも成婚率が高いサービスです。',
  },
  {
    q: '料金の支払い方法を教えてください。',
    a: '銀行振込・楽天ペイ・d払い・PayPayに対応しています。初月月会費無料キャンペーンも実施中です。詳細は無料相談にてご案内します。',
  },
  {
    q: '神奈川県以外でも利用できますか？',
    a: 'ライトプラン・スタンダードプランは全国対応です。プレミアムプランは神奈川県限定となりますが、オンラインでは全国どこからでもご利用いただけます。',
  },
]

const PAYMENT_METHODS = ['銀行振込', '楽天ペイ', 'd払い', 'PayPay']

const NAV_LINKS = [
  ['特徴・強み', '/feature'],
  ['プラン', '/plan'],
  ['ご入会の流れ', '/flow'],
  ['カウンセラー紹介', '/greeting'],
  ['よくある質問', '/faq'],
  ['商工会議所', '/chamber'],
]


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
    { label: 'ブログ',    icon: '📝', href: '/blog' },
    { label: '商工会議所', icon: '🏛️', href: '/chamber' },
    { label: '男性相談',  icon: '👨', href: '/m-contact' },
    { label: '女性相談',  icon: '👩', href: '/w-contact' },
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>

      {/* ── ヘッダー ── */}
      <header style={{
        background: 'rgba(250,247,245,0.97)',
        borderBottom: `1px solid ${BORDER}`,
        backdropFilter: 'blur(8px)',
        boxShadow: scrolled ? '0 2px 12px rgba(45,32,32,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }} className="fixed top-0 left-0 right-0 z-50">
        {/* ヘッダー内略 */}
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
              マレッジロードジャパン
            </div>
            <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[#f5e8e8]"
                style={{ color: '#5a3a3a', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/m-contact" className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY }}>
              無料相談 <ArrowRight size={14} />
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer' }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* ── ヒーロー ── */}
      <section style={{ background: `linear-gradient(160deg, #fde8df 0%, #faf7f5 50%, #fdf5e8 100%)`, minHeight: "auto" }}
        className="flex items-center">
        <div className="max-w-5xl mx-auto px-5 py-10 text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(201,169,110,0.15)', border: `1px solid rgba(201,169,110,0.4)`, color: '#7a6020' }}>
            🎉 初月月会費無料キャンペーン実施中
          </div>

          <h1 style={{ color: TEXT, lineHeight: 1.2 }} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4">
            真剣な出会いを、丁寧に。
          </h1>

          <p className="text-base leading-relaxed mb-2 max-w-2xl mx-auto" style={{ color: MUTED }}>
            IBJ加盟<strong style={{ color: TEXT }}>82,000人以上</strong>の真剣婚活者と出会える結婚相談所。<br />
            オンライン全国対応 · ZOOM無料相談は毎週4枠実施
          </p>

          <p className="text-xs mb-8" style={{ color: MUTED }}>
            <MapPin size={12} className="inline mr-1" />
            〒243-0424 神奈川県海老名市社家6-5-2-301 · IBJ正規加盟店 No.01226
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: PRIMARY }}>
              <Video size={16} /> ZOOM無料相談を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-80"
              style={{ border: `2px solid #06C755`, color: '#06C755', background: 'white', textDecoration: 'none' }}>
              <MessageCircle size={16} /> LINEで相談する
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {['IBJ正規加盟店', '登録審査済み会員のみ', '初月月会費無料', 'ZOOM対応・全国OK'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-xs" style={{ color: MUTED }}>
                <CheckCircle size={13} style={{ color: ACCENT }} />
                {badge}
              </div>
            ))}
          </div>

          {/* 商工会議所バッジ */}
          <div className="mt-6 flex justify-center">
            <a href="/chamber" style={{ textDecoration: 'none' }}>
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ background: 'rgba(255,255,255,0.95)', border: `2px solid ${BORDER}`, boxShadow: '0 4px 16px rgba(45,26,26,0.12)' }}>
                <img
                  src="/chamber-badge.jpg"
                  alt="海老名商工会議所 会員之証"
                  style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <div className="text-left">
                  <div className="text-sm font-bold mb-0.5" style={{ color: TEXT }}>海老名商工会議所 公認</div>
                  <div className="text-xs font-medium" style={{ color: MUTED }}>会員No. 4954　EBINA CHAMBER OF COMMERCE &amp; INDUSTRY</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── ページ導線カード ── */}
      <section className="py-8 px-4" style={{ background: '#fff8f5', borderBottom: '1px solid #e8d5d0' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold mb-4 tracking-widest uppercase" style={{ color: '#b76e79' }}>MENU</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {[
              { icon: '✨', label: '特徴・強み', href: '/feature' },
              { icon: '💰', label: 'プラン・料金', href: '/plan' },
              { icon: '📋', label: '入会の流れ', href: '/flow' },
              { icon: '👤', label: 'カウンセラー', href: '/greeting' },
              { icon: '❓', label: 'よくある質問', href: '/faq' },
              { icon: '📞', label: '無料相談', href: '/m-contact' },
            ].map(({ icon, label, href }) => (
              <a key={href} href={href}
                className="flex flex-col items-center gap-1.5 py-4 px-2 rounded-xl transition-all hover:scale-105 hover:shadow-md"
                style={{ background: 'white', border: '1px solid #e8d5d0', textDecoration: 'none' }}>
                <span className="text-2xl">{icon}</span>
                <span className="text-xs font-semibold text-center leading-tight" style={{ color: '#5a3a3a' }}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 実績数字 ── */}
      <section className="py-16" style={{ background: PRIMARY }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="text-center">
                <Icon size={24} className="mx-auto mb-2 opacity-80" style={{ color: 'white' }} />
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-white/80 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IBJ認定証 ── */}
      <section className="py-16 md:py-24 px-6" style={{ background: SURFACE }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium mb-2 tracking-widest uppercase" style={{ color: PRIMARY }}>Official Certification</p>
            <h2 className="text-2xl font-semibold" style={{ color: TEXT }}>実績と信頼の証：IBJ正規加盟認定店</h2>
            <div className="mt-3 w-12 h-0.5 mx-auto" style={{ background: PRIMARY }} />
          </div>
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <img
                src="/ibj-cert-cropped.jpg"
                alt="IBJ正規加盟認定証 マレッジロードジャパン 相談所No.01226"
                className="rounded-2xl shadow-xl"
                style={{ width: "min(280px, 85vw)", height: "auto", objectFit: "contain", border: `1px solid ${BORDER}` }}
              />
              <p className="text-center text-xs mt-3 font-semibold" style={{ color: PRIMARY }}>相談所 No.01226</p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-3" style={{ color: TEXT }}>
                日本結婚相談所連盟（IBJ）正規加盟認定店
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                マレッジロードジャパンは、日本最大級の結婚相談所ネットワーク「IBJ（日本結婚相談所連盟）」の正規加盟認定店として、厳格な審査のもとで認定されています。全国82,000人以上の会員と出会える信頼のネットワークです。
              </p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  ['加盟番号', 'No.01226'],
                  ['会員数', '82,000人以上'],
                  ['サービス対象', '全国対応（ZOOM可）'],
                  ['認定機関', '株式会社IBJ'],
                ].map(([label, val]) => (
                  <div key={label} className="rounded-lg p-3" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                    <div className="text-xs mb-0.5" style={{ color: MUTED }}>{label}</div>
                    <div className="text-sm font-bold" style={{ color: TEXT }}>{val}</div>
                  </div>
                ))}
              </div>
              <a href="/m-contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: PRIMARY, textDecoration: 'none' }}>
                IBJについて詳しく聞く →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 選ばれる理由 ── */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>Why Choose Us</p>
            <h2 className="text-xl font-semibold">選ばれる3つの理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="rounded-xl p-6"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `rgba(183,110,121,0.12)` }}>
                  <Icon size={20} style={{ color: PRIMARY }} />
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: ACCENT }}>0{i + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/feature" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90"
              style={{ background: PRIMARY, color: 'white', textDecoration: 'none' }}>
              特徴・強みをもっと詳しく →
            </a>
          </div>
        </div>
      </section>

      {/* ── プラン ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: SURFACE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>Plans</p>
            <h2 className="text-xl font-semibold">プラン・料金</h2>
            <p className="mt-1 text-xs" style={{ color: MUTED }}>詳細な料金は無料相談にてご案内します。初月月会費無料キャンペーン実施中！</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(({ name, target, monthlyFee, omiai, features, highlight, note }, i) => (
              <div key={i} className="rounded-xl p-6 flex flex-col relative"
                style={{
                  background: highlight ? PRIMARY : 'white',
                  border: highlight ? `2px solid ${PRIMARY}` : `1px solid ${BORDER}`,
                  boxShadow: highlight ? `0 8px 24px rgba(183,110,121,0.25)` : 'none',
                }}>
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-xs font-bold px-4 py-1 rounded-full shadow" style={{ color: PRIMARY }}>
                      人気No.1
                    </span>
                  </div>
                )}
                <div className="mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: highlight ? 'rgba(255,255,255,0.2)' : `rgba(183,110,121,0.1)`, color: highlight ? 'white' : PRIMARY }}>
                    {target}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1" style={{ color: highlight ? 'white' : TEXT }}>
                  {name}
                </h3>
                <p className="text-xs mb-3" style={{ color: highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>{note}</p>
                {/* 料金表示 */}
                <div className="mb-4 p-3 rounded-xl" style={{ background: highlight ? 'rgba(255,255,255,0.15)' : 'rgba(183,110,121,0.07)' }}>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-black" style={{ color: highlight ? 'white' : PRIMARY }}>{monthlyFee}</span>
                    <span className="text-xs" style={{ color: highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>/月（初月無料）</span>
                  </div>
                  <div className="text-xs" style={{ color: highlight ? 'rgba(255,255,255,0.8)' : MUTED }}>{omiai}</div>
                  <div className="mt-2 pt-2 text-xs space-y-0.5" style={{ borderTop: highlight ? '1px solid rgba(255,255,255,0.2)' : `1px solid ${BORDER}`, color: highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>
                    <div>入会金 28,000円（初回のみ）</div>
                    <div>IBJSシステム登録料 9,800円（初回のみ）</div>
                    <div>ご成婚料 200,000円（成婚時のみ）</div>
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-5">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm"
                      style={{ color: highlight ? 'rgba(255,255,255,0.9)' : MUTED }}>
                      <CheckCircle size={13} style={{ color: highlight ? 'white' : ACCENT, flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/m-contact"
                  className="block text-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: highlight ? 'white' : PRIMARY,
                    color: highlight ? PRIMARY : 'white',
                    textDecoration: 'none',
                  }}>
                  無料相談で詳細を聞く →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs mb-2" style={{ color: MUTED }}>対応支払い方法</p>
            <div className="flex flex-wrap justify-center gap-2">
              {PAYMENT_METHODS.map((m, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: BASE, border: `1px solid ${BORDER}`, color: MUTED }}>
                  <CreditCard size={11} style={{ color: PRIMARY }} /> {m}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/plan" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none' }}>
              プラン詳細ページを見る →
            </a>
          </div>
        </div>
      </section>

      {/* ── 入会の流れ ── */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>How it Works</p>
            <h2 className="text-xl font-semibold">ご相談から成婚までの流れ</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 rounded-xl p-6"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ background: PRIMARY }}>
                  {num}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/flow" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90"
              style={{ background: PRIMARY, color: 'white', textDecoration: 'none' }}>
              ご入会の流れを詳しく見る →
            </a>
          </div>
        </div>
      </section>


      {/* ── 口コミ ── */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: '#b76e79' }}>Reviews</p>
            <h2 className="text-xl font-semibold">ご成婚者の声</h2>
            <p className="text-xs mt-1" style={{ color: '#8a6a6a' }}>実際にマレッジロードジャパンでご成婚された方々からのコメントです</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: '30代男性・会社員',
                area: '神奈川県在住',
                text: 'マッチングアプリで2年間うまくいかず、半信半疑で相談しました。カウンセラーにプロフィールを一緒に見直してもらってから、お見合いの数が一気に増えて。入会から5ヶ月で成婚できました。',
                stars: 5,
              },
              {
                name: '30代女性・看護師',
                area: '東京都在住（オンライン利用）',
                text: '仕事が不規則でなかなか活動できるか不安でしたが、オンラインで全部完結できたのが本当に助かりました。夜遅くでも相談に乗っていただけて、無理なく続けられました。',
                stars: 5,
              },
              {
                name: '40代男性・自営業',
                area: '神奈川県在住',
                text: '年齢的に諦めかけていましたが、IBJのネットワークで同じ価値観の方と出会えました。焦らせず自分のペースを尊重してくださったのが一番良かったです。',
                stars: 5,
              },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: '#fff2ee', border: `1px solid ${'#e8d5d0'}` }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.stars)].map((_, j) => (
                    <span key={j} style={{ color: '#c9a96e' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#2d2020' }}>「{r.text}」</p>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#2d2020' }}>{r.name}</div>
                  <div className="text-xs" style={{ color: '#8a6a6a' }}>{r.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ページナビゲーション ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: '#fdf5f0' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>EXPLORE</p>
            <h2 className="text-xl font-semibold" style={{ color: TEXT }}>詳しく知りたい方へ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/feature',  icon: '✨', title: '特徴・強み',       desc: 'IBJネットワーク・オンライン対応など' },
              { href: '/plan',     icon: '💰', title: 'プラン・料金',     desc: 'ライト〜プレミアム。まず無料相談を' },
              { href: '/flow',     icon: '📋', title: 'ご入会の流れ',     desc: '相談から成婚までの5ステップ' },
              { href: '/greeting', icon: '👤', title: 'カウンセラー紹介', desc: '資格・経歴・婚活への想い' },
              { href: '/data',     icon: '📊', title: '実績データ',       desc: '成婚実績・会員数など' },
              { href: '/blog',     icon: '📝', title: '婚活ブログ',       desc: '婚活コラム50本以上。役立つ情報満載' },
              { href: '/chamber',  icon: '🏛️', title: '商工会議所',       desc: '海老名商工会議所 会員No.4954' },
            ].map(({ href, icon, title, desc }) => (
              <a key={href} href={href} style={{ textDecoration: 'none' }}>
                <div className="rounded-xl p-5 h-full transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: TEXT }}>{title}</div>
                  <div className="text-xs leading-relaxed hidden sm:block" style={{ color: MUTED }}>{desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── AIツールAPI PRセクション ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: '#fdf5f0' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{ background: 'rgba(183,110,121,0.12)', border: '1px solid rgba(183,110,121,0.3)', color: '#b76e79' }}>
              🤝 NextraLabs × マレッジロードジャパン 共同提供
            </div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: TEXT }}>
              結婚相談所向け AIツールAPI
            </h2>
            <p className="text-sm" style={{ color: MUTED }}>
              結婚相談所の業務を AI でサポートする専門ツールを API として提供
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: '✍️',
                title: 'プロフィール添削AI',
                desc: '会員のプロフィール文を入力するだけで、婚活市場で刺さる魅力的な文章に添削・改善アドバイスを自動生成します。',
              },
              {
                icon: '💌',
                title: 'マッチング提案文AI',
                desc: 'お見合い申込時の提案文を自動作成。会員情報を入力するだけで、自然で誠実なメッセージ文を瞬時に生成します。',
              },
              {
                icon: '📧',
                title: 'フォローメールAI',
                desc: 'お見合い後のフォローメールテンプレートを自動生成。次の交際ステップへ自然につながる温かい文面を提案します。',
              },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="rounded-xl p-6 text-center"
                style={{ background: 'white', border: '2px solid #e8d5d0', boxShadow: '0 4px 16px rgba(183,110,121,0.08)' }}>
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: TEXT }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 md:p-8 text-center"
            style={{ background: `linear-gradient(135deg, rgba(183,110,121,0.1) 0%, rgba(201,169,110,0.1) 100%)`, border: '2px solid #e8d5d0' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
              style={{ background: PRIMARY, color: 'white' }}>
              🎁 NextraLabsメンバー限定
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: TEXT }}>
              月10回無料 / プレミアムプランで無制限
            </p>
            <p className="text-xs mb-6" style={{ color: MUTED }}>
              APIキーはNextraLabsメンバーサイトから取得できます
            </p>
            <a
              href="/saas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: PRIMARY, textDecoration: 'none' }}>
              AIアシスタントを使ってみる →
            </a>
          </div>
        </div>
      </section>

      {/* ── アクセス・Googleマップ ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: BASE }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-medium mb-1 tracking-widest uppercase" style={{ color: PRIMARY }}>Access</p>
            <h2 className="text-xl font-semibold" style={{ color: TEXT }}>アクセス</h2>
          </div>
          <div className="rounded-2xl overflow-hidden mb-4" style={{ border: `1px solid ${BORDER}`, boxShadow: '0 4px 16px rgba(45,26,26,0.08)' }}>
            <iframe
              src="https://maps.google.com/maps?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%B5%B7%E8%80%81%E5%90%8D%E5%B8%82%E7%A4%BE%E5%AE%B66-5-2-301&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              title="マレッジロードジャパン 地図"
            />
          </div>
          <div className="text-center text-sm" style={{ color: MUTED }}>
            <p className="font-medium mb-1" style={{ color: TEXT }}>〒243-0424 神奈川県海老名市社家6-5-2-301</p>
            <p className="text-xs">JR相模線・小田急小田原線・相鉄本線「海老名駅」徒歩約15分 ／ JR相模線「社家駅」徒歩1分</p>
            <p className="text-xs mt-1">駐車場あり ／ ZOOM全国対応</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: SURFACE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>FAQ</p>
            <h2 className="text-xl font-semibold">よくある質問</h2>
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:opacity-80 transition-opacity"
                  style={{ background: 'white', border: 'none', cursor: 'pointer', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
                  <span className="text-sm font-semibold pr-4">{q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} style={{ color: PRIMARY, flexShrink: 0 }} />
                    : <ChevronDown size={16} style={{ color: PRIMARY, flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-3 text-sm leading-relaxed" style={{ background: BASE, color: MUTED }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none' }}>
              よくある質問をもっと見る →
            </a>
          </div>
        </div>
      </section>

      {/* ── お問い合わせCTA ── */}
      <section className="py-12 md:py-16 px-4" style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)` }}>
        <div className="max-w-5xl mx-auto text-center">
          <Sparkles size={28} className="mx-auto mb-4" style={{ color: ACCENT }} />
          <h2 className="text-3xl font-bold tracking-tight mb-2">まずは無料相談から</h2>
          <p className="text-sm leading-relaxed mb-1" style={{ color: MUTED }}>
            費用・活動内容・IBJSシステムについて、何でもお気軽にご相談ください。
          </p>
          <p className="text-xs mb-8" style={{ color: MUTED }}>
            <Clock size={11} className="inline mr-1" />
            受付時間：10:00〜23:00（年中無休）
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/m-contact"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: PRIMARY, textDecoration: 'none' }}>
              👨 男性の方はこちら
            </a>
            <a href="/w-contact"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: '#b76e79cc', textDecoration: 'none' }}>
              👩 女性の方はこちら
            </a>
          </div>
          <div className="mt-4">
            <a href="tel:050-1807-3163"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none' }}>
              <Phone size={16} /> 050-1807-3163
            </a>
          </div>
        </div>
      </section>

      {/* ── フッター ── */}
      <Footer />

      <QuickNav />
    </div>
  )
}
