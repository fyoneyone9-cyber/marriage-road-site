import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: '婚活ブログ・コラム | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '海老名の結婚相談所マレッジロードジャパンの婚活ブログ。婚活のコツ・お見合いの心構え・成婚への道のりなど、実践的な情報を発信しています。神奈川・全国の婚活に役立つ情報をご覧ください。',
  keywords: ['婚活ブログ', '婚活コラム', '結婚相談所 ブログ', '婚活のコツ', 'お見合い 心構え', '海老名 婚活情報'],
  openGraph: {
    title: '婚活ブログ・コラム | マレッジロードジャパン',
    description: '海老名の結婚相談所マレッジロードジャパンの婚活ブログ。婚活のコツ・お見合いの心構えなど実践的な情報を発信。',
    url: `${BASE}/blog`,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '婚活ブログ | マレッジロードジャパン', description: '婚活のコツ・お見合い情報など実践的な婚活情報' },
  alternates: { canonical: `${BASE}/blog` },
}
const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'ホーム', item: BASE }, { '@type': 'ListItem', position: 2, name: '婚活ブログ', item: `${BASE}/blog` }] }
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  )
}
