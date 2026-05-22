import { MetadataRoute } from 'next'

const BASE = 'https://marriage-road.jp'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`,          lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/feature`,   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/plan`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/plan1`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plan2`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/plan3`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/flow`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/greeting`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/data`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`,       lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/chamber`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/case`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/results`,   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/ibj`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/interview`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/access`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/m-contact`, lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/w-contact`, lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/privacy`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/tokusho`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
