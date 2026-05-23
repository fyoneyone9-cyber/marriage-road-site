import type { Metadata } from 'next'
import DataPageClient from './DataPageClient'

export const metadata: Metadata = {
  title: '成婚実績データ|マレッジロードジャパン',
  description: 'マレッジロードジャパンの成婚実績データ。IBJ加盟82,000人以上のネットワーク活用で高い成婚率を実現。',
  alternates: { canonical: 'https://marriage-road.jp/data' },
  openGraph: {
    title: '成婚実績データ|マレッジロードジャパン',
    description: 'マレッジロードジャパンの成婚実績データ。IBJ加盟82,000人以上のネットワーク活用で高い成婚率を実現。',
    url: 'https://marriage-road.jp/data',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚実績データ|マレッジロードジャパン',
    description: 'マレッジロードジャパンの成婚実績データ。IBJ加盟82,000人以上のネットワーク活用で高い成婚率を実現。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function DataPage() {
  return <DataPageClient />
}
