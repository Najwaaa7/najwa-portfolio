import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { toolkit, capabilities } from '../data/portfolioData.js'
import { SmartImage, SectionHeading } from './Shared.jsx'

/* ------------------------------------------------------------------ */
/* LogoCard — reusable tool/platform card                              */
/* ------------------------------------------------------------------ */
function LogoCard({ tool, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
      whileHover={{ y: -5 }}
      className="group flex flex-col items-center gap-4 rounded-4xl border border-brand-pale bg-white p-7 text-center shadow-soft transition-all hover:border-brand-soft hover:shadow-[0_12px_40px_rgba(139,61,255,0.22)] dark:border-night-card dark:bg-night-card dark:hover:border-accent/50"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-bg p-4 transition-transform group-hover:scale-110 dark:bg-night">
        <SmartImage src={tool.logo} alt={`${tool.name} logo`} fit="contain" />
      </div>
      <div>
        <h3 className="font-display text-base font-extrabold text-ink dark:text-frost">
          {tool.name}
        </h3>
        <p className="mt-1 flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand dark:text-accent-soft">
          {tool.ai && <Sparkles size={12} aria-hidden="true" />}
          {tool.category}
        </p>
      </div>
    </motion.article>
  )
}

/* ------------------------------------------------------------------ */
/* Skills & Digital Toolkit — single premium grid                      */
/* ------------------------------------------------------------------ */
export function ToolkitSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white py-24 dark:bg-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-pink blur-3xl dark:bg-accent/10"
      />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Toolkit" title={toolkit.title} supporting={toolkit.supporting} />

        {/* Tool cards — one clean responsive grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {toolkit.tools.map((tool, i) => (
            <LogoCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>

        {/* AI-assisted working note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-brand-soft/40 bg-grad-lavender p-6 text-center text-sm leading-relaxed text-ink/80 dark:border-accent/30 dark:bg-grad-night dark:text-frost-soft sm:text-base"
        >
          {toolkit.aiNote}
        </motion.p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Professional Capabilities — interactive tags                        */
/* ------------------------------------------------------------------ */
export function CapabilitiesSection() {
  return (
    <section className="bg-brand-bg py-24 dark:bg-night-soft">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Human Skills"
          title={capabilities.title}
          supporting="The professional and interpersonal capabilities behind how I work with people, projects and priorities."
        />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {capabilities.items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.035 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="cursor-default rounded-full border border-brand-soft/50 bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition-colors hover:border-brand hover:bg-brand-pale hover:text-brand dark:border-accent/25 dark:bg-night-card dark:text-frost dark:hover:border-accent dark:hover:text-accent-soft"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
