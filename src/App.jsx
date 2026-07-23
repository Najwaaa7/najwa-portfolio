import { useEffect, useState } from 'react'
import { MotionConfig, motion, AnimatePresence } from 'framer-motion'
import useTheme from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import { IntroSection, WhyMarketingSection, StrengthsSection } from './components/AboutSections.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import { CommunicationSection, TimelineSection } from './components/CommunicationAndTimeline.jsx'
import EducationSection from './components/EducationSection.jsx'
import { ToolkitSection, CapabilitiesSection } from './components/SkillsSections.jsx'
import { FitSection, PersonalNoteSection, ContactSection, Footer } from './components/ClosingSections.jsx'
import { ScrollProgress, BackToTop } from './components/Shared.jsx'
import { personal } from './data/portfolioData.js'

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-white dark:bg-night"
      aria-label="Loading portfolio"
    >
      <motion.span
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        className="flex h-16 w-16 items-center justify-center rounded-3xl bg-grad-primary font-display text-lg font-extrabold text-white shadow-lift"
      >
        NA
      </motion.span>
      <p className="text-sm font-semibold text-muted dark:text-frost-soft">{personal.name}</p>
    </motion.div>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <ScrollProgress />
      <Navbar theme={theme} toggle={toggle} />

      <main>
        <HeroSection />
        <IntroSection />
        <WhyMarketingSection />
        <StrengthsSection />
        <ProjectsSection />
        <CommunicationSection />
        <TimelineSection />
        <EducationSection />
        <ToolkitSection />
        <CapabilitiesSection />
        <FitSection />
        <PersonalNoteSection />
        <ContactSection />
      </main>

      <Footer theme={theme} toggle={toggle} />
      <BackToTop />
    </MotionConfig>
  )
}
