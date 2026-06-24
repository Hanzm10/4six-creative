/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { Routes, Route } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import AdminPage from './pages/AdminPage';
import Footer from '@/layout/Footer';
import Navbar from "@/layout/Navbar";
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceOverviewSection } from '@/components/sections/ServiceOverviewSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { VideoShowcaseSection } from '@/components/sections/VideoShowcaseSection';
import { CEOSection } from '@/components/sections/CEOSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ApplicationForm } from '@/components/forms/ApplicationForm';
import {
  ArrowRight,
  Sparkles,
  Target,
  Send,
  Star,
  Smile,
  Globe,
  Rocket
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Marquee = ({ items, speed = 20, reverse = false }: { items: string[], speed?: number, reverse?: boolean }) => {
  return (
    <div className="marquee-container bg-brand-dark py-4 border-y-4 border-brand-dark">
      <div className={`marquee-content ${reverse ? 'flex-row-reverse' : ''}`} style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-white font-display font-bold text-2xl uppercase tracking-widest">{item}</span>
            <Star className="ml-8 text-brand-orange fill-brand-orange w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

function HomePage() {
  const [showSplash, setShowSplash] = useState(true);
  const [portfolioReels, setPortfolioReels] = useState<string[]>([
    'https://www.instagram.com/reel/C0hn8OGuEk5/embed/',
    'https://www.instagram.com/reel/CmMnxhTOqiZ/embed/',
    'https://www.instagram.com/reel/DVJ7qwBEjSu/embed/',
    'https://www.instagram.com/reel/DO7EsRUDejI/embed/'
  ]);
  const [portfolioVideos, setPortfolioVideos] = useState<any[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch('/api/reels')
      .then(res => res.json())
      .then(data => setPortfolioReels(data.map((r: any) => `${r.url}embed/`)))
      .catch(err => console.error("Error fetching reels:", err));
    fetch('/api/videos')
      .then(res => res.json())
      .then(data => setPortfolioVideos(data))
      .catch(err => console.error("Error fetching videos:", err));
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white relative bg-brand-light overflow-x-hidden">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-brand-light flex items-center justify-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/4six-creative-logo-black.png"
              alt="4SIX CREATIVE"
              className="w-[80%] max-w-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Paper Texture Overlay */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-brand-orange z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Floating CTA for Mobile */}
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <Button
            onClick={scrollToContact}
            className="rounded-full w-16 h-16 bg-brand-orange text-white creative-border shadow-xl flex items-center justify-center p-0"
          >
            <Send className="w-7 h-7" />
          </Button>
        </motion.div>
      </AnimatePresence>

      <Navbar onContactClick={scrollToContact} />

      <HeroSection onContactClick={scrollToContact} />

      {/* Marquee */}
      <Marquee items={["Social Media Management", "Influencer Marketing", "Content Strategy", "Visual Design", "Community Reviews", "Organic Marketing"]} />

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] mb-6 uppercase leading-none">Our Creative <br /><span className="text-brand-orange italic">Arsenal</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-brand-dark/80">
                We don't just post. We strategize, design, and execute campaigns that resonate with your audience and drive real growth.
              </p>
            </div>
            <div className="bg-brand-lavender p-6 rounded-2xl creative-border-sm rotate-3 hidden md:block">
              <Rocket className="w-12 h-12 text-brand-dark" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Large Card: Full-Service Management */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand-lavender p-10 rounded-3xl creative-border relative overflow-hidden group block cursor-pointer"
            >
              <div className="relative z-10">
                <Badge className="bg-white text-brand-dark border-brand-dark mb-6">Most Popular</Badge>
                <h3 className="text-2xl md:text-5xl mb-6 uppercase">Full-Service <br />Management</h3>
                <p className="text-lg mb-8 max-w-md">Complete social media ecosystem management. From strategy to execution, we handle it all so you can focus on your business.</p>
                <Button className="bg-brand-dark text-white creative-border-sm pointer-events-none">Get Started</Button>
              </div>
              <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-brand-dark/10 group-hover:rotate-12 transition-transform duration-500" />
            </motion.a>

            {/* Card 2 - Social Media Marketing */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-brand-peach p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                  <Smile className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-3xl mb-4 uppercase">Social Media <br />Marketing</h3>
                <p className="text-brand-dark/70">Strategic organic growth, engagement, and brand building across all major platforms.</p>
              </div>
              <ArrowRight className="mt-8 w-8 h-8 self-end" />
            </motion.a>

            {/* Card 3 - Content Creation */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-brand-green p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                  <Sparkles className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-3xl mb-4 uppercase">Content <br />Creation</h3>
                <p className="text-brand-dark/70">Thumb-stopping aesthetics, photos, videos, UGC, and visual storytelling that converts.</p>
              </div>
              <ArrowRight className="mt-8 w-8 h-8 self-end" />
            </motion.a>

            {/* Card 4 - Content Strategy */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-brand-orange p-10 rounded-3xl creative-border text-white flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                  <Target className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-3xl mb-4 uppercase">Content <br />Strategy</h3>
                <p className="text-white/80">Data-driven roadmaps and visual voice planning aligned with audience intent.</p>
              </div>
              <ArrowRight className="mt-8 w-8 h-8 self-end text-white" />
            </motion.a>

            {/* Card 5 - Marketing Campaigns */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-brand-lavender p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                  <Rocket className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-3xl mb-4 uppercase">Marketing <br />Campaigns</h3>
                <p className="text-brand-dark/70">High-impact organic campaigns designed to scale reach and foster strong community.</p>
              </div>
              <ArrowRight className="mt-8 w-8 h-8 self-end" />
            </motion.a>
          </div>
        </div>
      </section>

      <ServiceOverviewSection />

      <PortfolioSection />

      <ProcessSection />

      <VideoShowcaseSection reels={portfolioReels} videos={portfolioVideos} />

      <CEOSection />

      <TestimonialsSection />

      {/* Lead Capture Section */}
      <section ref={contactRef} id="contact" className="py-24 bg-brand-light grid-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-lavender text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-6 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
              Application Form
            </div>
            <h2 className="text-[clamp(3rem,8vw,6rem)] text-brand-dark mb-6 font-serif italic tracking-tight leading-none">
              Join the <span className="text-brand-orange font-display not-italic font-black">Roster.</span>
            </h2>
          </div>

          <ApplicationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/faq' element={<FAQPage />} />
      <Route path='/admin' element={<AdminPage />} />
    </Routes>
  );
}
