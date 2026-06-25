import React from 'react';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export function SocialFeedSection() {
  const placeholders = Array.from({ length: 8 });

  return (
    <section id="social-feed" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6 container">
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-lavender text-brand-dark font-display font-bold text-xs uppercase tracking-widest mb-6 creative-border-sm">
            Follow Along
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-white mb-6 leading-tight">
            On The <span className="text-brand-orange italic">Feed</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-sans">
            Stay inspired with our latest projects, design tips, and a 
            peek behind the scenes of our creative studio.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {placeholders.map((_, idx) => {
            const isFourSix = idx % 2 === 0;
            const handle = isFourSix ? '@4sixcreative' : '@troyiamonay';
            const link = isFourSix ? 'https://instagram.com/4sixcreative' : 'https://instagram.com/troyiamonay';

            return (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group block"
              >
                <div className="aspect-square rounded-2xl creative-border overflow-hidden relative bg-brand-light/10 flex items-center justify-center">
                  {/* Placeholder Icon */}
                  <Instagram className="w-10 h-10 text-white/30" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-center">
                    <p className="font-bold text-white text-sm">
                      {handle}
                    </p>
                    <span className="text-brand-orange text-xs uppercase tracking-widest font-bold">
                      View Post
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
