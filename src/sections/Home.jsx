import Reveal from '../components/Reveal.jsx'
import Typewriter from '../components/Typewriter.jsx'
import HeroArt from '../components/HeroArt.jsx'
import { SITE } from '../config'
import { useEffect } from 'react'

export default function Home() {
  // Fix 100vh on mobile using dynamic viewport unit fallback
  useEffect(() => {
    const setVH = () => {
      if (window.visualViewport) {
        document.documentElement.style.setProperty('--vh', window.visualViewport.height + 'px')
      } else {
        document.documentElement.style.setProperty('--vh', window.innerHeight + 'px')
      }
    }
    setVH()
    window.visualViewport?.addEventListener('resize', setVH)
    window.addEventListener('resize', setVH)
    return () => {
      window.visualViewport?.removeEventListener('resize', setVH)
      window.removeEventListener('resize', setVH)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="grid"></div>
        <div className="float f1"></div>
        <div className="float f2"></div>
      </div>
      <div className="hero-inner container">
        <div className="hero-left">
          <Reveal>
            <p className="eyebrow">Software Engineer | Data Analyst | AI Enthusiast</p>
            <Typewriter />
            <p className="lead">Aspiring Software Engineer with expertise in Java, Python, React, and cloud technologies. Experienced in delivering data‑driven solutions—from AI chatbots to dashboards used by 300+ stakeholders.</p>
            <div className="actions">
              <a className="btn primary cta block" href="#projects">View My Work</a>
              <a className="btn ghost cta block" href={SITE.LINKEDIN_URL} target="_blank" rel="noopener">LinkedIn ↗</a>
              <a className="btn ghost cta block" href={SITE.GITHUB_URL} target="_blank" rel="noopener">GitHub ↗</a>
              <a className="btn primary cta block" href={SITE.RESUME_URL} target="_blank" rel="noopener">Resume ↗</a>
            </div>
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track">
                <span>Java</span><span>Python</span><span>React</span><span>AWS</span><span>Docker</span><span>Tableau</span><span>Spark</span><span>MongoDB</span>
                <span>Java</span><span>Python</span><span>React</span><span>AWS</span><span>Docker</span><span>Tableau</span><span>Spark</span><span>MongoDB</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="hero-right">
          <Reveal><HeroArt /></Reveal>
        </div>
      </div>
    </section>
  )
}
