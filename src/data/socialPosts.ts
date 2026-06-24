export interface SocialPost {
  id: number;
  type: 'image' | 'reel';
  src: string;
  handle: string;
  caption: string;
  link: string;
}

export const socialPosts: SocialPost[] = [
  {
    id: 1,
    type: 'image',
    src: 'https://instagram.fmnl17-6.fna.fbcdn.net/v/t51.82787-15/662495685_18149061682479036_8333921998436741835_n.jpg',
    handle: '@4sixcreative',
    caption: 'Branding shoot BTS',
    link: 'https://instagram.com/4sixcreative',
  },
  {
    id: 2,
    type: 'reel',
    src: 'https://www.instagram.com/reel/C0hn8OGuEk5/embed/',
    handle: '@troyiamonay',
    caption: 'Reel breakdown',
    link: 'https://instagram.com/troyiamonay',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://instagram.fmnl17-3.fna.fbcdn.net/v/t51.82787-15/625257710_18123569827489369_8040625987422691498_n.jpg',
    handle: '@4sixcreative',
    caption: 'Behind the scenes magic',
    link: 'https://instagram.com/4sixcreative',
  },
  {
    id: 4,
    type: 'reel',
    src: 'https://www.instagram.com/reel/CmMnxhTOqiZ/embed/',
    handle: '@troyiamonay',
    caption: 'Creative process revealed',
    link: 'https://instagram.com/troyiamonay',
  },
  {
    id: 5,
    type: 'reel',
    src: 'https://www.instagram.com/reel/DVJ7qwBEjSu/embed/',
    handle: '@4sixcreative',
    caption: 'Client project showcase',
    link: 'https://instagram.com/4sixcreative',
  },
  {
    id: 6,
    type: 'reel',
    src: 'https://www.instagram.com/reel/DO7EsRUDejI/embed/',
    handle: '@troyiamonay',
    caption: 'Marketing tips and tricks',
    link: 'https://instagram.com/troyiamonay',
  },
];
