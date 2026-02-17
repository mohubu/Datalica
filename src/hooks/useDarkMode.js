import { useState, useEffect } from 'react'

/** Returns true when dark mode is active (Tailwind dark: applies). Uses class on document.documentElement first, then prefers-color-scheme. */
export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const check = () => setDark(
      document.documentElement.classList.contains('dark') || media.matches
    )
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    media.addEventListener('change', check)
    check()
    return () => {
      observer.disconnect()
      media.removeEventListener('change', check)
    }
  }, [])

  return dark
}
