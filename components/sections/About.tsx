'use client';

import { motion } from 'framer-motion';
import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function About() {
  const { t } = useLanguage();

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container-editorial px-8 md:px-12">
        {/* Large Typography Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariants}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-denim-900">
            {/* Section title is English only */}
            Curious<br />
            and driven
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-lg md:text-xl font-medium mb-6 text-denim-900">
              {t({ en: 'We\'re curious and driven', ja: '私たちは、好奇心と情熱で動く。' })}
            </h3>
            <p className="text-ink-700 leading-relaxed text-base md:text-lg">
              {t({
                en: 'We always wonder what\'s next. Driven by curiosity and ambition, we explore new possibilities in creative coding, motion, sound, AI and create proprietary tech tools ourselves. Only by looking ahead, we can create the best solutions in the now.',
                ja: '私たちは常に「次」を見つめています。好奇心と情熱を原動力に、クリエイティブコーディング、モーション、サウンド、AIの可能性を探り、独自ツールの開発にも取り組みます。先を見据えるからこそ、いま最適な解を届けられる。'
              })}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-lg md:text-xl font-medium mb-6 text-denim-900">
              {t({ en: 'We\'re a team', ja: '私たちは、ひとつのチーム。' })}
            </h3>
            <p className="text-ink-700 leading-relaxed text-base md:text-lg">
              {t({
                en: 'We are a group of individual characters that enjoy working together. We have a common spirit that we hold dear. The studio is formed by a diverse group of nationalities, personalities, and specialists: from creative coders to sound designers, project managers, motion designers, strategists and visual designers. Collaboration is at the core of how we work; in the studio and together with clients.',
                ja: '多様な個性が集い、ともに働くことを楽しむチームです。共有するスピリットを核に、クリエイティブコーダー、サウンドデザイナー、PM、モーションデザイナー、ストラテジスト、ビジュアルデザイナーなど、多彩な専門性が交差します。スタジオの内外でのコラボレーションを、私たちの働き方の中核に据えています。'
              })}
            </p>
          </motion.div>
        </div>

        {/* Vision & Mission - Smaller Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="grid md:grid-cols-2 gap-12 mt-24 pt-24 border-t border-silk-200"
        >
          <div>
            <h4 className="text-sm uppercase tracking-wider text-ink-500 mb-4">
              {t({ en: 'Vision', ja: 'ビジョン' })}
            </h4>
            <p className="text-ink-700 leading-relaxed">
              {t({
                en: 'To be the premier bridge connecting Japanese culture with global audiences, creating meaningful cultural exchanges.',
                ja: '日本文化と世界を結ぶ最良の架け橋となり、意味ある文化交流を創出する。'
              })}
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-wider text-ink-500 mb-4">
              {t({ en: 'Mission', ja: 'ミッション' })}
            </h4>
            <p className="text-ink-700 leading-relaxed">
              {t(company.mission)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
