import type { Metadata } from 'next'
import WContactPageClient from './WContactPageClient'

export const metadata: Metadata = {
  title: '女性向け無料相談|マレッジロードジャパン',
  description: 'マレッジロードジャパンへの女性向け無料相談・お問い合わせ。結婚相談所の入会について何でもご質問ください。ZOOM対応。',
  alternates: { canonical: 'https://marriage-road.jp/w-contact' },
  openGraph: {
    title: '女性向け無料相談|マレッジロードジャパン',
    description: 'マレッジロードジャパンへの女性向け無料相談・お問い合わせ。結婚相談所の入会について何でもご質問ください。ZOOM対応。',
    url: 'https://marriage-road.jp/w-contact',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '女性向け無料相談|マレッジロードジャパン',
    description: 'マレッジロードジャパンへの女性向け無料相談・お問い合わせ。結婚相談所の入会について何でもご質問ください。ZOOM対応。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function WContactPage() {
  return <WContactPageClient />
}
