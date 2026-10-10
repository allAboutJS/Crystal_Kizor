import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combines class names conditionally with tailwind-merge. */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
