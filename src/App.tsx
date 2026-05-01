/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { FloatingMobileCTA } from "@/components/layout/FloatingMobileCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection";
import { MeetTheCEOSection } from "@/components/sections/MeetTheCEOSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white relative bg-brand-light overflow-x-hidden">
      <SplashScreen />

      {/* Global paper texture overlay */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}
      />

      <ScrollProgressBar />
      <FloatingMobileCTA onScrollToContact={scrollToContact} />
      <Navbar onScrollToContact={scrollToContact} />

      <main>
        <HeroSection onScrollToContact={scrollToContact} />
        <MarqueeSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <VideoShowcaseSection />
        <MeetTheCEOSection />
        <ContactSection sectionRef={contactRef} />
      </main>

      <Footer />
    </div>
  );
}
