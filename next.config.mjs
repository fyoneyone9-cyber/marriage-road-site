/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // HTTPヘッダー（SEO・セキュリティ）
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      // 静的アセットのキャッシュ
      {
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // 数字だけのルート（旧CMS残骸）をリダイレクト
  async redirects() {
    const oldRoutes = [
      '16760950606960', '16763909961240', '16764595712727', '16764708414344',
      '16765078654055', '16766616233039', '16767377701305', '16767435923382',
      '16770013730359', '16770016031373', '16770016529040', '16770442332695',
      '16770811329988', '16771361261377', '16771848793719', '16772438559724',
      '16774296731302', '16774301352630', '16774362542623', '16776585117840',
      '17250964253681',
    ]
    return oldRoutes.map((id) => ({
      source: `/${id}`,
      destination: '/plan',
      permanent: true,
    }))
  },
}

export default nextConfig
