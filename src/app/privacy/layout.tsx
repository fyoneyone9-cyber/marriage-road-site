import type { Metadata } from 'next'
const BASE = 'https://marriage-road.jp'
export const metadata: Metadata = {
  title: 'プライバシーポリシー | マレッジロードジャパン',
  description: 'マレッジロードジャパンのプライバシーポリシー。個人情報の取り扱い、収集・利用目的、第三者提供、管理について詳細を記載しています。',
  robots: { index: false, follow: false },
  alternates: { canonical: `${BASE}/privacy` },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
