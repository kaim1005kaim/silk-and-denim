'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import MeaningCircles from '@/components/sections/MeaningCircles';
import Capabilities from '@/components/sections/Capabilities';
import Projects from '@/components/sections/Projects';
import Founders from '@/components/sections/Founders';
import Contact from '@/components/sections/Contact';
import Partners from '@/components/sections/Partners';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title={company.hero.title}
        subtitle={company.hero.subtitle}
        description={company.mission}
        primaryCTA={{
          label: { en: 'Explore Our Work', ja: '私たちの仕事を見る' },
          href: '#projects'
        }}
        secondaryCTA={{
          label: { en: 'Get in Touch', ja: 'お問い合わせ' },
          href: '#contact'
        }}
      />

      {/* About Section */}
      <About />
      
      {/* Meaning Circles Animation Section */}
      <MeaningCircles />


      {/* Capabilities Section */}
      <Capabilities />

      {/* Projects Section */}
      <Projects />

      {/* Founders Section */}
      <Founders />

      {/* Contact Section */}
      <Contact />

      {/* Partners Section (moved below Contact) */}
      <Partners />

    </main>
  );
}
