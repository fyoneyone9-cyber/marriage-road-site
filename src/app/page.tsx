'use client'
import { useState, useEffect } from 'react'
import {
  Heart, Users, MapPin, Star, ChevronDown, ChevronUp,
  Mail, Phone, Youtube, CheckCircle, ArrowRight, Menu, X,
  Shield, Clock, Sparkles, Video, CreditCard, MessageCircle,
} from 'lucide-react'

const PRIMARY = '#c9836f'
const ACCENT  = '#d4a96a'
const BASE    = '#fff8f5'
const SURFACE = '#fff1eb'
const TEXT    = '#3d2c2c'
const MUTED   = '#8a6a60'
const BORDER  = '#e8d5cc'

const STATS = [
  { value: '82,000人+', label: 'IBJ全国会員数', icon: Users },
  { value: '52,018件+', label: '月間お見合い件数', icon: Heart },
  { value: '年中無休', label: '受付時間 10:00〜23:00', icon: Clock },
  { value: 'NO.01226', label: 'IBJ相談所番号', icon: Star },
]

const REASONS = [
  {
    icon: Shield,
    title: 'IBJ東証プライム上場の安心感',
    desc: '日本最大級の結婚相談所ネットワーク「IBJ」正規加盟店（相談所NO.01226）。上級婚活カウンセラー資格取得済み。精神面のサポートまでお任せください。',
  },
  {
    icon: Video,
    title: 'オンライン＆全国対応',
    desc: 'ZOOMでの無料説明会を毎日4枠実施中。オンラインで全国対応・神奈川県は対面対応も可能。貴重なお時間を使って足を運ぶ必要はありません。',
  },
  {
    icon: Heart,
    title: '分かりやすい3つのプラン',
    desc: 'ライト・スタンダード・プレミアムの3プランをご用意。初月月会費無料キャンペーン実施中。サンマリエ・ツヴァイと同じIBJSプラットフォームで高い成婚率を実現。',
  },
]

const PLANS = [
  {
    name: 'ライトプラン',
    target: '全国対応',
    features: [
      '初回ヒアリング（オンライン）',
      '都度相談（LINE・電話・メール）',
      '会員プロフィール作成',
      'お見合いセッティング',
      'お見合い結果の取次',
      '交際〜成婚までのフォロー',
    ],
    highlight: false,
    note: 'ご自身のペースで婚活',
  },
  {
    name: 'スタンダードプラン',
    target: '全国対応',
    features: [
      '定期的ヒアリング（オンライン）',
      '都度相談（LINE・電話・メール）',
      '会員プロフィール作成',
      'お見合い相手のご紹介',
      'お見合いセッティング',
      'お見合い結果の取次',
      '交際〜成婚までのフォロー',
      '成婚後のアフターフォロー',
    ],
    highlight: true,
    note: '最も選ばれているプラン',
  },
  {
    name: 'プレミアムプラン',
    target: '神奈川県限定',
    features: [
      '定期的ヒアリング（対面orオンライン）',
      '都度相談（LINE・電話・メール）',
      '会員プロフィール作成',
      'お見合い相手のご紹介',
      'お見合いセッティング',
      'お見合い同行サポート',
      '対面アドバイス・カウンセリング',
      '交際〜成婚までの全活動サポート',
      '成婚後のアフターフォロー',
    ],
    highlight: false,
    note: '地域密着のフルサポート',
  },
]

const STEPS = [
  { num: 1, title: '無料相談（オンライン or 対面）', desc: 'ZOOMでの無料説明会は毎日4枠実施中。まずはお気軽にご相談ください。神奈川県にお住まいの方は対面相談も可能です。' },
  { num: 2, title: '入会・プロフィール作成', desc: '独身証明書などの書類確認後、魅力的なプロフィールを一緒に作成。第一印象を最大限に高めます。' },
  { num: 3, title: 'IBJSでお相手を検索・申込み', desc: 'サンマリエ・ツヴァイと同じIBJSプラットフォームで82,000人以上の会員にアプローチ。' },
  { num: 4, title: 'お見合い', desc: '厚木・海老名エリアのカフェや相談所、またはオンラインでお見合い。緊張しないよう事前準備もサポートします。' },
  { num: 5, title: '交際・成婚', desc: '真剣交際から成婚まで、カウンセラーが全力でサポート。成婚後のアフターフォローも充実しています。' },
]

const FAQS = [
  {
    q: '入会に必要な書類は何ですか？',
    a: '独身証明書・身分証明書（運転免許証等）が必要です。男性の方は収入証明書（源泉徴収票等）もご準備ください。Web面談でのご入会も可能です。',
  },
  {
    q: 'オンラインでの相談・入会はできますか？',
    a: 'はい、Zoomを使ったオンラインでの無料説明会・入会面談・お見合いに対応しています。全国からお申込みいただけます。毎日4枠実施中です。',
  },
  {
    q: 'マッチングアプリと何が違いますか？',
    a: '全会員が身元確認済みで、真剣に結婚を考えている方だけが在籍しています。IBJSはサンマリエ・ツヴァイと同じプラットフォームで、マッチングアプリより成婚率が高いのが特徴です。',
  },
  {
    q: '料金の支払い方法を教えてください。',
    a: '銀行振り込み・メルペイ・d払い・PayPayに対応しています。初月月会費無料キャンペーンも実施中です。詳細は無料相談にてご案内します。',
  },
  {
    q: '厚木・海老名以外でも利用できますか？',
    a: 'ライトプラン・スタンダードプランは全国対応です。プレミアムプランは神奈川県限定となりますが、オンラインでは全国どこからでもご利用いただけます。',
  },
]

const PAYMENT_METHODS = ['銀行振り込み', 'メルペイ', 'd払い', 'PayPay']

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
    <div style={{ background: BASE, color: TEXT, fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>

      {/* ── ヘッダー ── */}
      <header style={{
        background: scrolled ? 'rgba(255,248,245,0.97)' : 'rgba(255,248,245,0.95)',
        borderBottom: `1px solid ${BORDER}`,
        backdropFilter: 'blur(8px)',
        boxShadow: scrolled ? '0 2px 12px rgba(61,44,44,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }} className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <div style={{ fontFamily: 'var(--font-noto-serif-jp), serif', color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
              マレッジロードジャパン
            </div>
            <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm" style={{ color: MUTED }}>
            {[['特徴', 'features'], ['プラン', 'pricing'], ['流れ', 'steps'], ['FAQ', 'faq'], ['お問い合わせ', 'contact']].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:opacity-70 transition-opacity">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:050-1807-3163" className="hidden md:flex items-center gap-1.5 text-sm font-medium" style={{ color: PRIMARY }}>
              <Phone size={14} /> 050-1807-3163
            </a>
            <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
              無料相談 <ArrowRight size={14} />
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: PRIMARY }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ background: BASE, borderTop: `1px solid ${BORDER}` }} className="md:hidden px-4 py-4 space-y-3">
            {[['特徴', 'features'], ['プラン', 'pricing'], ['流れ', 'steps'], ['FAQ', 'faq'], ['お問い合わせ', 'contact']].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-2 text-sm" style={{ color: MUTED }}>{label}</a>
            ))}
            <a href="tel:050-1807-3163" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2 text-sm font-medium" style={{ color: PRIMARY }}>
              <Phone size={14} /> 050-1807-3163
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="block text-center py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
              無料相談を予約する →
            </a>
          </div>
        )}
      </header>

      {/* ── ヒーロー ── */}
      <section style={{ background: `linear-gradient(160deg, #fde8df 0%, #fff8f0 50%, #fdf5e8 100%)`, paddingTop: '80px' }}
        className="min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          {/* キャンペーンバッジ */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(212,169,106,0.15)', border: `1px solid rgba(212,169,106,0.4)`, color: '#9a6e2e' }}>
            🎉 初月月会費無料キャンペーン実施中
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 ml-2"
            style={{ background: 'rgba(201,131,111,0.12)', border: `1px solid rgba(201,131,111,0.3)`, color: PRIMARY }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PRIMARY }} />
            IBJ正規加盟店 No.01226 · 神奈川・海老名
          </div>

          <h1 style={{ fontFamily: 'var(--font-noto-serif-jp), serif', color: TEXT, lineHeight: 1.3 }}
            className="text-3xl md:text-5xl font-bold mb-4">
            厚木・海老名で<span style={{ color: PRIMARY }}>本気の婚活</span>なら<br />
            マレッジロードジャパン
          </h1>

          <p className="text-base md:text-lg mb-3 leading-relaxed max-w-2xl mx-auto" style={{ color: MUTED }}>
            IBJ加盟<strong style={{ color: TEXT }}>82,000人以上</strong>の真剣婚活者と出会える結婚相談所。<br />
            オンライン全国対応 · Zoom無料説明会は毎日4枠実施中
          </p>

          <p className="text-sm mb-8" style={{ color: MUTED }}>
            <MapPin size={13} className="inline mr-1" />
            〒243-0424 神奈川県海老名市社家6-5-2-301（JR相模線社家駅 徒歩1分）
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, boxShadow: `0 8px 24px rgba(201,131,111,0.35)` }}>
              <Video size={18} /> Zoom無料説明会を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-80"
              style={{ border: `2px solid #06C755`, color: '#06C755', background: 'white' }}>
              <MessageCircle size={18} /> LINEで相談する
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {['IBJ正規加盟店', '身元確認済み会員のみ', '初月月会費無料', 'Zoom対応・全国OK'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                <CheckCircle size={15} style={{ color: ACCENT }} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 実績数字 ── */}
      <section style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }} className="py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="text-center">
                <Icon size={26} className="mx-auto mb-2 opacity-80" style={{ color: 'white' }} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>{value}</div>
                <div className="text-xs text-white/80 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 選ばれる理由 ── */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl md:text-3xl font-bold">
              選ばれる3つの理由
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="rounded-2xl p-7 hover:shadow-lg transition-shadow"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `rgba(201,131,111,0.12)` }}>
                  <Icon size={24} style={{ color: PRIMARY }} />
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: ACCENT }}>0{i + 1}</div>
                <h3 className="font-bold text-base mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── カウンセラー紹介 ── */}
      <section style={{ background: SURFACE }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>Counselor</p>
          <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl md:text-3xl font-bold mb-8">
            代表カウンセラー
          </h2>
          <div className="rounded-2xl p-8 text-left" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold"
                style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
                Y
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
                  Yoneyama（代表）
                </h3>
                <p className="text-xs mb-3 font-medium" style={{ color: ACCENT }}>IBJ上級婚活カウンセラー資格取得</p>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  全国からのお問い合わせありがとうございます。人生最大の決断とも言える結婚。あなたの理想のパートナーを見つけて結ばれるお手伝いを、私の経験とスキルを活かしてサポートします。仕事と恋愛に趣味に、毎日が充実した生活を過ごしていただきたいと思っています。ぜひ私を頼ってください♪
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── プラン ── */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>Plans</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl md:text-3xl font-bold">
              プラン・料金
            </h2>
            <p className="mt-2 text-sm" style={{ color: MUTED }}>詳細な料金は無料相談にてご案内します。初月月会費無料キャンペーン実施中！</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(({ name, target, features, highlight, note }, i) => (
              <div key={i} className="rounded-2xl p-7 flex flex-col relative"
                style={{
                  background: highlight ? `linear-gradient(160deg, ${PRIMARY}, ${ACCENT})` : 'white',
                  border: highlight ? 'none' : `1px solid ${BORDER}`,
                  boxShadow: highlight ? `0 12px 32px rgba(201,131,111,0.3)` : 'none',
                }}>
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-xs font-bold px-4 py-1 rounded-full shadow" style={{ color: PRIMARY }}>
                      人気No.1
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: highlight ? 'rgba(255,255,255,0.2)' : `rgba(201,131,111,0.1)`, color: highlight ? 'white' : PRIMARY }}>
                    {target}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-noto-serif-jp), serif', color: highlight ? 'white' : TEXT }}>
                  {name}
                </h3>
                <p className="text-xs mb-5" style={{ color: highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>{note}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm"
                      style={{ color: highlight ? 'rgba(255,255,255,0.9)' : MUTED }}>
                      <CheckCircle size={14} style={{ color: highlight ? 'white' : ACCENT, flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  className="block text-center py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
                  style={{
                    background: highlight ? 'white' : `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                    color: highlight ? PRIMARY : 'white',
                  }}>
                  無料相談で詳細を聞く →
                </a>
              </div>
            ))}
          </div>
          {/* 支払い方法 */}
          <div className="mt-8 text-center">
            <p className="text-xs mb-3" style={{ color: MUTED }}>対応支払い方法</p>
            <div className="flex flex-wrap justify-center gap-3">
              {PAYMENT_METHODS.map((m, i) => (
                <span key={i} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: MUTED }}>
                  <CreditCard size={11} style={{ color: PRIMARY }} /> {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 婚活の流れ ── */}
      <section id="steps" style={{ background: SURFACE }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>How it Works</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl md:text-3xl font-bold">
              ご相談から成婚までの流れ
            </h2>
          </div>
          <div className="space-y-4">
            {STEPS.map(({ num, title, desc }, i) => (
              <div key={i} className="flex gap-4 rounded-2xl p-5"
                style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
                  {num}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1">{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl md:text-3xl font-bold">
              よくある質問
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:opacity-80 transition-opacity"
                  style={{ background: 'white' }}>
                  <span className="font-medium text-sm pr-4">{q}</span>
                  {openFaq === i
                    ? <ChevronUp size={18} style={{ color: PRIMARY, flexShrink: 0 }} />
                    : <ChevronDown size={18} style={{ color: PRIMARY, flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-3 text-sm leading-relaxed" style={{ background: BASE, color: MUTED }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube ── */}
      <section style={{ background: SURFACE }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(255,0,0,0.08)' }}>
            <Youtube size={28} style={{ color: '#ff0000' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl font-bold mb-3">
            婚活ノウハウを動画で発信中
          </h2>
          <p className="text-sm leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: MUTED }}>
            婚活のリアルな情報・成婚事例・アドバイスをYouTubeで公開しています。<br />
            チャンネル登録して最新情報をチェック！
          </p>
          <a href="https://www.youtube.com/@marriage_road" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
            style={{ background: '#ff0000', boxShadow: '0 6px 20px rgba(255,0,0,0.25)' }}>
            <Youtube size={18} /> マレッジロードジャパン チャンネルを見る →
          </a>
        </div>
      </section>

      {/* ── お問い合わせ ── */}
      <section id="contact" style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)` }} className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles size={30} className="mx-auto mb-4" style={{ color: ACCENT }} />
          <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-2xl md:text-3xl font-bold mb-3">
            まずは無料相談から
          </h2>
          <p className="text-sm leading-relaxed mb-2" style={{ color: MUTED }}>
            費用・活動内容・IBJSシステムについて、何でもお気軽にご相談ください。
          </p>
          <p className="text-xs mb-10" style={{ color: MUTED }}>
            <Clock size={11} className="inline mr-1" />
            受付時間：10:00〜23:00（年中無休）
          </p>

          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-full text-white font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, boxShadow: `0 8px 24px rgba(201,131,111,0.3)` }}>
              <Video size={18} /> Zoom無料説明会を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-full text-white font-semibold transition-all hover:opacity-90"
              style={{ background: '#06C755' }}>
              <MessageCircle size={18} /> LINEで友だち追加して相談
            </a>
            <a href="tel:050-1807-3163"
              className="flex items-center justify-center gap-3 py-4 rounded-full font-semibold transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white' }}>
              <Phone size={18} /> 050-1807-3163 に電話する
            </a>
            <a href="mailto:info@marriage-road.jp"
              className="flex items-center justify-center gap-3 py-3 rounded-full text-sm transition-all hover:opacity-70"
              style={{ color: MUTED }}>
              <Mail size={15} /> info@marriage-road.jp
            </a>
          </div>
        </div>
      </section>

      {/* ── アクセス ── */}
      <section className="py-16 px-4" style={{ background: SURFACE }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }} className="text-xl font-bold mb-6">
            アクセス
          </h2>
          <div className="rounded-2xl p-6 text-left space-y-2" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
            <div className="flex items-start gap-3">
              <MapPin size={16} style={{ color: PRIMARY, flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="text-sm font-medium">〒243-0424 神奈川県海老名市社家6-5-2-301</p>
                <p className="text-xs mt-0.5" style={{ color: MUTED }}>JR相模線 社家駅 徒歩1分 · 駐車場あり</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={16} style={{ color: PRIMARY, flexShrink: 0 }} />
              <p className="text-sm">受付時間：10:00〜23:00（年中無休）</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} style={{ color: PRIMARY, flexShrink: 0 }} />
              <a href="tel:050-1807-3163" className="text-sm font-medium hover:opacity-70" style={{ color: PRIMARY }}>050-1807-3163</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="py-10 px-4 text-center text-xs" style={{ background: '#3d2c2c', color: 'rgba(255,255,255,0.6)' }}>
        <div className="mb-2">
          <span className="font-semibold text-sm text-white" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
            マレッジロードジャパン
          </span>
          <span className="ml-2 opacity-60">Marriage Road Japan</span>
        </div>
        <p className="mb-1">〒243-0424 神奈川県海老名市社家6-5-2-301</p>
        <p className="mb-1">
          <a href="tel:050-1807-3163" className="hover:opacity-80">050-1807-3163</a>
          {' · '}
          <a href="mailto:info@marriage-road.jp" className="hover:opacity-80">info@marriage-road.jp</a>
        </p>
        <p className="mb-4 opacity-70">日本結婚相談所連盟（IBJ）正規加盟店 · 相談所No.01226</p>
        <div className="flex justify-center gap-5 mb-4">
          <a href="/privacy" className="hover:opacity-80">プライバシーポリシー</a>
          <a href="/terms" className="hover:opacity-80">利用規約</a>
          <a href="#contact" className="hover:opacity-80">お問い合わせ</a>
        </div>
        <p className="opacity-40">© 2024 Marriage Road Japan. All rights reserved.</p>
      </footer>
    </div>
  )
}
