import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: '利用規約 | マレッジロードジャパン',
  description: 'マレッジロードジャパンの利用規約です。',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE}/terms` },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
