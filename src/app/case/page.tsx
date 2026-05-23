import type { Metadata } from 'next'
import CaseClient from './CaseClient'

export const metadata: Metadata = {
  title: '成婚事例|マレッジロードジャパン - 実際のカップル体験談',
  description: 'マレッジロードジャパンの成婚事例をご紹介。神奈川県内外のカップルが結婚相談所で出会い成婚。ZOOM対応で全国から入会可能。',
  alternates: { canonical: 'https://marriage-road.jp/case' },
  openGraph: {
    title: '成婚事例|マレッジロードジャパン - 実際のカップル体験談',
    description: 'マレッジロードジャパンの成婚事例をご紹介。神奈川県内外のカップルが結婚相談所で出会い成婚。ZOOM対応で全国から入会可能。',
    url: 'https://marriage-road.jp/case',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚事例|マレッジロードジャパン - 実際のカップル体験談',
    description: 'マレッジロードジャパンの成婚事例をご紹介。神奈川県内外のカップルが結婚相談所で出会い成婚。ZOOM対応で全国から入会可能。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function CasePage() {
  return <CaseClient />
}
