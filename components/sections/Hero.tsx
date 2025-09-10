'use client';

import Link from 'next/link';
import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';

interface HeroProps {
  title: { en: string; ja: string };
  subtitle?: { en: string; ja: string };
  description?: { en: string; ja: string };
  primaryCTA?: {
    label: { en: string; ja: string };
    href: string;
  };
  secondaryCTA?: {
    label: { en: string; ja: string };
    href: string;
  };
  minimal?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  minimal = false
}: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="home" className={`relative ${minimal ? 'pt-28 pb-14' : 'min-h-[88vh] flex items-center pt-28'} bg-white`}>
      {/* Background Video */}
      {!minimal && (
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/media/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>
      )}

      <div className="container-narrow">
        <div className={`relative ${minimal ? '' : 'max-w-4xl'}`}>
          <FadeUp>
            <h1 className="heading-display text-ink-900 jp-palt mb-6">
              {t(title)}
            </h1>
          </FadeUp>

          {subtitle && (
            <FadeUp delay={0.1}>
              <p className="text-fluid-xl text-ink-700 font-serif jp-palt mb-8">
                {t(subtitle)}
              </p>
            </FadeUp>
          )}

          {description && (
            <FadeUp delay={0.2}>
              <p className="text-fluid-base text-ink-700 leading-relaxed jp-palt mb-12 max-w-3xl">
                {t(description)}
              </p>
            </FadeUp>
          )}

          {primaryCTA && (
            <FadeUp delay={0.3}>
              <Link href={primaryCTA.href} className="text-link text-indigo-900 hover:opacity-80">
                {t(primaryCTA.label)}
              </Link>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}
