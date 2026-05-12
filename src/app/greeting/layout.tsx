import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'カウンセラー紹介 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
  description: '代表カウンセラー紹介。上級心理カウンセラー・メンタル心理カウンセラー・結婚相談業コンプライアンス研修修了。2度の離婚と再婚経験を活かした親身なサポート。海老名商工会議所会員No.4954。',
  openGraph: {
    title: 'カウンセラー紹介 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '代表カウンセラー紹介。上級心理カウンセラー・メンタル心理カウンセラー・結婚相談業コンプライアンス研修修了。2度の離婚と再婚経験を活かした親身なサポート。海老名商工会議所会員No.4954。',
    url: 'https://marriage-road-site.vercel.app/greeting',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'カウンセラー紹介 | マレッジロードジャパン【海老名・厚木の結婚相談所】',
    description: '代表カウンセラー紹介。上級心理カウンセラー・メンタル心理カウンセラー・結婚相談業コンプライアンス研修修了。2度の離婚と再婚経験を活かした親身なサポート。海老名商工会議所会員No.4954。',
  },
  alternates: { canonical: 'https://marriage-road-site.vercel.app/greeting' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://marriage-road-site.vercel.app"},{"@type":"ListItem","position":2,"name":"カウンセラー紹介","item":"https://marriage-road-site.vercel.app/greeting"}]}

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
