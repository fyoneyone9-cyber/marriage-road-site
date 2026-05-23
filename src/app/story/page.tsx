import type { Metadata } from 'next'
import StoryPageClient from './StoryPageClient'

export const metadata: Metadata = {
  title: 'マレッジロードジャパンの物語|開業の経緯と想い',
  description: '結婚相談所マレッジロードジャパンが誕生した経緯と代表者の想い。海老名市で婚活支援を始めた理由をご紹介。',
  alternates: { canonical: 'https://marriage-road.jp/story' },
  openGraph: {
    title: 'マレッジロードジャパンの物語|開業の経緯と想い',
    description: '結婚相談所マレッジロードジャパンが誕生した経緯と代表者の想い。海老名市で婚活支援を始めた理由をご紹介。',
    url: 'https://marriage-road.jp/story',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'マレッジロードジャパンの物語|開業の経緯と想い',
    description: '結婚相談所マレッジロードジャパンが誕生した経緯と代表者の想い。海老名市で婚活支援を始めた理由をご紹介。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function StoryPage() {
  return <StoryPageClient />
}
