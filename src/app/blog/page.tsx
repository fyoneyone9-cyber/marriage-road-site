import { getSortedPostsData } from '@/lib/blog'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ブログ | マリッジロードジャパン',
  description: '婚活・結婚相談所に関するお役立ち情報をマリッジロードジャパンがお届けします。',
}

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div style={{ background: BASE, minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif" }}>
      {/* ヘッダー */}
      <header style={{ background: PRIMARY, color: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: 14, opacity: 0.9 }}>← TOP</Link>
        <span style={{ fontWeight: 700, fontSize: 16 }}>マリッジロードジャパン</span>
        <Link href="/m-contact" style={{ background: '#fff', color: PRIMARY, borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>無料相談</Link>
      </header>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 16px 64px' }}>
        {/* タイトル */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: TEXT, marginBottom: '0.5rem' }}>
            婚活お役立ちブログ
          </h1>
          <p style={{ color: MUTED, fontSize: '0.95rem' }}>
            結婚相談所・婚活に関する最新情報をお届けします
          </p>
        </div>

        {/* インタビュー記事リンク */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link href="/interview" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '1rem 1.25rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: '#fff2ee', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎙️</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.65rem', color: PRIMARY, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 2px' }}>Special Interview Vol.1</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: TEXT, margin: 0 }}>代表・米山文貴が語る「婚活と向き合う理由」</p>
            </div>
            <span style={{ color: PRIMARY, fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>読む →</span>
          </Link>
          <Link href="/interview-vol2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: '16px', padding: '1rem 1.25rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 10, background: '#fff2ee', border: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎙️</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.65rem', color: PRIMARY, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 2px' }}>Special Interview Vol.2</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: TEXT, margin: 0 }}>成婚率を上げるための「本音の婚活論」</p>
            </div>
            <span style={{ color: PRIMARY, fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>読む →</span>
          </Link>
        </div>

        {/* 記事一覧 */}
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: MUTED }}>記事がまだありません。</p>
        ) : (
          <div style={{ display: 'grid', gap: '1.25rem' }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  background: '#fff',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '16px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s',
                  cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
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
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: TEXT, lineHeight: 1.5 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: MUTED, fontSize: '0.875rem', marginBottom: '0.75rem', lineHeight: 1.7 }}>
                    {post.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <time style={{ fontSize: '0.75rem', color: MUTED }}>
                      {new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span style={{ fontSize: '0.8rem', color: PRIMARY, fontWeight: 600 }}>
                      続きを読む →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, borderRadius: 20, padding: 28, textAlign: 'center', marginTop: 48, color: '#fff' }}>
          <p style={{ fontWeight: 800, fontSize: 18, margin: '0 0 6px' }}>無料相談、受付中です</p>
          <p style={{ opacity: 0.9, margin: '0 0 20px', fontSize: 14 }}>婚活のことなら何でもご相談ください。ZOOM全国対応。</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/m-contact" style={{ background: '#fff', color: PRIMARY, padding: '10px 24px', borderRadius: 24, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>👨 男性の方</Link>
            <Link href="/w-contact" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 24px', borderRadius: 24, fontWeight: 700, textDecoration: 'none', fontSize: 14, border: '2px solid rgba(255,255,255,0.5)' }}>👩 女性の方</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
