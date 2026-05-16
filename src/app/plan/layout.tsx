import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プラン・料金 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '結婚相談所マレッジロードジャパンのプラン料金一覧。ライトプラン8,000円/月〜、スタンダードプラン9,800円/月、プレミアムプラン18,000円/月。入会金28,000円・初月無料キャンペーン実施中。',
  openGraph: {
    title: 'プラン・料金 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンのプラン料金一覧。ライトプラン8,000円/月〜、スタンダードプラン9,800円/月、プレミアムプラン18,000円/月。入会金28,000円・初月無料キャンペーン実施中。',
    url: 'https://marriage-road.jp/plan',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'プラン・料金 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '結婚相談所マレッジロードジャパンのプラン料金一覧。ライトプラン8,000円/月〜、スタンダードプラン9,800円/月、プレミアムプラン18,000円/月。入会金28,000円・初月無料キャンペーン実施中。',
  },
  alternates: { canonical: 'https://marriage-road.jp/plan' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road.jp"},{"@type":"ListItem","position":2,"name":"プラン・料金","item":"https://marriage-road.jp/plan"}]}

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
