import { useState } from 'react'
import { SITE } from '../config'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={()=>setOpen(false)}>Raviteja</a>
        <nav id="nav" className={open ? 'open' : ''}>
          <a href="#home" className="nav-link" onClick={()=>setOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={()=>setOpen(false)}>About</a>
          <a href="#experience" className="nav-link" onClick={()=>setOpen(false)}>Experience</a>
          <a href="#skills" className="nav-link" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={()=>setOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link" onClick={()=>setOpen(false)}>Contact</a>
        </nav>
        <div className="nav-cta">
          <a className="btn primary big-resume" href={SITE.RESUME_URL} target="_blank" rel="noopener">Resume ↗</a>
          <button className="hamburger" id="hamburger" aria-label="Menu" onClick={()=>setOpen(!open)}><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
  )
}
