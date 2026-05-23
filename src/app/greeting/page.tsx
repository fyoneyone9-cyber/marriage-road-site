import type { Metadata } from 'next'
import GreetingPageClient from './GreetingPageClient'

export const metadata: Metadata = {
  title: '代表者ご挨拶|マレッジロードジャパン - 上級心理カウンセラー',
  description: 'マレッジロードジャパン代表者ご挨拶。上級心理カウンセラー・恋愛カウンセラー資格保有。皆様の幸せな結婚をサポートする想いをお伝えします。',
  alternates: { canonical: 'https://marriage-road.jp/greeting' },
  openGraph: {
    title: '代表者ご挨拶|マレッジロードジャパン - 上級心理カウンセラー',
    description: 'マレッジロードジャパン代表者ご挨拶。上級心理カウンセラー・恋愛カウンセラー資格保有。皆様の幸せな結婚をサポートする想いをお伝えします。',
    url: 'https://marriage-road.jp/greeting',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '代表者ご挨拶|マレッジロードジャパン - 上級心理カウンセラー',
    description: 'マレッジロードジャパン代表者ご挨拶。上級心理カウンセラー・恋愛カウンセラー資格保有。皆様の幸せな結婚をサポートする想いをお伝えします。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function GreetingPage() {
  return <GreetingPageClient />
}
