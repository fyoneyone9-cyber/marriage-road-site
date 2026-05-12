'use client'
import { useState } from 'react'
import {
  Heart, Users, MapPin, Star, ChevronDown, ChevronUp,
  Mail, Phone, Youtube, CheckCircle, ArrowRight, Menu, X,
  Shield, Clock, Sparkles,
} from 'lucide-react'

// ── カラー定数 ──────────────────────────────────────
const PRIMARY = '#c9836f'   // ローズゴールド
const ACCENT  = '#d4a96a'   // ゴールド
const BASE    = '#fff8f5'   // オフホワイト
const SURFACE = '#fff1eb'   // カード背景
const TEXT    = '#3d2c2c'   // ダークブラウン
const MUTED   = '#8a6a60'   // ミュートテキスト
const BORDER  = '#e8d5cc'   // ボーダー

// ── データ ───────────────────────────────────────────
const STATS = [
  { value: '81,721人+', label: 'IBJ全国会員数', icon: Users },
  { value: '52,018件+', label: '月間お見合い件数', icon: Heart },
  { value: '神奈川全域', label: '対応エリア', icon: MapPin },
  { value: '2020年〜', label: 'サービス開始', icon: Star },
]

const REASONS = [
  {
    icon: Shield,
    title: 'IBJ正規加盟店',
    desc: '日本最大級の結婚相談所ネットワーク「日本結婚相談所連盟（IBJ）」の正規加盟店。81,000人超の真剣婚活者の中からご紹介します。',
  },
  {
    icon: MapPin,
    title: '地域密着サポート',
    desc: '厚木市・海老名市エリアを中心に、地元での出会いと結婚を全力でサポート。地域の事情を熟知したカウンセラーが親身に対応します。',
  },
  {
    icon: CheckCircle,
    title: '真剣な出会いだけ',
    desc: '入会時に独身証明・身元確認を徹底。遊び目的の方は一切お断り。真剣にご結婚をお考えの方だけが集まる、安心・安全な場を提供します。',
  },
]

const PLANS = [
  {
    name: 'ライトプラン',
    enrollment: '33,000円',
    monthly: '9,900円',
    features: ['IBJネットワーク検索', 'お見合い申込み', 'メールサポート', '月1回カウンセリング'],
    highlight: false,
  },
  {
    name: 'スタンダードプラン',
    enrollment: '55,000円',
    monthly: '14,850円',
    features: ['IBJネットワーク検索', 'お見合い申込み', '優先カウンセリング', '月2回面談', 'プロフィール作成サポート'],
    highlight: true,
  },
  {
    name: 'プレミアムプラン',
    enrollment: '77,000円',
    monthly: '19,800円',
    features: ['IBJネットワーク検索', 'お見合い申込み', '専任カウンセラー', '月4回面談', 'プロフィール写真アドバイス', '婚活コーチング'],
    highlight: false,
  },
]

const STEPS = [
  { num: 1, title: '無料相談', desc: 'オンライン・対面どちらでもOK。まずはお気軽にご相談ください。' },
  { num: 2, title: '入会・登録', desc: '書類確認後、プロフィール作成をサポート。素敵な第一印象を一緒に作ります。' },
  { num: 3, title: 'お見合い申込み', desc: 'IBJシステムで全国の会員にアプローチ。理想のお相手を探します。' },
  { num: 4, title: 'お見合い', desc: '厚木・海老名エリアのカフェや当相談所で、緊張しないようサポートします。' },
  { num: 5, title: '交際・成婚', desc: '真剣交際から成婚へ。プロポーズのサポートまで全力でお手伝いします。' },
]

const FAQS = [
  {
    q: '入会に必要な書類は何ですか？',
    a: '独身証明書・身分証明書（運転免許証等）が必要です。男性の方は収入証明書（源泉徴収票等）もご準備ください。',
  },
  {
    q: 'お見合いはどこで行いますか？',
    a: '厚木市・海老名市エリアのカフェや、当相談所の相談室にて行います。初めての方も安心できる落ち着いた場所をご用意します。',
  },
  {
    q: 'オンラインでの相談・お見合いは可能ですか？',
    a: 'はい、ZoomやLINEビデオ通話での無料相談・お見合いも受け付けています。遠方の方やお忙しい方もお気軽にご利用ください。',
  },
  {
    q: '成婚できなかった場合はどうなりますか？',
    a: '成婚退会まで全力でサポートし続けます。活動中のご不安やお悩みもカウンセラーにいつでもご相談いただけます。',
  },
  {
    q: '男性・女性の年齢層を教えてください。',
    a: 'IBJネットワーク全体で20代〜60代まで幅広くご登録いただいています。ご希望の年齢層に合わせてご紹介します。',
  },
]

// ── コンポーネント ────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: 'var(--font-noto-sans-jp), sans-serif' }}>

      {/* ── ヘッダー ── */}
      <header style={{ background: 'rgba(255,248,245,0.95)', borderBottom: `1px solid ${BORDER}`, backdropFilter: 'blur(8px)' }}
        className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <span style={{ fontFamily: 'var(--font-noto-serif-jp), serif', color: PRIMARY, fontWeight: 700, fontSize: '1.1rem' }}>
              マレッジロードジャパン
            </span>
            <span className="ml-2 text-xs" style={{ color: MUTED }}>Marriage Road Japan</span>
          </div>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-6 text-sm" style={{ color: MUTED }}>
            {['特徴', '料金', '流れ', 'FAQ', 'お問い合わせ'].map((item, i) => (
              <a key={i} href={`#${['features','pricing','steps','faq','contact'][i]}`}
                className="hover:opacity-70 transition-opacity">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
              無料相談を予約する <ArrowRight size={14} />
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: PRIMARY }}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {menuOpen && (
          <div style={{ background: BASE, borderTop: `1px solid ${BORDER}` }} className="md:hidden px-4 py-4 space-y-3">
            {['特徴', '料金', '流れ', 'FAQ', 'お問い合わせ'].map((item, i) => (
              <a key={i} href={`#${['features','pricing','steps','faq','contact'][i]}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm" style={{ color: MUTED }}>{item}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="block text-center py-3 rounded-full text-sm font-medium text-white mt-2"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
              無料相談を予約する →
            </a>
          </div>
        )}
      </header>

      {/* ── ヒーロー ── */}
      <section style={{ background: `linear-gradient(160deg, #fde8df 0%, #fff8f0 50%, #fdf5e8 100%)`, paddingTop: '100px' }}
        className="min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{ background: 'rgba(201,131,111,0.12)', border: `1px solid rgba(201,131,111,0.3)`, color: PRIMARY }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: PRIMARY }} />
            IBJ正規加盟店 · 神奈川・厚木・海老名
          </div>

          <h1 style={{ fontFamily: 'var(--font-noto-serif-jp), serif', color: TEXT, lineHeight: 1.3 }}
            className="text-3xl md:text-5xl font-bold mb-6">
            あなたの<span style={{ color: PRIMARY }}>"運命の人"</span>と、<br />ここで出会う。
          </h1>

          <p className="text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: MUTED }}>
            神奈川・厚木・海老名エリアの結婚相談所。<br />
            IBJ加盟<strong style={{ color: TEXT }}>81,721人</strong>の中から、真剣に結婚を考えるあなたへ。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, boxShadow: `0 8px 24px rgba(201,131,111,0.35)` }}>
              <Heart size={18} /> 無料相談を予約する
            </a>
            <a href="https://www.marriage-road.jp" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white' }}>
              <Users size={18} /> IBJ会員データを見る
            </a>
          </div>

          {/* 信頼バッジ */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {['IBJ正規加盟店', '身元確認済み会員のみ', '無料相談受付中'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: MUTED }}>
                <CheckCircle size={16} style={{ color: ACCENT }} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 数字セクション ── */}
      <section style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }} className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div key={i} className="text-center">
                <Icon size={28} className="mx-auto mb-3 opacity-80" style={{ color: 'white' }} />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>{value}</div>
                <div className="text-sm text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 選ばれる3つの理由 ── */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium mb-3" style={{ color: PRIMARY }}>Why Choose Us</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              className="text-2xl md:text-3xl font-bold">選ばれる3つの理由</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REASONS.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: `rgba(201,131,111,0.12)` }}>
                  <Icon size={26} style={{ color: PRIMARY }} />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 料金プラン ── */}
      <section id="pricing" className="py-20 px-4" style={{ background: SURFACE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium mb-3" style={{ color: PRIMARY }}>Pricing</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              className="text-2xl md:text-3xl font-bold">料金プラン</h2>
            <p className="mt-3 text-sm" style={{ color: MUTED }}>※表示は参考価格です。詳細は無料相談にてご案内します。</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(({ name, enrollment, monthly, features, highlight }, i) => (
              <div key={i} className="rounded-2xl p-8 flex flex-col relative"
                style={{
                  background: highlight ? `linear-gradient(160deg, ${PRIMARY}, ${ACCENT})` : 'white',
                  border: highlight ? 'none' : `1px solid ${BORDER}`,
                  boxShadow: highlight ? `0 12px 32px rgba(201,131,111,0.3)` : 'none',
                }}>
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-xs font-bold px-4 py-1 rounded-full" style={{ color: PRIMARY }}>
                      人気No.1
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold mb-1" style={{ color: highlight ? 'white' : TEXT }}>{name}</h3>
                <div className="mb-1">
                  <span className="text-xs" style={{ color: highlight ? 'rgba(255,255,255,0.8)' : MUTED }}>入会金 </span>
                  <span className="text-xl font-bold" style={{ color: highlight ? 'white' : TEXT }}>{enrollment}</span>
                </div>
                <div className="mb-6">
                  <span className="text-xs" style={{ color: highlight ? 'rgba(255,255,255,0.8)' : MUTED }}>月会費 </span>
                  <span className="text-xl font-bold" style={{ color: highlight ? 'white' : TEXT }}>{monthly}</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm"
                      style={{ color: highlight ? 'rgba(255,255,255,0.9)' : MUTED }}>
                      <CheckCircle size={14} style={{ color: highlight ? 'white' : ACCENT, flexShrink: 0 }} />
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
                  無料相談を予約する →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 婚活の流れ ── */}
      <section id="steps" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium mb-3" style={{ color: PRIMARY }}>How it Works</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              className="text-2xl md:text-3xl font-bold">婚活の流れ</h2>
          </div>
          <div className="space-y-4">
            {STEPS.map(({ num, title, desc }, i) => (
              <div key={i} className="flex gap-5 rounded-2xl p-6"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
                  {num}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-4" style={{ background: SURFACE }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium mb-3" style={{ color: PRIMARY }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
              className="text-2xl md:text-3xl font-bold">よくある質問</h2>
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
                  <div className="px-5 pb-5 pt-3 text-sm leading-relaxed"
                    style={{ background: BASE, color: MUTED }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(201,131,111,0.12)' }}>
            <Youtube size={28} style={{ color: PRIMARY }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            className="text-2xl font-bold mb-4">YouTubeチャンネル</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: MUTED }}>
            婚活のリアルな情報・アドバイスを動画で発信中。<br />
            チャンネル登録してお役立ち情報をチェックしてください。
          </p>
          <a href="https://www.youtube.com/@marriage_road" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ background: '#ff0000', color: 'white', boxShadow: '0 6px 20px rgba(255,0,0,0.2)' }}>
            <Youtube size={18} /> マレッジロードジャパン チャンネルを見る →
          </a>
        </div>
      </section>

      {/* ── お問い合わせ ── */}
      <section id="contact" style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)` }} className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles size={32} className="mx-auto mb-4" style={{ color: ACCENT }} />
          <h2 style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}
            className="text-2xl md:text-3xl font-bold mb-4">まずは無料相談から</h2>
          <p className="text-sm leading-relaxed mb-10" style={{ color: MUTED }}>
            費用や活動内容について、何でもお気軽にご相談ください。<br />
            オンライン（Zoom / LINE）でも対面でも対応しております。
          </p>

          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <a href="mailto:info@marriage-road.jp"
              className="flex items-center justify-center gap-3 py-4 rounded-full text-white font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, boxShadow: `0 8px 24px rgba(201,131,111,0.3)` }}>
              <Mail size={18} /> メールで相談する
            </a>
            <a href="tel:080-3207-8422"
              className="flex items-center justify-center gap-3 py-4 rounded-full font-semibold transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white' }}>
              <Phone size={18} /> 080-3207-8422 に電話する
            </a>
            <a href="https://line.me/R/ti/p/@marriage-road" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-full text-white font-semibold transition-all hover:opacity-90"
              style={{ background: '#06C755' }}>
              <span className="font-bold text-lg leading-none">L</span> LINEで相談する
            </a>
          </div>

          <p className="mt-8 text-xs" style={{ color: MUTED }}>
            <Clock size={12} className="inline mr-1" />
            受付時間：10:00〜20:00（土日祝も対応可）
          </p>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="py-10 px-4 text-center text-xs" style={{ background: '#3d2c2c', color: 'rgba(255,255,255,0.6)' }}>
        <div className="mb-3">
          <span className="font-semibold text-sm text-white"
            style={{ fontFamily: 'var(--font-noto-serif-jp), serif' }}>
            マレッジロードジャパン
          </span>
          <span className="ml-2 opacity-60">Marriage Road Japan</span>
        </div>
        <p className="mb-2">
          神奈川県海老名市 ·{' '}
          <a href="mailto:info@marriage-road.jp" className="underline hover:opacity-80">info@marriage-road.jp</a>
        </p>
        <p className="mb-4">
          日本結婚相談所連盟（IBJ）正規加盟店
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="/privacy" className="hover:opacity-80">プライバシーポリシー</a>
          <a href="/terms" className="hover:opacity-80">利用規約</a>
          <a href="#contact" className="hover:opacity-80">お問い合わせ</a>
        </div>
        <p className="opacity-40">© 2024 Marriage Road Japan. All rights reserved.</p>
      </footer>
    </div>
  )
}
