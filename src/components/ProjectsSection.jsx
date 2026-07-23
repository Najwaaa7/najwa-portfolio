import { useState } from 'react'
import { motion } from 'framer-motion'
import { Images, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/portfolioData.js'
import { SmartImage, SectionHeading, ImageLightbox } from './Shared.jsx'

function ProjectCard({ project, index, onOpenGallery }) {
  const reversed = index % 2 === 1
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-10 lg:grid-cols-2 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Image */}
      <button
        onClick={() => onOpenGallery(project, 0)}
        aria-label={`Open ${project.title} gallery`}
        className="group relative block w-full text-left"
      >
        <div
          aria-hidden="true"
          className={`absolute -inset-3 rounded-[2.5rem] bg-grad-vibrant opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-25`}
        />
        <div className="relative aspect-[16/11] overflow-hidden rounded-[2.25rem] bg-brand-pale shadow-soft transition-shadow group-hover:shadow-lift dark:bg-night-card">
          <SmartImage src={project.images[0].src} alt={`${project.title} — ${project.images[0].label}`} />
          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand opacity-0 shadow-soft backdrop-blur transition-opacity group-hover:opacity-100 dark:bg-night-card/90 dark:text-accent-soft">
            <Images size={14} aria-hidden="true" /> {project.images.length > 1 ? `${project.images.length} images` : 'View image'}
          </span>
        </div>
      </button>

      {/* Text */}
      <div className="flex flex-col items-start gap-4">
        <span className="rounded-full bg-brand-pale px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand dark:bg-night-card dark:text-accent-soft">
          {project.category}
        </span>
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink dark:text-frost sm:text-4xl">
          {project.title}
        </h3>
        <p className="text-base leading-relaxed text-muted dark:text-frost-soft">
          {project.overview}
        </p>
        <div className="w-full">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-brand dark:text-accent-soft">
            My contribution
          </p>
          <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {project.contribution.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-sm font-medium text-ink/80 dark:text-frost-soft"
              >
                <CheckCircle2
                  size={15}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand-vibrant dark:text-accent-soft"
                />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2">
          <button
            onClick={() => onOpenGallery(project, 0)}
            className="flex items-center gap-2 rounded-full bg-grad-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-[1.03]"
          >
            <Images size={16} aria-hidden="true" /> View Project Gallery
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  const [gallery, setGallery] = useState(null)

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-24 dark:bg-night">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-pale/80 blur-3xl dark:bg-accent/10"
      />
      <div className="section-shell relative flex flex-col gap-24">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          supporting="Initiatives I have led or coordinated across the Workplace Division — from digital platforms to learning programs and change support."
        />
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpenGallery={(p, start) => setGallery({ project: p, start })}
          />
        ))}
      </div>

      {gallery && (
        <ImageLightbox
          images={gallery.project.images}
          startIndex={gallery.start}
          title={gallery.project.title}
          onClose={() => setGallery(null)}
        />
      )}
    </section>
  )
}
