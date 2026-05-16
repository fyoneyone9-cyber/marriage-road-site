import { getPostData, getAllPostSlugs } from '@/lib/blog'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'
const SURFACE = '#fff2ee'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPostData(slug)
    return {
      title: `${post.title} | マリッジロードジャパン`,
      description: post.description,
    }
  } catch {
    return { title: 'ブログ | マリッジロードジャパン' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let post
  try {
    post = await getPostData(slug)
  } catch {
    notFound()
  }

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <header style={{ background: PRIMARY, color: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/blog" style={{ color: '#fff', textDecoration: 'none', fontSize: 14, opacity: 0.9 }}>← ブログ一覧</Link>
        <span style={{ fontWeight: 700, fontSize: 16 }}>マリッジロードジャパン</span>
        <Link href="/m-contact" style={{ background: '#fff', color: PRIMARY, borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>無料相談</Link>
      </header>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 16px 64px' }}>
        {/* パンくず */}
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 24, display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: MUTED, textDecoration: 'none' }}>TOP</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>ブログ</Link>
          <span>›</span>
          <span style={{ color: TEXT }}>{post.title}</span>
        </div>

        {/* 記事本文 */}
        <article style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', border: `1px solid ${BORDER}`, boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          {/* タグ */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.75rem',
                borderRadius: '9999px',
                background: SURFACE,
                color: PRIMARY,
                border: `1px solid ${BORDER}`,
                fontWeight: 600,
              }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 style={{ fontSize: 24, fontWeight: 800, color: TEXT, margin: '0 0 12px', lineHeight: 1.5 }}>
            {post.title}
          </h1>

          <div style={{ fontSize: 13, color: MUTED, marginBottom: 24, display: 'flex', gap: 12 }}>
            <time>{new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>マリッジロードジャパン</span>
          </div>

          <div
            style={{ fontSize: 15, lineHeight: 1.9, color: TEXT }}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, borderRadius: 20, padding: 28, textAlign: 'center', marginTop: 32, color: '#fff' }}>
          <p style={{ fontWeight: 800, fontSize: 18, margin: '0 0 6px' }}>無料相談、受付中です</p>
          <p style={{ opacity: 0.9, margin: '0 0 20px', fontSize: 14 }}>この記事の内容で気になること、何でも聞いてください</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/m-contact" style={{ background: '#fff', color: PRIMARY, padding: '10px 24px', borderRadius: 24, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>👨 男性の方</Link>
            <Link href="/w-contact" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 24px', borderRadius: 24, fontWeight: 700, textDecoration: 'none', fontSize: 14, border: '2px solid rgba(255,255,255,0.5)' }}>👩 女性の方</Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/blog" style={{ color: PRIMARY, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>
            ← ブログ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
