import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ご入会の流れ | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '結婚相談所マレッジロードジャパンへのご入会から成婚までの流れをご説明します。無料相談→入会審査→活動開始→お見合い→交際→成婚の5ステップ。ZOOMで全国対応。',
  openGraph: {
    title: 'ご入会の流れ | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンへのご入会から成婚までの流れをご説明します。無料相談→入会審査→活動開始→お見合い→交際→成婚の5ステップ。ZOOMで全国対応。',
    url: 'https://marriage-road.jp/flow',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ご入会の流れ | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンへのご入会から成婚までの流れをご説明します。無料相談→入会審査→活動開始→お見合い→交際→成婚の5ステップ。ZOOMで全国対応。',
  },
  alternates: { canonical: 'https://marriage-road.jp/flow' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road.jp"},{"@type":"ListItem","position":2,"name":"ご入会の流れ","item":"https://marriage-road.jp/flow"}]}

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
