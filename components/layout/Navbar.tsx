import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onScrollToContact: () => void;
}

export function Navbar({ onScrollToContact }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-[120]">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md creative-border rounded-2xl px-4 md:px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer h-12"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/4six-creative-logo-black.png" alt="4SIX CREATIVE" className="h-full object-contain" />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm tracking-widest">
          {["Services", "Portfolio", "Process"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-brand-orange transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
            </a>
          ))}
          <Button
            onClick={onScrollToContact}
            className="bg-brand-dark text-white hover:bg-brand-orange creative-border-sm creative-border-hover"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-3 w-12 h-12 flex items-center justify-center bg-brand-dark text-white rounded-xl creative-border-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 bg-white creative-border rounded-2xl p-4 md:p-6 flex flex-col gap-4"
          >
            {["Services", "Portfolio", "Process"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl font-display font-bold uppercase py-3 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                onScrollToContact();
              }}
              className="w-full bg-brand-dark text-white py-6 text-lg"
            >
              Let's Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
