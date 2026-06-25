import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '4+', label: 'Years in Business' },
  { value: '50+', label: 'Brands Worked With' },
  { value: '2.4M+', label: 'Impressions Generated' },
  { value: '98%', label: 'Client Retention' },
];

const timeline = [
  {
    year: '2020',
    title: 'Lorem ipsum dolors',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    color: 'bg-brand-lavender',
  },
  {
    year: '2021',
    title: 'Lorem ipsum do',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore mag.',
    color: 'bg-brand-peach',
  },
  {
    year: '2022',
    title: 'Lorem ipsum dolor s',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed.',
    color: 'bg-brand-green',
  },
  {
    year: '2024',
    title: 'Lorem ipsum d',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed.',
    color: 'bg-brand-orange',
  },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className='min-h-screen bg-brand-light'>
      <Navbar />

      {/* Hero */}
      <section className='pt-40 pb-16 px-6 bg-brand-light'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='max-w-4xl'
          >
            <div className='inline-block bg-brand-peach text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-8 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              The Story
            </div>
            <h1 className='text-[clamp(3rem,8vw,7rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Not Your <br /><span className='text-brand-orange italic'>Typical</span> Agency.
            </h1>
            <p className='text-xl md:text-2xl text-brand-dark/70 leading-relaxed max-w-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna liqu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className='py-12 bg-brand-dark px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className='text-center'
            >
              <div className='text-[clamp(2rem,5vw,3.5rem)] font-display font-black text-brand-orange leading-none mb-2'>
                {stat.value}
              </div>
              <div className='text-white/60 text-sm font-bold uppercase tracking-widest'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pull Quote */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            className='relative'
          >
            <div className='text-[8rem] leading-none font-display font-black text-brand-orange/20 absolute -top-8 -left-4 select-none'>&ldquo;</div>
            <blockquote className='text-[clamp(1.5rem,3.5vw,2.5rem)] font-display font-bold text-brand-dark leading-snug tracking-tight pl-8 md:pl-16 relative z-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit.
            </blockquote>
            <div className='mt-8 pl-8 md:pl-16 flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-brand-orange creative-border-sm flex items-center justify-center font-display font-black text-white text-sm shrink-0'>
                TM
              </div>
              <div>
                <p className='font-bold text-brand-dark leading-none mb-1'>Troyia Monay</p>
                <p className='text-brand-dark/50 text-sm'>Founder, 4SIX CREATIVE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className='py-24 px-6 bg-brand-light grid-bg'>
        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='mb-16'>
            <h2 className='text-[clamp(2.5rem,6vw,5rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none'>
              The <span className='text-brand-orange italic'>Journey</span>
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ delay: idx * 0.15 }}
                className='bg-white rounded-3xl creative-border p-8 flex flex-col gap-4'
              >
                <div className={`w-16 h-16 rounded-full ${item.color} creative-border-sm flex items-center justify-center font-display font-black text-brand-dark text-sm shrink-0`}>
                  {item.year}
                </div>
                <h3 className='text-xl font-display font-bold uppercase tracking-tight text-brand-dark'>
                  {item.title}
                </h3>
                <p className='text-brand-dark/60 leading-relaxed text-sm'>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className='py-24 bg-brand-dark px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          >
            <h2 className='text-[clamp(1.8rem,5vw,5rem)] font-display font-black uppercase tracking-tighter text-white leading-none mb-6'>
              Ready to Build <br /><span className='text-brand-orange italic'>Something Real?</span>
            </h2>
            <p className='text-white/60 text-xl mb-10 max-w-xl mx-auto leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center w-full'>
                <Link to='/contact#work-with-us'>
                  <Button className='bg-brand-orange text-white hover:bg-brand-lavender rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest creative-border-sm creative-border-hover transition-colors flex items-center gap-2'>
                    Apply Now <ArrowRight className='w-5 h-5' />
                  </Button>
                </Link>
                <Link to='/services'>
                  <Button variant='outline' className='rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest border-white/30 text-white hover:bg-white hover:text-brand-dark hover:border-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-brand-dark dark:hover:border-white transition-colors'>
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
