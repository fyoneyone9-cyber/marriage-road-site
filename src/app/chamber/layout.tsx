import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '海老名商工会議所 公認会員 | マレッジロードジャパン【結婚相談所】',
  description: 'マレッジロードジャパンは海老名商工会議所の正式会員（会員No.4954）として認定された信頼ある結婚相談所です。地域に根ざした婚活支援を提供しています。',
  openGraph: {
    title: '海老名商工会議所 公認会員 | マレッジロードジャパン【結婚相談所】',
    description: 'マレッジロードジャパンは海老名商工会議所の正式会員（会員No.4954）として認定された信頼ある結婚相談所です。地域に根ざした婚活支援を提供しています。',
    url: 'https://marriage-road-site.vercel.app/chamber',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '海老名商工会議所 公認会員 | マレッジロードジャパン【結婚相談所】',
    description: 'マレッジロードジャパンは海老名商工会議所の正式会員（会員No.4954）として認定された信頼ある結婚相談所です。地域に根ざした婚活支援を提供しています。',
  },
  alternates: { canonical: 'https://marriage-road-site.vercel.app/chamber' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road-site.vercel.app"},{"@type":"ListItem","position":2,"name":"商工会議所","item":"https://marriage-road-site.vercel.app/chamber"}]}

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
