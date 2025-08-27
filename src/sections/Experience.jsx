import Reveal from '../components/Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="section-title"><Reveal>Experience</Reveal></h2>
      <Reveal className="xcard"><h3>Data Analyst (Tableau) — ASU Business Intelligence</h3><p className="period">Jan 2025 – Present</p><ul><li>Designed and deployed 15+ interactive dashboards adopted by 300+ stakeholders across admissions and EOSS units.</li><li>Reduced manual reporting cycles by 40% via parameterized extracts and scheduled subscriptions.</li><li>Improved dashboard load time by 60% using optimized calculations, custom SQL, and extract partitioning.</li><li>Automated recurring dashboard updates and optimized workbook performance, improving load time by 60% and increasing user engagement
        by 35%.</li></ul></Reveal>
      <Reveal className="xcard"><h3>Software Engineering Intern — Smart SOC Solutions</h3><p className="period">Jul 2022 – Jul 2023</p><ul><li>Developed scalable machine learning models in Python using scikit-learn and TensorFlow, boosting fault detection accuracy in semicon-
        ductor systems by 20%.</li><li>Optimized data pipelines with Pandas and NumPy, reducing preprocessing time by 30% and enhancing model training efficiency.</li><li>Engineered interactiveTableau dashboardsfor performance monitoring, enabling data-driven debugging and accelerating analysis turnaround
          by 30%.</li></ul></Reveal>
    </section>
  )
}
