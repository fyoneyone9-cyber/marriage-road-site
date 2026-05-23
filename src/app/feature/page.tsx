import type { Metadata } from 'next'
import FeaturePageClient from './FeaturePageClient'

export const metadata: Metadata = {
  title: '5つの特徴|マレッジロードジャパン - IBJ加盟・上級心理カウンセラー在籍',
  description: 'マレッジロードジャパンが選ばれる5つの理由。IBJ加盟82,000人・上級心理カウンセラー在籍・ZOOM全国対応・リーズナブルな料金・丁寧なサポート。',
  alternates: { canonical: 'https://marriage-road.jp/feature' },
  openGraph: {
    title: '5つの特徴|マレッジロードジャパン - IBJ加盟・上級心理カウンセラー在籍',
    description: 'マレッジロードジャパンが選ばれる5つの理由。IBJ加盟82,000人・上級心理カウンセラー在籍・ZOOM全国対応・リーズナブルな料金・丁寧なサポート。',
    url: 'https://marriage-road.jp/feature',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5つの特徴|マレッジロードジャパン - IBJ加盟・上級心理カウンセラー在籍',
    description: 'マレッジロードジャパンが選ばれる5つの理由。IBJ加盟82,000人・上級心理カウンセラー在籍・ZOOM全国対応・リーズナブルな料金・丁寧なサポート。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function FeaturePage() {
  return <FeaturePageClient />
}
