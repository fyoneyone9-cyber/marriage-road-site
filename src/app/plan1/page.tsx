import type { Metadata } from 'next'
import Plan1Client from './Plan1Client'

export const metadata: Metadata = {
  title: 'ライトプラン(月額8,000円)|マレッジロードジャパン',
  description: 'マレッジロードジャパンのライトプラン。月額8,000円・入会金28,000円。オンライン婚活・ZOOM面談対応。IBJ加盟82,000人ネットワーク。',
  alternates: { canonical: 'https://marriage-road.jp/plan1' },
  openGraph: {
    title: 'ライトプラン(月額8,000円)|マレッジロードジャパン',
    description: 'マレッジロードジャパンのライトプラン。月額8,000円・入会金28,000円。オンライン婚活・ZOOM面談対応。IBJ加盟82,000人ネットワーク。',
    url: 'https://marriage-road.jp/plan1',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ライトプラン(月額8,000円)|マレッジロードジャパン',
    description: 'マレッジロードジャパンのライトプラン。月額8,000円・入会金28,000円。オンライン婚活・ZOOM面談対応。IBJ加盟82,000人ネットワーク。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function Plan1Page() {
  return <Plan1Client />
}
