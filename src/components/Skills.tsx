import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Go', 'Java', 'TypeScript']
    },
    {
      title: 'Frameworks & Technologies',
      skills: ['Go Fiber', 'Spring Boot', 'Docker', 'Redis', 'MySQL', 'REST API', 'gRPC', 'Message Queue', 'Next.js', 'AWS']
    },
    {
      title: 'Operating Systems',
      skills: ['Linux', 'macOS']
    },
    {
      title: 'Tools',
      skills: ['GitHub', 'Maven', 'YAML', 'Git', 'Markdown', 'Terraform', 'Pulumi', 'Ansible']
    },
    {
      title: 'Other',
      skills: ['Data Structures & Algorithms', 'Microservices', 'DevOps', 'CI/CD']
    }
  ]

  const certifications = [
    'HashiCorp Certified: Terraform Associate (003)',
    'LFE L1011: OpenAPI Fundamentals',
    'AWS Educate Getting Started with Security',
    'LFS101: Introduction to Linux',
    'LFD125: Security for Software Development Managers',
    'Accenture North America Coding Simulation'
  ]

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="cert-title">Certifications & Achievements</h2>
      <div className="certifications">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-item">
            <span className="cert-icon">🏆</span>
            <span>{cert}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
