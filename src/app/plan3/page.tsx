import type { Metadata } from 'next'
import Plan3PageClient from './Plan3PageClient'

export const metadata: Metadata = {
  title: 'プレミアムプラン(月額18,000円)|マレッジロードジャパン',
  description: 'マレッジロードジャパンのプレミアムプラン。月額18,000円・入会金28,000円。神奈川・東京エリア完全サポート。フルサービスで確実な成婚を目指す。',
  alternates: { canonical: 'https://marriage-road.jp/plan3' },
  openGraph: {
    title: 'プレミアムプラン(月額18,000円)|マレッジロードジャパン',
    description: 'マレッジロードジャパンのプレミアムプラン。月額18,000円・入会金28,000円。神奈川・東京エリア完全サポート。フルサービスで確実な成婚を目指す。',
    url: 'https://marriage-road.jp/plan3',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'プレミアムプラン(月額18,000円)|マレッジロードジャパン',
    description: 'マレッジロードジャパンのプレミアムプラン。月額18,000円・入会金28,000円。神奈川・東京エリア完全サポート。フルサービスで確実な成婚を目指す。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function Plan3Page() {
  return <Plan3PageClient />
}
