import React from 'react';
import { User, CheckCircle2, Award, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-3">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-10 max-w-2xl">
          {about.heading}
        </h2>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            {about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="pt-4 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Practical ML & AI</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">NLP pipelines, model inference, and data-driven systems.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Modern Web Systems</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Clean architecture with React, Next.js, and TypeScript.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Facts Card Column - Harmonious in both light & dark modes */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-600 text-white shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Core Highlights</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Education & Program Milestones</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">University</span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Sebelas Maret University (UNS)</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Informatics / Computer Science</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Specialization</span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Bangkit Academy ML Cohort</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Google, GoTo, & Traveloka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Multi-domain Projects</div>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Tech Stack & Tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
