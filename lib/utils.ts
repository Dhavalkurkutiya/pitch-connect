import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatViews(views: number) {
  if (!views || isNaN(views) || views < 0) return '0'; // Returns '0' if views is 0, NaN, or negative.

  if (views >= 1000000000) {
    const billions = (views / 1000000000).toFixed(1);
    return `${billions.endsWith('.0') ? billions.slice(0, -2) : billions}B`;
  } else if (views >= 1000000) {
    const millions = (views / 1000000).toFixed(1);
    return `${millions.endsWith('.0') ? millions.slice(0, -2) : millions}M`;
  } else if (views >= 1000) {
    const thousands = (views / 1000).toFixed(1);
    return `${thousands.endsWith('.0') ? thousands.slice(0, -2) : thousands}K`;
  }

  return Math.floor(views).toString(); // Ensure an integer is returned for values under 1000.
}