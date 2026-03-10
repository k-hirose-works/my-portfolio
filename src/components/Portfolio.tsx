import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: '戸田恵梨香 『 彼女 』',
      category: 'DIGITAL SIGNAGE',
      client: 'WANI BOOKS CO., LTD.',
      role: 'EDIT',
      description: 'トークエッセイの発売を記念した駅構内のデジタルサイネージ広告。演出・編集を担当。',
      image: '/images/04_selected_works/01_card/toda-thumb.png',
      modalImage: '/images/04_selected_works/01_card/toda-modal.png',
      date: '2022',
      color: 'from-neutral-800 to-neutral-900',
    },
    {
      id: 2,
      title: '中村倫也 続きの本 『 蓑唄 』',
      category: 'DIGITAL SIGNAGE',
      client: 'WANI BOOKS CO., LTD.',
      role: 'EDIT',
      description: '写真集の発売を記念した駅構内のデジタルサイネージ広告。演出・編集を担当。',
      image: '/images/04_selected_works/02_card/nakamura-thumb.png',
      modalImage: '/images/04_selected_works/02_card/nakamura-modal.png',
      date: '2022',
      color: 'from-neutral-700 to-neutral-900',
    },
    {
      id: 3,
      title: '空を結ぶ',
      category: 'MAKING VIDEO',
      client: 'WANI BOOKS CO., LTD.',
      role: 'EDIT',
      description: '1stフォトエッセイの撮影に密着したメイキング映像。演出・編集を担当。',
      image: '/images/04_selected_works/03_card/komaki-thumb.png',
      modalImage: '/images/04_selected_works/03_card/komaki-modal.png',
      date: '2022',
      color: 'from-neutral-800 to-neutral-950',
    },
    {
      id: 4,
      title: '関ヶ原 島津退き口 義弘と家康―知られざる秘史',
      category: 'PROMOTION',
      client: 'WANI BOOKS CO., LTD.',
      role: 'EDIT',
      description: '戦国リアルドキュメントの発売を記念したプロモーション映像。編集を担当。',
      image: '/images/04_selected_works/04_card/sekigahara-thumb.png',
      modalImage: '/images/04_selected_works/04_card/sekigahara-modal.png',
      date: '2022',
      color: 'from-neutral-900 to-black',
    },
    {
      id: 5,
      title: '組織・チーム・ビジネスを勝ちに導く 「作戦術」思考',
      category: 'PROMOTION',
      client: 'WANI BOOKS CO., LTD.',
      role: 'EDIT',
      description: 'ビジネス戦略書の発売を記念したプロモーション映像。編集を担当。',
      image: '/images/04_selected_works/05_card/sakusen-thumb.png',
      modalImage: '/images/04_selected_works/05_card/sakusen-modal.png',
      date: '2022',
      color: 'from-neutral-700 to-black',
    },
    {
      id: 6,
      title: 'フレップとファイターズガールがおしえる きつねダンス公式振り付けBOOK',
      category: 'DIGITAL SIGNAGE',
      client: 'WANI BOOKS CO., LTD.',
      role: 'EDIT',
      description: '公式振り付けBOOKの発売を記念した駅構内のデジタルサイネージ広告。編集を担当。',
      image: '/images/04_selected_works/06_card/kitsune-thumb.png',
      modalImage: '/images/04_selected_works/06_card/kitsune-modal.png',
      date: '2022',
      color: 'from-neutral-800 to-black',
    }
  ];

  const renderCard = (project: typeof projects[0]) => (
    <motion.button
      key={project.id}
      onClick={() => setSelectedProject(project)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group block w-full text-left overflow-hidden bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-400 transition-colors duration-500 shadow-2xl relative aspect-[1.8/1] md:aspect-video"
    >
      <div className={`absolute inset-0 bg-black flex items-center justify-center overflow-hidden`}>
        <div className="w-[85%] md:w-full h-[85%] md:h-full relative mx-auto overflow-hidden">
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700" />
        </div>

      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5 md:p-8 pt-20 md:pt-32 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
        <div className="text-[10px] md:text-xs font-serif text-neutral-400 mb-2 uppercase tracking-widest">
          {project.category}
        </div>
        <h3 className="text-[14px] leading-relaxed md:text-lg font-serif text-neutral-300 group-hover:text-white transition-colors duration-500 mb-3 tracking-wide">
          {project.title}
        </h3>
        <div className="flex justify-between items-center text-[10px] md:text-xs text-neutral-500 font-sans tracking-wide uppercase">
          <span>{project.role}</span>
        </div>
      </div>
    </motion.button>
  );

  return (
    <section id="works" className="py-32 bg-black relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-16 flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-left text-white mb-6 tracking-widest uppercase">
            Selected Works
          </h2>
          <div className="w-16 h-px bg-white/30 ml-0" />
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
          {projects.map(renderCard)}
        </div>


      </div>

      {/* Cinematic Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 lg:p-16"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-neutral-950 border border-white/10 w-full max-w-5xl max-h-[92vh] md:max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl relative custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/50 hover:text-white transition-colors flex items-center gap-2 group bg-black/40 md:bg-transparent rounded-full md:rounded-none p-2 md:p-0 backdrop-blur-md md:backdrop-blur-none"
              >
                <span className="text-xs tracking-[0.2em] hidden md:block uppercase font-light font-serif">Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </button>

              {/* Left Column: Image */}
              <div className="w-full md:w-5/12 h-[45vh] md:h-auto md:min-h-full bg-black flex-shrink-0 overflow-hidden flex items-center justify-center p-4 md:p-12 relative">
                <img
                  src={selectedProject.modalImage}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-contain p-4 md:p-0"
                />
              </div>

              {/* Right Column: Details Content */}
              <div className="w-full md:w-7/12 p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-neutral-950">
                <p className="text-[10px] md:text-xs text-neutral-500 tracking-[0.3em] uppercase mb-2 md:mb-4 font-serif">
                  {selectedProject.category}
                </p>

                <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-serif font-light leading-snug tracking-wide">
                  {selectedProject.title}
                </h2>

                <hr className="border-white/10 my-4 md:my-6" />

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-[10px] text-neutral-500 tracking-[0.2em] mb-1">CLIENT</h4>
                    <p className="text-sm md:text-base text-neutral-200 tracking-wider font-light uppercase">
                      {selectedProject.client}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] text-neutral-500 tracking-[0.2em] mb-1">ROLE</h4>
                    <p className="text-sm md:text-base text-neutral-200 tracking-wider font-light uppercase">
                      {selectedProject.role}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] text-neutral-500 tracking-[0.2em] mb-1 mt-6">DESCRIPTION</h4>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide text-justify">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
