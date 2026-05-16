import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '選ばれる理由・特徴 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '海老名市・厚木市の結婚相談所「マレッジロードジャパン」が選ばれる3つの理由。IBJ正規加盟82,000人ネットワーク・オンライン全国対応・上級心理カウンセラー資格保有のカウンセラーによる丁寧サポート。',
  openGraph: {
    title: '選ばれる理由・特徴 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '海老名市・厚木市の結婚相談所「マレッジロードジャパン」が選ばれる3つの理由。IBJ正規加盟82,000人ネットワーク・オンライン全国対応・上級心理カウンセラー資格保有のカウンセラーによる丁寧サポート。',
    url: 'https://marriage-road.jp/feature',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '選ばれる理由・特徴 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '海老名市・厚木市の結婚相談所「マレッジロードジャパン」が選ばれる3つの理由。IBJ正規加盟82,000人ネットワーク・オンライン全国対応・上級心理カウンセラー資格保有のカウンセラーによる丁寧サポート。',
  },
  alternates: { canonical: 'https://marriage-road.jp/feature' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road.jp"},{"@type":"ListItem","position":2,"name":"特徴・強み","item":"https://marriage-road.jp/feature"}]}

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  )
}
