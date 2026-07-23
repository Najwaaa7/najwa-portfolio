import { motion } from 'framer-motion'
import { ClipboardList, Megaphone, Settings2, Repeat, Check } from 'lucide-react'
import { intro, whyMarketing, strengths } from '../data/portfolioData.js'
import { SectionHeading } from './Shared.jsx'

const icons = { ClipboardList, Megaphone, Settings2, Repeat }

/* Renders *highlighted phrases* from the data file with animated underlines */
function RichText({ text }) {
  const parts = text.split(/\*(.+?)\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="highlight-phrase">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Personal introduction — "Hi Muhammad,"                              */
/* ------------------------------------------------------------------ */
export function IntroSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-bg py-24 dark:bg-night-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 animate-float-slow rounded-full bg-brand-soft/40 blur-3xl dark:bg-accent/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-0 h-64 w-64 rounded-full bg-brand-pink/70 blur-3xl dark:bg-accent/10"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="section-shell relative"
      >
        <div className="relative mx-auto max-w-3xl rounded-[3rem] border border-brand-soft/40 bg-white/70 px-8 py-14 text-center shadow-soft backdrop-blur dark:border-accent/20 dark:bg-night-card/60 sm:px-14">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-1.5 w-16 rounded-full bg-grad-primary"
          />
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink dark:text-frost sm:text-5xl">
            {intro.heading}
          </h2>
          <div className="mx-auto mt-7 flex max-w-2xl flex-col gap-5">
            {intro.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-muted dark:text-frost-soft">
                {p}
              </p>
            ))}
          </div>
          <p
            className="mt-8 text-3xl text-brand dark:text-accent-soft"
            style={{ fontFamily: "'Segoe Script', 'Bradley Hand', cursive" }}
          >
            {intro.signature}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Why Marketing? — editorial section                                  */
/* ------------------------------------------------------------------ */
export function WhyMarketingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-pale blur-3xl dark:bg-accent/10"
      />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        onViewportEnter={(entry) => entry?.target.classList.add('in-view')}
        className="section-shell relative max-w-4xl"
      >
        <SectionHeading eyebrow="Motivation" title={whyMarketing.title} align="left" />
        <div className="flex flex-col gap-6 border-l-4 border-brand-soft pl-6 dark:border-accent/50 sm:pl-10">
          {whyMarketing.paragraphs.map((p) => (
            <p
              key={p}
              className="text-lg leading-relaxed text-ink/80 dark:text-frost-soft sm:text-xl"
            >
              <RichText text={p} />
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* What I Bring — four strength cards                                  */
/* ------------------------------------------------------------------ */
export function StrengthsSection() {
  return (
    <section id="strengths" className="relative bg-brand-bg py-24 dark:bg-night-soft">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What I Bring"
          title="Four Ways I Add Value"
          supporting="The core capabilities I bring to every project, team and initiative I support."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {strengths.map((card, i) => {
            const Icon = icons[card.icon] || ClipboardList
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-4xl bg-gradient-to-br from-white via-brand-bg to-brand-pale p-8 shadow-soft transition-shadow hover:shadow-lift dark:from-night-card dark:via-night-card dark:to-night-soft"
              >
                <div
                  aria-hidden="true"
                  className="dotted-bg absolute inset-0 opacity-40 transition-opacity group-hover:opacity-70"
                />
                <div className="relative flex flex-col gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-grad-primary text-white shadow-soft transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-ink dark:text-frost">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted dark:text-frost-soft">{card.description}</p>
                  <ul className="mt-1 flex flex-col gap-2">
                    {card.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/80 dark:text-frost-soft"
                      >
                        <Check
                          size={15}
                          aria-hidden="true"
                          className="shrink-0 text-brand-vibrant dark:text-accent-soft"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
