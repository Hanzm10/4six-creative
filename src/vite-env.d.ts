/// <reference types="vite/client" />

// Type declarations for vite-imagetools
// Allows importing images with query parameters like ?w=800&format=webp
declare module '*?w=*&format=webp' {
  const src: string;
  export default src;
}

declare module '*?w=*&format=webp&as=metadata' {
  const metadata: { src: string; width: number; height: number; format: string };
  export default metadata;
}

declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?w=*' {
  const src: string;
  export default src;
}
