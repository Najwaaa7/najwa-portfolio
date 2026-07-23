import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation, personal } from '../data/portfolioData.js'
import { ThemeToggle } from './Shared.jsx'

export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const initials = personal.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[75] transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 shadow-soft backdrop-blur-xl dark:bg-night/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-sm font-extrabold tracking-tight text-ink dark:text-frost"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-grad-primary text-xs font-bold text-white shadow-soft">
            {initials}
          </span>
          <span className="hidden sm:block">{personal.name}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-brand-pale hover:text-brand dark:text-frost-soft dark:hover:bg-night-card dark:hover:text-accent-soft"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-pale text-brand dark:bg-night-card dark:text-accent-soft lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-brand-pale bg-white/95 backdrop-blur-xl dark:border-night-card dark:bg-night/95 lg:hidden"
          >
            <div className="section-shell grid max-h-[calc(100vh-4rem)] grid-cols-2 gap-2 overflow-y-auto py-5">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-brand-bg px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-pale dark:bg-night-soft dark:text-frost dark:hover:bg-night-card"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
