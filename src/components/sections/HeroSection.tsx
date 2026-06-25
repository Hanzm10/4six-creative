import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] pt-32 md:pt-32 pb-12 overflow-hidden bg-[#faece3] flex flex-col justify-center">
      {/* Floating Objects (Simulating the 3D items from the screenshot) */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden hidden md:block">
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
            <h1 className="text-[clamp(2.5rem,12vw,16rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase">
              Make
            </h1>
            <h1 className="text-[clamp(2.5rem,12vw,16rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase relative z-30">
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
            <h1 className="text-[clamp(3rem,18vw,22rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase text-center w-full">
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
            <h1 className="text-[clamp(2.5rem,14vw,18rem)] font-display font-black text-[#f04d21] leading-[0.75] tracking-tighter m-0 uppercase">
              More!
            </h1>

            <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-sm pb-4 md:pb-12 lg:pr-12">
              <p className="text-[#f04d21] font-mono text-sm md:text-base uppercase tracking-widest mb-6 font-bold leading-relaxed">
                Lorem ipsum<br />dolor sit amet,<br />consectetur.
              </p>
              <Link to="/contact#work-with-us">
                <Button
                  className="bg-[#f04d21] text-white hover:bg-brand-dark rounded-none px-8 py-6 text-sm md:text-base font-bold uppercase tracking-widest transition-colors"
                >
                  Work With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
