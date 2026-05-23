import type { Metadata } from 'next'
import InterviewPageClient from './InterviewPageClient'

export const metadata: Metadata = {
  title: '成婚者インタビュー|マレッジロードジャパン',
  description: 'マレッジロードジャパンで成婚されたカップルのインタビュー。婚活体験談と成婚までの道のりをご紹介。',
  alternates: { canonical: 'https://marriage-road.jp/interview' },
  openGraph: {
    title: '成婚者インタビュー|マレッジロードジャパン',
    description: 'マレッジロードジャパンで成婚されたカップルのインタビュー。婚活体験談と成婚までの道のりをご紹介。',
    url: 'https://marriage-road.jp/interview',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚者インタビュー|マレッジロードジャパン',
    description: 'マレッジロードジャパンで成婚されたカップルのインタビュー。婚活体験談と成婚までの道のりをご紹介。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function InterviewPage() {
  return <InterviewPageClient />
}
