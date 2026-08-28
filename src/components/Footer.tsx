import React from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { BackToTopButton } from './BackToTopButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {portfolioData.personal.title}
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <Link href="/#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </Link>
            <Link href="/#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Education
            </Link>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top button */}
          <BackToTopButton />
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js, Server-Side Rendering (SSR) & Markdown
          </p>
        </div>
      </div>
    </footer>
  );
};
