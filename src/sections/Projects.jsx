import Reveal from '../components/Reveal.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title"><Reveal>Projects</Reveal></h2>
      <div className="mix-timeline projects">
        <Reveal className="t-item"><div className="t-date">2025</div><div className="t-card"><h3>Task Tracker Web App</h3><p className="stack">JavaScript • HTML • CSS • Node.js • Express.js • MongoDB • REST APIs • Git</p><ul>
          <li>Developed a lightweight task management web application using Node.js and Express.js to support CRUD operations for daily task
            tracking.</li>
          <li>Designed a responsive frontend with HTML and CSS, enabling users to create, edit, delete, and mark tasks as completed.</li>
          <li>Implemented RESTful APIs to handle task operations and persisted data using MongoDB for efficient storage and retrieval.</li>
          <li>Dockerized services; MongoDB indexes for fast lookups; centralized error handling.</li>
        </ul><div className="project-links"><a className="btn outline small ext" href="#" target="_blank" rel="noopener">GitHub ↗</a></div></div></Reveal>

        <Reveal className="t-item"><div className="t-date">2025</div><div className="t-card"><h3>AI‑Powered Chatbot</h3><p className="stack">JavaScript • HTML5 • CSS3 • Google Gemini API • DOM Manipulation • UX Design • EmojiMart • REST API</p><ul>
          <li>Built a fully responsive AI chatbot interface using HTML, CSS, and vanilla JavaScript, optimized for cross-device compatibility and
            seamless user interaction.</li>
          <li>Integrated Google Gemini 1.5 Flash APIto process real-time text and image inputs via base64 encoding, enabling dynamic, context-aware
            responses.</li>
          <li>Implemented efficient DOM-based message rendering, animated loading indicators, and chat history tracking to deliver a high-
            performance user experience.</li>
          <li>Usage analytics and latency tracing to drive prompt and UX improvements.</li>
        </ul><div className="project-links"><a className="btn outline small ext" href="#" target="_blank" rel="noopener">GitHub ↗</a></div></div></Reveal>

        <Reveal className="t-item"><div className="t-date">2024</div><div className="t-card"><h3>Book Recommendation & Analytics</h3><p className="stack">Python • Pandas • Apache Spark • Machine Learning • K-Means • Collaborative Filtering</p><ul>
          <li>Developed a collaborative filtering-based system for 1M+ ratings on 270K+ books, recommending top-rated books based on user
            preferences.</li>
          <li>Executed clustering analyses using K-Means, Hierarchical, and DBSCAN algorithms to categorize 10,000+ users based on reading behavior,
            improving potential user engagement by 25%.</li>
          <li>Trained Linear, Logistic, and Decision Tree regression models to predict users’ ages from book ratings and achieved 98% accuracy with
            the best model by reducing RMSE by 50% using K-fold cross-validation.</li>

        </ul><div className="project-links"><a className="btn outline small ext" href="https://drive.google.com/drive/folders/1vj-OkE7cVKt9Iwd05WG1gPzvr1p97iO2?usp=sharing" target="_blank" rel="noopener">Drive ↗</a></div></div></Reveal>

        <Reveal className="t-item"><div className="t-date">2024</div><div className="t-card"><h3>Sports League Analytics Dashboard</h3><p className="stack">Tableau • Data Preprocessing and Cleaning • Interactive Dashboard Development • Performance Optimization • 243K+ records</p><ul>
          <li>Engineered a large-scale IPL analytics dashboard with 243,817 ball-by-ball records and 1,024 match summaries, developing 10+
            interactive visualizations to explore player and team performance trends dynamically.</li>
          <li>Reduced missing-values impact from 100% to 0% and improved analysis time by 60%.</li>
          <li>Optimized data-ink ratio from 80% to 100%, improving chart clarity and interpretability.</li>
          <li>Integrated advanced filters, calculated fields, and drill-down capabilities, which reduced analysis time by 40%.</li>
        </ul><div className="project-links"><a className="btn outline small ext" href="https://public.tableau.com/app/profile/raviteja.buchaiahgari/viz/IPLAnalyticsDashboard/Dashboard1" target="_blank" rel="noopener">Tableau Dashboard ↗</a></div></div></Reveal>
      </div>
    </section>
  )
}
