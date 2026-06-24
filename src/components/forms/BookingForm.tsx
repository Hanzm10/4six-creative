/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Calendar, Clock, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sessionType: 'Discovery Call',
    preferredDate: '',
    preferredTime: 'Morning 9am-12pm',
    timezone: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (err: any) {
      console.error('Booking error:', err);
      setError(err.message || 'Failed to book session. Please check your connection.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      sessionType: 'Discovery Call',
      preferredDate: '',
      preferredTime: 'Morning 9am-12pm',
      timezone: '',
      notes: ''
    });
    setStatus('idle');
    setError(null);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white creative-border rounded-[2rem] p-8 md:p-12 text-center text-brand-dark max-w-2xl mx-auto shadow-xl"
      >
        <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 creative-border-sm">
          <CheckCircle2 className="w-10 h-10 text-brand-dark" />
        </div>
        <h3 className="text-3xl font-display font-bold mb-4 uppercase">Booking Requested!</h3>
        <p className="text-brand-dark/70 mb-8 max-w-md mx-auto text-lg">
          Thanks for choosing us! We've received your booking request and will confirm with you within 24 hours.
        </p>
        <Button
          onClick={handleReset}
          className="bg-brand-dark text-white hover:bg-brand-orange rounded-full px-8 py-6 font-bold uppercase tracking-widest creative-border-sm creative-border-hover transition-all"
        >
          Book Another Session
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white creative-border rounded-[2rem] p-6 md:p-10 text-brand-dark max-w-3xl mx-auto shadow-2xl relative z-10">
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl mb-8 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="font-bold">{error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Full Name*</Label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors"
              placeholder="Jane Doe"
              disabled={status === 'loading'}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Email Address*</Label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors"
              placeholder="jane@example.com"
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Session Type*</Label>
          <div className="relative">
            <select
              required
              value={formData.sessionType}
              onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
              className="w-full bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors appearance-none cursor-pointer"
              disabled={status === 'loading'}
            >
              <option value="Discovery Call">Discovery Call</option>
              <option value="Strategy Session">Strategy Session</option>
              <option value="General Consultation">General Consultation</option>
              <option value="Brand Audit">Brand Audit</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark pointer-events-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Preferred Date*</Label>
            <div className="relative">
              <Input
                required
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors block"
                disabled={status === 'loading'}
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark pointer-events-none hidden md:block" />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Preferred Time*</Label>
            <div className="relative">
              <select
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors appearance-none cursor-pointer"
                disabled={status === 'loading'}
              >
                <option value="Morning 9am-12pm">Morning 9am-12pm</option>
                <option value="Afternoon 12pm-4pm">Afternoon 12pm-4pm</option>
                <option value="Evening 4pm-7pm">Evening 4pm-7pm</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark pointer-events-none" />
              <Clock className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark pointer-events-none hidden md:block" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Timezone*</Label>
          <Input
            required
            value={formData.timezone}
            onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
            className="bg-brand-orange/10 border-2 border-brand-dark text-brand-dark h-12 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors"
            placeholder="EST, PST, GMT, etc."
            disabled={status === 'loading'}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-brand-dark font-bold text-sm uppercase tracking-wider">Additional Notes (Optional)</Label>
          <Textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="bg-brand-orange/10 border-2 border-brand-dark text-brand-dark min-h-[120px] py-4 rounded-xl px-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-colors"
            placeholder="Tell us anything else we should know..."
            disabled={status === 'loading'}
          />
        </div>

        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand-dark text-white hover:bg-brand-orange rounded-full py-6 font-bold uppercase tracking-widest creative-border-sm creative-border-hover transition-all flex items-center justify-center gap-2 relative"
        >
          <AnimatePresence mode="wait">
            {status === 'loading' ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center"
              >
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                Book Session
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </form>
    </div>
  );
}
