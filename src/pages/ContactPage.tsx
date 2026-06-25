import Navbar from '@/layout/Navbar';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Clock, Instagram, Youtube, MessageSquare, Send, CalendarDays, CheckCircle2 } from 'lucide-react';
import { ApplicationForm } from '@/components/forms/ApplicationForm';
import { ContactForm } from '@/components/forms/ContactForm';
import { BookingForm } from '@/components/forms/BookingForm';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@4sixcreative.com',
    color: 'bg-brand-peach',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24–48 hours',
    color: 'bg-brand-lavender',
  },
  {
    icon: MessageSquare,
    label: 'Applications',
    value: 'Rolling — limited spots',
    color: 'bg-brand-green',
  },
];

const faqs = [
  {
    q: 'How does the application process work?',
    a: 'Fill out the form below. We review every submission and reach out within 48 hours to schedule a discovery call.',
  },
  {
    q: 'Do you work with brands outside the US?',
    a: 'Absolutely. We work with brands globally — social media has no borders.',
  },
  {
    q: 'What industries do you specialise in?',
    a: 'We work best with lifestyle, beauty, wellness, and personal brands — but great energy is our only real requirement.',
  },
  {
    q: 'Are spots always available?',
    a: 'We keep our roster intentionally small to give every client maximum attention. Availability is limited and changes monthly.',
  },
];

export default function ContactPage() {
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
            <div className='inline-block bg-brand-orange text-white border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-8 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Get In Touch
            </div>
            <h1 className='text-[clamp(2.5rem,8vw,7rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Let's Build <br /><span className='text-brand-orange italic'>Something</span> Real.
            </h1>
            <p className='text-xl md:text-2xl text-brand-dark/70 leading-relaxed max-w-2xl'>
              Ready to stop blending in? Fill out the application below and let's talk about what your brand is capable of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info Strip */}
      <section className='py-12 bg-brand-dark px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                className='flex items-center gap-4'
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} creative-border-sm flex items-center justify-center shrink-0`}>
                  <Icon className='w-6 h-6 text-brand-dark' />
                </div>
                <div>
                  <p className='text-white/50 text-xs font-bold uppercase tracking-widest mb-1'>{item.label}</p>
                  <p className='text-white font-bold text-lg leading-tight'>{item.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className='py-24 bg-white px-6'>
        <div className='max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mb-12 lg:mb-0'
          >
            <div className='inline-block bg-brand-peach text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-6 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Quick Message
            </div>
            <h2 className='text-[clamp(2.5rem,6vw,5rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Not Ready to <br /><span className='text-brand-orange italic'>Apply Yet?</span>
            </h2>
            <p className='text-xl text-brand-dark/70 leading-relaxed mb-10 max-w-lg'>
              Have a specific question or a unique inquiry? Drop us a message below and we'll get back to you shortly.
            </p>
            
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-xl bg-brand-lavender creative-border-sm flex items-center justify-center shrink-0'>
                  <Mail className='w-5 h-5 text-brand-dark' />
                </div>
                <div>
                  <p className='text-brand-dark/40 text-xs font-bold uppercase tracking-widest'>Email Address</p>
                  <p className='text-brand-dark font-bold text-lg'>hello@4sixcreative.com</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-xl bg-brand-lavender creative-border-sm flex items-center justify-center shrink-0'>
                  <Send className='w-5 h-5 text-brand-dark' />
                </div>
                <div>
                  <p className='text-brand-dark/40 text-xs font-bold uppercase tracking-widest'>Response Time</p>
                  <p className='text-brand-dark font-bold text-lg'>Within 24–48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className='py-24 bg-brand-light grid-bg px-6'>
        <div className='max-w-7xl mx-auto lg:grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mb-12 lg:mb-0'
          >
            <div className='inline-block bg-brand-green text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-6 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Book a Session
            </div>
            <h2 className='text-[clamp(2.5rem,6vw,5rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none mb-8'>
              Ready to <br /><span className='text-brand-orange italic font-display font-black uppercase'>Level Up?</span>
            </h2>
            <p className='text-xl text-brand-dark/70 leading-relaxed mb-10 max-w-lg'>
              Schedule a focused session with our team to audit your brand, refine your strategy, or plan your next big move.
            </p>
            
            <div className='space-y-6'>
              {[
                { icon: CalendarDays, label: 'Free 30-min session' },
                { icon: Clock, label: 'We come prepared' },
                { icon: CheckCircle2, label: 'No obligation' }
              ].map((item, i) => (
                <div key={i} className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-brand-lavender creative-border-sm flex items-center justify-center shrink-0'>
                    <item.icon className='w-5 h-5 text-brand-dark' />
                  </div>
                  <p className='text-brand-dark font-bold text-lg'>{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className='py-24 bg-brand-light grid-bg relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='text-center mb-16'>
            <div className='inline-block bg-brand-lavender text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full font-bold mb-6 text-sm tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]'>
              Application Form
            </div>
            <h2 className='text-[clamp(2.5rem,8vw,6rem)] text-brand-dark mb-6 font-serif italic tracking-tight leading-none'>
              Work With <span className='text-brand-orange'>Us.</span>
            </h2>
            <p className='text-brand-dark/60 text-lg max-w-xl mx-auto'>
              We review every application personally. Spots are limited — if you're ready, apply now.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* FAQ */}
      <section className='py-24 bg-white px-6'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            className='mb-16'
          >
            <h2 className='text-[clamp(2rem,5vw,4rem)] font-display font-black uppercase tracking-tighter text-brand-dark leading-none'>
              Quick <span className='text-brand-orange italic'>Answers</span>
            </h2>
          </motion.div>
          <div className='flex flex-col gap-4'>
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className='rounded-3xl bg-brand-light creative-border p-8'
              >
                <h3 className='text-lg font-display font-bold uppercase tracking-tight text-brand-dark mb-3'>
                  {faq.q}
                </h3>
                <p className='text-brand-dark/60 leading-relaxed'>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Strip */}
      <section className='py-16 bg-brand-dark px-6'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
          <div>
            <p className='text-white/50 text-sm font-bold uppercase tracking-widest mb-2'>Follow the Journey</p>
            <h3 className='text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight'>
              We're active on socials too.
            </h3>
          </div>
          <div className='flex gap-4'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center creative-border-sm creative-border-hover cursor-pointer'>
                <Instagram className='w-6 h-6 text-white' />
              </div>
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-14 h-14 rounded-2xl bg-brand-peach flex items-center justify-center creative-border-sm creative-border-hover cursor-pointer'>
                <Youtube className='w-6 h-6 text-brand-dark' />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
