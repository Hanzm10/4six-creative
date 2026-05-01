import React from "react";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export function ContactSection({ sectionRef }: ContactSectionProps) {
  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-brand-light grid-bg relative overflow-hidden">
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
  );
}
