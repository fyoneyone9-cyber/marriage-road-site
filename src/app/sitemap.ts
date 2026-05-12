import { MetadataRoute } from 'next'

const BASE = 'https://marriage-road-site.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`,         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/feature`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/plan`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/flow`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/greeting`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/data`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/chamber`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/case`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/ibj`,      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/access`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE}/m-contact`,lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/w-contact`,lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/privacy`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/tokusho`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
