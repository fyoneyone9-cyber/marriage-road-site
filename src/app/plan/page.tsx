import type { Metadata } from 'next'
import PlanPageClient from './PlanPageClient'

export const metadata: Metadata = {
  title: '料金プラン一覧|マレッジロードジャパン - 月額8,000円〜',
  description: 'マレッジロードジャパンの料金プラン。ライト(月8,000円)・スタンダード(月9,800円)・プレミアム(月18,000円)の3プラン。入会金28,000円。',
  alternates: { canonical: 'https://marriage-road.jp/plan' },
  openGraph: {
    title: '料金プラン一覧|マレッジロードジャパン - 月額8,000円〜',
    description: 'マレッジロードジャパンの料金プラン。ライト(月8,000円)・スタンダード(月9,800円)・プレミアム(月18,000円)の3プラン。入会金28,000円。',
    url: 'https://marriage-road.jp/plan',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '料金プラン一覧|マレッジロードジャパン - 月額8,000円〜',
    description: 'マレッジロードジャパンの料金プラン。ライト(月8,000円)・スタンダード(月9,800円)・プレミアム(月18,000円)の3プラン。入会金28,000円。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function PlanPage() {
  return <PlanPageClient />
}
