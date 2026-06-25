/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface VideoShowcaseSectionProps {
  reels?: string[];
  videos?: any[];
}

export function VideoShowcaseSection({ reels, videos = [] }: VideoShowcaseSectionProps) {
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: videoScroll } = useScroll({
    target: videoSectionRef,
    offset: ["start 75%", "start 25%"]
  });

  const topTearY = useTransform(videoScroll, [0, 1], ["0%", "-100%"]);
  const bottomTearY = useTransform(videoScroll, [0, 1], ["0%", "100%"]);

  const defaultReels = [
    "https://www.instagram.com/reel/C0hn8OGuEk5/embed/",
    "https://www.instagram.com/reel/CmMnxhTOqiZ/embed/",
    "https://www.instagram.com/reel/DVJ7qwBEjSu/embed/",
    "https://www.instagram.com/reel/DO7EsRUDejI/embed/",
    "https://www.instagram.com/reel/DX7Xn-bPKTq/embed/",
    "https://www.instagram.com/reel/DO37S78jn9Q/embed/"
  ];

  const reelsList = reels && reels.length > 0 ? reels : defaultReels;

  return (
    <section ref={videoSectionRef} className="py-24 bg-[#d0c3f1] relative">
      {/* Paper Tear Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
        {/* Top Tear */}
        <motion.div
          style={{ y: topTearY }}
          className="absolute top-0 left-0 right-0 h-1/2 bg-white"
        >
          {/* Paper texture for the tear itself */}
          <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }} />

          {/* Fibrous shadow layer */}
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute top-full left-0 w-full h-4 sm:h-6 md:h-10 lg:h-14 fill-white/60">
            <path d="M0,0 L0,22 L20,27 L40,17 L60,30 L80,20 L100,27 L120,12 L140,32 L160,22 L180,30 L200,17 L220,27 L240,14 L260,34 L280,20 L300,27 L320,12 L340,32 L360,22 L380,30 L400,17 L420,27 L440,14 L460,34 L480,20 L500,27 L520,12 L540,32 L560,22 L580,30 L600,17 L620,27 L640,14 L660,34 L680,20 L700,27 L720,12 L740,32 L760,22 L780,30 L800,17 L820,27 L840,14 L860,34 L880,20 L900,27 L920,12 L940,32 L960,22 L980,30 L1000,17 L1020,27 L1040,14 L1060,34 L1080,20 L1100,27 L1120,12 L1140,32 L1160,22 L1180,30 L1200,17 L1200,0 Z" />
          </svg>
          {/* Main white layer */}
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute top-full left-0 w-full h-3 sm:h-5 md:h-8 lg:h-12 fill-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]">
            <path d="M0,0 L0,20 L20,25 L40,15 L60,28 L80,18 L100,25 L120,10 L140,30 L160,20 L180,28 L200,15 L220,25 L240,12 L260,32 L280,18 L300,25 L320,10 L340,30 L360,20 L380,28 L400,15 L420,25 L440,12 L460,32 L480,18 L500,25 L520,10 L540,30 L560,20 L580,28 L600,15 L620,25 L640,12 L660,32 L680,18 L700,25 L720,10 L740,30 L760,20 L780,28 L800,15 L820,25 L840,12 L860,32 L880,18 L900,25 L920,10 L940,30 L960,20 L980,28 L1000,15 L1020,25 L1040,12 L1060,32 L1080,18 L1100,25 L1120,10 L1140,30 L1160,20 L1180,28 L1200,15 L1200,0 Z" />
          </svg>
        </motion.div>

        {/* Bottom Tear */}
        <motion.div
          style={{ y: bottomTearY }}
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"
        >
          {/* Paper texture for the tear itself */}
          <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }} />

          {/* Fibrous shadow layer */}
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute bottom-full left-0 w-full h-4 sm:h-6 md:h-10 lg:h-14 fill-white/60 rotate-180">
            <path d="M0,0 L0,22 L20,27 L40,17 L60,30 L80,20 L100,27 L120,12 L140,32 L160,22 L180,30 L200,17 L220,27 L240,14 L260,34 L280,20 L300,27 L320,12 L340,32 L360,22 L380,30 L400,17 L420,27 L440,14 L460,34 L480,20 L500,27 L520,12 L540,32 L560,22 L580,30 L600,17 L620,27 L640,14 L660,34 L680,20 L700,27 L720,12 L740,32 L760,22 L780,30 L800,17 L820,27 L840,14 L860,34 L880,20 L900,27 L920,12 L940,32 L960,22 L980,30 L1000,17 L1020,27 L1040,14 L1060,34 L1080,20 L1100,27 L1120,12 L1140,32 L1160,22 L1180,30 L1200,17 L1200,0 Z" />
          </svg>
          {/* Main white layer */}
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="absolute bottom-full left-0 w-full h-3 sm:h-5 md:h-8 lg:h-12 fill-white rotate-180 drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)]">
            <path d="M0,0 L0,20 L20,25 L40,15 L60,28 L80,18 L100,25 L120,10 L140,30 L160,20 L180,28 L200,15 L220,25 L240,12 L260,32 L280,18 L300,25 L320,10 L340,30 L360,20 L380,28 L400,15 L420,25 L440,12 L460,32 L480,18 L500,25 L520,10 L540,30 L560,20 L580,28 L600,15 L620,25 L640,12 L660,32 L680,18 L700,25 L720,10 L740,30 L760,20 L780,28 L800,15 L820,25 L840,12 L860,32 L880,18 L900,25 L920,10 L940,30 L960,20 L980,28 L1000,15 L1020,25 L1040,12 L1060,32 L1080,18 L1100,25 L1120,10 L1140,30 L1160,20 L1180,28 L1200,15 L1200,0 Z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Carousel opts={{ loop: true }} className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] uppercase tracking-tighter font-display font-black text-brand-dark leading-none">
              Our Portfolio
            </h2>
            <div className="flex gap-4">
              <CarouselPrevious variant="ghost" className="static translate-y-0 w-14 h-14 rounded-full !bg-brand-lavender !text-brand-dark flex items-center justify-center creative-border-sm creative-border-hover cursor-pointer outline-none [&_svg]:w-6 [&_svg]:h-6 hover:!bg-brand-dark hover:!text-white transition-colors" />
              <CarouselNext variant="ghost" className="static translate-y-0 w-14 h-14 rounded-full !bg-brand-orange !text-white flex items-center justify-center creative-border-sm creative-border-hover cursor-pointer outline-none [&_svg]:w-6 [&_svg]:h-6 hover:!bg-brand-dark hover:!text-white transition-colors" />
            </div>
          </div>

          <CarouselContent className="-ml-6 pb-6">
            {reelsList.map((reelUrl, idx) => (
              <CarouselItem key={`reel-${idx}`} className="pl-6 basis-[78%] sm:basis-[320px] md:basis-[350px] shrink-0">
                <div
                  className="relative group rounded-[2rem] overflow-hidden aspect-[3/4] creative-border bg-brand-dark flex items-center justify-center"
                >
                  <iframe
                    src={reelUrl}
                    title={`Instagram Reel Portfolio Item ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full border-none scale-[1.35] -translate-y-[8%]"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </CarouselItem>
            ))}
            {videos.map((video, idx) => (
              <CarouselItem key={`video-${idx}`} className="pl-6 basis-[78%] sm:basis-[320px] md:basis-[350px] shrink-0">
                <div
                  className="relative group rounded-[2rem] overflow-hidden aspect-[3/4] creative-border bg-brand-dark flex items-center justify-center"
                >
                  <video
                    src={`/uploads/${video.filename}`}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-12">
          <Link to="/portfolio">
            <Button className="bg-brand-dark text-white hover:bg-brand-orange rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest creative-border-sm creative-border-hover transition-all flex items-center gap-2">
              View Full Portfolio <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Social Feed Grid */}
        {/* <div className="mt-16 md:mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-lavender text-brand-dark creative-border-sm font-bold text-sm tracking-widest uppercase mb-6">
              Follow Along
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-brand-dark">
              More From The <span className="text-brand-orange italic">Feed</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, idx) => {
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
                  className="group block relative aspect-square rounded-2xl creative-border overflow-hidden bg-white/40 flex items-center justify-center"
                >
                  <Instagram className="w-8 h-8 text-brand-dark/30" />
                  
                  <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 p-4 text-center">
                    <p className="font-bold text-white text-sm">
                      {handle}
                    </p>
                    <span className="text-brand-orange text-xs uppercase tracking-widest font-bold">
                      View Post
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
