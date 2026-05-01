import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function VideoShowcaseSection() {
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: videoScroll } = useScroll({
    target: videoSectionRef,
    offset: ["start 75%", "start 25%"]
  });

  const topTearY = useTransform(videoScroll, [0, 1], ["0%", "-100%"]);
  const bottomTearY = useTransform(videoScroll, [0, 1], ["0%", "100%"]);

  return (
    <section ref={videoSectionRef} className="py-12 md:py-24 bg-[#d0c3f1] relative">
      {/* Paper Tear Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
        {/* Top Tear */}
        <motion.div
          style={{ y: topTearY }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-white"
        >
          <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }} />

          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute top-full left-0 w-full h-4 sm:h-6 md:h-10 lg:h-14 fill-white/60">
            <path d="M0,0 L0,22 L20,27 L40,17 L60,30 L80,20 L100,27 L120,12 L140,32 L160,22 L180,30 L200,17 L220,27 L240,14 L260,34 L280,20 L300,27 L320,12 L340,32 L360,22 L380,30 L400,17 L420,27 L440,14 L460,34 L480,20 L500,27 L520,12 L540,32 L560,22 L580,30 L600,17 L620,27 L640,14 L660,34 L680,20 L700,27 L720,12 L740,32 L760,22 L780,30 L800,17 L820,27 L840,14 L860,34 L880,20 L900,27 L920,12 L940,32 L960,22 L980,30 L1000,17 L1020,27 L1040,14 L1060,34 L1080,20 L1100,27 L1120,12 L1140,32 L1160,22 L1180,30 L1200,17 L1200,0 Z" />
          </svg>
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute top-full left-0 w-full h-3 sm:h-5 md:h-8 lg:h-12 fill-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]">
            <path d="M0,0 L0,20 L20,25 L40,15 L60,28 L80,18 L100,25 L120,10 L140,30 L160,20 L180,28 L200,15 L220,25 L240,12 L260,32 L280,18 L300,25 L320,10 L340,30 L360,20 L380,28 L400,15 L420,25 L440,12 L460,32 L480,18 L500,25 L520,10 L540,30 L560,20 L580,28 L600,15 L620,25 L640,12 L660,32 L680,18 L700,25 L720,10 L740,30 L760,20 L780,28 L800,15 L820,25 L840,12 L860,32 L880,18 L900,25 L920,10 L940,30 L960,20 L980,28 L1000,15 L1020,25 L1040,12 L1060,32 L1080,18 L1100,25 L1120,10 L1140,30 L1160,20 L1180,28 L1200,15 L1200,0 Z" />
          </svg>
        </motion.div>

        {/* Bottom Tear */}
        <motion.div
          style={{ y: bottomTearY }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"
        >
          <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }} />

          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute bottom-full left-0 w-full h-4 sm:h-6 md:h-10 lg:h-14 fill-white/60 rotate-180">
            <path d="M0,0 L0,22 L20,27 L40,17 L60,30 L80,20 L100,27 L120,12 L140,32 L160,22 L180,30 L200,17 L220,27 L240,14 L260,34 L280,20 L300,27 L320,12 L340,32 L360,22 L380,30 L400,17 L420,27 L440,14 L460,34 L480,20 L500,27 L520,12 L540,32 L560,22 L580,30 L600,17 L620,27 L640,14 L660,34 L680,20 L700,27 L720,12 L740,32 L760,22 L780,30 L800,17 L820,27 L840,14 L860,34 L880,20 L900,27 L920,12 L940,32 L960,22 L980,30 L1000,17 L1020,27 L1040,14 L1060,34 L1080,20 L1100,27 L1120,12 L1140,32 L1160,22 L1180,30 L1200,17 L1200,0 Z" />
          </svg>
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute bottom-full left-0 w-full h-3 sm:h-5 md:h-8 lg:h-12 fill-white rotate-180 drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]">
            <path d="M0,0 L0,20 L20,25 L40,15 L60,28 L80,18 L100,25 L120,10 L140,30 L160,20 L180,28 L200,15 L220,25 L240,12 L260,32 L280,18 L300,25 L320,10 L340,30 L360,20 L380,28 L400,15 L420,25 L440,12 L460,32 L480,18 L500,25 L520,10 L540,30 L560,20 L580,28 L600,15 L620,25 L840,12 L860,32 L880,18 L900,25 L920,10 L940,30 L960,20 L980,28 L1000,15 L1020,25 L1040,12 L1060,32 L1080,18 L1100,25 L1120,10 L1140,30 L1160,20 L1180,28 L1200,15 L1200,0 Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] mb-6 uppercase tracking-tighter font-display font-black text-brand-dark leading-none">
            Our Portfolio <span className="text-brand-orange italic"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "https://www.instagram.com/reel/C0hn8OGuEk5/embed/",
            "https://www.instagram.com/reel/CmMnxhTOqiZ/embed/",
            "https://www.instagram.com/reel/DVJ7qwBEjSu/embed/",
            "https://www.instagram.com/reel/DO7EsRUDejI/embed/"
          ].map((reelUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-[2rem] overflow-hidden aspect-[3/4] creative-border bg-brand-dark flex items-center justify-center"
            >
              <iframe
                src={reelUrl}
                className="w-full h-full border-none md:scale-[1.35] md:-translate-y-[8%]"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
