import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: '海老名の結婚相談所｜マレッジロードジャパン【IBJ加盟・全国ZOOM対応】',
  description: '神奈川県海老名市の結婚相談所「マレッジロードジャパン」。IBJ加盟（No.01226）で全国82,000人以上のネットワーク。月額8,000円〜。ZOOM全国対応。上級心理カウンセラー在籍。無料相談受付中。',
  alternates: {
    canonical: 'https://marriage-road.jp/',
  },
  openGraph: {
    title: '海老名の結婚相談所｜マレッジロードジャパン【IBJ加盟・全国ZOOM対応】',
    description: '神奈川県海老名市の結婚相談所「マレッジロードジャパン」。IBJ加盟（No.01226）で全国82,000人以上のネットワーク。月額8,000円〜。ZOOM全国対応。上級心理カウンセラー在籍。無料相談受付中。',
    url: 'https://marriage-road.jp/',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン - IBJ加盟結婚相談所' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '海老名の結婚相談所｜マレッジロードジャパン【IBJ加盟・全国ZOOM対応】',
    description: '神奈川県海老名市の結婚相談所「マレッジロードジャパン」。IBJ加盟（No.01226）で全国82,000人以上のネットワーク。月額8,000円〜。ZOOM全国対応。上級心理カウンセラー在籍。無料相談受付中。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function Home() {
  return <HomeClient />
}
