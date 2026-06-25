/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PortfolioSection() {
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
                <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center creative-border-sm group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowRight className="w-7 h-7" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
