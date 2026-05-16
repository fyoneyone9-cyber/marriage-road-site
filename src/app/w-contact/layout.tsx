import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '女性向け無料相談フォーム | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '女性向け無料相談フォーム。結婚相談所マレッジロードジャパンへのお問い合わせ・無料相談予約はこちら。受付時間10:00〜23:00（年中無休）。ZOOM対応で全国からご相談可能。',
  openGraph: {
    title: '女性向け無料相談フォーム | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '女性向け無料相談フォーム。結婚相談所マレッジロードジャパンへのお問い合わせ・無料相談予約はこちら。受付時間10:00〜23:00（年中無休）。ZOOM対応で全国からご相談可能。',
    url: 'https://marriage-road.jp/w-contact',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '女性向け無料相談フォーム | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '女性向け無料相談フォーム。結婚相談所マレッジロードジャパンへのお問い合わせ・無料相談予約はこちら。受付時間10:00〜23:00（年中無休）。ZOOM対応で全国からご相談可能。',
  },
  alternates: { canonical: 'https://marriage-road.jp/w-contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road.jp"},{"@type":"ListItem","position":2,"name":"女性向け無料相談","item":"https://marriage-road.jp/w-contact"}]}

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
