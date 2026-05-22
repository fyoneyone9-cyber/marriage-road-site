'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}


import { useEffect } from 'react'

export default function Page() {
  useEffect(() => { window.location.replace('/ibj') }, [])
  return <div style={{ padding: '2rem', textAlign: 'center' }}>移動中...</div>
}
