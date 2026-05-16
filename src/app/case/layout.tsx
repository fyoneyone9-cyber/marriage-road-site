import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: '成婚事例・お客様の声 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '海老名・神奈川のマレッジロードジャパンで成婚されたお客様の実際のエピソードをご紹介。IBJネットワーク活用で30代・40代の成婚実績多数。あなたと同じ悩みを抱えていた方々の声をぜひご覧ください。',
  keywords: ['結婚相談所 成婚事例', '婚活 体験談', '海老名 成婚', 'IBJ 成婚', '結婚相談所 口コミ', '婚活 成功例'],
  openGraph: {
    title: '成婚事例・お客様の声 | マレッジロードジャパン',
    description: '海老名・神奈川の結婚相談所マレッジロードジャパンの成婚事例。IBJネットワーク活用で多数の成婚実績。',
    url: `${BASE}/case`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '成婚事例 | マレッジロードジャパン', description: '海老名・神奈川の結婚相談所マレッジロードジャパン成婚事例' },
  alternates: { canonical: `${BASE}/case` },
}
const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE }, { '@type': 'ListItem', position: 2, name: '成婚事例', item: `${BASE}/case` }] }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  )
}
