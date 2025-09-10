'use client';

import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';
import Image from 'next/image';

export default function Founders() {
  const { t } = useLanguage();

  return (
    <section id="founders" className="py-section bg-white">
      <div className="container-editorial px-8 md:px-12">
        <FadeUp>
          <h2 className="heading-title text-ink-900 text-center mb-16">
            Founders
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-12">
          {company.founders.map((founder, index) => (
            <FadeUp key={index} delay={0.1 * index}>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border border-line bg-silk-100">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-sm text-ink-500 uppercase tracking-wide mb-4">
                  {t(founder.title)}
                </p>
                <p className="text-ink-600 text-sm leading-relaxed">
                  {t(founder.bio)}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
