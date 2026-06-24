import { motion, useReducedMotion } from "motion/react";
import { Palette, TrendingUp, Video, MessageSquare, Search, Repeat2 } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logos, color systems, and visual guidelines that make your brand instantly recognizable across every platform.",
    accent: "bg-brand-lavender",
    iconColor: "text-brand-dark",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-backed roadmaps tailored to your niche. We identify your audience, study competitors, and build a plan that scales.",
    accent: "bg-brand-orange",
    iconColor: "text-white",
  },
  {
    icon: Video,
    title: "Video & Reels",
    description: "Short-form video production optimized for TikTok, Instagram Reels, and YouTube Shorts. Hook, hold, convert.",
    accent: "bg-brand-peach",
    iconColor: "text-brand-dark",
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    description: "We engage your audience daily — responding, nurturing, and turning followers into loyal brand advocates.",
    accent: "bg-brand-green",
    iconColor: "text-white",
  },
  {
    icon: Search,
    title: "SEO & Discoverability",
    description: "Hashtag research, keyword optimization, and platform algorithm alignment so new audiences actually find you.",
    accent: "bg-brand-lavender",
    iconColor: "text-brand-dark",
  },
  {
    icon: Repeat2,
    title: "Content Repurposing",
    description: "One piece of content, maximum reach. We atomize your best work across every channel without losing quality.",
    accent: "bg-brand-dark",
    iconColor: "text-brand-orange",
  },
];

export function ServiceOverviewSection() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.09 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28, scale: reduce ? 1 : 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="service-overview" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-accent text-brand-orange uppercase tracking-widest text-sm font-semibold mb-3">
            What We Do
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none mb-6">
            Everything Your<br />
            <span className="text-brand-orange italic">Brand Needs</span>
          </h2>
          <p className="text-base md:text-lg text-brand-dark/70">
            From first impression to lasting loyalty — we cover every touchpoint of your digital presence.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-brand-light rounded-3xl creative-border creative-border-hover p-8 flex flex-col gap-5"
              >
                <div className={`${service.accent} w-14 h-14 rounded-2xl creative-border-sm flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl uppercase mb-3">{service.title}</h3>
                  <p className="text-brand-dark/70 text-sm md:text-base leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 bg-brand-dark rounded-3xl creative-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl md:text-4xl uppercase text-white mb-2">
              Not sure where to start?
            </h3>
            <p className="text-white/60 text-base md:text-lg">
              Let's talk. We'll figure out exactly what your brand needs.
            </p>
          </div>
          <a
            href="/#contact"
            className="bg-brand-orange text-white font-display font-bold uppercase px-8 py-4 rounded-2xl creative-border-sm whitespace-nowrap hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-200 text-base md:text-lg"
          >
            Book a Free Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
