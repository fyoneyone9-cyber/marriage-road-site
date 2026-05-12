import QuickNav from '@/components/QuickNav'
import Link from 'next/link'

const PRIMARY = '#c9836f'
const ACCENT  = '#d4a96a'
const BASE    = '#fff8f5'
const SURFACE = '#fff1eb'
const TEXT    = '#3d2c2c'
const MUTED   = '#8a6a60'
const BORDER  = '#e8d5cc'

export const metadata = {
  title: '特定商取引法に基づく表記 | マレッジロードジャパン',
  description: 'マレッジロードジャパンの特定商取引法に基づく表記。販売業者・住所・電話・料金・支払い方法・解約について。',
}

const items = [
  { label: '販売業者', value: 'マレッジロードジャパン' },
  { label: '代表者氏名', value: '米山文貴' },
  { label: '所在地', value: '〒243-0424 神奈川県海老名市泉6-5-2-301' },
  { label: '電話番号', value: '050-1807-3163' },
  { label: 'メールアドレス', value: 'info@marriage-road.jp' },
  { label: '受付時間', value: '10:00〜23:00（年中無休）' },
  { label: 'サービス名', value: '結婚相談所サービス（婚活カウンセリング・お相手紹介・成婚サポート）' },
  { label: '販売価格', value: '無料相談にてご案内（プランにより異なります）\n初月月会費無料キャンペーン実施中' },
  { label: '支払い方法', value: '銀行振込・楽天ペイ・d払い・PayPay' },
  { label: '支払い時期', value: '月額制。毎月所定の日にお支払いいただきます。\n詳細は契約時にご案内します。' },
  { label: 'サービス提供時期', value: '入会手続き完了後、速やかにサービスを開始します。' },
  { label: '解約・返金', value: '書面またはメール（info@marriage-road.jp）にて申請してください。\n解約の効力は翌月末をもって生じます。\n既払い料金の返金については、契約書の規定に従います。' },
  { label: '役務の対価以外の費用', value: 'IBJへの登録料等が別途必要となる場合があります。詳細は無料相談にてご案内します。' },
  { label: '特記事項', value: 'IBJ（日本結婚相談所連盟）正規加盟店（登録番号No.01226）として、IBJSプラットフォームを通じたサービスを提供します。' },
]

export default function TokushoPage() {
  return (
    <div style={{ background: BASE, color: TEXT, minHeight: '100vh', fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <header style={{ background: 'rgba(255,248,245,0.97)', borderBottom: `1px solid ${BORDER}` }}
        className="sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" style={{ color: PRIMARY, fontWeight: 700, fontSize: '1rem' }}>
            マレッジロードジャパン
          </Link>
          <Link href="/" className="text-sm hover:opacity-70" style={{ color: MUTED }}>
            ← トップへ戻る
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>Legal</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">特定商取引法に基づく表記</h1>
          <p className="text-sm" style={{ color: MUTED }}>特定商取引法第11条に基づく表記</p>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
          {items.map(({ label, value }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row"
              style={{
                borderBottom: i < items.length - 1 ? `1px solid ${BORDER}` : 'none',
                background: i % 2 === 0 ? 'white' : SURFACE,
              }}
            >
              <div
                className="px-6 py-4 font-medium text-sm flex-shrink-0 sm:w-48"
                style={{ color: PRIMARY }}
              >
                {label}
              </div>
              <div
                className="px-6 py-4 text-sm leading-relaxed whitespace-pre-line"
                style={{ color: MUTED }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl p-6" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            ※ 上記内容についてご不明な点がございましたら、お問い合わせフォームまたは電話・メールにてお気軽にご連絡ください。
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 mr-4"
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}
          >
            無料相談を予約する
          </Link>
          <Link href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-80"
            style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY }}
          >
            トップページへ戻る
          </Link>
        </div>
      </main>

      {/* フッター */}
      <footer className="py-8 px-4 text-center text-xs mt-8" style={{ background: '#3d2c2c', color: 'rgba(255,255,255,0.6)' }}>
        <p className="mb-2 font-semibold text-sm text-white">マレッジロードジャパン</p>
        <p className="mb-1">〒243-0424 神奈川県海老名市泉6-5-2-301</p>
        <p className="mb-4 opacity-70">IBJ正規加盟店 · 登録番号No.01226</p>
        <div className="flex justify-center gap-5 mb-4">
          <Link href="/privacy" className="hover:opacity-80">プライバシーポリシー</Link>
          <Link href="/terms" className="hover:opacity-80">利用規約</Link>
          <Link href="/tokusho" className="hover:opacity-80">特定商取引法</Link>
        </div>
        <p className="opacity-40">© 2024 Marriage Road Japan. All rights reserved.</p>
      </footer>
      <QuickNav />
    </div>
  )
}
