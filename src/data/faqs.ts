export type FAQCategory = 'General' | 'Services' | 'Pricing' | 'Process' | 'Results';

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}

export const faqCategories: FAQCategory[] = ['General', 'Services', 'Pricing', 'Process', 'Results'];

export const faqs: FAQItem[] = [
  // General
  {
    id: 'general-1',
    category: 'General',
    question: 'Who is 4SIX CREATIVE?',
    answer: 'We\'re a social media marketing agency run by Troyia Monay — built on the belief that brands deserve more than templated posts and recycled strategies. We bring corporate-level precision and real creative energy to every client we work with.',
  },
  {
    id: 'general-2',
    category: 'General',
    question: 'Who do you typically work with?',
    answer: 'We work with personal brands, small businesses, lifestyle creators, and e-commerce brands who are serious about growing their social presence. Our sweet spot is clients who already have a brand voice — they just need the execution muscle to scale it.',
  },
  {
    id: 'general-3',
    category: 'General',
    question: 'Do you work with brands outside the US?',
    answer: 'Yes — we work with clients globally. As long as you\'re active on major platforms (Instagram, TikTok, YouTube, LinkedIn, etc.) and can communicate in English, location isn\'t a barrier for us.',
  },
  {
    id: 'general-4',
    category: 'General',
    question: 'How are you different from other agencies?',
    answer: 'Most agencies hand you a strategy deck and a junior coordinator. We stay in the work — every piece of content, every campaign, every result has our fingerprints on it. We don\'t outsource your brand to someone who doesn\'t know it.',
  },
  {
    id: 'general-5',
    category: 'General',
    question: 'Can I work with you if I\'m just starting out?',
    answer: 'Absolutely. Some of our best results have come from brands we helped build from the ground up. If you have a clear vision and you\'re committed to the process, we can help you find your audience and grow fast.',
  },

  // Services
  {
    id: 'services-1',
    category: 'Services',
    question: 'Which platforms do you manage?',
    answer: 'We specialize in Instagram, TikTok, and YouTube — but we also support Facebook, LinkedIn, and Pinterest depending on your goals. We focus on the platforms that actually move the needle for your specific audience.',
  },
  {
    id: 'services-2',
    category: 'Services',
    question: 'Do you create the content too, or just manage it?',
    answer: 'Both, depending on your package. We offer full-service management that includes content creation (graphics, copy, Reels editing) as well as management-only plans where you supply the raw content and we handle everything else.',
  },
  {
    id: 'services-3',
    category: 'Services',
    question: 'Do you handle paid ads?',
    answer: 'Yes — we run Meta (Instagram + Facebook) ad campaigns as an add-on to our management packages. We handle strategy, creative, audience targeting, and reporting. Ad spend is billed separately to your account.',
  },
  {
    id: 'services-4',
    category: 'Services',
    question: 'Do you offer one-off projects or only retainers?',
    answer: 'Our core offering is monthly retainers, because consistent strategy produces the best results. We do occasionally take on one-off projects like brand audits, content shoots, or campaign launches — reach out and we\'ll let you know if we can fit it in.',
  },
  {
    id: 'services-5',
    category: 'Services',
    question: 'Can I bundle Reels editing with management?',
    answer: 'Yes — Reels and short-form video editing is one of our most popular add-ons. We can take your raw footage and turn it into scroll-stopping content, or we can handle the full production end-to-end.',
  },

  // Pricing
  {
    id: 'pricing-1',
    category: 'Pricing',
    question: 'How much does it cost?',
    answer: 'Our packages start at a flat monthly rate and scale based on platforms, content volume, and services included. We don\'t publish prices publicly because we build custom scopes — fill out our application and we\'ll send you a tailored proposal.',
  },
  {
    id: 'pricing-2',
    category: 'Pricing',
    question: 'Do you require long-term contracts?',
    answer: 'We work on 3-month minimum engagements because that\'s the honest timeline for seeing real social media results. After the initial period, we move to monthly rolling agreements so you\'re never locked in longer than you want to be.',
  },
  {
    id: 'pricing-3',
    category: 'Pricing',
    question: 'What\'s included in a starter package?',
    answer: 'Starter packages typically include strategy development, content calendar, a set number of posts per week, community management, and a monthly analytics report. Exact deliverables are scoped per client based on your goals and platforms.',
  },
  {
    id: 'pricing-4',
    category: 'Pricing',
    question: 'Are there setup or onboarding fees?',
    answer: 'There\'s a one-time onboarding fee that covers the brand audit, strategy session, and getting everything set up on our end. We\'re upfront about this in our proposals — no surprise charges.',
  },
  {
    id: 'pricing-5',
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Our monthly retainer structure is already a form of payment plan. For larger projects or campaign budgets, we can sometimes work out a split-payment arrangement. Talk to us during onboarding and we\'ll figure out what works.',
  },

  // Process
  {
    id: 'process-1',
    category: 'Process',
    question: 'What does onboarding look like?',
    answer: 'After you\'re accepted as a client, we kick off with a brand deep-dive session — we learn your voice, audience, goals, and what\'s worked before. From there we build your first content calendar and get approval before anything goes live.',
  },
  {
    id: 'process-2',
    category: 'Process',
    question: 'How quickly do you respond to messages?',
    answer: 'During business hours (Monday–Friday, 9am–6pm EST), we typically respond within a few hours. We have a dedicated communication channel for each client so nothing falls through the cracks.',
  },
  {
    id: 'process-3',
    category: 'Process',
    question: 'How often do we have strategy calls?',
    answer: 'We do a monthly strategy check-in as a standard — more frequent calls are available on higher-tier plans. In between calls, you have async access to your account manager through your client portal.',
  },
  {
    id: 'process-4',
    category: 'Process',
    question: 'How does content approval work?',
    answer: 'We send content batches for review on a set schedule (usually weekly or bi-weekly). You have 48 hours to approve, request edits, or reject. We don\'t post anything without your sign-off.',
  },
  {
    id: 'process-5',
    category: 'Process',
    question: 'Can I see my analytics and reports?',
    answer: 'Yes — every client gets a monthly performance report with the metrics that matter to your goals. We also give you access to a live dashboard so you can check in on performance between reports.',
  },

  // Results
  {
    id: 'results-1',
    category: 'Results',
    question: 'How long until I see results?',
    answer: 'Honestly — 60 to 90 days for meaningful traction. The first month is setup and foundation. By month two you start seeing what\'s working. Month three is where things usually click and growth compounds.',
  },
  {
    id: 'results-2',
    category: 'Results',
    question: 'What metrics do you track?',
    answer: 'It depends on your goals, but core metrics include reach, impressions, engagement rate, follower growth, website clicks, and story views. For ad clients, we also track ROAS, CPC, CPM, and conversion rate.',
  },
  {
    id: 'results-3',
    category: 'Results',
    question: 'Do you guarantee follower growth?',
    answer: 'We don\'t guarantee specific follower counts — no ethical agency should. What we do guarantee is consistent, strategic content that grows the right audience for your brand. Vanity metrics don\'t pay the bills; engaged communities do.',
  },
  {
    id: 'results-4',
    category: 'Results',
    question: 'What\'s a realistic ROAS for ads?',
    answer: 'Our clients average around 4x ROAS on Meta campaigns after the first 60 days of optimization. Early results vary — the first few weeks are learning phase. We don\'t spend aggressively until the data tells us what to scale.',
  },
  {
    id: 'results-5',
    category: 'Results',
    question: 'What happens if I\'m not happy with the work?',
    answer: 'We have a revision process built into every deliverable. If something isn\'t right, we fix it — that\'s the job. If there\'s a deeper misalignment, we\'ll have a real conversation about it. We\'d rather solve the problem than lose a client.',
  },
];
