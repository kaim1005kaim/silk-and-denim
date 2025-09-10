'use client';

import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function Capabilities() {
  const { t } = useLanguage();

  return (
    <section id="capabilities" className="py-section bg-silk-50">
      <div className="container-editorial px-8 md:px-12">
        <FadeUp>
          <h2 className="heading-title text-denim-900 text-center mb-16">
            Capabilities
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 auto-rows-fr">
          {company.capabilities.map((capability, index) => (
            <FadeUp key={index} delay={0.1 * index}>
              <div className="group relative h-full min-h-[220px] flex flex-col rounded-xl border border-line bg-white p-8 transition-transform duration-200 hover:-translate-y-0.5 hover:border-ink-500/20">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500">Capability</span>
                  <span className="text-[11px] font-medium text-indigo-900">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-xl text-ink-900 jp-palt">
                  {t(capability.category)}
                </h3>
                <div className="mt-4 h-px bg-[color:var(--line,rgba(16,24,32,.08))]"></div>
                <p className="mt-4 text-ink-700 text-sm leading-relaxed jp-palt">
                  {t(capability.description)}
                </p>
                <div className="mt-auto pt-5 text-[11px] uppercase tracking-[0.18em] text-indigo-900 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {/* reserved for link/action */}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        
      </div>
    </section>
  );
}
