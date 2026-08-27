import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceEducationSection } from '@/components/ExperienceEducationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

// Force dynamic server-side rendering on every request
export const dynamic = 'force-dynamic';

async function getLiveGithubStats() {
  try {
    const res = await fetch('https://api.github.com/users/Yanfiq', {
      cache: 'no-store', // Always fetch fresh on server request
      headers: {
        'User-Agent': 'PersonalPortfolio-SSR',
      },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const githubData = await getLiveGithubStats();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection githubData={githubData} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceEducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
