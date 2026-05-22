'use client'
import { useState } from 'react'
import {
  Heart, Users, Clock, Star, CheckCircle, ArrowRight,
  Shield, Video, MessageCircle, Sparkles, MapPin, Phone,
  ChevronDown, ChevronUp, CreditCard,
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
  { value: '82,000人+', label: 'IBJ全国会員数',           icon: Users },
  { value: '52,018組+', label: '成婚カップル数',           icon: Heart },
  { value: '年中無休',   label: '受付 10:00〜23:00',       icon: Clock },
  { value: 'No.01226',  label: 'IBJ正規加盟店 登録番号',   icon: Star  },
]

const WORRIES = [
  'マッチングアプリで出会いが見つからない…',
  '年齢的にそろそろ真剣に考えたい',
  '仕事が忙しくて婚活の時間が取れない',
  '何から始めればいいかわからない',
  '費用や活動内容が不透明で不安',
  '一人で進める自信がない',
]

const REASONS = [
  {
    icon: Shield,
    num: '01',
    title: 'IBJ正規加盟・82,000人のネットワーク',
    desc: '日本最大級の結婚相談所連盟「IBJ」正規加盟店（No.01226）。サンマリエ・ツヴァイと同じプラットフォームで、全国82,000人以上の真剣婚活者と出会えます。',
  },
  {
    icon: Video,
    num: '02',
    title: 'オンライン完全対応・全国どこからでも',
    desc: 'ZOOM無料相談を毎週4枠実施。入会から成婚まで全てオンラインで完結。神奈川県にお住まいの方は対面対応も可能です。',
  },
  {
    icon: Heart,
    num: '03',
    title: '月額8,000円〜・初月月会費無料',
    desc: '3つのプランから選べる明瞭な料金体系。初月月会費無料キャンペーン実施中。まずは無料相談でどんな活動になるか確認できます。',
  },
]

const STEPS = [
  { num: 1, title: '無料相談（ZOOM or 対面）',     desc: '費用・活動内容・IBJSについて何でも聞けます。毎週4枠実施。申込後すぐに日程調整可能。' },
  { num: 2, title: '登録・プロフィール作成',         desc: '書類確認後、カウンセラーと一緒に魅力的なプロフィールを作成。第一印象を最大化します。' },
  { num: 3, title: 'お相手検索・お見合い申込',       desc: '82,000人の中から条件・価値観が合うお相手を探してアプローチ。カウンセラーが全力でサポート。' },
  { num: 4, title: 'デート・交際',                   desc: '近郊カフェ・結婚式場・オンラインなど、自分のペースで交際を深めます。' },
  { num: 5, title: '成婚・アフターフォロー',         desc: '成婚まで伴走し、成婚後もフォローします。一人ではありません。' },
]

const VOICES = [
  {
    name: '30代男性・会社員',
    area: '神奈川県',
    period: '活動5ヶ月で成婚',
    text: 'マッチングアプリで2年間うまくいかず半信半疑でしたが、プロフィールを見直してもらってからお見合い数が急増。入会から5ヶ月で成婚できました。',
  },
  {
    name: '30代女性・看護師',
    area: '東京都（オンライン利用）',
    period: '活動7ヶ月で成婚',
    text: '不規則な仕事でも全てオンラインで活動できたのが助かりました。夜遅くでも相談に乗ってもらえて、無理なく続けられました。',
  },
  {
    name: '40代男性・自営業',
    area: '神奈川県',
    period: '活動8ヶ月で成婚',
    text: '年齢的に諦めかけていましたが、同じ価値観の方と出会えました。焦らせず自分のペースを尊重してもらえたのが一番よかったです。',
  },
]

const FAQS = [
  { q: '活動に必要な書類は何ですか？',
    a: '身分証明書・卒業証明書（大卒以上）が必要です。男性は収入証明書（源泉徴収票等）も必要です。Web上での提出も可能です。' },
  { q: 'オンラインでの相談・活動はできますか？',
    a: 'はい、ZOOMを使ったオンライン相談・活動に完全対応しています。全国どこからでも。無料相談は毎週4枠実施中。' },
  { q: '料金はどのくらいかかりますか？',
    a: '月会費8,000円〜（初月無料）。入会金28,000円・IBJSシステム登録料9,800円（初回のみ）。成婚料200,000円（成婚時のみ）。詳細は無料相談でご案内します。' },
  { q: 'マッチングアプリと何が違いますか？',
    a: '全会員が登録審査済みで、真剣に結婚を考えた方のみ。IBJSはサンマリエ・ツヴァイと同じプラットフォームで、成婚率が大きく異なります。' },
  { q: '神奈川県以外でも利用できますか？',
    a: 'ライト・スタンダードプランは全国対応です。プレミアムプランは神奈川県限定ですが、オンラインは全国OK。' },
]

// ── CTA ボタン（繰り返し使う）──────────────────────────
function CtaButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <a
        href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-105"
        style={{ background: PRIMARY, boxShadow: `0 4px 20px rgba(183,110,121,0.4)`, textDecoration: 'none' }}
      >
        <Video size={16} /> ZOOM無料相談を予約する
      </a>
      <a
        href="https://lin.ee/UxgdZ7F"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:opacity-80"
        style={{ border: `2px solid #06C755`, color: '#06C755', background: 'white', textDecoration: 'none' }}
      >
        <MessageCircle size={16} /> LINEで気軽に相談
      </a>
    </div>
  )
}

export default function LpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ① ファーストビュー
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{
          background: 'linear-gradient(160deg, #fde8df 0%, #faf7f5 50%, #fdf5e8 100%)',
          paddingTop: '72px',
          paddingBottom: '56px',
        }}
      >
        <div className="max-w-3xl mx-auto px-5 text-center">
          {/* キャンペーンバッジ */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ background: 'rgba(201,169,110,0.15)', border: `1px solid rgba(201,169,110,0.5)`, color: '#7a6020' }}
          >
            🎉 初月月会費無料キャンペーン実施中
          </div>

          {/* ブランド名 */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart size={20} fill={PRIMARY} style={{ color: PRIMARY }} />
            <span className="font-bold text-base tracking-wide" style={{ color: PRIMARY }}>マレッジロードジャパン</span>
          </div>

          {/* メインキャッチ */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-5" style={{ color: TEXT, lineHeight: 1.15 }}>
            真剣な出会いを、<br />丁寧に。
          </h1>

          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto" style={{ color: MUTED }}>
            IBJ加盟 <strong style={{ color: TEXT }}>82,000人以上</strong> の登録審査済み会員と出会える結婚相談所。<br />
            オンライン全国対応・ZOOM無料相談は毎週4枠実施。
          </p>

          {/* 信頼バッジ */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8 text-xs" style={{ color: MUTED }}>
            {['IBJ正規加盟店 No.01226', '審査済み会員のみ', 'ZOOM対応・全国OK', '初月無料'].map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                <CheckCircle size={12} style={{ color: ACCENT }} /> {b}
              </span>
            ))}
          </div>

          <CtaButtons />

          {/* 電話 */}
          <div className="mt-5">
            <a
              href="tel:050-1807-3163"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: MUTED, textDecoration: 'none' }}
            >
              <Phone size={14} /> 050-1807-3163（10:00〜23:00 年中無休）
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ② 実績数字
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: PRIMARY, padding: '40px 16px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div key={i}>
                <Icon size={22} className="mx-auto mb-1.5 opacity-80" style={{ color: 'white' }} />
                <div className="text-2xl font-black text-white mb-0.5">{value}</div>
                <div className="text-xs text-white/75 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ③ お悩み共感ゾーン
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: SURFACE, padding: '64px 16px' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>こんな悩みありませんか？</p>
            <h2 className="text-2xl font-bold" style={{ color: TEXT }}>一人で抱えないでください</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {WORRIES.map((w, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-4 rounded-xl"
                style={{ background: 'white', border: `1px solid ${BORDER}` }}
              >
                <span className="text-lg flex-shrink-0">😔</span>
                <span className="text-sm font-medium" style={{ color: TEXT }}>{w}</span>
              </div>
            ))}
          </div>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: `linear-gradient(135deg, rgba(183,110,121,0.08), rgba(201,169,110,0.08))`, border: `2px solid ${BORDER}` }}
          >
            <p className="text-base font-bold mb-2" style={{ color: TEXT }}>
              そのお悩み、まずは無料相談で話してみてください。
            </p>
            <p className="text-sm mb-5" style={{ color: MUTED }}>
              費用・活動内容・進め方、何でもお答えします。勧誘は一切しません。
            </p>
            <CtaButtons />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ④ 選ばれる理由
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: BASE, padding: '64px 16px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>Why Choose Us</p>
            <h2 className="text-2xl font-bold" style={{ color: TEXT }}>選ばれる3つの理由</h2>
          </div>
          <div className="space-y-6">
            {REASONS.map(({ icon: Icon, num, title, desc }) => (
              <div
                key={num}
                className="flex items-start gap-5 p-6 rounded-2xl"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `rgba(183,110,121,0.12)` }}
                >
                  <Icon size={22} style={{ color: PRIMARY }} />
                </div>
                <div>
                  <div className="text-xs font-bold mb-1" style={{ color: ACCENT }}>{num}</div>
                  <h3 className="text-base font-bold mb-2" style={{ color: TEXT }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ⑤ IBJ認証バッジ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: '#1a0f0f', padding: '48px 16px' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-center mb-6" style={{ color: ACCENT }}>
            IBJ 認証・信頼性情報
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                badge: { bg: '#c00', text: 'JPX\nPRIME\nTOKYO' },
                desc: '株式会社IBJは東京証券取引所プライム市場に上場しております。（証券コード：6071）',
              },
              {
                badge: { bg: '#003087', text: 'P\nプライバシー\nマーク\n10740062' },
                desc: '株式会社IBJは大切な個人情報を保護するためプライバシーマークを取得しています。',
              },
              {
                badge: { bg: PRIMARY, text: 'CMS\nマル適\nマーク\n0015003(5)' },
                desc: '経済産業省ガイドライン準拠・財務・教育・情報保護の審査をクリアした総合認証です。',
              },
            ].map(({ badge, desc }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-center leading-tight"
                  style={{ background: badge.bg, color: '#fff', fontSize: '9px', fontWeight: 700, whiteSpace: 'pre-line', padding: '6px' }}
                >
                  {badge.text}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ⑥ 料金プラン（シンプル版）
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: SURFACE, padding: '64px 16px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>Plans</p>
            <h2 className="text-2xl font-bold" style={{ color: TEXT }}>シンプルな3プラン</h2>
            <p className="text-xs mt-2" style={{ color: MUTED }}>初月月会費無料キャンペーン実施中</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { name: 'ライトプラン', fee: '8,000円', note: '全国対応・自分のペース', highlight: false },
              { name: 'スタンダード', fee: '9,800円', note: '全国対応・人気No.1',   highlight: true  },
              { name: 'プレミアム',   fee: '18,000円', note: '神奈川限定・フルサポート', highlight: false },
            ].map(({ name, fee, note, highlight }) => (
              <div
                key={name}
                className="rounded-2xl p-6 text-center relative"
                style={{
                  background: highlight ? PRIMARY : 'white',
                  border: highlight ? `2px solid ${PRIMARY}` : `1px solid ${BORDER}`,
                  boxShadow: highlight ? `0 8px 24px rgba(183,110,121,0.3)` : 'none',
                }}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-xs font-bold px-4 py-1 rounded-full shadow" style={{ color: PRIMARY }}>人気No.1</span>
                  </div>
                )}
                <p className="text-sm font-bold mb-2" style={{ color: highlight ? 'white' : TEXT }}>{name}</p>
                <div className="text-3xl font-black mb-1" style={{ color: highlight ? 'white' : PRIMARY }}>{fee}</div>
                <p className="text-xs mb-4" style={{ color: highlight ? 'rgba(255,255,255,0.7)' : MUTED }}>/月（初月無料）</p>
                <p className="text-xs" style={{ color: highlight ? 'rgba(255,255,255,0.8)' : MUTED }}>{note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mb-4" style={{ color: MUTED }}>
            ＋入会金28,000円・IBJS登録料9,800円（初回のみ）／ 成婚料200,000円（成婚時のみ）
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['銀行振込', '楽天ペイ', 'd払い', 'PayPay'].map((m) => (
              <span key={m} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                style={{ background: BASE, border: `1px solid ${BORDER}`, color: MUTED }}>
                <CreditCard size={10} style={{ color: PRIMARY }} /> {m}
              </span>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/plan"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:opacity-80"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none' }}
            >
              プラン詳細を見る →
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ⑦ 活動の流れ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: BASE, padding: '64px 16px' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>Flow</p>
            <h2 className="text-2xl font-bold" style={{ color: TEXT }}>相談から成婚までの流れ</h2>
          </div>
          <div className="space-y-4">
            {STEPS.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 p-5 rounded-2xl" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm"
                  style={{ background: PRIMARY }}
                >
                  {num}
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: TEXT }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButtons />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ⑧ 成婚者の声
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: SURFACE, padding: '64px 16px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>Voices</p>
            <h2 className="text-2xl font-bold" style={{ color: TEXT }}>ご成婚者の声</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {VOICES.map(({ name, area, period, text }, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: ACCENT }}>★</span>
                  ))}
                </div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: `rgba(183,110,121,0.1)`, color: PRIMARY }}
                >
                  {period}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: TEXT }}>「{text}」</p>
                <div>
                  <div className="text-xs font-bold" style={{ color: TEXT }}>{name}</div>
                  <div className="text-xs" style={{ color: MUTED }}>{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ⑨ FAQ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{ background: BASE, padding: '64px 16px' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: PRIMARY }}>FAQ</p>
            <h2 className="text-2xl font-bold" style={{ color: TEXT }}>よくある質問</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left transition-opacity hover:opacity-80"
                  style={{ background: 'white', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: TEXT }}>{q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} style={{ color: PRIMARY, flexShrink: 0 }} />
                    : <ChevronDown size={16} style={{ color: PRIMARY, flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-3 text-sm leading-relaxed" style={{ background: SURFACE, color: MUTED }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/faq" className="text-xs font-semibold transition-opacity hover:opacity-70" style={{ color: PRIMARY }}>
              もっと見る →
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ⑩ 最終CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        style={{ background: 'linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)', padding: '72px 16px' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles size={28} className="mx-auto mb-4" style={{ color: ACCENT }} />
          <h2 className="text-3xl font-black tracking-tight mb-3" style={{ color: TEXT }}>
            まずは無料相談から
          </h2>
          <p className="text-sm leading-relaxed mb-2" style={{ color: MUTED }}>
            費用・活動内容・IBJSシステムについて何でもお気軽にどうぞ。<br />
            勧誘は一切ありません。
          </p>
          <p className="text-xs mb-8" style={{ color: MUTED }}>
            <Clock size={11} className="inline mr-1" />
            受付：10:00〜23:00（年中無休）
          </p>
          <CtaButtons className="mb-5" />
          <a
            href="tel:050-1807-3163"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none' }}
          >
            <Phone size={15} /> 050-1807-3163
          </a>
          <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs mb-3" style={{ color: MUTED }}>他のページも見る</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ['特徴・強み', '/feature'],
                ['プラン・料金', '/plan'],
                ['入会の流れ', '/flow'],
                ['カウンセラー', '/greeting'],
                ['よくある質問', '/faq'],
                ['TOPに戻る', '/'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                  style={{ background: 'white', border: `1px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
