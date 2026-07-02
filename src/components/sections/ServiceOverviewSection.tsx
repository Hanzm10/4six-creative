import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

export function ServiceOverviewSection() {
  const reduce = useReducedMotion();

  return (
    <section id="service-overview" className="pb-12 md:pb-24 pt-0 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-brand-dark rounded-3xl creative-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-4xl uppercase text-white mb-2">
              Not sure where to start?
            </h3>
            <p className="text-white/60 text-base md:text-lg">
              Lorem ipsum dolor sit. Consectetur adipiscing elit, sed do.
            </p>
          </div>
          <Link
            to="/contact#book-session"
            className="bg-brand-orange text-white font-display font-bold uppercase px-8 py-4 rounded-2xl creative-border-sm whitespace-nowrap hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-200 text-base md:text-lg"
          >
            Book a Free Call →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
