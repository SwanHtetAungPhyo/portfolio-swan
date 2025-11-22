import './Education.css'

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-card">
        <div className="edu-header">
          <div>
            <h3>Bachelor's in Computer Science</h3>
            <p className="university">AGH University of Science and Technology</p>
          </div>
          <span className="period">Oct 2023 - Feb 2027 (Expected)</span>
        </div>
        <p className="location">📍 Kraków, Poland</p>
      </div>

      <h2 className="section-title">Languages & International Experience</h2>
      <div className="languages-grid">
        <div className="lang-card">
          <h3>🗣️ Languages</h3>
          <ul>
            <li><strong>English:</strong> Professional working proficiency (B2)</li>
            <li><strong>Burmese:</strong> Native speaker</li>
          </ul>
        </div>
        <div className="lang-card">
          <h3>🌍 International Experience</h3>
          <ul>
            <li>Successfully led and coordinated development teams across Myanmar, Poland, and international remote developers</li>
            <li>Cross-Cultural Leadership: Experience managing diverse, multicultural development teams</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title">Current Focus & Interests</h2>
      <div className="focus-grid">
        <div className="focus-card">
          <h3>📚 Learning</h3>
          <ul>
            <li>Advanced Go</li>
            <li>AWS Cloud Services</li>
            <li>Solana Blockchain Development</li>
          </ul>
        </div>
        <div className="focus-card">
          <h3>💡 Interests</h3>
          <ul>
            <li>Distributed Systems</li>
            <li>Cache Systems</li>
            <li>Cloud Computing</li>
            <li>Microservices</li>
            <li>Blockchain Technology</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title">Hackathons & Competitions</h2>
      <div className="hackathon-card">
        <h3>🏆 AWS Kiro Hackathon by DevPost</h3>
        <p>Developing AI agent for log monitoring system with TypeScript and Mastra</p>
        <a href="https://kiro.devpost.com" target="_blank" rel="noopener noreferrer">View Hackathon →</a>
      </div>
    </section>
  )
}

export default Education
