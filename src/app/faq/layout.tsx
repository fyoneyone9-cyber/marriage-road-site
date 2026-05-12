import type { Metadata } from 'next'

const BASE_URL = 'https://marriage-road-site.vercel.app'

export const metadata: Metadata = {
  title: 'よくある質問（FAQ） | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '結婚相談所マレッジロードジャパンへのよくある質問。料金・入会条件・活動期間・オンライン対応・IBJとは何か・他の婚活との違いなど、ご不明点を解決します。',
  openGraph: {
    title: 'よくある質問（FAQ） | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンへのよくある質問。料金・入会条件・活動期間・オンライン対応・IBJとは何か・他の婚活との違いなど。',
    url: `${BASE_URL}/faq`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'よくある質問（FAQ） | マレッジロードジャパン',
    description: '料金・入会条件・活動期間・オンライン対応など、よくある質問をまとめました。',
  },
  alternates: { canonical: `${BASE_URL}/faq` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'まずプランの費用について直接お話を聞きたいのですが？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ホームページ記載の電話番号かメールフォームまでお気軽にお問い合わせください。',
      },
    },
    {
      '@type': 'Question',
      name: '無料相談で強引な勧誘はされませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いたしません。勧誘行為は一切行っておりませんのでご安心ください。',
      },
    },
    {
      '@type': 'Question',
      name: '無料相談の場所はどこでも大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'カフェ・図書館などどこでも大丈夫です。オンラインなら全国対応。対面は神奈川県内のみとなります。',
      },
    },
    {
      '@type': 'Question',
      name: '忙しくて時間が取れなくても大丈夫ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '対応いたします。可能な限りお時間を合わせますのでお気軽にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '入会審査はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ございます。まずオンラインもしくは対面で無料説明会を実施し、ご意志確認後に本入会となります。',
      },
    },
    {
      '@type': 'Question',
      name: '離婚歴がありますが、入会できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんです。離婚されて入会している方も多数所属しております。お気軽にご相談ください。',
      },
    },
    {
      '@type': 'Question',
      name: '支払方法について教えてください。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '銀行振り込み・メルペイ・d払いのいずれかをご選択いただけます。',
      },
    },
    {
      '@type': 'Question',
      name: '人見知りなのでパーティーやイベント参加が不安です。',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'もちろんサポートします。イベント参加自体、無理なく進めても問題ございません。あなたのペースに合わせてサポートします。',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'よくある質問', item: `${BASE_URL}/faq` },
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
