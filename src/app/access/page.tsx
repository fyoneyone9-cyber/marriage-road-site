import type { Metadata } from 'next'
import AccessPageClient from './AccessPageClient'

export const metadata: Metadata = {
  title: 'アクセス・地図|マレッジロードジャパン - JR社家駅徒歩1分',
  description: 'マレッジロードジャパンへのアクセス。神奈川県海老名市社家6-5-2-301。JR相模線社家駅徒歩1分。ZOOM全国対応。',
  alternates: { canonical: 'https://marriage-road.jp/access' },
  openGraph: {
    title: 'アクセス・地図|マレッジロードジャパン - JR社家駅徒歩1分',
    description: 'マレッジロードジャパンへのアクセス。神奈川県海老名市社家6-5-2-301。JR相模線社家駅徒歩1分。ZOOM全国対応。',
    url: 'https://marriage-road.jp/access',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アクセス・地図|マレッジロードジャパン - JR社家駅徒歩1分',
    description: 'マレッジロードジャパンへのアクセス。神奈川県海老名市社家6-5-2-301。JR相模線社家駅徒歩1分。ZOOM全国対応。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function AccessPage() {
  return <AccessPageClient />
}
