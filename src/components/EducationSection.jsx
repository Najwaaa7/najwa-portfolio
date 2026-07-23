import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Eye } from 'lucide-react'
import { education } from '../data/portfolioData.js'
import { SmartImage, SectionHeading, ImageLightbox } from './Shared.jsx'

function CertificateCard({ cert, index, onView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      className="flex flex-col overflow-hidden rounded-4xl bg-white shadow-soft transition-shadow hover:shadow-lift dark:bg-night-card"
    >
      <button
        onClick={onView}
        aria-label={`View ${cert.title} certificate`}
        className="group relative block aspect-[16/10] w-full bg-brand-bg p-4 dark:bg-night"
      >
        <SmartImage src={cert.image} alt={`${cert.title} certificate`} fit="contain" />
        <span className="absolute inset-0 flex items-center justify-center bg-brand/0 transition group-hover:bg-brand/10">
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-brand opacity-0 shadow-soft transition-opacity group-hover:opacity-100 dark:bg-night-card dark:text-accent-soft">
            <Eye size={14} aria-hidden="true" /> View certificate
          </span>
        </span>
      </button>
      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand dark:text-accent-soft">
          <Award size={13} aria-hidden="true" /> {cert.issuer}
        </span>
        <h3 className="font-display text-lg font-extrabold leading-snug text-ink dark:text-frost">
          {cert.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted dark:text-frost-soft">
          {cert.description}
        </p>
        <button
          onClick={onView}
          className="mt-auto self-start pt-2 text-sm font-bold text-brand underline-offset-4 transition hover:underline dark:text-accent-soft"
        >
          View Certificate
        </button>
      </div>
    </motion.article>
  )
}

export default function EducationSection() {
  const [lightbox, setLightbox] = useState(null)
  const { degree, certifications } = education

  return (
    <section id="education" className="bg-brand-bg py-24 dark:bg-night-soft">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Foundations"
          title={education.title}
          supporting={education.supporting}
        />

        {/* Featured education card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.65 }}
          className="relative mb-14 overflow-hidden rounded-5xl bg-gradient-to-br from-white via-brand-bg to-brand-pink p-8 shadow-lift dark:from-night-card dark:via-night-card dark:to-night-soft sm:p-12"
        >
          <div aria-hidden="true" className="dotted-bg absolute inset-0 opacity-40" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[0.4fr,1fr]">
            <div className="flex flex-col items-center gap-5">
              <div className="flex h-40 w-40 items-center justify-center rounded-4xl bg-white p-6 shadow-soft dark:bg-frost sm:h-48 sm:w-48">
                <SmartImage src={degree.logo} alt="Effat University logo" fit="contain" />
              </div>
            </div>
            <div className="flex flex-col gap-3.5 text-center lg:text-left">
              <span className="mx-auto flex items-center gap-2 rounded-full bg-brand-pale px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand dark:bg-night dark:text-accent-soft lg:mx-0">
                <GraduationCap size={14} aria-hidden="true" /> Education
              </span>
              <h3 className="font-display text-2xl font-extrabold text-ink dark:text-frost sm:text-3xl">
                {degree.title}
              </h3>
              <p className="font-display text-lg font-bold text-brand dark:text-accent-soft">
                {degree.institution}
              </p>
              <p className="text-base leading-relaxed text-muted dark:text-frost-soft">
                {degree.description}
              </p>
            </div>
          </div>
        </motion.article>

        {/* Certifications */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertificateCard
              key={cert.title}
              cert={cert}
              index={i}
              onView={() =>
                setLightbox({ images: [{ src: cert.image, label: cert.title }], title: cert.title })
              }
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
