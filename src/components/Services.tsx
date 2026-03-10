import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const Services: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  const servicesList = [
    {
      subtitle: "VIDEO DIRECTION & SHOOTING",
      title: "企画・演出・撮影",
      description: "目的やターゲットに合わせた最適な企画立案から、構成・コンテの作成、現場での演出および撮影までのトータルディレクション",
      skills: "PLANNING / STORYBOARD / DIRECTING / SHOOTING"
    },
    {
      subtitle: "VIDEO EDITING",
      title: "映像編集",
      description: "SNSやデジタルサイネージなど、各プラットフォームの特性や視聴環境に最適化した映像編集",
      skills: "EDITING / COLOR GRADING / SOUND DESIGN / DELIVERY"
    },
    {
      subtitle: "DIGITAL DESIGN",
      title: "デザイン制作",
      description: "サムネイルやバナーなど、視聴者の関心を惹きつけ、その先の情報へと繋げるデザイン設計",
      skills: "CONCEPT / COMPOSITION / TYPOGRAPHY / RETOUCHING"
    },
    {
      subtitle: "GENERATIVE AI",
      title: "生成AIクリエイティブ",
      description: "ビジュアル制作や映像素材の生成による、従来の枠組みを超える新しい映像表現の提案",
      skills: "IMAGE / VIDEO / NARRATION / VISUAL DEVELOPMENT"
    }
  ];

  return (
    <section id="services" className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-left text-white mb-6 tracking-widest uppercase">
              Services
            </h2>
            <div className="w-16 h-px bg-white/30 ml-0" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <div className="mb-6">
                  <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] mb-1">{service.subtitle}</p>
                  <h3 className="text-lg md:text-xl text-white font-light tracking-widest">{service.title}</h3>
                </div>

                <p className="text-gray-400 font-light leading-[1.8] tracking-wide flex-grow mb-10 text-sm md:text-base break-all">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-[10px] md:text-xs text-neutral-500 font-serif font-light tracking-[0.2em] uppercase">
                    {service.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
