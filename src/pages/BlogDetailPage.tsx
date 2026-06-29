import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, HelpCircle } from 'lucide-react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://public-api.wordpress.com/rest/v1.1/sites/4sixcreativevercel.wordpress.com/posts/slug:${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.ID) {
          setPost(data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blog post details:", err);
        setIsLoading(false);
      });
  }, [slug]);

  // Extract blog category from post categories
  const getCategory = () => {
    if (!post || !post.categories) return 'Strategy';
    const validCategories = ['Strategy', 'Design', 'Social Media', 'Case Studies'];
    const found = Object.keys(post.categories).find(catName =>
      validCategories.some(vc => vc.toLowerCase() === catName.toLowerCase())
    );
    return found ? found : 'Strategy';
  };

  // Calculate read time
  const getReadTime = () => {
    if (!post) return '5 min read';
    const plainText = post.content.replace(/<\/?[^>]+(>|$)/g, "").trim();
    const wordCount = plainText.split(/\s+/).length || 1;
    const readTimeNum = Math.ceil(wordCount / 200);
    return `${readTimeNum > 0 ? readTimeNum : 1} min read`;
  };

  return (
    <div className='min-h-screen bg-brand-light overflow-x-hidden relative'>
      {/* Global Paper Texture Overlay */}
      <div
        className="fixed inset-0 z-[100] pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}
      />
      
      <Navbar />

      <section className='pt-40 pb-24 px-6 bg-brand-light'>
        <div className='max-w-4xl mx-auto'>
          <Link to="/blog" className="inline-flex items-center gap-2 font-display font-bold uppercase text-sm tracking-widest text-brand-dark/60 hover:text-brand-orange transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back To Blog
          </Link>

          {isLoading ? (
            <div className="animate-pulse space-y-6">
              <div className="h-8 w-40 bg-brand-dark/10 rounded-full" />
              <div className="h-24 w-full bg-brand-dark/10 rounded-3xl" />
              <div className="h-96 w-full bg-brand-dark/10 rounded-3xl" />
            </div>
          ) : !post ? (
            <div className="text-center py-24 bg-white creative-border rounded-[2.5rem] flex flex-col items-center justify-center gap-4">
              <HelpCircle className="w-16 h-16 text-brand-dark/20" />
              <h2 className="text-3xl font-display font-black uppercase text-brand-dark">Article Not Found</h2>
              <p className="text-brand-dark/50 font-bold uppercase tracking-widest">We couldn't find the article you are looking for.</p>
              <Link to="/blog">
                <Button className="creative-border-sm creative-border-hover mt-4">Return to Blog</Button>
              </Link>
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white creative-border rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              {/* Header Image or Fallback Color */}
              {post.featured_image ? (
                <div className="aspect-[21/9] w-full overflow-hidden border-b-4 border-brand-dark">
                  <img 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-[21/9] w-full bg-brand-lavender border-b-4 border-brand-dark flex items-center justify-center">
                  <span className="font-display font-black text-brand-dark/20 text-[clamp(2rem,6vw,4rem)] uppercase tracking-tighter text-center px-8 leading-none">
                    {getCategory()}
                  </span>
                </div>
              )}

              {/* Main Content Area */}
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-brand-orange text-white border-brand-dark border-2">
                    {getCategory()}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-5xl font-display font-black uppercase leading-tight tracking-tight text-brand-dark mb-8">
                  {post.title}
                </h1>

                {/* Meta details */}
                <div className="flex flex-wrap gap-6 text-sm text-brand-dark/60 font-bold uppercase tracking-wider mb-8 pb-8 border-b-2 border-brand-dark/10">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {getReadTime()}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    By {post.author?.name || 'Troyia Monay'}
                  </span>
                </div>

                {/* Article Content */}
                <div 
                  className="prose max-w-none text-brand-dark/85 leading-relaxed text-base md:text-lg font-sans space-y-6 
                    [&_p]:mb-4 
                    [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-black [&_h2]:uppercase [&_h2]:text-brand-dark [&_h2]:mt-8 [&_h2]:mb-4
                    [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-black [&_h3]:uppercase [&_h3]:text-brand-dark [&_h3]:mt-6 [&_h3]:mb-3
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
                    [&_li]:mb-2
                    [&_strong]:font-bold [&_strong]:text-brand-dark
                    [&_a]:text-brand-orange [&_a]:underline [&_a]:font-bold
                    [&_blockquote]:border-l-4 [&_blockquote]:border-brand-orange [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-brand-dark/70 [&_blockquote]:my-6"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>
            </motion.article>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
