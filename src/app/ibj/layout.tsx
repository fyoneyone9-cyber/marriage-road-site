import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: 'IBJ（日本結婚相談所連盟）とは | マレッジロードジャパン',
  description: 'マレッジロードジャパンが加盟するIBJ（日本結婚相談所連盟）について。会員数82,000人以上の日本最大級の結婚相談所ネットワーク。IBJ正規加盟店No.01226。サンマリエ・ツヴァイと同じプラットフォームでお相手探し。',
  keywords: ['IBJ 結婚相談所', '日本結婚相談所連盟', 'IBJ 加盟店', 'IBJ 会員数', 'サンマリエ ツヴァイ IBJ', '結婚相談所 ネットワーク'],
  openGraph: {
    title: 'IBJ（日本結婚相談所連盟）について | マレッジロードジャパン',
    description: '会員数82,000人以上のIBJ正規加盟店。サンマリエ・ツヴァイと同じネットワークでお相手探し。',
    url: `${BASE}/ibj`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'IBJとは | マレッジロードジャパン', description: 'IBJ正規加盟店No.01226。会員数82,000人以上のネットワーク。' },
  alternates: { canonical: `${BASE}/ibj` },
}
const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE }, { '@type': 'ListItem', position: 2, name: 'IBJについて', item: `${BASE}/ibj` }] }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  )
}
