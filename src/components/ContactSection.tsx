'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
            <Mail className="w-4 h-4" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Whether you have an internship opportunity, a machine learning project, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-4xl mx-auto">
          {/* Left Column: Direct channels & quick copy */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Direct Contact</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Quickest way to reach me directly.
                </p>
              </div>

              {/* Email Copier */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-blue-200/80 dark:border-slate-700 shadow-xs">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {personal.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Pill */}
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-blue-100 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/40 dark:hover:bg-slate-800 text-xs font-semibold transition-all shadow-xs"
                >
                  <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/40 dark:hover:bg-slate-800 text-xs font-semibold transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive message compose */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base mb-1">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Send a Direct Message</span>
              </div>

              <div>
                <label
                  htmlFor="sender-name"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="sender-name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-email"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Email Address *
                </label>
                <input
                  id="sender-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="sender-message"
                  required
                  rows={4}
                  placeholder="Hello Ryan, I'd like to talk about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-800 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message via Email</span>
              </button>

              {submitted && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 text-center font-medium mt-1">
                  Mail client opened! Looking forward to connecting.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
