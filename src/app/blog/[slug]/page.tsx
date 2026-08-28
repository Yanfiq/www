import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all markdown blog posts at build time (SSG)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Ryan Fikri',
    };
  }

  return {
    title: `${post.title} | Ryan Fikri Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Ryan Fikri'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back to Blog Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>
          </div>

          {/* Article Header Card */}
          <header className="mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
              {post.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
                  RF
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  {post.author}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <time dateTime={post.date}>{post.date}</time>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article HTML Content rendered from markdown */}
          <article
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          {/* Article Footer & Author Box */}
          <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  Enjoyed this article?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Have thoughts or feedback? Feel free to reach out directly.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shrink-0"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
              <Link
                href="/blog"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ← Back to all articles
              </Link>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Portfolio Home →
              </Link>
            </div>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
}
