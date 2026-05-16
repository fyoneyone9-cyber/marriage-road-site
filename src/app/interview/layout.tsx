import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: 'カウンセラーインタビュー | マレッジロードジャパン',
  description: 'マレッジロードジャパンのカウンセラー・米山文貴へのインタビュー。結婚相談所を始めた想い、婚活に込めた思い、会員さんへのメッセージをお伝えします。上級心理カウンセラー資格保有。',
  keywords: ['婚活カウンセラー', '結婚相談所 カウンセラー', 'マレッジロードジャパン 代表', '米山文貴', '上級心理カウンセラー', '婚活 サポート'],
  openGraph: {
    title: 'カウンセラーインタビュー | マレッジロードジャパン',
    description: '上級心理カウンセラー資格保有のカウンセラー米山文貴へのインタビュー。婚活への想いをお伝えします。',
    url: `${BASE}/interview`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'カウンセラーインタビュー | マレッジロードジャパン', description: '上級心理カウンセラー米山文貴へのインタビュー' },
  alternates: { canonical: `${BASE}/interview` },
}
const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE }, { '@type': 'ListItem', position: 2, name: 'カウンセラーインタビュー', item: `${BASE}/interview` }] }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  )
}
