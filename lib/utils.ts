import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string => {
  const names = name.split(" ");
  const initials = names.map((name) => name[0]).join("");
  return initials.toUpperCase().slice(0, 2);
};
