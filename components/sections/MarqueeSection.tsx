import { Star } from "lucide-react";

function Marquee({ items, speed = 20, reverse = false }: { items: string[], speed?: number, reverse?: boolean }) {
  return (
    <div className="marquee-container bg-brand-dark py-4 border-y-4 border-brand-dark">
      <div className={`marquee-content ${reverse ? 'flex-row-reverse' : ''}`} style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-4 sm:mx-6 md:mx-8">
            <span className="text-white font-display font-bold text-base sm:text-xl md:text-2xl uppercase tracking-widest">{item}</span>
            <Star className="ml-8 text-brand-orange fill-brand-orange w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <Marquee items={["Content Strategy", "Visual Design", "Performance Ads", "Community Management", "Influencer Marketing"]} />
  );
}
