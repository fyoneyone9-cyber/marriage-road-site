'use client'
import { useState, useEffect } from 'react'
import {
  Heart, Users, Clock, Star, ChevronDown, ChevronUp,
  Mail, Phone, Youtube, CheckCircle, ArrowRight, Menu, X,
  Shield, Video, CreditCard, MessageCircle, Sparkles, MapPin,
} from 'lucide-react'

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
  ['実績データ', '/data'],
  ['お問い合わせ', '/m-contact'],
]

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
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
              マレッジロードジャパン
            </div>
            <div className="text-xs" style={{ color: MUTED }}>結婚相談所 · IBJ正規加盟店</div>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm" style={{ color: MUTED }}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} className="hover:opacity-70 transition-opacity" style={{ color: MUTED, textDecoration: 'none' }}>{label}</a>
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
        {menuOpen && (
          <div style={{ background: BASE, borderTop: `1px solid ${BORDER}` }} className="md:hidden px-4 py-4 space-y-3">
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm" style={{ color: MUTED, textDecoration: 'none' }}>{label}</a>
            ))}
            <a href="tel:050-1807-3163" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2 text-sm font-medium" style={{ color: PRIMARY, textDecoration: 'none' }}>
              <Phone size={14} /> 050-1807-3163
            </a>
            <a href="/m-contact" onClick={() => setMenuOpen(false)}
              className="block text-center py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: PRIMARY, textDecoration: 'none' }}>
              無料相談を予約する →
            </a>
          </div>
        )}
      </header>

      {/* ── ヒーロー ── */}
      <section style={{ background: `linear-gradient(160deg, #fde8df 0%, #faf7f5 50%, #fdf5e8 100%)`, paddingTop: '80px' }}
        className="flex items-center">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(201,169,110,0.15)', border: `1px solid rgba(201,169,110,0.4)`, color: '#7a6020' }}>
            🎉 初月月会費無料キャンペーン実施中
          </div>

          <h1 style={{ color: TEXT, lineHeight: 1.3 }} className="text-3xl font-bold tracking-tight mb-4">
            真剣な出会いを、丁寧に。
          </h1>

          <p className="text-sm leading-relaxed mb-2 max-w-2xl mx-auto" style={{ color: MUTED }}>
            IBJ加盟<strong style={{ color: TEXT }}>82,000人以上</strong>の真剣婚活者と出会える結婚相談所。<br />
            オンライン全国対応 · ZOOM無料相談は毎週4枠実施
          </p>

          <p className="text-xs mb-8" style={{ color: MUTED }}>
            <MapPin size={12} className="inline mr-1" />
            〒243-0424 神奈川県海老名市泉6-5-2-301 · IBJ正規加盟店 No.01226
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

          <div className="mt-8 flex flex-wrap justify-center gap-5">
            {['IBJ正規加盟店', '登録審査済み会員のみ', '初月月会費無料', 'ZOOM対応・全国OK'].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-xs" style={{ color: MUTED }}>
                <CheckCircle size={13} style={{ color: ACCENT }} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 実績数字 ── */}
      <section className="py-16" style={{ background: PRIMARY }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

      {/* ── 選ばれる理由 ── */}
      <section className="py-16 px-4">
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
        </div>
      </section>

      {/* ── プラン ── */}
      <section className="py-16 px-4" style={{ background: SURFACE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-medium mb-1" style={{ color: PRIMARY }}>Plans</p>
            <h2 className="text-xl font-semibold">プラン・料金</h2>
            <p className="mt-1 text-xs" style={{ color: MUTED }}>詳細な料金は無料相談にてご案内します。初月月会費無料キャンペーン実施中！</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(({ name, target, features, highlight, note }, i) => (
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
                <p className="text-xs mb-4" style={{ color: highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>{note}</p>
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
        </div>
      </section>

      {/* ── 入会の流れ ── */}
      <section className="py-16 px-4">
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
        </div>
      </section>


      {/* ── 口コミ ── */}
      <section className="py-16 px-4">
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

      {/* ── FAQ ── */}
      <section className="py-16 px-4" style={{ background: SURFACE }}>
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
        </div>
      </section>

      {/* ── お問い合わせCTA ── */}
      <section className="py-16 px-4" style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)` }}>
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
    </div>
  )
}
