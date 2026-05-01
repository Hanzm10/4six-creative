import { motion, AnimatePresence } from "motion/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingMobileCTAProps {
  onScrollToContact: () => void;
}

export function FloatingMobileCTA({ onScrollToContact }: FloatingMobileCTAProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-8 right-6 z-50 md:hidden"
      >
        <Button
          onClick={onScrollToContact}
          className="rounded-full w-16 h-16 bg-brand-orange text-white creative-border shadow-xl flex items-center justify-center p-0"
        >
          <Send className="w-7 h-7" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}
