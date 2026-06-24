import { motion } from "motion/react";

export function MeetTheCEOSection() {
  return (
    <section className="py-12 md:py-32 bg-brand-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Column */}
          <div className="relative max-w-[260px] sm:max-w-sm md:max-w-md mx-auto lg:max-w-none w-full">
            {/* Main Image */}
            <div className="rounded-t-[8rem] sm:rounded-t-[10rem] md:rounded-t-[12rem] rounded-b-[1.5rem] md:rounded-b-[2rem] overflow-hidden creative-border aspect-[3/4] relative z-10 bg-white">
              <img
                src="/meet-troyia.jpg"
                alt="Meet Troyia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-black text-brand-dark tracking-tighter mb-4 md:mb-8 leading-none">
              Meet <span className="italic">Troyia</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-brand-dark/90 leading-relaxed font-medium text-left">
              <p>
                I left teaching in 2020 to build a business for the first time, and it didn't take long to realize I'd found something that actually fit my personality more than any job ever had before.
              </p>
              <p>
                Growing up, I was never the kid bringing home trophies or pulling straight A's. I didn't stick to one thing for long, and I genuinely thought something was wrong with me. Turns out, I just liked a lot of things a little bit.
              </p>
              <p>
                <strong className="text-brand-dark font-bold">& That is exactly why social media management clicked for me.</strong> It didn't require being the absolute best at one singular skill. It rewards being good at many different things— and that is what has made me great (and able to make a lot of money).
              </p>
              <p>
                Then I started sharing my story, and I was amazed after I received hundreds of DM's from other women said "that's exactly how I feel."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
