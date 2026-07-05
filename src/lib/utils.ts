import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stripHtmlAndDecode(text: string): string {
  if (!text) return "";
  if (typeof window === 'undefined') {
    return text.replace(/<\/?[^>]+(>|$)/g, "").trim();
  }
  try {
    const parser = new DOMParser();
    const decoded = parser.parseFromString(text, 'text/html').body.textContent;
    return decoded || "";
  } catch {
    return text.replace(/<\/?[^>]+(>|$)/g, "").trim();
  }
}
