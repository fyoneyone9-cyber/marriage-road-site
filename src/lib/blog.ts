import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostData {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  contentHtml?: string
}

export function getSortedPostsData(): PostData[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const matterResult = matter(
        fs.readFileSync(path.join(postsDirectory, fileName), 'utf8')
      )
      return {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        description: matterResult.data.description as string,
        tags: (matterResult.data.tags as string[]) || [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const matterResult = matter(fs.readFileSync(fullPath, 'utf8'))
  const contentHtml = (
    await remark().use(html, { sanitize: false }).process(matterResult.content)
  ).toString()
  return {
    slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    description: matterResult.data.description as string,
    tags: (matterResult.data.tags as string[]) || [],
    contentHtml,
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
