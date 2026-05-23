import type { Metadata } from 'next'
import LpClient from './LpClient'

export const metadata: Metadata = {
  title: '婚活を始めるなら|マレッジロードジャパン - 無料相談受付中',
  description: '海老名の結婚相談所マレッジロードジャパンへ。IBJ加盟・月額8,000円〜・ZOOM全国対応。まずは無料相談から始めましょう。',
  alternates: { canonical: 'https://marriage-road.jp/lp' },
  openGraph: {
    title: '婚活を始めるなら|マレッジロードジャパン - 無料相談受付中',
    description: '海老名の結婚相談所マレッジロードジャパンへ。IBJ加盟・月額8,000円〜・ZOOM全国対応。まずは無料相談から始めましょう。',
    url: 'https://marriage-road.jp/lp',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '婚活を始めるなら|マレッジロードジャパン - 無料相談受付中',
    description: '海老名の結婚相談所マレッジロードジャパンへ。IBJ加盟・月額8,000円〜・ZOOM全国対応。まずは無料相談から始めましょう。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function LpPage() {
  return <LpClient />
}
