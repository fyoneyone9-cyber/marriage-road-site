import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'マレッジロードジャパン | 神奈川・厚木・海老名の結婚相談所【IBJ加盟】',
  description:
    '神奈川県海老名市・厚木市の結婚相談所「マレッジロードジャパン」。日本結婚相談所連盟（IBJ）正規加盟店。会員数82,000人以上のネットワークで、真剣な出会いをサポートします。無料相談受付中。',
  keywords: [
    '結婚相談所', '海老名市', '厚木市', '神奈川', '婚活',
    'IBJ', '日本結婚相談所連盟', 'マレッジロードジャパン', 'Marriage Road Japan',
    '海老名 結婚相談所', '厚木 結婚相談所', '神奈川 婚活',
  ],
  openGraph: {
    title: 'マレッジロードジャパン | 神奈川・厚木・海老名の結婚相談所',
    description: 'IBJ正規加盟店。会員数82,000人以上のネットワークで真剣な出会いをサポートします。',
    url: 'https://www.marriage-road.jp',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マレッジロードジャパン | 神奈川・厚木・海老名の結婚相談所',
    description: 'IBJ正規加盟店。会員数82,000人以上。無料相談受付中。',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon_32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon_16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.marriage-road.jp' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'マレッジロードジャパン',
  alternateName: 'Marriage Road Japan',
  url: 'https://www.marriage-road.jp',
  email: 'info@marriage-road.jp',
  telephone: '050-1807-3163',
  address: {
    '@type': 'PostalAddress',
    postalCode: '243-0424',
    addressRegion: '神奈川県',
    addressLocality: '海老名市',
    streetAddress: '泉6-5-2-301',
    addressCountry: 'JP',
  },
  areaServed: [
    { '@type': 'City', name: '海老名市' },
    { '@type': 'City', name: '厚木市' },
    { '@type': 'AdministrativeArea', name: '神奈川県' },
  ],
  description: '日本結婚相談所連盟（IBJ）正規加盟店。神奈川県海老名市・厚木市エリアの結婚相談所。',
  foundingDate: '2020',
  sameAs: ['https://www.youtube.com/@marriage_road'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans bg-[#fff8f5] text-[#3d2c2c] antialiased`}
        style={{ fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}
      >
        {children}
      </body>
    </html>
  )
}
