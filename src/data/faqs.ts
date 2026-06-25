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
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut',
  },
  {
    id: 'general-2',
    category: 'General',
    question: 'Who do you typically work with?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
  },
  {
    id: 'general-3',
    category: 'General',
    question: 'Do you work with brands outside the US?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    id: 'general-4',
    category: 'General',
    question: 'How are you different from other agencies?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
  },
  {
    id: 'general-5',
    category: 'General',
    question: 'Can I work with you if I\'m just starting out?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e',
  },

  // Services
  {
    id: 'services-1',
    category: 'Services',
    question: 'Which platforms do you manage?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
  },
  {
    id: 'services-2',
    category: 'Services',
    question: 'Do you create the content too, or just manage it?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons',
  },
  {
    id: 'services-3',
    category: 'Services',
    question: 'Do you handle paid ads?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
  },
  {
    id: 'services-4',
    category: 'Services',
    question: 'Do you offer one-off projects or only retainers?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do',
  },
  {
    id: 'services-5',
    category: 'Services',
    question: 'Can I bundle Reels editing with management?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },

  // Pricing
  {
    id: 'pricing-1',
    category: 'Pricing',
    question: 'How much does it cost?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute',
  },
  {
    id: 'pricing-2',
    category: 'Pricing',
    question: 'Do you require long-term contracts?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa',
  },
  {
    id: 'pricing-3',
    category: 'Pricing',
    question: 'What\'s included in a starter package?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis',
  },
  {
    id: 'pricing-4',
    category: 'Pricing',
    question: 'Are there setup or onboarding fees?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo',
  },
  {
    id: 'pricing-5',
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co',
  },

  // Process
  {
    id: 'process-1',
    category: 'Process',
    question: 'What does onboarding look like?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui',
  },
  {
    id: 'process-2',
    category: 'Process',
    question: 'How quickly do you respond to messages?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo',
  },
  {
    id: 'process-3',
    category: 'Process',
    question: 'How often do we have strategy calls?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u',
  },
  {
    id: 'process-4',
    category: 'Process',
    question: 'How does content approval work?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la',
  },
  {
    id: 'process-5',
    category: 'Process',
    question: 'Can I see my analytics and reports?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n',
  },

  // Results
  {
    id: 'results-1',
    category: 'Results',
    question: 'How long until I see results?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
  },
  {
    id: 'results-2',
    category: 'Results',
    question: 'What metrics do you track?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu',
  },
  {
    id: 'results-3',
    category: 'Results',
    question: 'Do you guarantee follower growth?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 'results-4',
    category: 'Results',
    question: 'What\'s a realistic ROAS for ads?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    id: 'results-5',
    category: 'Results',
    question: 'What happens if I\'m not happy with the work?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dui',
  },
];
