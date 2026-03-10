import React from 'react';


export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-900 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 group bg-transparent">
          <img
            src="/logo.png"
            alt="Kazushige Hirose"
            className="h-12 md:h-16 scale-110 md:scale-125 origin-left object-contain opacity-50 group-hover:opacity-80 transition-all duration-300"
          />
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-xs text-neutral-700 font-sans tracking-wide">
            &copy; {new Date().getFullYear()} Kazushige Hirose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
