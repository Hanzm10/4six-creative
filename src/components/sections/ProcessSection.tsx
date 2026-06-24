/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] mb-6 uppercase tracking-tighter leading-none">
            Our <span className="text-brand-lavender italic">Creative</span> Workflow
          </h2>
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
  );
}
