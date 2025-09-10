'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function NameMeaning() {
  const { t } = useLanguage();

  const meanings = [
    company.nameMeaning.diversity,
    company.nameMeaning.balance,
    company.nameMeaning.crossing,
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-figma px-8 md:px-12 lg:px-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            {t({ en: 'The Meaning Behind Our Name', ja: '社名に込められた意味' })}
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            {t({ 
              en: 'Silk & Denim represents the harmony of contrasts—a philosophy that guides everything we do.',
              ja: 'Silk & Denimは対照的なものの調和を表し、私たちのすべての活動を導く哲学です。'
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {meanings.map((meaning, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-zinc-900 mb-3">
                {t(meaning.title)}
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {t(meaning.body)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}