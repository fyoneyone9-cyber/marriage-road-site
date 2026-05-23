import type { Metadata } from 'next'
import IbjClient from './IbjClient'

export const metadata: Metadata = {
  title: 'IBJ(日本結婚相談所連盟)加盟店|マレッジロードジャパン',
  description: 'マレッジロードジャパンはIBJ(日本結婚相談所連盟)加盟店(No.01226)。全国82,000人以上の会員ネットワークでお相手探しをサポート。',
  alternates: { canonical: 'https://marriage-road.jp/ibj' },
  openGraph: {
    title: 'IBJ(日本結婚相談所連盟)加盟店|マレッジロードジャパン',
    description: 'マレッジロードジャパンはIBJ(日本結婚相談所連盟)加盟店(No.01226)。全国82,000人以上の会員ネットワークでお相手探しをサポート。',
    url: 'https://marriage-road.jp/ibj',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBJ(日本結婚相談所連盟)加盟店|マレッジロードジャパン',
    description: 'マレッジロードジャパンはIBJ(日本結婚相談所連盟)加盟店(No.01226)。全国82,000人以上の会員ネットワークでお相手探しをサポート。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function IbjPage() {
  return <IbjClient />
}
