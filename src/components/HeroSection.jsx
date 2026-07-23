import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { personal } from '../data/portfolioData.js'
import { SmartImage } from './Shared.jsx'

const labelPositions = [
  'left-0 top-8 -translate-x-1/3',
  'right-0 top-1/4 translate-x-1/4',
  'bottom-16 left-0 -translate-x-1/4',
  'bottom-2 right-4 translate-x-1/6',
]

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grad-pale pt-28 dark:bg-grad-night sm:pt-32"
    >
      {/* Ambient decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 animate-float-slow rounded-full bg-brand-soft/30 blur-3xl dark:bg-accent/15" />
        <div className="absolute -right-16 bottom-0 h-96 w-96 animate-float-slow rounded-full bg-brand-vibrant/15 blur-3xl dark:bg-accent-soft/10 [animation-delay:2s]" />
        <div className="absolute inset-x-0 bottom-0 h-64 dotted-bg opacity-50" />
      </div>

      <div className="section-shell relative grid items-center gap-14 pb-24 lg:grid-cols-[1.05fr,0.95fr] lg:gap-8">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand shadow-soft dark:bg-night-card dark:text-accent-soft">
            <Sparkles size={14} aria-hidden="true" />
            Interactive portfolio
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink dark:text-frost sm:text-5xl lg:text-6xl">
            Turning Complex Work into{' '}
            <span className="bg-grad-primary bg-clip-text text-transparent">
              Clear, Connected
            </span>{' '}
            Experiences
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted dark:text-frost-soft sm:text-lg">
            {personal.heroText}
          </p>

          <div>
            <p className="font-display text-lg font-bold text-ink dark:text-frost">
              {personal.name}
            </p>
            <p className="text-sm font-medium text-brand dark:text-accent-soft">
              {personal.positioning}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="rounded-full bg-grad-primary px-7 py-3.5 text-sm font-bold text-white shadow-lift transition hover:scale-[1.03] hover:shadow-xl"
            >
              Explore My Work
            </a>
          </div>
        </motion.div>

        {/* Portrait side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-[26rem]"
        >
          <div
            aria-hidden="true"
            className="blob-mask absolute inset-4 rotate-6 bg-grad-vibrant opacity-40 blur-sm"
          />
          <div
            aria-hidden="true"
            className="blob-mask absolute inset-2 -rotate-3 bg-brand-soft/50 dark:bg-accent/20"
          />
          <div className="blob-mask relative aspect-[9/10] shadow-lift">
            <SmartImage src={personal.heroImage} alt={`Portrait of ${personal.name}`} />
          </div>

          {personal.floatingLabels.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className={`absolute ${labelPositions[i % labelPositions.length]} animate-float rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-brand shadow-lift dark:bg-night-card dark:text-accent-soft`}
              style={{ animationDelay: `${i * 0.9}s` }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-8" aria-hidden="true">
        <span className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-brand/30 pt-1.5 dark:border-accent/40">
          <ArrowDown size={13} className="animate-scroll-hint text-brand dark:text-accent-soft" />
        </span>
      </div>
    </section>
  )
}
