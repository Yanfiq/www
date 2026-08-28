'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-2 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-xs cursor-pointer"
      aria-label="Scroll back to top"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  );
};
