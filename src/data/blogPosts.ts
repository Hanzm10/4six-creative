export type BlogCategory = 'Strategy' | 'Design' | 'Social Media' | 'Case Studies';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  author: string;
  fallbackColor: string;
  featured?: boolean;
}

const colors = ['bg-brand-lavender', 'bg-brand-peach', 'bg-brand-green', 'bg-brand-orange'];

export const blogPosts: BlogPost[] = [
  {
    slug: 'make-it-pop-2026',
    title: 'How to Make Your Brand Impossible to Scroll Past in 2026',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi.',
    category: 'Strategy',
    date: '2026-05-10',
    readTime: '6 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[0],
    featured: true,
  },
  {
    slug: 'brutalist-comeback',
    title: 'The Brutalist Comeback: Why Bold Borders Are Winning Feeds',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna liqua.',
    category: 'Design',
    date: '2026-04-28',
    readTime: '4 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[1],
  },
  {
    slug: 'reels-hooks-q1',
    title: '5 Reels Hooks That Stopped the Scroll Last Quarter',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem.',
    category: 'Social Media',
    date: '2026-04-15',
    readTime: '5 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[2],
  },
  {
    slug: 'mozination-campaign',
    title: 'Inside the #Mozination Campaign: From Zero to 800K Impressions',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ips.',
    category: 'Case Studies',
    date: '2026-04-01',
    readTime: '8 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[3],
  },
  {
    slug: 'content-calendar-lies',
    title: 'Why Your Content Calendar Is Lying to You',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Se.',
    category: 'Strategy',
    date: '2026-03-20',
    readTime: '5 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[0],
  },
  {
    slug: 'color-cycling-identity',
    title: 'Color Cycling: A Visual Identity System That Scales',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed.',
    category: 'Design',
    date: '2026-03-08',
    readTime: '4 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[1],
  },
  {
    slug: 'tiktok-vs-reels-2026',
    title: 'TikTok vs. Reels in 2026: Where to Place Your Bets',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Se.',
    category: 'Social Media',
    date: '2026-02-22',
    readTime: '6 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[2],
  },
  {
    slug: 'happywithmeg-rebrand',
    title: 'happywithmeg Rebrand: A Wellness Brand\'s Voice Reset',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Se.',
    category: 'Case Studies',
    date: '2026-02-05',
    readTime: '7 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[3],
  },
];
