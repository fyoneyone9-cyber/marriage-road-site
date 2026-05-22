'use client'
import { Heart, Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'

const NAV_COLS = [
  {
    heading: 'サービス案内',
    links: [
      ['特徴・強み',             '/feature'],
      ['プラン・料金',           '/plan'],
      ['ご入会の流れ',           '/flow'],
      ['カウンセラー紹介',       '/greeting'],
      ['代表インタビュー',       '/story'],
      ['よくある質問',           '/faq'],
      ['実績データ',             '/data'],
      ['活動実績・成婚者の声',   '/results'],
      ['成婚者インタビュー',     '/interview'],
      ['成婚事例',               '/case'],
    ],
  },
  {
    heading: '婚活情報',
    links: [
      ['IBJについて',             '/ibj'],
      ['IBJ正規加盟店認定証',     '/16763909961240'],
      ['マッチングアプリとの違い', '/16770013730359'],
      ['AIマッチング機能',        '/16765078654055'],
      ['なぜ今利用者が増えている?', '/16774296731302'],
      ['なぜWeb面接が重要か',     '/16774301352630'],
      ['独身証明書とは?',         '/16774362542623'],
      ['婚活へのこだわり',        '/16767377701305'],
    ],
  },
  {
    heading: 'データ・実績',
    links: [
      ['男性会員データ',         '/16770016031373'],
      ['女性会員データ',         '/16770016529040'],
      ['ご成婚白書2025',         '/16770442332695'],
      ['活動実績2024年',         '/16770811329988'],
      ['ご成婚の定義',           '/16771848793719'],
      ['成婚後のフォロー',       '/16771361261377'],
      ['SDGsへの取り組み',       '/16776585117840'],
      ['アクセス',               '/access'],
    ],
  },
  {
    heading: 'その他',
    links: [
      ['オンライン契約の流れ',   '/16767435923382'],
      ['お見合い検索システム',   '/16764708414344'],
      ['婚活パートナー情報',     '/16772438559724'],
      ['専属占いサービス',       '/17250964253681'],
      ['公式SNS',                '/16764595712727'],
      ['お問い合わせ',           '/16760950606960'],
      ['男性無料相談',           '/m-contact'],
      ['女性無料相談',           '/w-contact'],
    ],
  },
]

const LEGAL_LINKS = [
  ['プライバシーポリシー', '/privacy'],
  ['利用規約',             '/terms'],
  ['特定商取引法',         '/tokusho'],
  ['サイトマップ',         '/sitemap'],
]

const RELATED_LINKS: [string, string][] = [
  ['NextraLabs（AIツール）', 'https://nextralab.jp'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#1a0f0f', color: 'rgba(255,255,255,0.75)' }}>

      {/* 上部グラデーションライン */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${PRIMARY}, ${ACCENT}, ${PRIMARY}, transparent)` }} />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">

        {/* ── ブランド + 連絡先 ── */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">

          {/* ブランド */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Heart size={20} style={{ color: PRIMARY }} fill={PRIMARY} />
              <span className="text-white font-bold text-lg tracking-wide">マレッジロードジャパン</span>
            </div>
            <p className="text-xs opacity-50 mb-4">Marriage Road Japan</p>
            <div className="flex flex-col gap-2">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: `${PRIMARY}22`, border: `1px solid ${PRIMARY}55`, color: PRIMARY }}
              >
                IBJ正規加盟店 登録番号 No.01226
              </div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: `${ACCENT}22`, border: `1px solid ${ACCENT}55`, color: ACCENT }}
              >
                海老名商工会議所 会員 No.4954
              </div>
            </div>
          </div>

          {/* 連絡先 */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2 opacity-70">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
              <span>〒243-0424 神奈川県海老名市社家6-5-2-301</span>
            </div>
            <a
              href="tel:050-1807-3163"
              className="flex items-center gap-2 hover:opacity-100 opacity-70 transition-opacity"
            >
              <Phone size={14} style={{ color: ACCENT }} />
              <span>050-1807-3163</span>
            </a>
            <a
              href="mailto:info@marriage-road.jp"
              className="flex items-center gap-2 hover:opacity-100 opacity-70 transition-opacity"
            >
              <Mail size={14} style={{ color: ACCENT }} />
              <span>info@marriage-road.jp</span>
            </a>
            {/* CTA ボタン */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold text-white transition-all hover:scale-105"
                style={{ background: PRIMARY }}
              >
                📅 無料説明会を予約
              </a>
              <a
                href="https://lin.ee/UxgdZ7F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
                style={{ background: `${ACCENT}33`, border: `1px solid ${ACCENT}88`, color: ACCENT }}
              >
                💬 LINE相談
              </a>
            </div>
          </div>
        </div>

        {/* ── 4カラム ナビ ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {NAV_COLS.map(({ heading, links }) => (
            <div key={heading}>
              <p
                className="text-xs font-semibold mb-4 tracking-widest uppercase"
                style={{ color: ACCENT }}
              >
                {heading}
              </p>
              <ul className="space-y-2">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-xs opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1 group"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── IBJ 信頼性バッジ ── */}
        <div
          className="py-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-semibold mb-5 tracking-widest uppercase text-center" style={{ color: ACCENT }}>
            IBJ 認証・信頼性情報
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* JPX プライム上場 */}
            <div
              className="flex items-start gap-4 p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-xs font-bold text-center leading-tight"
                style={{ background: '#c00', color: '#fff', fontSize: '10px', padding: '4px' }}
              >
                JPX<br/>PRIME<br/>TOKYO
              </div>
              <p className="text-xs opacity-60 leading-relaxed">
                株式会社IBJは、東京証券取引所プライム市場に上場しております。（証券コード：6071）
              </p>
            </div>
            {/* プライバシーマーク */}
            <div
              className="flex items-start gap-4 p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-xs font-bold text-center leading-tight"
                style={{ background: '#003087', color: '#fff', fontSize: '10px', padding: '4px' }}
              >
                P<br/>プライバシー<br/>マーク<br/>10740062
              </div>
              <p className="text-xs opacity-60 leading-relaxed">
                株式会社IBJは大切な個人情報を保護することを目的にプライバシーマークを取得しています。
              </p>
            </div>
            {/* CMS マーク */}
            <div
              className="flex items-start gap-4 p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center text-xs font-bold text-center leading-tight"
                style={{ background: `${PRIMARY}`, color: '#fff', fontSize: '10px', padding: '4px' }}
              >
                CMS<br/>マル適<br/>マーク<br/>0015003(5)
              </div>
              <p className="text-xs opacity-60 leading-relaxed">
                総合認証は会員数・経済産業省ガイドライン準拠・財務状態・教育体制・情報保護の審査をクリアした認証です。
              </p>
            </div>
          </div>
        </div>

        {/* ── 関連サービス ── */}
        <div className="pt-6 pb-2">
          <p className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: ACCENT }}>
            関連サービス
          </p>
          <div className="flex flex-wrap gap-4">
            {RELATED_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* ── ボトム ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs opacity-40 hover:opacity-70 transition-opacity"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs opacity-30">© 2024–2025 Marriage Road Japan. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
