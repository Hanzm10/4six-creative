import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar({ onContactClick }: { onContactClick?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: isHome ? "#portfolio" : "/#portfolio" },
    { label: "Process", href: isHome ? "#process" : "/#process" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-[120]">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md creative-border rounded-2xl px-6 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer h-12"
        >
          <Link to="/">
            <img src="/4six-creative-logo-black.png" alt="4SIX CREATIVE" className="h-12 object-contain" />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm tracking-widest">
          {navLinks.map((item) =>
            item.href.startsWith("/") && !item.href.includes("#") ? (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-brand-orange transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brand-orange transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </a>
            )
          )}
          <Button
            onClick={onContactClick}
            className="bg-brand-dark text-white hover:bg-brand-orange creative-border-sm creative-border-hover"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 bg-brand-dark text-white rounded-xl creative-border-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 bg-white creative-border rounded-2xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((item) =>
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xl font-display font-bold uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xl font-display font-bold uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                onContactClick?.();
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
