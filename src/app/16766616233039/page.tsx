'use client'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => { window.location.replace('/ibj') }, [])
  return <div style={{ padding: '2rem', textAlign: 'center' }}>移動中...</div>
}
