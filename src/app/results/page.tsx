import type { Metadata } from 'next'
import ResultsPageClient from './ResultsPageClient'

export const metadata: Metadata = {
  title: '成婚実績|マレッジロードジャパン',
  description: 'マレッジロードジャパンの成婚実績。IBJ加盟店として高い成婚率を誇ります。神奈川県・全国からの婚活サポート実績。',
  alternates: { canonical: 'https://marriage-road.jp/results' },
  openGraph: {
    title: '成婚実績|マレッジロードジャパン',
    description: 'マレッジロードジャパンの成婚実績。IBJ加盟店として高い成婚率を誇ります。神奈川県・全国からの婚活サポート実績。',
    url: 'https://marriage-road.jp/results',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚実績|マレッジロードジャパン',
    description: 'マレッジロードジャパンの成婚実績。IBJ加盟店として高い成婚率を誇ります。神奈川県・全国からの婚活サポート実績。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function ResultsPage() {
  return <ResultsPageClient />
}
