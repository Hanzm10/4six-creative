/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function StaticProjectCard({ project, idx }: { project: any; idx: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ delay: idx * 0.2 }}
      className="group relative creative-border rounded-[2.5rem] overflow-hidden bg-white cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        {project.img && !imgError ? (
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full ${project.color} flex items-center justify-center`}>
            <span className="font-display font-black text-brand-dark/30 text-[clamp(2.5rem,6vw,4rem)] uppercase tracking-tighter text-center px-6 leading-none">
              {project.title}
            </span>
          </div>
        )}
      </div>
      <div className="p-8 border-t-4 border-brand-dark flex justify-between items-center group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
        <div>
          <Badge className={`${project.color} text-brand-dark mb-2 border-brand-dark`}>{project.category}</Badge>
          <h3 className="text-3xl font-display font-bold uppercase">{project.title}</h3>
        </div>
        <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center creative-border-sm group-hover:rotate-45 transition-transform duration-300 shrink-0">
          <ArrowRight className="w-7 h-7" />
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const projects = [
    {
      title: "happywithmeg branding",
      category: "Branding & Social",
      img: "",
      color: "bg-brand-lavender"
    },
    {
      title: "#Mozination campaign strategy",
      category: "Campaign Strategy",
      img: "",
      color: "bg-brand-green"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-light grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] mb-6 uppercase leading-none">Impactful <br /><span className="text-brand-green">Results</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-brand-dark/80 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <Button variant="outline" className="creative-border creative-border-hover bg-white text-lg px-8 py-6">View All Projects</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <StaticProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
