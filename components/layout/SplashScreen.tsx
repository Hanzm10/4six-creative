import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-brand-light flex items-center justify-center"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/4six-creative-logo-black.png"
            alt="4SIX CREATIVE"
            className="w-[80%] max-w-2xl object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
