'use client';

import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function Meanings() {
  const { t } = useLanguage();

  return (
    <section className="py-section bg-white">
      <div className="container-editorial px-8 md:px-12">
        <FadeUp>
          <h2 className="heading-title text-denim-900 text-center mb-16">
            {t({ en: 'The Three Meanings', ja: '3つの意味' })}
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-12">
          {company.meanings.map((meaning, index) => (
            <FadeUp key={index} delay={0.1 * (index + 1)}>
              <div className="text-center">
                <div className="mb-6 text-6xl font-display text-silk-400">
                  {index + 1}
                </div>
                <h3 className="text-xl font-serif font-semibold text-denim-900 mb-4">
                  {t(meaning.title)}
                </h3>
                <p className="text-ink-600 leading-relaxed">
                  {t(meaning.content)}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}