import Reveal from '../components/Reveal.jsx'
import { useEffect, useRef } from 'react'
import ClusterIcon from '../components/ClusterIcon.jsx'

export default function Skills(){
  const containerRef = useRef(null)
  const metaRef = useRef({ y: typeof window !== 'undefined' ? window.scrollY : 0, dir: 'down', played: null, timer: null })

  useEffect(()=>{
    const onScroll = () => {
      const y = window.scrollY || 0
      metaRef.current.dir = y > metaRef.current.y ? 'down' : 'up'
      metaRef.current.y = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const container = containerRef.current
    if(!container) return
    const icons = container.querySelectorAll('.icon')
    icons.forEach((el, i)=> el.style.setProperty('--i', i))

    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{
        if(!e.isIntersecting) return
        const dir = metaRef.current.dir
        if (dir === 'down' && metaRef.current.played !== 'down'){
          container.classList.remove('wave-backward')
          void container.offsetWidth
          container.classList.add('wave-forward')
          metaRef.current.played = 'down'
          clearTimeout(metaRef.current.timer)
          metaRef.current.timer = setTimeout(()=>{
            container.classList.remove('wave-forward')
          }, 2000)
        } else if (dir === 'up' && metaRef.current.played !== 'up'){
          container.classList.remove('wave-forward')
          void container.offsetWidth
          container.classList.add('wave-backward')
          metaRef.current.played = 'up'
          clearTimeout(metaRef.current.timer)
          metaRef.current.timer = setTimeout(()=>{
            container.classList.remove('wave-backward')
          }, 2000)
        }
      })
    }, { threshold: 0.35 })
    io.observe(container)

    return ()=>{ window.removeEventListener('scroll', onScroll); io.disconnect(); clearTimeout(metaRef.current.timer) }
  }, [])

  return (
    <section id="skills" className="section container">
      <h2 className="section-title"><Reveal>Skills</Reveal></h2>
      <div ref={containerRef} className="skill-groups skills-wave">
        <Reveal className="sgroup"><h3>Programming Languages</h3><div className="icons">
          <div className="icon"><i className="devicon-java-plain colored"></i><span>Java</span></div>
          <div className="icon"><i className="devicon-python-plain colored"></i><span>Python</span></div>
          <div className="icon"><i className="devicon-c-plain colored"></i><span>C</span></div>
          <div className="icon"><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
          <div className="icon"><i className="devicon-mysql-plain colored"></i><span>SQL</span></div>
          <div className="icon"><i className="devicon-html5-plain colored"></i><span>HTML</span></div>
          <div className="icon"><i className="devicon-css3-plain colored"></i><span>CSS</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>Frameworks & Web Technologies</h3><div className="icons">
          <div className="icon"><i className="devicon-nodejs-plain colored"></i><span>Node.js</span></div>
          <div className="icon"><i className="devicon-express-original colored"></i><span>Express</span></div>
          <div className="icon"><i className="devicon-react-original colored"></i><span>React</span></div>
          <div className="icon"><i className="devicon-fastapi-plain colored"></i><span>REST APIs</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>Data Tools</h3><div className="icons">
          <div className="icon"><i className="devicon-python-plain colored"></i><span>scikit‑learn</span></div>
          <div className="icon spark"><ClusterIcon /><span>Spark</span></div>
          <div className="icon"><i className="devicon-numpy-original colored"></i><span>Regression</span></div>
          <div className="icon"><i className="devicon-pandas-original colored"></i><span>Clustering</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>Cloud & Development Tools</h3><div className="icons">
          <div className="icon"><i className="devicon-git-plain colored"></i><span>Git</span></div>
          <div className="icon"><i className="devicon-amazonwebservices-original colored"></i><span>AWS</span></div>
          <div className="icon"><i className="devicon-docker-plain colored"></i><span>Docker</span></div>
          <div className="icon"><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>BI & Visualization</h3><div className="icons">
          <div className="icon txt">📊<span>Tableau</span></div>
          <div className="icon txt">📈<span>Power BI</span></div>
          <div className="icon txt">🧮<span>Excel</span></div>
          <div className="icon txt">🌀<span>Agile (SCRUM)</span></div>
        </div></Reveal>
      </div>
    </section>
  )
}
