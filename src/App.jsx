import Navbar from './components/Navbar.jsx'
import ChatbotWidget from './components/ChatbotWidget.jsx'
import Footer from './components/Footer.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import { useEffect } from 'react'

export default function App(){
  useEffect(()=>{
    // Active nav on scroll
    const links = document.querySelectorAll('a.nav-link')
    const ids = Array.from(links).map(l=>l.getAttribute('href')).filter(h=>h?.startsWith('#')).map(h=>h.slice(1))
    const secs = ids.map(id => document.getElementById(id)).filter(Boolean)
    const setActive = () => {
      let idx = secs.findIndex(s => s.getBoundingClientRect().top - 120 > 0) - 1
      if (idx < 0) idx = secs.length - 1
      links.forEach(l=>l.classList.remove('active'))
      const current = secs[idx]
      if (current){
        const a = document.querySelector(`a.nav-link[href="#${current.id}"]`)
        if (a) a.classList.add('active')
      }
    }
    document.addEventListener('scroll', setActive); setActive()
    return () => document.removeEventListener('scroll', setActive)
  }, [])

  return (
    <div className="app" data-theme="dark">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />  <ChatbotWidget />

    </div>
  )
}
