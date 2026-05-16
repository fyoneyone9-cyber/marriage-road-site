import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | マレッジロードジャパン',
  description: 'マレッジロードジャパンの特定商取引法に基づく表記。事業者名・代表者・所在地・連絡先等を記載。',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE}/tokusho` },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
