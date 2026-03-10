import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/01_hero/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Empty Center for full cinematic view */}
      <div className="container relative z-10 px-6 md:px-12 h-screen w-full flex items-center justify-center pointer-events-none">
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-white transition-colors z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 drop-shadow-lg" />
      </motion.button>
    </section>
  );
};
