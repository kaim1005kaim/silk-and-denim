'use client';

import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    { 
      title: 'Japan Expo Partnership',
      category: 'Strategy',
      description: {
        en: 'Successfully introduced 5 Japanese brands to European markets',
        ja: '日本の5ブランドを欧州市場へ効果的に導入。'
      }
    },
    { 
      title: 'Museum Digital Innovation',
      category: 'Art & Museum',
      description: {
        en: 'Transformed traditional museum experience with immersive digital',
        ja: '没入型デジタルにより美術館体験を刷新。'
      }
    },
    { 
      title: 'Nobu Global Expansion',
      category: 'Gastronomy',
      description: {
        en: 'Strategic consulting for Japanese cuisine global expansion',
        ja: '日本料理のグローバル展開に向けた戦略コンサルティング。'
      }
    },
    { 
      title: 'TeamLab Borderless',
      category: 'Immersive',
      description: {
        en: 'Immersive digital art experience development',
        ja: '没入型デジタルアート体験を開発。'
      }
    },
    { 
      title: 'Luxury Brand Launch',
      category: 'Branding',
      description: {
        en: 'Brand identity and market entry for luxury fashion',
        ja: 'ラグジュアリーファッションのブランド設計と市場参入支援。'
      }
    },
    { 
      title: 'Tokyo Tower Renewal',
      category: 'Real Estate',
      description: {
        en: 'Strategic renewal and repositioning of iconic landmark',
        ja: '象徴的ランドマークの戦略的リニューアルとリポジショニング。'
      }
    }
  ];

  return (
    <section id="projects" className="py-section bg-silk-50">
      <div className="container-editorial px-8 md:px-12">
        <FadeUp>
          <h2 className="heading-title text-denim-900 text-center mb-16">
            Projects
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <FadeUp key={index} delay={0.1 * (index % 3)}>
              <div className="group relative h-full min-h-[260px] flex flex-col rounded-xl border border-line bg-white p-8 transition-transform duration-200 hover:-translate-y-0.5 hover:border-ink-500/20">
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-line text-[11px] uppercase tracking-[0.18em] text-ink-600">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-ink-900 mb-3 jp-palt">
                  {project.title}
                </h3>
                <div className="h-px bg-[color:var(--line,rgba(16,24,32,.08))]"></div>
                <p className="mt-4 text-ink-700 text-sm leading-relaxed jp-palt">
                  {t(project.description)}
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
