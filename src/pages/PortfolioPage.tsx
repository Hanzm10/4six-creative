import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'happywithmeg Branding',
    category: 'Branding & Social',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.',
    img: 'https://instagram.fmnl17-6.fna.fbcdn.net/v/t51.82787-15/662495685_18149061682479036_8333921998436741835_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=109&ig_cache_key=Mzg3MzAwMjE2MzM4Nzc4MjU2OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=K9NvUF5kn8wQ7kNvwGmbZX7&_nc_oc=AdpCtYydAqxH9FZAXgxiqUltdxSIFT4kVrC-12A9_9fRuq0hQmQ01bYr1rW4ZlEP8fs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl17-6.fna&_nc_gid=isA7-3KSiXQdFAXqZExCuQ&_nc_ss=7a32e&oh=00_Af2bgp1SHM5r-bEPSHILUO_hqzzycpr8nTpMnn_9OygRpA&oe=69E564EF',
    color: 'bg-brand-lavender',
    fallbackColor: 'bg-brand-lavender',
  },
  {
    title: '#Mozination Campaign',
    category: 'Campaign Strategy',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.',
    img: 'https://instagram.fmnl17-3.fna.fbcdn.net/v/t51.82787-15/625257710_18123569827489369_8040625987422691498_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzAyODY5Nzk3MjI3MDgxMTgwNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=ijbrQOE4sSYQ7kNvwGmbZX7&_nc_oc=Adpp2HOMFXy2dMRs7i91y_I757RbJmkqHoVuIGdq8gXNQRH4nf-HTZ3DAM6V5xSPKMA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl17-3.fna&_nc_gid=BddqFSebmAUXWFpFNAG2eA&_nc_ss=7a32e&oh=00_Af2wroqV2qRU2ZOjJJma5h69UxzWMPpHxkNqj1KU4oXXuQ&oe=69E53B75',
    color: 'bg-brand-green',
    fallbackColor: 'bg-brand-green',
  },
  {
    title: 'Lifestyle Brand Launch',
    category: 'Full-Service Management',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididu.',
    img: '',
    color: 'bg-brand-peach',
    fallbackColor: 'bg-brand-peach',
  },
  {
    title: 'Reels Growth Sprint',
    category: 'Reels & Video',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.',
    img: '',
    color: 'bg-brand-orange',
    fallbackColor: 'bg-brand-orange',
  },
  {
    title: 'E-commerce Ad Campaign',
    category: 'Performance Ads',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididu.',
    img: '',
    color: 'bg-brand-lavender',
    fallbackColor: 'bg-brand-lavender',
  },
  {
    title: 'Creator Influencer Push',
    category: 'Influencer Outreach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.',
    img: '',
    color: 'bg-brand-green',
    fallbackColor: 'bg-brand-green',
  },
];

const categories = ['All', 'Branding & Social', 'Campaign Strategy', 'Full-Service Management', 'Reels & Video', 'Performance Ads', 'Influencer Outreach'];

const stats = [
  { value: '50+', label: 'Brands Worked With' },
  { value: '2.4M+', label: 'Impressions Generated' },
  { value: '4.2x', label: 'Average ROAS' },
  { value: '98%', label: 'Client Retention' },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.15 }}
      transition={{ delay: (idx % 3) * 0.1 }}
      className='group relative creative-border rounded-[2.5rem] overflow-hidden bg-white cursor-pointer'
    >
      <div className='aspect-[4/3] overflow-hidden'>
        {project.img && !imgError ? (
          <img
            src={project.img}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
            referrerPolicy='no-referrer'
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full ${project.fallbackColor} flex items-center justify-center`}>
            <span className='font-display font-black text-brand-dark/30 text-[clamp(2rem,6vw,4rem)] uppercase tracking-tighter text-center px-6 leading-none'>
              {project.title}
            </span>
          </div>
        )}
      </div>
      <div className='p-6 md:p-8 border-t-4 border-brand-dark flex justify-between items-center group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300'>
        <div className='flex-1 pr-4'>
          <Badge className={`${project.color} text-brand-dark mb-2 border-brand-dark`}>{project.category}</Badge>
          <h3 className='text-xl md:text-2xl font-display font-bold uppercase leading-tight'>{project.title}</h3>
          <p className='text-sm text-brand-dark/60 group-hover:text-white/60 mt-1 leading-relaxed'>{project.desc}</p>
        </div>
        <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-orange text-white flex items-center justify-center creative-border-sm group-hover:rotate-45 transition-transform duration-300 shrink-0'>
          <ArrowRight className='w-5 h-5 md:w-7 md:h-7' />
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
            <div className='inline-block bg-brand-green text-white border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-8 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Our Work
            </div>
            <h1 className='text-[clamp(2.5rem,8vw,7rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Impactful <br /><span className='text-brand-orange italic'>Results.</span>
            </h1>
            <p className='text-xl md:text-2xl text-brand-dark/70 leading-relaxed max-w-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna liqua.
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

      {/* Filter + Grid */}
      <section className='py-24 bg-white px-6'>
        <div className='max-w-7xl mx-auto'>

          {/* Filter Tabs */}
          <div className='flex flex-wrap gap-3 mb-16'>
            {categories.map((cat) => (
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
          <motion.div
            layout
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
          >
            {filtered.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className='text-center py-24 text-brand-dark/40 font-display font-bold text-2xl uppercase'>
              No projects in this category yet.
            </div>
          )}
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
              Want to Be <br /><span className='text-brand-orange italic'>On This Page?</span>
            </h2>
            <p className='text-white/60 text-xl mb-10 max-w-xl mx-auto leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.
            </p>
            <Link to='/contact#work-with-us'>
              <Button className='bg-brand-orange text-white hover:bg-brand-lavender rounded-full px-10 py-6 text-lg font-bold uppercase tracking-widest creative-border-sm creative-border-hover transition-colors flex items-center gap-2 mx-auto'>
                Apply Now <ArrowRight className='w-5 h-5' />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
