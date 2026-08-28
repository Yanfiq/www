import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogList } from '@/components/BlogList';
import { Sparkles, Coffee } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog & Ramblings | Ryan Fikri',
  description:
    'Daily logs, coding experiments, university life, random thoughts, and whatever comes to mind.',
  openGraph: {
    title: 'Blog & Ramblings | Ryan Fikri',
    description:
      'Stories, coding experiments, university life, and random thoughts by Ryan Fikri.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header Banner */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stories, Logs & Random Ramblings</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Blog & Ramblings
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A personal corner where I write about tech experiments, college life, random shower thoughts, and daily stories. No strict rules, just thoughts.
            </p>
          </div>

          {/* Interactive Posts Listing */}
          <BlogList posts={posts} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
