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
    excerpt: 'The feed is noisier than ever. Here\'s the exact visual and copy framework we use to stop thumbs dead in their tracks — every single time.',
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
    excerpt: 'Chunky borders, hard shadows, raw typography — the design world just woke up to what we\'ve been building with all along.',
    category: 'Design',
    date: '2026-04-28',
    readTime: '4 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[1],
  },
  {
    slug: 'reels-hooks-q1',
    title: '5 Reels Hooks That Stopped the Scroll Last Quarter',
    excerpt: 'We tested 40+ opening hooks across client accounts. These five formats consistently outperformed everything else by 3x or more.',
    category: 'Social Media',
    date: '2026-04-15',
    readTime: '5 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[2],
  },
  {
    slug: 'mozination-campaign',
    title: 'Inside the #Mozination Campaign: From Zero to 800K Impressions',
    excerpt: 'A behind-the-scenes look at how we built a hashtag movement that generated nearly a million organic impressions in under six weeks.',
    category: 'Case Studies',
    date: '2026-04-01',
    readTime: '8 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[3],
  },
  {
    slug: 'content-calendar-lies',
    title: 'Why Your Content Calendar Is Lying to You',
    excerpt: 'Posting consistently isn\'t a strategy — it\'s a habit. Here\'s how to build a calendar that\'s actually tied to business outcomes.',
    category: 'Strategy',
    date: '2026-03-20',
    readTime: '5 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[0],
  },
  {
    slug: 'color-cycling-identity',
    title: 'Color Cycling: A Visual Identity System That Scales',
    excerpt: 'How to build a brand palette that works across every platform, every format, and every content type — without looking chaotic.',
    category: 'Design',
    date: '2026-03-08',
    readTime: '4 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[1],
  },
  {
    slug: 'tiktok-vs-reels-2026',
    title: 'TikTok vs. Reels in 2026: Where to Place Your Bets',
    excerpt: 'Both platforms are fighting for creator attention. We break down which one is actually driving ROI for our clients right now.',
    category: 'Social Media',
    date: '2026-02-22',
    readTime: '6 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[2],
  },
  {
    slug: 'happywithmeg-rebrand',
    title: 'happywithmeg Rebrand: A Wellness Brand\'s Voice Reset',
    excerpt: 'When a wellness creator needed to evolve her brand without losing her audience, here\'s exactly how we handled the transition.',
    category: 'Case Studies',
    date: '2026-02-05',
    readTime: '7 min read',
    author: 'Troyia Monay',
    fallbackColor: colors[3],
  },
];
