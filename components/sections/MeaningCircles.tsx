'use client';

import { motion } from 'framer-motion';
import FadeUp from '@/components/motion/FadeUp';
import { useLanguage } from '@/hooks/useLanguage';
import { company } from '@/content/company';

export default function MeaningCircles() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const circleVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      y: 20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2
      }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-section bg-white overflow-hidden">
      <div className="container-narrow">
        <FadeUp>
          <h2 className="heading-title text-ink-900 text-center mb-10">
            Three meanings behind our name
          </h2>
        </FadeUp>

        {/* Circle Animation Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Three Circles in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-16">
            {company.meanings.map((meaning, index) => (
              <motion.div
                key={index}
                variants={circleVariants}
                className="flex flex-col items-center"
              >
                {/* Circle */}
                <div className="relative mb-14">
                  <svg
                    width="272"
                    height="272"
                    viewBox="0 0 272 272"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-56 h-56 md:w-64 md:h-64"
                  >
                    <motion.circle
                      cx="136"
                      cy="136"
                      r="134"
                      stroke="rgba(16,24,32,.18)"
                      strokeWidth="1"
                      strokeDasharray="8 8"
                      fill="white"
                      fillOpacity="0.96"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        pathLength: {
                          delay: 0.3,
                          duration: 1.5,
                          ease: "easeInOut"
                        },
                        opacity: {
                          delay: 0.2,
                          duration: 0.5
                        }
                      }}
                    />
                    <foreignObject x="0" y="0" width="272" height="272">
                      <div className="h-full flex flex-col items-center justify-center p-10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        >
                          <h3 className="text-2xl md:text-[28px] font-serif text-ink-900 mb-2 text-center jp-palt">
                            {meaning.title.ja}
                          </h3>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-500 text-center">
                            {meaning.title.en}
                          </p>
                        </motion.div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>

                {/* Description Text Below Circle */}
                <motion.div
                  variants={textVariants}
                  className="text-center max-w-sm"
                >
                  <p className="text-ink-700 text-sm leading-relaxed jp-palt">
                    {t(meaning.content)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
