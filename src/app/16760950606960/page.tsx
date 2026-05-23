import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function ContactPage() {
  return <ContactPageClient />
}
