import type { Metadata } from 'next'
import Plan2PageClient from './Plan2PageClient'

export const metadata: Metadata = {
  title: 'スタンダードプラン(月額9,800円)|マレッジロードジャパン',
  description: 'マレッジロードジャパンのスタンダードプラン。月額9,800円・入会金28,000円。全国対応・複数の婚活メソッド対応。IBJ加盟82,000人ネットワーク。',
  alternates: { canonical: 'https://marriage-road.jp/plan2' },
  openGraph: {
    title: 'スタンダードプラン(月額9,800円)|マレッジロードジャパン',
    description: 'マレッジロードジャパンのスタンダードプラン。月額9,800円・入会金28,000円。全国対応・複数の婚活メソッド対応。IBJ加盟82,000人ネットワーク。',
    url: 'https://marriage-road.jp/plan2',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'スタンダードプラン(月額9,800円)|マレッジロードジャパン',
    description: 'マレッジロードジャパンのスタンダードプラン。月額9,800円・入会金28,000円。全国対応・複数の婚活メソッド対応。IBJ加盟82,000人ネットワーク。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function Plan2Page() {
  return <Plan2PageClient />
}
