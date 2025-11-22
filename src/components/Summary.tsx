import './Summary.css'

const Summary = () => {
  return (
    <section className="summary">
      <h2>Professional Summary</h2>
      <p>
        Highly motivated final year Computer Science student at AGH University of Science and Technology 
        with expertise in backend development (Go/Java). Currently working as the primary backend engineer 
        at Pembroke International College Ireland (EdTech startup). 2 years of open source contribution 
        experience and 1 year of professional software engineering experience working on a full-stack 
        (Next.js, Go, and AWS) card auction platform. Skilled in building scalable systems using 
        microservices and monolithic architectures. Fluent in English (B2). Open to impactful projects.
      </p>
      
      <div className="highlights">
        <div className="highlight-card">
          <h3>🎓 Education</h3>
          <p>Computer Science at AGH University</p>
        </div>
        <div className="highlight-card">
          <h3>💼 Experience</h3>
          <p>2+ years in software development</p>
        </div>
        <div className="highlight-card">
          <h3>🌍 Location</h3>
          <p>Kraków, Poland</p>
        </div>
        <div className="highlight-card">
          <h3>🔧 Specialization</h3>
          <p>Backend & DevOps Engineering</p>
        </div>
      </div>
    </section>
  )
}

export default Summary
