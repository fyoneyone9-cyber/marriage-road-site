import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: 'よくある質問（FAQ） | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '海老名の結婚相談所マレッジロードジャパンへのよくある質問。費用・成婚率・活動期間・オンライン対応・IBJとは何か・他の結婚相談所との違いなど、ご入会前の疑問にお答えします。',
  keywords: ['結婚相談所 よくある質問', '婚活 FAQ', '結婚相談所 費用', '結婚相談所 成婚率', '海老名 婚活 疑問', 'IBJ 結婚相談所 違い'],
  openGraph: {
    title: 'よくある質問（FAQ） | マレッジロードジャパン',
    description: '費用・成婚率・活動期間・オンライン対応・IBJとは何かなど、ご入会前の疑問にお答えします。',
    url: `${BASE}/faq`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'よくある質問（FAQ） | マレッジロードジャパン',
    description: '費用・成婚率・活動期間・オンライン対応など婚活の疑問をまとめました。',
  },
  alternates: { canonical: `${BASE}/faq` },
}
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'まず料金の相談について直接話を聞きたいのですが',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホームページ記載の電話番号またはメールフォームからお気軽にお問い合わせください。',
      },
    },
    {
      '@type': 'Question',
      name: '結婚相談所で強引な勧誘はありませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ございません。勧誘行為は一切行っておりませんのでご安心ください。',
      },
    },
    {
      '@type': 'Question',
      name: 'お見合いの場所はどこで行いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'カフェ・ホテルラウンジなどどこでも可能です。オンラインなら全国対応。対面は神奈川県周辺となります。',
      },
    },
    {
      '@type': 'Question',
      name: '仕事で忙しくて時間がなくても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '対応しております。可能な限りお客様のスケジュールに合わせてサポートします。',
      },
    },
    {
      '@type': 'Question',
      name: '無料相談はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ございます。まずオンライン相談または対面で無料相談をした後に本登録となります。',
      },
    },
    {
      '@type': 'Question',
      name: '過去に失恋してもできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんです。同じ経験をして乗り越えた会員様もいらっしゃいます。お気軽にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '支払い方法について教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '銀行振込・クレジットカード・口座振替のいずれかをお選びいただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '人見知りなのでパーティーやイベント参加が不安です。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IBJのサポートします。イベント参加は、慣れないうちは無理せず進められます。あなたのペースに合わせてサポートします。',
      },
    },
  ],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'よくある質問', item: `${BASE}/faq` },
  ],
}
export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
