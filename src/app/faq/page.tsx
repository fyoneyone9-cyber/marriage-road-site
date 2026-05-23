import type { Metadata } from 'next'
import FaqPageClient from './FaqPageClient'

export const metadata: Metadata = {
  title: 'よくある質問(FAQ)|マレッジロードジャパン',
  description: '結婚相談所マレッジロードジャパンのよくある質問。料金・入会方法・お見合い・ZOOM対応・IBJ加盟など婚活の疑問を詳しく解説。',
  alternates: { canonical: 'https://marriage-road.jp/faq' },
  openGraph: {
    title: 'よくある質問(FAQ)|マレッジロードジャパン',
    description: '結婚相談所マレッジロードジャパンのよくある質問。料金・入会方法・お見合い・ZOOM対応・IBJ加盟など婚活の疑問を詳しく解説。',
    url: 'https://marriage-road.jp/faq',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'よくある質問(FAQ)|マレッジロードジャパン',
    description: '結婚相談所マレッジロードジャパンのよくある質問。料金・入会方法・お見合い・ZOOM対応・IBJ加盟など婚活の疑問を詳しく解説。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function FaqPage() {
  return <FaqPageClient />
}
