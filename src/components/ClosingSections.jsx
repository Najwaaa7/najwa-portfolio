import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, ArrowUp, Target, Gift, ArrowLeftRight, Quote } from 'lucide-react'
import { fit, personalNote, contact, personal, footer } from '../data/portfolioData.js'
import { SmartImage, SectionHeading, ThemeToggle } from './Shared.jsx'

/* ------------------------------------------------------------------ */
/* How My Experience Aligns                                           */
/* ------------------------------------------------------------------ */
function FitColumn({ icon: Icon, title, items, from }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === 'left' ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.65 }}
      className="flex-1 rounded-4xl bg-white p-7 shadow-soft dark:bg-night-card sm:p-9"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-grad-primary text-white shadow-soft">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-extrabold text-ink dark:text-frost sm:text-2xl">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col gap-2.5">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.06 }}
            className="flex items-start gap-2.5 rounded-2xl bg-brand-bg px-4 py-2.5 text-sm font-medium text-ink/85 dark:bg-night dark:text-frost-soft"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-vibrant dark:bg-accent"
            />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export function FitSection() {
  return (
    <section id="fit" className="relative overflow-hidden bg-grad-lavender py-24 dark:bg-grad-night">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Alignment"
          title={fit.title}
          supporting={fit.supporting}
        />
        <div className="relative flex flex-col items-stretch gap-6 lg:flex-row lg:gap-10">
          <FitColumn icon={Target} title={fit.roleNeeds.title} items={fit.roleNeeds.items} from="left" />

          {/* Animated central connector */}
          <div className="relative flex items-center justify-center lg:w-32">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.3 }}
              className="z-10 flex flex-col items-center gap-2.5"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-grad-primary text-white shadow-lift">
                <ArrowLeftRight size={26} aria-hidden="true" />
              </span>
              <p className="max-w-[9rem] text-center font-display text-sm font-extrabold leading-tight text-brand dark:text-accent-soft">
                {fit.centralPhrase}
              </p>
            </motion.div>
            <motion.span
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="absolute hidden h-full w-1 rounded-full bg-gradient-to-b from-brand-soft via-brand-vibrant to-brand-soft lg:block dark:from-accent/30 dark:via-accent dark:to-accent/30"
            />
          </div>

          <FitColumn icon={Gift} title={fit.iBring.title} items={fit.iBring.items} from="right" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* A Personal Note                                                     */
/* ------------------------------------------------------------------ */
export function PersonalNoteSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-brand-bg/60 via-transparent to-brand-bg/60 dark:from-night-soft/60 dark:to-night-soft/60"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.7 }}
        className="section-shell relative max-w-4xl"
      >
        <div className="relative rounded-5xl bg-gradient-to-br from-brand-bg via-white to-brand-pink p-9 shadow-lift dark:from-night-card dark:via-night-soft dark:to-night-card sm:p-14">
          <Quote
            aria-hidden="true"
            size={88}
            className="absolute -top-7 left-8 rotate-180 fill-brand-soft/40 text-brand-soft/40 dark:fill-accent/20 dark:text-accent/20"
          />
          <h2 className="mb-7 font-display text-3xl font-extrabold text-ink dark:text-frost sm:text-4xl">
            {personalNote.title}
          </h2>
          <div className="flex flex-col gap-5">
            {personalNote.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink/80 dark:text-frost-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
export function ContactSection() {
  const emailReady = contact.email && !contact.email.startsWith('[')
  const linkedinReady = contact.linkedin && !contact.linkedin.startsWith('[')

  return (
    <section id="contact" className="relative overflow-hidden bg-grad-lavender py-24 dark:bg-grad-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 animate-float-slow rounded-full bg-brand-soft/40 blur-3xl dark:bg-accent/15"
      />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.8fr,1.2fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div aria-hidden="true" className="blob-mask absolute inset-3 rotate-6 bg-grad-vibrant opacity-35 blur-sm" />
          <div className="blob-mask relative aspect-[4/5] overflow-hidden shadow-lift">
            {/* Tighter crop than the hero so the same photo reads differently */}
            <SmartImage
              src={personal.contactImage}
              alt={`Portrait of ${personal.name}`}
              className="scale-125 object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-start gap-5 text-left"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-frost sm:text-4xl lg:text-5xl">
            {contact.heading}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted dark:text-frost-soft">
            {contact.text}
          </p>
          <p className="font-display text-xl font-extrabold text-brand dark:text-accent-soft">
            {personal.name}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={linkedinReady ? contact.linkedin : '#contact'}
              target={linkedinReady ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-grad-primary px-6 py-3.5 text-sm font-bold text-white shadow-lift transition hover:scale-[1.03]"
            >
              <Linkedin size={16} aria-hidden="true" /> Connect on LinkedIn
            </a>
            <a
              href={emailReady ? `mailto:${contact.email}` : '#contact'}
              className="flex items-center gap-2 rounded-full border-2 border-brand/25 bg-white/80 px-6 py-3 text-sm font-bold text-brand transition hover:border-brand hover:bg-brand-pale dark:border-accent/30 dark:bg-night-card dark:text-accent-soft dark:hover:border-accent"
            >
              <Mail size={16} aria-hidden="true" /> Email Me
            </a>
          </div>

          <div className="flex flex-col gap-1.5 pt-3 text-sm text-muted dark:text-frost-soft">
            <span className="flex items-center gap-2">
              <Phone size={14} aria-hidden="true" className="text-brand dark:text-accent-soft" />
              {contact.phone}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export function Footer({ theme, toggle }) {
  return (
    <footer className="border-t border-brand-pale bg-white py-10 dark:border-night-card dark:bg-night">
      <div className="section-shell flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base font-extrabold text-ink dark:text-frost">
            {personal.name}
          </p>
          <p className="text-sm font-medium text-brand dark:text-accent-soft">
            {personal.positioning}
          </p>
          <p className="mt-1.5 max-w-md text-xs text-muted dark:text-frost-soft">
            {footer.tagline}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-pale text-brand transition hover:bg-brand-soft/60 dark:bg-night-card dark:text-accent-soft"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  )
}
