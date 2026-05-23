import type { Metadata } from 'next'
import InterviewVol2Client from './InterviewVol2Client'

export const metadata: Metadata = {
  title: '成婚者インタビューVol.2|マレッジロードジャパン',
  description: 'マレッジロードジャパン成婚者インタビュー第2弾。婚活の実体験と成婚までの道のりをご紹介。',
  alternates: { canonical: 'https://marriage-road.jp/interview-vol2' },
  openGraph: {
    title: '成婚者インタビューVol.2|マレッジロードジャパン',
    description: 'マレッジロードジャパン成婚者インタビュー第2弾。婚活の実体験と成婚までの道のりをご紹介。',
    url: 'https://marriage-road.jp/interview-vol2',
    siteName: 'マレッジロードジャパン',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: 'https://marriage-road.jp/ibj-banner.jpg', width: 900, height: 400, alt: 'マレッジロードジャパン' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成婚者インタビューVol.2|マレッジロードジャパン',
    description: 'マレッジロードジャパン成婚者インタビュー第2弾。婚活の実体験と成婚までの道のりをご紹介。',
    images: ['https://marriage-road.jp/ibj-banner.jpg'],
  },
}

export default function InterviewVol2Page() {
  return <InterviewVol2Client />
}
