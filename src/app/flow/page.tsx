import type { Metadata } from 'next'
import FlowPageClient from './FlowPageClient'

export const metadata: Metadata = {
  title: '入会から成婚までの流れ|マレッジロードジャパン',
  description: 'マレッジロードジャパンへの入会から成婚までの流れ。無料相談→入会→お見合い→交際→成婚とスムーズにサポート。海老名市・ZOOM全国対応。',
  alternates: { canonical: 'https://marriage-road.jp/flow' },
  openGraph: {
    title: '入会から成婚までの流れ|マレッジロードジャパン',
    description: 'マレッジロードジャパンへの入会から成婚までの流れ。無料相談→入会→お見合い→交際→成婚とスムーズにサポート。海老名市・ZOOM全国対応。',
    url: 'https://marriage-road.jp/flow',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '入会から成婚までの流れ|マレッジロードジャパン',
    description: 'マレッジロードジャパンへの入会から成婚までの流れ。無料相談→入会→お見合い→交際→成婚とスムーズにサポート。海老名市・ZOOM全国対応。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function FlowPage() {
  return <FlowPageClient />
}
