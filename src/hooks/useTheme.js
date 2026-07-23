import { useEffect, useState } from 'react'

const STORAGE_KEY = 'najwa-theme'

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      // Dark is the default — light only when the visitor explicitly chose it.
      return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
