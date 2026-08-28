import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'public', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  author?: string;
  readTime: string;
  contentHtml?: string;
}

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Ensure the public/blog directory exists
export function ensureBlogDir(): void {
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true });
  }
}

export function getAllPosts(): BlogPost[] {
  ensureBlogDir();

  const fileNames = fs.readdirSync(blogDirectory);
  const posts: BlogPost[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.markdown')) {
      continue;
    }

    const slug = fileName.replace(/\.md$|\.markdown$/, '');
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    posts.push({
      slug,
      title: data.title || slug.replace(/-/g, ' '),
      date: data.date ? String(data.date) : 'Recently',
      summary: data.summary || data.description || content.slice(0, 160) + '...',
      tags: Array.isArray(data.tags) ? data.tags : data.tag ? [data.tag] : ['Tech'],
      coverImage: data.coverImage || data.image,
      author: data.author || 'Ryan Fikri',
      readTime: calculateReadingTime(content),
    });
  }

  // Sort posts by date descending
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDir();

  const possibleExtensions = ['.md', '.markdown'];
  let fullPath = '';

  for (const ext of possibleExtensions) {
    const candidate = path.join(blogDirectory, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      fullPath = candidate;
      break;
    }
  }

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown into HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug.replace(/-/g, ' '),
    date: data.date ? String(data.date) : 'Recently',
    summary: data.summary || data.description || content.slice(0, 160) + '...',
    tags: Array.isArray(data.tags) ? data.tags : data.tag ? [data.tag] : ['Tech'],
    coverImage: data.coverImage || data.image,
    author: data.author || 'Ryan Fikri',
    readTime: calculateReadingTime(content),
    contentHtml,
  };
}
