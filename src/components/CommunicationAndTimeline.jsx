import { useState } from 'react'
import { motion } from 'framer-motion'
import { Images } from 'lucide-react'
import { communication, timeline } from '../data/portfolioData.js'
import { SmartImage, SectionHeading, ImageLightbox } from './Shared.jsx'

/* ------------------------------------------------------------------ */
/* Communication in Action                                             */
/* ------------------------------------------------------------------ */
function CommunicationCard({ item, onOpen, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -5 }}
      className="flex flex-col gap-5 rounded-4xl bg-white p-6 shadow-soft transition-shadow hover:shadow-lift dark:bg-night-card sm:p-8"
    >
      <button
        onClick={() => onOpen(item, 0)}
        aria-label={`Open ${item.title} gallery`}
        className="group relative block aspect-[16/10] w-full"
      >
        <SmartImage
          src={item.images[0]}
          alt={`${item.title} — communication example`}
          fit="contain"
          framed
        />
        {item.images.length > 1 && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-brand opacity-0 shadow-soft transition-opacity group-hover:opacity-100 dark:bg-night/90 dark:text-accent-soft">
            <Images size={13} aria-hidden="true" /> {item.images.length}
          </span>
        )}
      </button>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-xl font-extrabold text-ink dark:text-frost">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted dark:text-frost-soft">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

export function CommunicationSection() {
  const [gallery, setGallery] = useState(null)

  return (
    <section id="communication" className="bg-grad-lavender py-24 dark:bg-grad-night">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Engagement"
          title={communication.title}
          supporting={communication.supporting}
        />
        <div className="grid gap-7 md:grid-cols-2">
          {communication.items.map((item, i) => (
            <CommunicationCard
              key={item.title}
              item={item}
              index={i}
              onOpen={(it, start) => setGallery({ item: it, start })}
            />
          ))}
        </div>
      </div>

      {gallery && (
        <ImageLightbox
          images={gallery.item.images.map((src, i) => ({
            src,
            label: `${gallery.item.title} ${i + 1}`,
          }))}
          startIndex={gallery.start}
          title={gallery.item.title}
          onClose={() => setGallery(null)}
        />
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Timeline — Projects I Have Helped Move Forward                      */
/* ------------------------------------------------------------------ */
export function TimelineSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white py-24 dark:bg-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-brand-pale blur-3xl dark:bg-accent/10"
      />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Experience"
          title={timeline.title}
          supporting="A snapshot of the initiatives I have coordinated, supported and helped deliver."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Central line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-vibrant via-brand-soft to-brand-pale dark:from-accent dark:via-accent/40 dark:to-night-card md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-10">
            {timeline.items.map((item, i) => {
              const right = i % 2 === 1
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: right ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55 }}
                  className={`relative pl-14 md:w-[calc(50%+1.25rem)] md:pl-0 ${
                    right ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'
                  }`}
                >
                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-3 top-6 h-5 w-5 rounded-full border-4 border-white bg-grad-primary shadow-soft dark:border-night ${
                      right ? 'md:left-[-0.65rem]' : 'md:left-auto md:right-[-0.65rem]'
                    }`}
                  />
                  <div className="rounded-3xl bg-brand-bg p-6 shadow-soft transition hover:shadow-lift dark:bg-night-card sm:p-7">
                    <h3 className="font-display text-lg font-extrabold text-ink dark:text-frost">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted dark:text-frost-soft">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
