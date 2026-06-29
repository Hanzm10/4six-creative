import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock, HelpCircle } from 'lucide-react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogPosts, type BlogPost, type BlogCategory } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

const filterCategories: ('All' | BlogCategory)[] = ['All', 'Strategy', 'Design', 'Social Media', 'Case Studies'];

function BlogPostCard({ post, idx }: { post: BlogPost; idx: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: (idx % 3) * 0.1 }}
        whileHover={{ y: -5 }}
        className='group creative-border rounded-[2rem] overflow-hidden bg-white flex flex-col cursor-pointer h-full'
      >
        <div className={cn('aspect-[16/10] overflow-hidden', post.fallbackColor)}>
          {post.img && !imgError ? (
            <img
              src={post.img}
              alt={post.title}
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={cn(
              'w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105',
              post.fallbackColor
            )}>
              <span className='font-display font-black text-brand-dark/20 text-[clamp(1.5rem,4vw,3rem)] uppercase tracking-tighter text-center px-6 leading-none'>
                {post.category}
              </span>
            </div>
          )}
        </div>
        <div className='p-6 flex flex-col gap-3 border-t-4 border-brand-dark flex-1'>
          <Badge className={cn(post.fallbackColor, 'border-brand-dark text-brand-dark border-2 w-fit')}>
            {post.category}
          </Badge>
          <h3 className='text-xl font-display font-bold uppercase leading-tight tracking-tight line-clamp-2'>
            {post.title}
          </h3>
          <p className='text-sm text-brand-dark/60 leading-relaxed flex-1'>{post.excerpt}</p>
          <div className='flex items-center justify-between pt-2 border-t border-brand-dark/10 mt-auto'>
            <span className='text-xs font-bold uppercase tracking-widest text-brand-dark/50'>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className='inline-flex items-center gap-1.5 text-brand-orange font-bold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all'>
              Read More <ArrowRight className='w-3.5 h-3.5' />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | BlogCategory>('All');
  const [postsList, setPostsList] = useState<BlogPost[]>(blogPosts);
  const [featuredImgError, setFeaturedImgError] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    fetch('https://public-api.wordpress.com/rest/v1.1/sites/4sixcreativevercel.wordpress.com/posts?category=blog')
      .then(res => res.json())
      .then(data => {
        if (data.posts && data.posts.length > 0) {
          const colors = ['bg-brand-lavender', 'bg-brand-peach', 'bg-brand-green', 'bg-brand-orange'];
          const validCategories: BlogCategory[] = ['Strategy', 'Design', 'Social Media', 'Case Studies'];

          const items = data.posts.map((post: any, index: number) => {
            let category: BlogCategory = 'Strategy';
            
            // Map category
            if (post.categories) {
              const matched = Object.keys(post.categories).find(catName =>
                validCategories.some(vc => vc.toLowerCase() === catName.toLowerCase())
              );
              if (matched) {
                category = validCategories.find(vc => vc.toLowerCase() === matched.toLowerCase())!;
              }
            }
            
            // Calculate read time
            const plainTextContent = post.content.replace(/<\/?[^>]+(>|$)/g, "").trim();
            const wordCount = plainTextContent.split(/\s+/).length || 1;
            const readTimeNum = Math.ceil(wordCount / 200);
            const readTime = `${readTimeNum > 0 ? readTimeNum : 1} min read`;

            return {
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt.replace(/<\/?[^>]+(>|$)/g, "").trim(),
              category: category,
              date: post.date,
              readTime: readTime,
              author: post.author?.name || 'Troyia Monay',
              fallbackColor: colors[index % colors.length],
              featured: post.sticky === true,
              img: post.featured_image || ''
            };
          });

          // If no sticky post is found, designate the first post as featured
          const hasFeatured = items.some((item: any) => item.featured);
          if (!hasFeatured && items.length > 0) {
            items[0].featured = true;
          }

          setPostsList(items);
        }
      })
      .catch(err => console.error("Error fetching blog posts from WordPress:", err));
  }, []);

  const featured = postsList.find(p => p.featured);
  const visible = activeFilter === 'All'
    ? postsList
    : postsList.filter(p => p.category === activeFilter);

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
            <div className='inline-block bg-brand-peach text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-8 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Creative Notes
            </div>
            <h1 className='text-[clamp(2.5rem,8vw,7rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Creative <br /><span className='text-brand-orange italic'>Notes.</span>
            </h1>
            <p className='text-xl md:text-2xl text-brand-dark/70 leading-relaxed max-w-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className='py-16 bg-white px-6'>
          <div className='max-w-7xl mx-auto'>
            <Link to={`/blog/${featured.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-2 creative-border rounded-[2.5rem] overflow-hidden group cursor-pointer'
              >
                {/* Color block */}
                <div className={cn('aspect-[4/3] lg:aspect-auto min-h-[300px] overflow-hidden', featured.fallbackColor)}>
                  {featured.img && !featuredImgError ? (
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                      onError={() => setFeaturedImgError(true)}
                    />
                  ) : (
                    <div className={cn(
                      'w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105',
                      featured.fallbackColor
                    )}>
                      <span className='font-display font-black text-brand-dark/20 text-[clamp(2rem,6vw,5rem)] uppercase tracking-tighter text-center px-8 leading-none'>
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className='p-8 md:p-12 flex flex-col justify-center gap-5 bg-brand-light'>
                  <div className='flex flex-wrap gap-2'>
                    <Badge className='bg-brand-orange text-white border-brand-dark border-2'>Featured</Badge>
                    <Badge className={cn(featured.fallbackColor, 'text-brand-dark border-brand-dark border-2')}>
                      {featured.category}
                    </Badge>
                  </div>
                  <h2 className='text-[clamp(1.8rem,4vw,3rem)] font-display font-black uppercase leading-none tracking-tight'>
                    {featured.title}
                  </h2>
                  <p className='text-brand-dark/70 leading-relaxed text-lg'>{featured.excerpt}</p>
                  <div className='flex flex-wrap gap-4 text-xs text-brand-dark/50 font-bold uppercase tracking-widest'>
                    <span className='inline-flex items-center gap-1.5'>
                      <Calendar className='w-3.5 h-3.5' />
                      {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className='inline-flex items-center gap-1.5'>
                      <Clock className='w-3.5 h-3.5' />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className='inline-flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-widest group-hover:gap-3 transition-all w-fit'>
                    Read More <ArrowRight className='w-4 h-4' />
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className='py-24 bg-brand-light px-6 grid-bg'>
        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-[clamp(2rem,5vw,4rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'
          >
            All Posts
          </motion.h2>

          {/* Filter Pills */}
          <div className='flex flex-wrap gap-3 mb-12'>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm uppercase tracking-widest border-2 border-brand-dark transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-brand-dark text-white shadow-[3px_3px_0px_rgba(26,26,26,1)]'
                    : 'bg-white text-brand-dark hover:bg-brand-light shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:shadow-[3px_3px_0px_rgba(26,26,26,1)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {visible.map((post, idx) => (
              <BlogPostCard key={post.slug} post={post} idx={idx} />
            ))}
          </motion.div>

          {visible.length === 0 && (
            <div className='text-center py-24 flex flex-col items-center gap-4'>
              <HelpCircle className='w-12 h-12 text-brand-dark/30' />
              <p className='text-brand-dark/40 font-display font-bold text-2xl uppercase'>
                No posts in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Band */}
      <section className='py-24 bg-brand-dark px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            className='flex flex-col items-center gap-6'
          >
            <h2 className='text-[clamp(1.8rem,5vw,5rem)] font-display font-black uppercase tracking-tighter text-white leading-none'>
              Have a <span className='text-brand-orange italic'>Question?</span>
              <br />Let's Build Together.
            </h2>
            <p className='text-white/60 text-xl max-w-xl leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Link to='/contact#work-with-us'>
                <Button className='bg-brand-orange text-white hover:bg-brand-peach rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest creative-border-sm creative-border-hover transition-colors flex items-center gap-2'>
                  Work With Us <ArrowRight className='w-5 h-5' />
                </Button>
              </Link>
              <Link to='/faq'>
                <Button variant='outline' className='rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest border-white/30 text-white hover:bg-white hover:text-brand-dark hover:border-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-brand-dark dark:hover:border-white transition-colors'>
                  Browse FAQ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
