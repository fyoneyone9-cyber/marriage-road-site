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
  title: '利用規約 | マレッジロードジャパン',
  description: 'マレッジロードジャパンの利用規約。サービス概要・料金・解約・禁止事項・免責事項について。',
}

const sections = [
  {
    title: '第1条（サービス概要）',
    content: `マレッジロードジャパン（以下「当相談所」）は、日本結婚相談所連盟（IBJ）正規加盟店として、会員様の婚活活動を支援するサービスを提供します。

主なサービス内容：
・婚活カウンセリング・ヒアリング
・婚活プロフィール作成サポート
・IBJSプラットフォームを通じたお相手のご紹介
・お見合いのセッティング・サポート
・活動〜成婚までのフォローアップ
・成婚後のアフターフォロー（プランによる）`,
  },
  {
    title: '第2条（入会資格）',
    content: `当相談所のサービスをご利用いただくには、以下の要件を満たす必要があります。
・独身であること（離婚歴の有無は問いません）
・真剣に結婚を考えていること
・IBJが定める入会基準を満たすこと
・身分証明書等の必要書類を提出できること
・日本在住であること`,
  },
  {
    title: '第3条（料金）',
    content: `サービスの利用料金は、ご選択いただくプランによって異なります。料金の詳細は無料相談にてご案内いたします。

・ライトプラン：全国対応
・スタンダードプラン：全国対応
・プレミアムプラン：神奈川県限定

初月月会費無料キャンペーンを実施中です（詳細は無料相談にて）。

支払い方法：銀行振込・楽天ペイ・d払い・PayPay`,
  },
  {
    title: '第4条（契約期間・更新）',
    content: `契約期間は1ヶ月単位とし、所定の手続きがない限り自動更新となります。契約内容の詳細は、入会時にお渡しする契約書をご確認ください。`,
  },
  {
    title: '第5条（解約）',
    content: `解約を希望される場合は、書面またはメール（info@marriage-road.jp）にて申請してください。解約の効力は、当相談所が解約申請を受理した日の翌月末をもって生じます。

既に支払い済みの料金の返金については、契約書の規定に従います。`,
  },
  {
    title: '第6条（禁止事項）',
    content: `会員様は以下の行為を行ってはなりません。
・虚偽の情報を提供すること
・他の会員様へのハラスメント・迷惑行為
・当相談所の承諾なく商業目的での利用
・法令または公序良俗に反する行為
・当相談所または第三者の権利を侵害する行為
・サービスを不正に利用する行為

禁止事項に違反した場合、当相談所は会員資格の停止・退会処分を行う場合があります。`,
  },
  {
    title: '第7条（個人情報の取り扱い）',
    content: `会員様の個人情報は、別途定めるプライバシーポリシーに従って適切に管理いたします。`,
  },
  {
    title: '第8条（免責事項）',
    content: `当相談所は、以下の事項について責任を負いません。
・サービス利用によって生じた直接的・間接的損害
・お相手とのご縁・成婚の保証
・天災地変・通信障害等不可抗力による損害
・第三者によるサービス妨害行為による損害

当相談所は、会員様の婚活活動を誠実にサポートしますが、成婚を保証するものではありません。`,
  },
  {
    title: '第9条（規約の変更）',
    content: `当相談所は、必要に応じて本規約を変更することができます。変更後の規約は、当サイトへの掲載をもって効力を生じます。重要な変更については、会員様への通知を行います。`,
  },
  {
    title: '第10条（準拠法・管轄）',
    content: `本規約は日本法に準拠します。本規約に関する紛争については、横浜地方裁判所を第一審の専属的合意管轄裁判所とします。`,
  },
  {
    title: 'お問い合わせ',
    content: `サービスに関するお問い合わせは下記までご連絡ください。

マレッジロードジャパン（代表：米山文貴）
〒243-0424 神奈川県海老名市泉6-5-2-301
電話：050-1807-3163
メール：info@marriage-road.jp
受付時間：10:00〜23:00（年中無休）`,
  },
]

export default function TermsPage() {
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
          <p className="text-sm font-medium mb-2" style={{ color: PRIMARY }}>Terms of Service</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">利用規約</h1>
          <p className="text-sm" style={{ color: MUTED }}>最終更新日：2024年1月1日</p>
        </div>

        <div className="rounded-2xl p-6 mb-8" style={{ background: SURFACE, border: `1px solid ${BORDER}` }}>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            本利用規約（以下「本規約」）は、マレッジロードジャパン（以下「当相談所」）が提供する
            婚活サービスの利用条件を定めるものです。サービスをご利用いただく前に、必ずご確認ください。
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
