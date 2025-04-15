import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const resolveSlug = (text: string) => {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}