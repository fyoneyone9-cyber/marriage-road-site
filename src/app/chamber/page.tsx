import type { Metadata } from 'next'
import ChamberPageClient from './ChamberPageClient'

export const metadata: Metadata = {
  title: '海老名商工会議所会員|マレッジロードジャパン',
  description: 'マレッジロードジャパンは海老名商工会議所加盟の信頼性の高い結婚相談所。IBJ加盟(No.01226)・神奈川県婚活支援センター登録(No.4954)。',
  alternates: { canonical: 'https://marriage-road.jp/chamber' },
  openGraph: {
    title: '海老名商工会議所会員|マレッジロードジャパン',
    description: 'マレッジロードジャパンは海老名商工会議所加盟の信頼性の高い結婚相談所。IBJ加盟(No.01226)・神奈川県婚活支援センター登録(No.4954)。',
    url: 'https://marriage-road.jp/chamber',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '海老名商工会議所会員|マレッジロードジャパン',
    description: 'マレッジロードジャパンは海老名商工会議所加盟の信頼性の高い結婚相談所。IBJ加盟(No.01226)・神奈川県婚活支援センター登録(No.4954)。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function ChamberPage() {
  return <ChamberPageClient />
}
