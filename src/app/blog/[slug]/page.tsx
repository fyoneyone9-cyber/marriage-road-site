import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import type { Metadata } from 'next'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

// 記事ファイルのディレクトリ（サイトと同じリポジトリ内のpublicフォルダに配置）
const ARTICLES_DIR = path.join(process.cwd(), 'public', 'blog-articles')

function getArticleContent(slug: string): string | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf-8')
}

function markdownToHtml(md: string): string {
  return md
    // h1
    .replace(/^# (.+)$/gm, '<h1 style="font-size:26px;font-weight:800;color:#2d2020;margin:0 0 24px;line-height:1.4">$1</h1>')
    // h2
    .replace(/^## (.+)$/gm, '<h2 style="font-size:20px;font-weight:700;color:#2d2020;margin:32px 0 12px;padding-left:12px;border-left:4px solid #b76e79">$1</h2>')
    // h3
    .replace(/^### (.+)$/gm, '<h3 style="font-size:17px;font-weight:700;color:#2d2020;margin:24px 0 8px">$1</h3>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight:700;color:#2d2020">$1</strong>')
    // table rows
    .replace(/^\|(.+)\|$/gm, (line) => {
      if (line.includes('---')) return ''
      const cells = line.split('|').filter(c => c.trim())
      const isHeader = false
      return `<tr>${cells.map(c => `<td style="padding:10px 14px;border:1px solid #e8d5d0;font-size:14px">${c.trim()}</td>`).join('')}</tr>`
    })
    // blockquote
    .replace(/^> (.+)$/gm, '<blockquote style="border-left:4px solid #c9a96e;background:#fff8f0;padding:12px 16px;margin:16px 0;border-radius:0 8px 8px 0;font-style:italic;color:#5a3a3a">$1</blockquote>')
    // links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:#b76e79;text-decoration:underline;font-weight:600" target="_blank" rel="noopener">$1</a>')
    // unordered list items
    .replace(/^- (.+)$/gm, '<li style="margin:6px 0;padding-left:4px">$1</li>')
    // ordered list items
    .replace(/^\d+\. (.+)$/gm, '<li style="margin:6px 0;padding-left:4px">$1</li>')
    // hr
    .replace(/^---$/gm, '<hr style="border:none;border-top:1px solid #e8d5d0;margin:32px 0">')
    // paragraphs (blank lines)
    .replace(/\n\n/g, '</p><p style="line-height:1.9;margin:0 0 16px;font-size:15px;color:#2d2020">')
    // wrap in p
    .replace(/^(?!<[h|b|l|t|u|o|p])(.+)$/gm, (line) => {
      if (!line.trim() || line.startsWith('<')) return line
      return line
    })
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = getArticleContent(params.slug)
  if (!content) return { title: '記事が見つかりません' }
  const titleMatch = content.match(/^# (.+)$/m)
  const title = titleMatch ? titleMatch[1] : params.slug
  return {
    title: `${title} | マリッジロードジャパン`,
    description: `${title}について、マリッジロードジャパンが解説します。神奈川・海老名の結婚相談所。IBJ正規加盟店。`,
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const content = getArticleContent(params.slug)
  if (!content) notFound()

  const titleMatch = content!.match(/^# (.+)$/m)
  const title = titleMatch ? titleMatch[1] : params.slug
  const bodyMd = content!.replace(/^# .+\n/, '')

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
        <div style={{ fontSize: 13, color: MUTED, marginBottom: 24, display: 'flex', gap: 6, alignItems: 'center' }}>
          <Link href="/" style={{ color: MUTED, textDecoration: 'none' }}>TOP</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: MUTED, textDecoration: 'none' }}>ブログ</Link>
          <span>›</span>
          <span style={{ color: TEXT }}>{title}</span>
        </div>

        {/* 記事本文 */}
        <article style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', border: `1px solid ${BORDER}`, boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: TEXT, margin: '0 0 24px', lineHeight: 1.5 }}>{title}</h1>
          <div
            style={{ fontSize: 15, lineHeight: 1.9, color: TEXT }}
            dangerouslySetInnerHTML={{ __html: markdownToHtml(bodyMd) }}
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

        {/* ブログ一覧へ戻る */}
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link href="/blog" style={{ color: PRIMARY, fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>
            ← ブログ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
