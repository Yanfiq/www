import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const ExperienceEducationSection: React.FC = () => {
  const { educationAndExperience } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Background & Milestones</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education & Programs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xl">
            My formal computer science background and industry-backed machine learning specialization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Formal Education</span>
            </div>

            {educationAndExperience.education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs blue-card-hover"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    Undergraduate
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.institution}
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  {item.degree}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specialization & Programs Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Specialized Programs</span>
            </div>

            {educationAndExperience.experience.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs blue-card-hover"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {item.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  {item.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {item.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
