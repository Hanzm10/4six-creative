/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Instagram,
  Youtube,
  Menu,
  X,
  Sparkles,
  Zap,
  Target,
  BarChart3,
  CheckCircle2,
  Send,
  Circle,
  Square,
  Triangle,
  Star,
  Heart,
  Smile,
  Globe,
  Rocket,
  MousePointer2,
  Play,
  Volume2,
  Maximize
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

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

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    location: "",
    platforms: [] as string[],
    handles: "",
    struggles: "",
    goals: "",
    support: [] as string[],
    budget: "",
    timeline: ""
  });

  const steps = [
    { num: 1, label: "BASIC INFO" },
    { num: 2, label: "SOCIAL MEDIA" },
    { num: 3, label: "GOALS" },
    { num: 4, label: "SUPPORT" }
  ];

  const handleNext = () => setStep(s => Math.min(4, s + 1));
  const handleBack = () => setStep(s => Math.max(1, s - 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setStep(1);
    }, 5000);
  };

  const updateData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'platforms' | 'support', item: string) => {
    setFormData(prev => {
      const arr = prev[field];
      if (arr.includes(item)) {
        return { ...prev, [field]: arr.filter(i => i !== item) };
      } else {
        return { ...prev, [field]: [...arr, item] };
      }
    });
  };

  if (formSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white creative-border rounded-3xl p-12 text-center text-brand-dark max-w-3xl mx-auto"
      >
        <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 creative-border-sm">
          <CheckCircle2 className="w-10 h-10 text-brand-dark" />
        </div>
        <h3 className="text-3xl font-display font-bold mb-4 uppercase">Application Received!</h3>
        <p className="text-brand-dark/70 mb-8 max-w-md mx-auto text-lg">
          Our team is reviewing your application. We'll reach out within 24-48 hours with next steps.
        </p>
        <Button
          variant="outline"
          onClick={() => setFormSubmitted(false)}
          className="creative-border creative-border-hover bg-brand-light text-brand-dark px-8 py-6 rounded-full font-bold uppercase tracking-widest"
        >
          Submit Another Application
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white creative-border rounded-[2rem] p-6 md:p-12 text-brand-dark max-w-4xl mx-auto shadow-2xl relative z-10">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-16 sm:mb-20 relative">
        {steps.map((s, index) => (
          <React.Fragment key={s.num}>
            <div className="relative flex flex-col items-center justify-center z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 border-2 ${step > s.num ? 'bg-brand-dark text-white border-brand-dark' :
                  step === s.num ? 'bg-brand-lavender text-brand-dark border-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]' :
                    'bg-brand-light text-brand-dark/40 border-brand-dark/20'
                }`}>
                {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
              </div>
              <span className={`absolute top-14 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center w-24 hidden sm:block ${step >= s.num ? 'text-brand-dark' : 'text-brand-dark/40'
                }`}>
                {s.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-brand-dark/10 mx-2 sm:mx-4 relative z-0 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 bottom-0 bg-brand-orange transition-all duration-500"
                  style={{ width: step > s.num ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 min-h-[300px]"
          >
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">First and Last Name*</Label>
                    <Input required value={formData.name} onChange={e => updateData('name', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Business Name (If Applicable)</Label>
                    <Input value={formData.businessName} onChange={e => updateData('businessName', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="Jane's Boutique" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Business Email Address*</Label>
                    <Input type="email" required value={formData.email} onChange={e => updateData('email', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Phone Number*</Label>
                    <Input type="tel" required value={formData.phone} onChange={e => updateData('phone', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Website Link</Label>
                    <Input type="url" value={formData.website} onChange={e => updateData('website', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="https://..." />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Where are you located?*</Label>
                    <Input required value={formData.location} onChange={e => updateData('location', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="City, State" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Which social media platforms are you currently using?*</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Instagram', 'Facebook', 'TikTok', 'YouTube', 'LinkedIn', 'Pinterest', 'Other'].map(platform => (
                      <label key={platform} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.platforms.includes(platform) ? 'bg-brand-lavender border-brand-dark text-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] -translate-y-0.5' : 'bg-brand-light border-brand-dark/20 text-brand-dark/70 hover:border-brand-dark/50'}`}>
                        <input type="checkbox" className="hidden" checked={formData.platforms.includes(platform)} onChange={() => toggleArrayItem('platforms', platform)} />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${formData.platforms.includes(platform) ? 'bg-brand-dark border-brand-dark' : 'border-brand-dark/30 bg-white'}`}>
                          {formData.platforms.includes(platform) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <span className="font-bold">{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Social Media Handles*</Label>
                  <Textarea required value={formData.handles} onChange={e => updateData('handles', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-3 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="@yourhandle on IG, etc." />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">What are your current struggles or frustrations with social media?*</Label>
                  <Textarea required value={formData.struggles} onChange={e => updateData('struggles', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-3 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="Tell us what's not working..." />
                </div>
                <div className="space-y-2">
                  <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">What goals do you have for your social media over the next 3–6 months?*</Label>
                  <Textarea required value={formData.goals} onChange={e => updateData('goals', e.target.value)} className="bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-3 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors" placeholder="More leads, brand awareness, etc." />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">What level of support are you looking for?*</Label>
                  <div className="grid gap-3">
                    {[
                      'Full-service social media management',
                      'Content creation (photo, video, UGC)',
                      'Reels & short-form video editing',
                      'Strategy & monthly planning',
                      'Influencer outreach'
                    ].map(support => (
                      <label key={support} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.support.includes(support) ? 'bg-brand-peach border-brand-dark text-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] -translate-y-0.5' : 'bg-brand-light border-brand-dark/20 text-brand-dark/70 hover:border-brand-dark/50'}`}>
                        <input type="checkbox" className="hidden" checked={formData.support.includes(support)} onChange={() => toggleArrayItem('support', support)} />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${formData.support.includes(support) ? 'bg-brand-dark border-brand-dark' : 'border-brand-dark/30 bg-white'}`}>
                          {formData.support.includes(support) && <CheckCircle2 className="w-3 h-3 text-white" />}
                        </div>
                        <span className="font-bold">{support}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Monthly Budget*</Label>
                    <select required value={formData.budget} onChange={e => updateData('budget', e.target.value)} className="w-full bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none appearance-none transition-colors">
                      <option value="" disabled>Select a budget</option>
                      <option value="$1,500 - $2,500">$1,500 - $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">When to get started?*</Label>
                    <select required value={formData.timeline} onChange={e => updateData('timeline', e.target.value)} className="w-full bg-brand-orange/10 dark:bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none appearance-none transition-colors">
                      <option value="" disabled>Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="In 2-4 weeks">In 2-4 weeks</option>
                      <option value="In 1-2 Months">In 1-2 Months</option>
                      <option value="Just exploring now">Just exploring now</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-12 pt-8 border-t-2 border-brand-dark/10">
          {step > 1 ? (
            <Button type="button" variant="ghost" onClick={handleBack} className="text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5 rounded-full px-6 font-bold uppercase tracking-widest">
              Back
            </Button>
          ) : <div></div>}

          <Button type="submit" className="bg-brand-dark text-white hover:bg-brand-orange rounded-full px-8 py-4 md:py-6 font-bold uppercase tracking-widest transition-colors creative-border-sm creative-border-hover flex items-center">
            {step === 4 ? 'Submit Application' : 'Next Step'} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollYProgress: videoScroll } = useScroll({
    target: videoSectionRef,
    offset: ["start 75%", "start 25%"]
  });

  const topTearY = useTransform(videoScroll, [0, 1], ["0%", "-100%"]);
  const bottomTearY = useTransform(videoScroll, [0, 1], ["0%", "100%"]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white relative bg-brand-light">
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

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-[120]">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md creative-border rounded-2xl px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer h-12"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/4six-creative-logo-black.png" alt="4SIX CREATIVE" className="h-full object-contain" />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm tracking-widest">
            {["Services", "Portfolio", "Process"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-orange transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </a>
            ))}
            <Button
              onClick={scrollToContact}
              className="bg-brand-dark text-white hover:bg-brand-orange creative-border-sm creative-border-hover"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 bg-brand-dark text-white rounded-xl creative-border-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden mt-4 bg-white creative-border rounded-2xl p-6 flex flex-col gap-4"
            >
              {["Services", "Portfolio", "Process"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-display font-bold uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToContact();
                }}
                className="w-full bg-brand-dark text-white py-6 text-lg"
              >
                Let's Talk
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-12 overflow-hidden bg-[#faece3] flex flex-col justify-center">
        {/* Floating Objects (Simulating the 3D items from the screenshot) */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* Blue Chair (Simulated) */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-5, -2, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] left-[2%] md:left-[5%] w-32 h-32 md:w-48 md:h-48 bg-[#2b309b] rounded-lg shadow-2xl skew-x-12"
          />
          {/* Pink Table (Simulated) */}
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[10%] right-[10%] md:right-[20%] w-24 h-24 md:w-40 md:h-40 bg-[#ff9eb5] rounded-full shadow-xl flex items-center justify-center"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#faece3] rounded-full" />
          </motion.div>
          {/* Green Cylinder */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[45%] left-[25%] md:left-[30%] w-24 h-32 md:w-40 md:h-48 bg-[#00873e] rounded-[3rem] shadow-2xl -rotate-12"
          />
          {/* Yellow Patterned Plate */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[15%] left-[10%] md:left-[20%] w-32 h-32 md:w-56 md:h-56 bg-[#d4df00] rounded-full border-[8px] border-black border-dashed shadow-xl"
          />
          {/* Blue Vase */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[5%] right-[25%] md:right-[35%] w-16 h-24 md:w-24 md:h-40 bg-[#8cb8d9] rounded-t-3xl rounded-b-xl shadow-xl"
          />
          {/* Colorful Striped Vase */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[20%] left-[50%] w-12 h-20 md:w-20 md:h-32 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-full shadow-xl"
          />
        </div>

        <div className="w-full px-4 md:px-8 relative z-10 max-w-[1800px] mx-auto">
          <div className="flex flex-col w-full">
            {/* Line 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between items-center w-full"
            >
              <h1 className="text-[clamp(4rem,16vw,22rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase">
                Make
              </h1>
              <h1 className="text-[clamp(4rem,16vw,22rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase relative z-30">
                It
              </h1>
            </motion.div>

            {/* Line 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center w-full mt-2 md:mt-6 relative z-10"
            >
              <h1 className="text-[clamp(5rem,22vw,28rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase text-center w-full">
                Pop
              </h1>
            </motion.div>

            {/* Line 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full mt-2 md:mt-6 gap-8 relative z-30"
            >
              <h1 className="text-[clamp(4rem,18vw,24rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase">
                More!
              </h1>

              <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-sm pb-4 md:pb-12 lg:pr-12">
                <p className="text-[#f04d21] font-mono text-sm md:text-base uppercase tracking-widest mb-6 font-bold leading-relaxed">
                  Bright and bold<br />are in demand this<br />season.
                </p>
                <Button
                  onClick={scrollToContact}
                  className="bg-[#f04d21] text-white hover:bg-brand-dark rounded-none px-8 py-6 text-sm md:text-base font-bold uppercase tracking-widest transition-colors"
                >
                  Shop The Style
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee items={["Content Strategy", "Visual Design", "Performance Ads", "Community Management", "Influencer Marketing"]} />

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
            {/* Large Card */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand-lavender p-10 rounded-3xl creative-border relative overflow-hidden group block cursor-pointer"
            >
              <div className="relative z-10">
                <Badge className="bg-white text-brand-dark border-brand-dark mb-6">Most Popular</Badge>
                <h3 className="text-4xl md:text-5xl mb-6 uppercase">Full-Service <br />Management</h3>
                <p className="text-lg mb-8 max-w-md">Complete social media ecosystem management. From strategy to execution, we handle it all so you can focus on your business.</p>
                <Button className="bg-brand-dark text-white creative-border-sm pointer-events-none">Get Started</Button>
              </div>
              <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-brand-dark/10 group-hover:rotate-12 transition-transform duration-500" />
            </motion.a>

            {/* Small Card 1 */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-brand-peach p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                  <Sparkles className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-3xl mb-4 uppercase">Visual <br />Design</h3>
                <p className="text-brand-dark/70">Thumb-stopping aesthetics that make your brand impossible to scroll past.</p>
              </div>
              <ArrowRight className="mt-8 w-8 h-8 self-end" />
            </motion.a>

            {/* Small Card 2 */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-brand-green p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
            >
              <div>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                  <BarChart3 className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-3xl mb-4 uppercase">Performance <br />Ads</h3>
                <p className="text-brand-dark/70">Optimized ad campaigns that turn impressions into revenue and scale your ROI.</p>
              </div>
              <ArrowRight className="mt-8 w-8 h-8 self-end" />
            </motion.a>

            {/* Medium Card */}
            <motion.a
              href="https://stan.store/troyiamonay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-brand-orange p-10 rounded-3xl creative-border text-white relative overflow-hidden group block cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-4xl mb-6 uppercase">Content <br />Strategy</h3>
                <p className="text-lg mb-8 max-w-lg">Data-driven roadmaps that align your brand voice with audience intent. We find the "why" before the "what".</p>
                <div className="flex gap-4">
                  <Badge className="bg-white text-brand-orange border-white">Research</Badge>
                  <Badge className="bg-white text-brand-orange border-white">Planning</Badge>
                  <Badge className="bg-white text-brand-orange border-white">Growth</Badge>
                </div>
              </div>
              <Target className="absolute -top-10 -right-10 w-48 h-48 text-white/10 group-hover:scale-110 transition-transform duration-500" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-brand-light grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] mb-6 uppercase leading-none">Impactful <br /><span className="text-brand-green">Results</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-brand-dark/80 max-w-xl">
                A glimpse into how we've transformed brands into social media powerhouses through creative innovation.
              </p>
            </div>
            <Button variant="outline" className="creative-border creative-border-hover bg-white text-lg px-8 py-6">View All Projects</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "happywithmeg branding",
                category: "Branding & Social",
                img: "https://instagram.fmnl17-6.fna.fbcdn.net/v/t51.82787-15/662495685_18149061682479036_8333921998436741835_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=109&ig_cache_key=Mzg3MzAwMjE2MzM4Nzc4MjU2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=K9NvUF5kn8wQ7kNvwGmbZX7&_nc_oc=AdpCtYydAqxH9FZAXgxiqUltdxSIFT4kVrC-12A9_9fRuq0hQmQ01bYr1rW4ZlEP8fs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl17-6.fna&_nc_gid=isA7-3KSiXQdFAXqZExCuQ&_nc_ss=7a32e&oh=00_Af2bgp1SHM5r-bEPSHILUO_hqzzycpr8nTpMnn_9OygRpA&oe=69E564EF",
                color: "bg-brand-lavender"
              },
              {
                title: "#Mozination campaign strategy",
                category: "Campaign Strategy",
                img: "https://instagram.fmnl17-3.fna.fbcdn.net/v/t51.82787-15/625257710_18123569827489369_8040625987422691498_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzAyODY5Nzk3MjI3MDgxMTgwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ijbrQOE4sSYQ7kNvwH20Ov2&_nc_oc=Adpp2HOMFXy2dMRs7i91y_I757RbJmkqHoVuIGdq8gXNQRH4nf-HTZ3DAM6V5xSPKMA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl17-3.fna&_nc_gid=BddqFSebmAUXWFpFNAG2eA&_nc_ss=7a32e&oh=00_Af2wroqV2qRU2ZOjJJma5h69UxzWMPpHxkNqj1KU4oXXuQ&oe=69E53B75",
                color: "bg-brand-green"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ delay: idx * 0.2 }}
                className="group relative creative-border rounded-[2.5rem] overflow-hidden bg-white cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 border-t-4 border-brand-dark flex justify-between items-center group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                  <div>
                    <Badge className={`${project.color} text-brand-dark mb-2 border-brand-dark`}>{project.category}</Badge>
                    <h3 className="text-3xl font-display font-bold uppercase">{project.title}</h3>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center creative-border-sm group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-7 h-7" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-brand-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] mb-6 uppercase tracking-tighter leading-none">Our <span className="text-brand-lavender italic">Creative</span> Workflow</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              How we turn your vision into a high-performing digital ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your brand, goals, and audience.", color: "bg-brand-lavender" },
              { step: "02", title: "Strategy", desc: "Crafting a unique roadmap for your social growth.", color: "bg-brand-peach" },
              { step: "03", title: "Execution", desc: "High-quality content creation and distribution.", color: "bg-brand-green" },
              { step: "04", title: "Optimization", desc: "Analyzing data to scale what works best.", color: "bg-brand-orange" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center font-display font-black text-3xl text-brand-dark creative-border-sm mb-8 group-hover:-rotate-6 transition-transform`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
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
                  className="w-full h-full border-none scale-[1.35] -translate-y-[8%]"
                  scrolling="no"
                  allowTransparency={true}
                  allow="encrypted-media"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the CEO Section */}
      <section className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image Column */}
            <div className="relative max-w-[260px] sm:max-w-sm md:max-w-md mx-auto lg:max-w-none w-full">
              {/* SSS Sticker */}
              <motion.div
                initial={{ rotate: -25, scale: 0.8, opacity: 0 }}
                whileInView={{ rotate: -15, scale: 1, opacity: 1 }}
                viewport={{ amount: 0.5 }}
                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-12 md:-left-16 z-20 bg-[#f53030] text-[#e9bc8b] px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-6 rounded-[100%] border-[3px] sm:border-[4px] md:border-[6px] border-[#e9bc8b] shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] flex items-center gap-1 sm:gap-2"
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 fill-current" />
                <span className="font-display font-black text-2xl sm:text-3xl md:text-5xl tracking-widest italic">SSS</span>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 fill-current" />
              </motion.div>

              {/* Main Image */}
              <div className="rounded-t-[8rem] sm:rounded-t-[10rem] md:rounded-t-[12rem] rounded-b-[1.5rem] md:rounded-b-[2rem] overflow-hidden creative-border aspect-[3/4] relative z-10 bg-white">
                <img
                  src="/meet-troyia.jpg"
                  alt="Meet Troyia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Ice Cream Sticker */}
              <motion.div
                initial={{ rotate: 25, scale: 0.8, opacity: 0 }}
                whileInView={{ rotate: 15, scale: 1, opacity: 1 }}
                viewport={{ amount: 0.5 }}
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-12 md:-right-12 z-20 text-[4rem] sm:text-[5rem] md:text-[8rem] drop-shadow-[4px_4px_0px_rgba(20,20,20,1)]"
              >
                🍦
              </motion.div>
            </div>

            {/* Text Column */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-black text-brand-dark tracking-tighter mb-4 md:mb-8 leading-none">
                Meet <span className="italic">Troyia</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-brand-dark/90 leading-relaxed font-medium text-left">
                <p>
                  I left teaching in 2020 to build a business for the first time, and it didn't take long to realize I'd found something that actually fit my personality more than any job ever had before.
                </p>
                <p>
                  Growing up, I was never the kid bringing home trophies or pulling straight A's. I didn't stick to one thing for long, and I genuinely thought something was wrong with me. Turns out, I just liked a lot of things a little bit.
                </p>
                <p>
                  <strong className="text-brand-dark font-bold">& That is exactly why social media management clicked for me.</strong> It didn't require being the absolute best at one singular skill. It rewards being good at many different things— and that is what has made me great (and able to make a lot of money).
                </p>
                <p>
                  Then I started sharing my story, and I was amazed after I received hundreds of DM's from other women said "that's exactly how I feel."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16 md:py-24 border-t-8 border-brand-orange">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 md:mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6 md:mb-8 h-16">
                <img src="/4six-creative-logo-white.png" alt="4SIX CREATIVE" className="h-full object-contain" />
              </div>
              <p className="text-white/80 text-lg md:text-xl max-w-md mb-8 md:mb-10 leading-relaxed">
                A social media marketing agency that balances corporate precision with creative flair. We build brands that matter in a digital-first world.
              </p>
              <div className="flex gap-4 md:gap-6">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/troyiamonay/" },
                  { Icon: Youtube, href: "https://www.youtube.com/@TroyiaMonayy" }
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border-4 border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg md:text-xl mb-6 md:mb-8 uppercase tracking-widest text-brand-orange">Explore</h4>
              <ul className="space-y-4 md:space-y-6 text-white/60 text-base md:text-lg font-bold uppercase tracking-tight">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg md:text-xl mb-6 md:mb-8 uppercase tracking-widest text-brand-orange">Connect</h4>
              <ul className="space-y-4 md:space-y-6 text-white/60 text-base md:text-lg">
                <li>hello@4sixcreatives.com</li>
                <li>+1 (555) 000-4646</li>
                <li>123 Creative Lane, <br />Design District, NY</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 md:pt-12 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs sm:text-sm font-bold uppercase tracking-widest text-center md:text-left">
            <p>© 2024 4SIX CREATIVE. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
