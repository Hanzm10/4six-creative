import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jasmine R.",
    handle: "@jasminebeautyco",
    role: "Beauty Brand Founder",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    accent: "bg-brand-lavender",
  },
  {
    name: "Marcus T.",
    handle: "@marcusfitlife",
    role: "Fitness Coach",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    accent: "bg-brand-peach",
  },
  {
    name: "Priya S.",
    handle: "@priyaeats",
    role: "Food Creator & Restaurateur",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    accent: "bg-brand-green",
  },
  {
    name: "Derek W.",
    handle: "@derekwlifestyle",
    role: "Lifestyle Influencer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    accent: "bg-brand-orange",
  },
];

export function TestimonialsSection() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-brand-light grid-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-accent text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3">
              Client Love
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none">
              Real Results,<br />
              <span className="text-brand-orange italic">Real People</span>
            </h2>
          </div>
          <p className="max-w-sm text-brand-dark/70 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.handle}
              variants={cardVariants}
              className={`${t.accent} p-8 rounded-3xl creative-border creative-border-hover flex flex-col gap-6`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl creative-border-sm flex items-center justify-center flex-shrink-0">
                <Quote className="w-5 h-5 text-brand-dark" />
              </div>
              <p className="font-serif italic text-lg md:text-xl text-brand-dark leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="border-t-2 border-brand-dark/20 pt-4">
                <p className="font-display font-bold text-brand-dark">{t.name}</p>
                <p className="font-accent text-sm text-brand-dark/60">{t.handle} · {t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { stat: "150+", label: "Clients Served" },
            { stat: "4.9★", label: "Average Rating" },
            { stat: "3x", label: "Avg. Follower Growth" },
            { stat: "48hr", label: "Avg. Onboarding" },
          ].map(({ stat, label }) => (
            <div
              key={label}
              className="bg-brand-dark text-white rounded-2xl p-6 text-center creative-border"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-brand-orange">{stat}</p>
              <p className="font-accent text-sm text-white/70 mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
