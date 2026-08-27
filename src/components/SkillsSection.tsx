'use client';

import React, { useState } from 'react';
import { Cpu, Code, Database, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : [skillCategories[selectedCategory]];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xl">
              A curated stack covering artificial intelligence, distributed web services, and systems architecture.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs self-start sm:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((category, idx) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === idx
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {category.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {displayedCategories.map((group, idx) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs blue-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950">
                    {getCategoryIcon(selectedCategory === 'all' ? idx : (selectedCategory as number))}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
