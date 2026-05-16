import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: 'アクセス・所在地 | マレッジロードジャパン【海老名市 社家駅1分】',
  description: 'マレッジロードジャパンへのアクセス。〒243-0424 神奈川県海老名市社家6-5-2-301。JR相模線「社家駅」徒歩1分。駐車場あり。ZOOM全国対応。Google Maps・地図・電話番号掲載。',
  keywords: ['マレッジロードジャパン アクセス', '海老名市 社家 結婚相談所', '社家駅 婚活', '結婚相談所 場所', '海老名 結婚相談所 地図'],
  openGraph: {
    title: 'アクセス | マレッジロードジャパン【社家駅1分】',
    description: '神奈川県海老名市社家6-5-2-301。JR相模線「社家駅」徒歩1分。駐車場あり。ZOOM全国対応。',
    url: `${BASE}/access`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'アクセス | マレッジロードジャパン', description: '海老名市社家6-5-2-301。社家駅1分。' },
  alternates: { canonical: `${BASE}/access` },
}
const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE }, { '@type': 'ListItem', position: 2, name: 'アクセス', item: `${BASE}/access` }] }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  )
}
