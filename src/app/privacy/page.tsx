import Footer from '@/components/Footer'
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
  title: 'プライバシーポリシー | マレッジロードジャパン',
  description: 'マレッジロードジャパンのプライバシーポリシー。個人情報の取得・利用目的・第三者提供・開示請求について。',
}

const sections = [
  {
    title: '1. 個人情報の取得について',
    content: `当相談所（マレッジロードジャパン）は、以下の方法でお客様の個人情報を取得いたします。
・お問い合わせフォーム・LINE・メール・電話でのご連絡
・入会申込書・各種書類のご提出
・サービス利用時に提供いただく情報`,
  },
  {
    title: '2. 個人情報の利用目的',
    content: `取得した個人情報は、以下の目的に限り利用いたします。
・婚活サービスの提供・カウンセリングの実施
・お相手のご紹介・お見合いのセッティング
・各種ご連絡・ご案内の送付
・IBJ（日本結婚相談所連盟）への登録・サービス提供
・サービス改善のための分析（個人を特定しない形式）`,
  },
  {
    title: '3. 個人情報の第三者提供',
    content: `当相談所は、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
・お客様の同意がある場合
・法令に基づく場合
・IBJ（日本結婚相談所連盟）へのサービス提供に必要な場合（加盟店契約に基づく）
・人の生命・身体・財産の保護のために必要がある場合`,
  },
  {
    title: '4. 個人情報の安全管理',
    content: `当相談所は、お客様の個人情報を適切に管理し、不正アクセス・紛失・破壊・改ざん・漏洩などのリスクに対して合理的な安全対策を実施します。また、業務委託先に対しても適切な監督を行います。`,
  },
  {
    title: '5. 個人情報の開示・訂正・削除',
    content: `お客様は、当相談所が保有する個人情報について、開示・訂正・削除・利用停止を請求することができます。ご希望の場合は、下記お問い合わせ先までご連絡ください。本人確認の上、合理的な期間内に対応いたします。`,
  },
  {
    title: '6. Cookieの使用について',
    content: `当サイトでは、サービス改善のためにCookieを使用する場合があります。Cookieによって個人を特定する情報は収集いたしません。ブラウザの設定によりCookieを無効にすることができます。`,
  },
  {
    title: '7. プライバシーポリシーの変更',
    content: `本ポリシーは、法令の改正やサービスの変更に応じて更新することがあります。変更後のポリシーは当サイトに掲載した時点で効力を生じます。`,
  },
  {
    title: '8. お問い合わせ先',
    content: `個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。

事業者名：マレッジロードジャパン
代表者：米山文貴
住所：〒243-0424 神奈川県海老名市泉6-5-2-301
電話：050-1807-3163
メール：info@marriage-road.jp
受付時間：10:00〜23:00（年中無休）`,
  },
]

export default function PrivacyPage() {
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
          <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>Privacy Policy</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="text-sm" style={{ color: MUTED }}>最終更新日：2024年1月1日</p>
        </div>

        <div className="rounded-2xl p-6 mb-8" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            マレッジロードジャパン（以下「当相談所」）は、お客様の個人情報保護を重要な責務と考え、
            以下のプライバシーポリシーを定め、適切に取り扱います。
          </p>
        </div>

        <div className="space-y-6">
          {sections.map(({ title, content }, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ background: 'white', border: `1px solid ${BORDER}` }}>
              <h2 className="font-bold text-base mb-3" style={{ color: PRIMARY }}>{title}</h2>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: MUTED }}>{content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` }}>
            トップページへ戻る
          </Link>
        </div>
      </main>

      {/* フッター */}
      <Footer />
      <QuickNav />
    </div>
  )
}
