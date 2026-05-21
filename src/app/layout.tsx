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

const BASE_URL = 'https://marriage-road.jp'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'マレッジロードジャパン | 海老名・厚木の結婚相談所【IBJ正規加盟】',
    template: '%s | マレッジロードジャパン',
  },
  description: '神奈川県海老名市・厚木市の結婚相談所「マレッジロードジャパン」。IBJ正規加盟店（No.01226）・海老名商工会議所会員No.4954。全国ZOOM対応。上級心理カウンセラー資格保有。初月月会費無料。無料相談受付中。',
  keywords: [
    '結婚相談所', '海老名市', '厚木市', '神奈川', '婚活',
    '海老名 結婚相談所', '厚木 結婚相談所', '神奈川 婚活',
    '神奈川 結婚相談所', '婚活 オンライン', 'IBJ 結婚相談所',
    '日本結婚相談所連盟', 'マレッジロードジャパン', 'Marriage Road Japan',
    '婚活 海老名', '婚活 厚木', '結婚相談所 安い', '結婚相談所 おすすめ',
    '婚活 ZOOM', '結婚相談所 全国', '上級心理カウンセラー',
    '婚活 神奈川県', '婚活 茅ヶ崎', '婚活 大和市', '婚活 相模原',
  ],
  openGraph: {
    title: 'マレッジロードジャパン | 海老名・厚木の結婚相談所【IBJ正規加盟】',
    description: 'IBJ正規加盟店。会員数82,000人以上のネットワークで真剣な出会いをサポートします。初月月会費無料。ZOOM全国対応。無料相談受付中。',
    url: BASE_URL,
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/ibj-banner.jpg`,
        width: 900,
        height: 400,
        alt: 'マレッジロードジャパン - IBJ正規加盟の結婚相談所',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マレッジロードジャパン | 海老名・厚木の結婚相談所【IBJ正規加盟】',
    description: 'IBJ正規加盟店。会員数82,000人以上。初月無料。ZOOM全国対応。無料相談受付中。',
    images: [`${BASE_URL}/ibj-banner.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon_32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon_16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  themeColor: '#b76e79',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'マレッジロードジャパン',
  },
  formatDetection: {
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: BASE_URL },
  verification: {
    google: 'kaXDMCUI7h6X9sfjZIKb3KFctDj4Z04oceuSrdQrxIE',
  },
}

// Schema.org 構造化データ（強化版）
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MarriageAgency',
  '@id': `${BASE_URL}/#organization`,
  name: 'マレッジロードジャパン',
  alternateName: 'Marriage Road Japan',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon_32x32.png`,
  image: `${BASE_URL}/ibj-banner.jpg`,
  email: 'info@marriage-road.jp',
  telephone: '050-1807-3163',
  priceRange: '¥¥',
  address: {
    '@type': 'PostalAddress',
    postalCode: '243-0424',
    addressRegion: '神奈川県',
    addressLocality: '海老名市',
    streetAddress: '社家6-5-2-301',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.4472,
    longitude: 139.3906,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '10:00',
    closes: '23:00',
  },
  areaServed: [
    { '@type': 'City', name: '海老名市' },
    { '@type': 'City', name: '厚木市' },
    { '@type': 'City', name: '茅ヶ崎市' },
    { '@type': 'City', name: '大和市' },
    { '@type': 'AdministrativeArea', name: '神奈川県' },
    { '@type': 'AdministrativeArea', name: '東京都' },
    { '@type': 'Country', name: '日本' },
  ],
  description: 'IBJ正規加盟（No.01226）の結婚相談所。上級心理カウンセラー・メンタル心理カウンセラー資格保有。海老名商工会議所会員（No.4954）。ZOOM全国対応。',
  foundingDate: '2020',
  memberOf: [
    {
      '@type': 'Organization',
      name: '日本結婚相談所連盟（IBJ）',
      url: 'https://www.ibjapan.com/',
    },
    {
      '@type': 'Organization',
      name: '海老名商工会議所',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '婚活サポートプラン',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'ライトプラン',
        description: 'オンライン特化・全国対応。月会費8,000円、入会金28,000円。',
        price: '8000',
        priceCurrency: 'JPY',
        priceSpecification: { '@type': 'PriceSpecification', price: 8000, priceCurrency: 'JPY', billingIncrement: 1 },
      },
      {
        '@type': 'Offer',
        name: 'スタンダードプラン',
        description: '全国対応・婚活メソッド付き。月会費9,800円、入会金28,000円。',
        price: '9800',
        priceCurrency: 'JPY',
      },
      {
        '@type': 'Offer',
        name: 'プレミアムプラン',
        description: '神奈川・東京限定・フルサポート。月会費18,000円、入会金28,000円。',
        price: '18000',
        priceCurrency: 'JPY',
      },
    ],
  },
  sameAs: [
    'https://www.youtube.com/@marriage_road',
    'https://lin.ee/UxgdZ7F',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'マレッジロードジャパン',
  description: '海老名市・厚木市の結婚相談所。IBJ正規加盟店。',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/faq?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5929585030139547"
          crossOrigin="anonymous"
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
