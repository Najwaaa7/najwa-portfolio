import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowUp, Sun, Moon, ImagePlus } from 'lucide-react'
import { asset, filename } from '../lib.js'

/* ------------------------------------------------------------------ */
/* SmartImage — renders the real image when it exists, otherwise a    */
/* polished placeholder that names the file the owner should add.     */
/* ------------------------------------------------------------------ */
export function SmartImage({ src, alt, fit = 'cover', className = '', framed = false }) {
  const [failed, setFailed] = useState(false)

  useEffect(() => setFailed(false), [src])

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-grad-lavender dark:bg-grad-night dotted-bg p-6 text-center ${className}`}
        role="img"
        aria-label={`Placeholder — ${alt}`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-brand shadow-soft dark:bg-night-card dark:text-accent-soft">
          <ImagePlus size={22} aria-hidden="true" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand/70 dark:text-accent-soft/80">
          Add image
        </p>
        <p className="max-w-full break-all font-mono text-xs text-muted dark:text-frost-soft">
          {filename(src)}
        </p>
      </div>
    )
  }

  const img = (
    <img
      src={asset(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${className}`}
    />
  )

  if (!framed) return img

  /* Browser-style mockup frame for screenshots */
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-brand-pale bg-white shadow-soft dark:border-night-card dark:bg-night-soft">
      <div className="flex items-center gap-1.5 border-b border-brand-pale/70 bg-brand-bg px-4 py-2.5 dark:border-night-card dark:bg-night-card">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-soft" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-pink" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-pale dark:bg-night" />
        <span className="ml-3 hidden h-4 flex-1 rounded-full bg-brand-pale/60 dark:bg-night sm:block" />
      </div>
      <div className="min-h-0 flex-1 bg-white p-2 dark:bg-night-soft">{img}</div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* SectionHeading                                                     */
/* ------------------------------------------------------------------ */
export function SectionHeading({ eyebrow, title, supporting, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 flex flex-col gap-4 ${alignCls}`}
    >
      {eyebrow && (
        <span className="rounded-full bg-brand-pale px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand dark:bg-night-card dark:text-accent-soft">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-frost sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {supporting && (
        <p className="max-w-2xl text-base leading-relaxed text-muted dark:text-frost-soft sm:text-lg">
          {supporting}
        </p>
      )}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* ImageLightbox — modal gallery with keyboard navigation             */
/* ------------------------------------------------------------------ */
export function ImageLightbox({ images, startIndex = 0, onClose, title }) {
  const [index, setIndex] = useState(startIndex)
  const current = images[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [images.length, onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md dark:bg-night/90"
        role="dialog"
        aria-modal="true"
        aria-label={title || 'Image gallery'}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-lift dark:bg-night-soft"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-brand-pale px-5 py-3.5 dark:border-night-card">
            <p className="truncate font-display text-sm font-bold text-ink dark:text-frost">
              {current.label || title}
              {images.length > 1 && (
                <span className="ml-2 font-body font-medium text-muted dark:text-frost-soft">
                  {index + 1} / {images.length}
                </span>
              )}
            </p>
            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="rounded-full bg-brand-pale p-2 text-brand transition hover:bg-brand-soft dark:bg-night-card dark:text-accent-soft"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex min-h-[320px] flex-1 items-center justify-center bg-brand-bg p-4 dark:bg-night sm:min-h-[420px]">
            <SmartImage src={current.src} alt={current.label || title} fit="contain" />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                  aria-label="Previous image"
                  className="absolute left-3 rounded-full bg-white/90 p-2.5 text-brand shadow-soft transition hover:scale-105 dark:bg-night-card dark:text-accent-soft"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % images.length)}
                  aria-label="Next image"
                  className="absolute right-3 rounded-full bg-white/90 p-2.5 text-brand shadow-soft transition hover:scale-105 dark:bg-night-card dark:text-accent-soft"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto border-t border-brand-pale px-5 py-3 dark:border-night-card">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setIndex(i)}
                  aria-label={`View ${img.label || `image ${i + 1}`}`}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition ${
                    i === index
                      ? 'border-brand-vibrant dark:border-accent'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <SmartImage src={img.src} alt="" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/* ScrollProgress                                                     */
/* ------------------------------------------------------------------ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-grad-primary"
      aria-hidden="true"
    />
  )
}

/* ------------------------------------------------------------------ */
/* BackToTop                                                          */
/* ------------------------------------------------------------------ */
export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[70] rounded-full bg-grad-primary p-3.5 text-white shadow-lift transition hover:scale-105"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/* ThemeToggle                                                        */
/* ------------------------------------------------------------------ */
export function ThemeToggle({ theme, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-pale text-brand transition hover:bg-brand-soft/60 dark:bg-night-card dark:text-accent-soft dark:hover:bg-night-card/70"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 60, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
