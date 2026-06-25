import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, HelpCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { faqs, faqCategories, type FAQCategory } from '@/data/faqs';
import { cn } from '@/lib/utils';

const categoryColors: Record<FAQCategory, string> = {
  General: 'bg-brand-lavender',
  Services: 'bg-brand-peach',
  Pricing: 'bg-brand-green',
  Process: 'bg-brand-orange',
  Results: 'bg-brand-lavender',
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | FAQCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const visibleFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return faqs.filter(f => {
      const matchCat = activeCategory === 'All' || f.category === activeCategory;
      const matchSearch = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const showGrouped = activeCategory === 'All' && !searchQuery.trim();

  return (
    <div className='min-h-screen bg-brand-light overflow-x-hidden'>
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
            <div className='inline-block bg-brand-lavender text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-8 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Frequently Asked
            </div>
            <h1 className='text-[clamp(2.5rem,8vw,7rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Got <br /><span className='text-brand-orange italic'>Questions?</span>
            </h1>
            <p className='text-xl md:text-2xl text-brand-dark/70 leading-relaxed max-w-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Accordion */}
      <section className='py-16 md:py-24 bg-white px-6'>
        <div className='max-w-4xl mx-auto'>

          {/* Search */}
          <div className='relative mb-8'>
            <Search className='absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/40 pointer-events-none' />
            <input
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder='Search questions...'
              className='w-full pl-14 pr-6 h-14 rounded-full bg-brand-light border-2 border-brand-dark text-brand-dark text-base focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange shadow-[3px_3px_0px_rgba(26,26,26,1)] transition-all'
            />
          </div>

          {/* Category Filter Pills */}
          <div className='flex flex-wrap gap-3 mb-12'>
            {(['All', ...faqCategories] as ('All' | FAQCategory)[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm uppercase tracking-widest border-2 border-brand-dark transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-dark text-white shadow-[3px_3px_0px_rgba(26,26,26,1)]'
                    : 'bg-brand-light text-brand-dark hover:bg-white shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:shadow-[3px_3px_0px_rgba(26,26,26,1)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion — grouped or flat */}
          {visibleFaqs.length === 0 ? (
            <div className='text-center py-24 flex flex-col items-center gap-4'>
              <HelpCircle className='w-12 h-12 text-brand-dark/30' />
              <p className='text-brand-dark/40 font-display font-bold text-2xl uppercase'>
                No questions match your search.
              </p>
            </div>
          ) : showGrouped ? (
            faqCategories.map((cat) => {
              const catFaqs = visibleFaqs.filter(f => f.category === cat);
              if (catFaqs.length === 0) return null;
              return (
                <div key={cat} className='mb-12'>
                  <div className='flex items-center gap-3 mb-6'>
                    <span className={cn(
                      'inline-block px-4 py-1.5 rounded-2xl font-display font-bold text-sm uppercase tracking-widest text-brand-dark border-2 border-brand-dark shadow-[2px_2px_0px_rgba(26,26,26,1)]',
                      categoryColors[cat]
                    )}>
                      {cat}
                    </span>
                  </div>
                  <FAQAccordionList items={catFaqs} />
                </div>
              );
            })
          ) : (
            <FAQAccordionList items={visibleFaqs} />
          )}
        </div>
      </section>

      {/* CTA Band */}
      <section className='py-24 bg-brand-orange px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            className='flex flex-col items-center gap-6'
          >
            <h2 className='text-[clamp(1.8rem,5vw,5rem)] font-display font-black uppercase tracking-tighter text-white leading-none'>
              Still Have <br /><span className='italic'>Questions?</span>
            </h2>
            <p className='text-white/80 text-xl max-w-xl leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <Link to='/contact'>
              <Button className='bg-white text-brand-dark hover:bg-brand-dark hover:text-white rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest creative-border-sm transition-all flex items-center gap-2'>
                Contact Us <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FAQAccordionList({ items }: { items: typeof faqs }) {
  return (
    <Accordion>
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: (idx % 6) * 0.05 }}
          className='mb-3'
        >
          <AccordionItem
            value={item.id}
            className='bg-brand-light creative-border-sm rounded-2xl overflow-hidden border-b-0'
          >
            <AccordionTrigger className='px-6 py-4 text-base md:text-lg font-display font-bold uppercase tracking-tight text-brand-dark text-left hover:no-underline hover:text-brand-orange transition-colors'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='px-6 pb-5 pt-1 text-brand-dark/70 leading-relaxed text-base'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
