import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractInitials(name: string, lastname: string): string {
  const nameInitials = name.substring(0, 1)
  const lastnameInitials = lastname.substring(0, 1)
  return nameInitials + lastnameInitials
}
