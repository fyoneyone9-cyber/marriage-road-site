import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '成婚実績データ | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '結婚相談所マレッジロードジャパンの成婚実績データ。IBJネットワーク会員数82,000人以上。年齢別・活動期間別の婚活データを公開。海老名市・厚木市・神奈川県の婚活情報。',
  openGraph: {
    title: '成婚実績データ | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンの成婚実績データ。IBJネットワーク会員数82,000人以上。年齢別・活動期間別の婚活データを公開。海老名市・厚木市・神奈川県の婚活情報。',
    url: 'https://marriage-road-site.vercel.app/data',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚実績データ | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンの成婚実績データ。IBJネットワーク会員数82,000人以上。年齢別・活動期間別の婚活データを公開。海老名市・厚木市・神奈川県の婚活情報。',
  },
  alternates: { canonical: 'https://marriage-road-site.vercel.app/data' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road-site.vercel.app"},{"@type":"ListItem","position":2,"name":"実績データ","item":"https://marriage-road-site.vercel.app/data"}]}

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
