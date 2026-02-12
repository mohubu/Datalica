import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names with Tailwind conflict resolution (cn = classnames).
 * Used by shadcn-style components and UI primitives.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
