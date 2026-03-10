import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


export const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-6 tracking-widest uppercase">
              About
            </h2>
            <div className="w-16 h-px bg-white/30" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div variants={itemVariants} className="text-left md:pr-10">
              {/* キャッチコピー（やや大） */}
              <p className="text-lg md:text-xl font-light leading-relaxed text-white tracking-wide mb-8">
                「映像制作の知見」 × 「AI」 <br className="hidden lg:block" />
                従来の枠組みを超える 新しい映像表現を
              </p>
              {/* 経歴（小） */}
              <p className="text-sm md:text-base font-light leading-relaxed text-gray-300 tracking-wide">
                2011年より テレビ CM WEB サイネージなど <br className="hidden md:inline" />様々な領域の映像制作に従事してきました
                <br /><br />
                現在はフリーランスのディレクター・エディターとして <br className="hidden md:inline" />動画コンテンツの演出・編集を主軸に活動しています
              </p>
            </motion.div>

            {/* Right: Showreel */}
            <motion.div variants={itemVariants} className="w-full relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/FVkNYutcSrc?autoplay=1&mute=1&loop=1&playlist=FVkNYutcSrc&controls=0&rel=0&modestbranding=1&playsinline=1"
                title="Hirose Kazushige Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full pointer-events-none"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
