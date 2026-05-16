/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

export function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    location: '',
    platforms: [] as string[],
    handles: '',
    struggles: '',
    goals: '',
    support: [] as string[],
    budget: '',
    timeline: ''
  });

  const steps = [
    { num: 1, label: 'BASIC INFO' },
    { num: 2, label: 'SOCIAL MEDIA' },
    { num: 3, label: 'GOALS' },
    { num: 4, label: 'SUPPORT' }
  ];

  const handleNext = () => setStep(s => Math.min(4, s + 1));
  const handleBack = () => setStep(s => Math.max(1, s - 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setStep(1);
    }, 5000);
  };

  const updateData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'platforms' | 'support', item: string) => {
    setFormData(prev => {
      const arr = prev[field];
      if (arr.includes(item)) {
        return { ...prev, [field]: arr.filter(i => i !== item) };
      } else {
        return { ...prev, [field]: [...arr, item] };
      }
    });
  };

  if (formSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='bg-white creative-border rounded-3xl p-6 sm:p-12 text-center text-brand-dark max-w-3xl mx-auto'
      >
        <div className='w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 creative-border-sm'>
          <CheckCircle2 className='w-10 h-10 text-brand-dark' />
        </div>
        <h3 className='text-2xl sm:text-3xl font-display font-bold mb-4 uppercase'>Application Received!</h3>
        <p className='text-brand-dark/70 mb-8 max-w-md mx-auto text-lg'>
          Our team is reviewing your application. We will reach out within 24-48 hours with next steps.
        </p>
        <Button
          variant='outline'
          onClick={() => setFormSubmitted(false)}
          className='creative-border creative-border-hover bg-brand-light text-brand-dark px-8 py-6 rounded-full font-bold uppercase tracking-widest'
        >
          Submit Another Application
        </Button>
      </motion.div>
    );
  }

  return (
    <div className='bg-white creative-border rounded-[2rem] p-4 sm:p-6 md:p-12 text-brand-dark max-w-4xl mx-auto shadow-2xl relative z-10'>
      <div className='flex items-center justify-between mb-16 sm:mb-20 relative'>
        {steps.map((s, index) => (
          <React.Fragment key={s.num}>
            <div className='relative flex flex-col items-center justify-center z-10'>
              <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 border-2 ${step > s.num ? 'bg-brand-dark text-white border-brand-dark' : step === s.num ? 'bg-brand-lavender text-brand-dark border-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]' : 'bg-brand-light text-brand-dark/40 border-brand-dark/20'}`}>
                {step > s.num ? <CheckCircle2 className='w-5 h-5' /> : s.num}
              </div>
              <span className={`absolute top-14 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center w-24 hidden sm:block ${step >= s.num ? 'text-brand-dark' : 'text-brand-dark/40'}`}>
                {s.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className='flex-1 h-[2px] bg-brand-dark/10 mx-2 sm:mx-4 relative z-0 rounded-full overflow-hidden'>
                <div
                  className='absolute left-0 top-0 bottom-0 bg-brand-orange transition-all duration-500'
                  style={{ width: step > s.num ? '100%' : '0%' }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className='space-y-8 min-h-[300px]'
          >
            {step === 1 && (
              <div className='space-y-4 md:space-y-6'>
                <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>First and Last Name*</Label>
                    <Input required value={formData.name} onChange={e => updateData('name', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='Jane Doe' />
                  </div>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Business Name (If Applicable)</Label>
                    <Input value={formData.businessName} onChange={e => updateData('businessName', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder="Jane's Boutique" />
                  </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Business Email Address*</Label>
                    <Input type='email' required value={formData.email} onChange={e => updateData('email', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='jane@example.com' />
                  </div>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Phone Number*</Label>
                    <Input type='tel' required value={formData.phone} onChange={e => updateData('phone', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='(555) 000-0000' />
                  </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Website Link</Label>
                    <Input type='url' value={formData.website} onChange={e => updateData('website', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='https://...' />
                  </div>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Where are you located?*</Label>
                    <Input required value={formData.location} onChange={e => updateData('location', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='City, State' />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className='space-y-5 md:space-y-8'>
                <div className='space-y-4'>
                  <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Which social media platforms are you currently using?*</Label>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    {['Instagram', 'Facebook', 'TikTok', 'YouTube', 'LinkedIn', 'Pinterest', 'Other'].map(platform => (
                      <label key={platform} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.platforms.includes(platform) ? 'bg-brand-lavender border-brand-dark text-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] -translate-y-0.5' : 'bg-brand-light border-brand-dark/20 text-brand-dark/70 hover:border-brand-dark/50'}`}>
                        <input type='checkbox' className='hidden' checked={formData.platforms.includes(platform)} onChange={() => toggleArrayItem('platforms', platform)} />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${formData.platforms.includes(platform) ? 'bg-brand-dark border-brand-dark' : 'border-brand-dark/30 bg-white'}`}>
                          {formData.platforms.includes(platform) && <CheckCircle2 className='w-3 h-3 text-white' />}
                        </div>
                        <span className='font-bold'>{platform}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Social Media Handles*</Label>
                  <Textarea required value={formData.handles} onChange={e => updateData('handles', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-3 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='@yourhandle on IG, etc.' />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className='space-y-5 md:space-y-8'>
                <div className='space-y-2'>
                  <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>What are your current struggles or frustrations with social media?*</Label>
                  <Textarea required value={formData.struggles} onChange={e => updateData('struggles', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-3 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='Tell us what is not working...' />
                </div>
                <div className='space-y-2'>
                  <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>What goals do you have for your social media over the next 3-6 months?*</Label>
                  <Textarea required value={formData.goals} onChange={e => updateData('goals', e.target.value)} className='bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-3 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors' placeholder='More leads, brand awareness, etc.' />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className='space-y-5 md:space-y-8'>
                <div className='space-y-4'>
                  <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>What level of support are you looking for?*</Label>
                  <div className='grid gap-3'>
                    {[
                      'Full-service social media management',
                      'Content creation (photo, video, UGC)',
                      'Reels & short-form video editing',
                      'Strategy & monthly planning',
                      'Influencer outreach'
                    ].map(support => (
                      <label key={support} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.support.includes(support) ? 'bg-brand-peach border-brand-dark text-brand-dark shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] -translate-y-0.5' : 'bg-brand-light border-brand-dark/20 text-brand-dark/70 hover:border-brand-dark/50'}`}>
                        <input type='checkbox' className='hidden' checked={formData.support.includes(support)} onChange={() => toggleArrayItem('support', support)} />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${formData.support.includes(support) ? 'bg-brand-dark border-brand-dark' : 'border-brand-dark/30 bg-white'}`}>
                          {formData.support.includes(support) && <CheckCircle2 className='w-3 h-3 text-white' />}
                        </div>
                        <span className='font-bold'>{support}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4 md:gap-6'>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>Monthly Budget*</Label>
                    <div className='relative'>
                      <select required value={formData.budget} onChange={e => updateData('budget', e.target.value)} className='w-full bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 pr-10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none appearance-none transition-colors'>
                        <option value='' disabled>Select a budget</option>
                        <option value='$1,500 - $2,500'>$1,500 - $2,500</option>
                        <option value='$2,500 - $5,000'>$2,500 - $5,000</option>
                        <option value='$5,000+'>$5,000+</option>
                      </select>
                      <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark pointer-events-none' />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label className='text-brand-dark font-bold text-sm uppercase tracking-wider'>When to get started?*</Label>
                    <div className='relative'>
                      <select required value={formData.timeline} onChange={e => updateData('timeline', e.target.value)} className='w-full bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 pr-10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none appearance-none transition-colors'>
                        <option value='' disabled>Select timeline</option>
                        <option value='ASAP'>ASAP</option>
                        <option value='In 2-4 weeks'>In 2-4 weeks</option>
                        <option value='In 1-2 Months'>In 1-2 Months</option>
                        <option value='Just exploring now'>Just exploring now</option>
                      </select>
                      <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark pointer-events-none' />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className='flex items-center justify-between mt-12 pt-8 border-t-2 border-brand-dark/10'>
          {step > 1 ? (
            <Button type='button' variant='ghost' onClick={handleBack} className='text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5 rounded-full px-6 font-bold uppercase tracking-widest'>
              Back
            </Button>
          ) : <div></div>}
          <Button type='submit' className='bg-brand-dark text-white hover:bg-brand-orange rounded-full px-6 py-4 md:px-8 md:py-6 font-bold uppercase tracking-widest transition-colors creative-border-sm creative-border-hover flex items-center'>
            {step === 4 ? 'Submit Application' : 'Next Step'} <ArrowRight className='ml-2 w-5 h-5' />
          </Button>
        </div>
      </form>
    </div>
  );
}
