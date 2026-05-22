import { MetadataRoute } from 'next'

const BASE = 'https://marriage-road.jp'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    // コアページ（最重要）
    { url: `${BASE}/`,           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/faq`,        lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/plan`,       lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/feature`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/case`,       lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/results`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    // プランページ
    { url: `${BASE}/plan1`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/plan2`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/plan3`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    // 会社・スタッフ情報
    { url: `${BASE}/flow`,       lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/greeting`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/story`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ibj`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/chamber`,    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/data`,       lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    // コンテンツページ
    { url: `${BASE}/blog`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/interview`,  lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/interview-vol2`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/lp`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // お問い合わせ・アクセス
    { url: `${BASE}/access`,     lastModified: now, changeFrequency: 'yearly',  priority: 0.75 },
    { url: `${BASE}/m-contact`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/w-contact`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    // 法的ページ
    { url: `${BASE}/privacy`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/tokusho`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
