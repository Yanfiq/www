import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Ryan Fikri | Software Engineer & ML Enthusiast',
  description:
    'Personal portfolio of Ryan Fikri — Informatics student at Sebelas Maret University, Bangkit ML Cohort graduate, and Full-Stack Developer.',
  keywords: [
    'Ryan Fikri',
    'Machine Learning',
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'TensorFlow',
    'UNS',
    'Informatics',
  ],
  authors: [{ name: 'Ryan Fikri', url: 'https://github.com/Yanfiq' }],
  creator: 'Ryan Fikri',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yanfiq.github.io',
    title: 'Ryan Fikri | Software Engineer & ML Enthusiast',
    description:
      'Explore projects, research, and engineering work by Ryan Fikri across Machine Learning, Web, and Systems development.',
    siteName: 'Ryan Fikri Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Fikri | Software Engineer & ML Enthusiast',
    description:
      'Informatics student & ML enthusiast building human-centered intelligent software.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
