import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format as formatDate, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractInitials(name: string, lastname: string): string {
  const nameInitials = name.substring(0, 1)
  const lastnameInitials = lastname.substring(0, 1)
  return nameInitials + lastnameInitials
}

/**
 * Formatea una fecha en una cadena legible.
 * @param {string | Date} date - La fecha a formatear.
 * @param {string} dateFormat - El formato de la fecha.
 * @returns {string} - La fecha formateada.
 */
function format(date: string | Date, dateFormat: string = 'PPP'): string {
  if (typeof date === 'string') {
    date = parseISO(date);
  }
  return formatDate(date, dateFormat);
}

export { format };