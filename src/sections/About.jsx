import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section container">
      <h2 className="section-title"><Reveal>About</Reveal></h2>
      <div className="mix-timeline">
        <Reveal className="t-item edu"><div className="t-date">2018 – 2023</div><div className="t-card"><h3>B.Tech (Integrated), Electronics & Communication — Indian Institute of Information Technology, Kancheepuram</h3><p>CGPA: 7.77/10</p></div></Reveal>
        <Reveal className="t-item edu"><div className="t-date">Jan 2024 – Dec 2025</div><div className="t-card"><h3>M.S. Information Technology — Arizona State University</h3><p>CGPA: 4.33/4</p></div></Reveal>
        <Reveal className="t-item exp"><div className="t-date">Jul 2022 – Jul 2023</div><div className="t-card"><h3>Software Engineering Intern — Smart SOC Solutions</h3><p>Developed ML models, optimized data pipelines, and built interactive dashboards, improving semiconductor fault detection accuracy by 20% and accelerating analysis by 30%.</p></div></Reveal>
        <Reveal className="t-item exp"><div className="t-date">Jan 2025 – Present</div><div className="t-card"><h3>Data Analyst (Tableau) — ASU Business Intelligence</h3><p>Designed and deployed 15+ scalable Tableau dashboards for 300+ stakeholders, automating reporting and improving load times by 60% while boosting engagement by 35%.</p></div></Reveal>
      </div>
    </section>
  )
}
