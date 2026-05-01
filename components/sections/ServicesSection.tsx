import { motion } from "motion/react";
import { ArrowRight, Sparkles, BarChart3, Globe, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-24 bg-white relative">
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
            className="md:col-span-2 bg-brand-lavender p-6 md:p-10 rounded-3xl creative-border relative overflow-hidden group block cursor-pointer"
          >
            <div className="relative z-10">
              <Badge className="bg-white text-brand-dark border-brand-dark mb-6">Most Popular</Badge>
              <h3 className="text-2xl sm:text-4xl md:text-5xl mb-6 uppercase">Full-Service <br />Management</h3>
              <p className="text-lg mb-8 max-w-md">Complete social media ecosystem management. From strategy to execution, we handle it all so you can focus on your business.</p>
              <Button className="bg-brand-dark text-white creative-border-sm pointer-events-none">Get Started</Button>
            </div>
            <Globe className="absolute -bottom-10 -right-10 w-32 h-32 md:w-64 md:h-64 text-brand-dark/10 group-hover:rotate-12 transition-transform duration-500" />
          </motion.a>

          {/* Small Card 1 */}
          <motion.a
            href="https://stan.store/troyiamonay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-brand-peach p-6 md:p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
          >
            <div>
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                <Sparkles className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-xl sm:text-3xl mb-4 uppercase">Visual <br />Design</h3>
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
            className="bg-brand-green p-6 md:p-10 rounded-3xl creative-border flex flex-col justify-between block cursor-pointer"
          >
            <div>
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 creative-border-sm">
                <BarChart3 className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-xl sm:text-3xl mb-4 uppercase">Performance <br />Ads</h3>
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
            className="md:col-span-2 bg-brand-orange p-6 md:p-10 rounded-3xl creative-border text-white relative overflow-hidden group block cursor-pointer"
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
            <Target className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 text-white/10 group-hover:scale-110 transition-transform duration-500" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
