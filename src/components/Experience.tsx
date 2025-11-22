import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Backend Engineer',
      company: 'Pembroke International College - (P)You',
      location: 'Ireland - EdTech Startup',
      period: 'September 2025 - Present',
      description: [
        'Working as Backend engineer with Go',
        'Developing and maintaining AWS infrastructure with Terraform, Pulumi, and Ansible'
      ]
    },
    {
      title: 'Backend Engineer',
      company: 'Wolftagon',
      location: 'Remote',
      period: 'March 2025',
      description: [
        'Working as backend software engineer with Go and AWS',
        'Developing backend and AI agent for customer service',
        'Project: kolektibles.com'
      ]
    }
  ]

  const openSource = [
    {
      project: 'Loki - Industrial Level Log Monitoring Library',
      org: 'Grafana',
      description: 'Contributed to Grafana\'s log monitoring library',
      link: 'https://github.com/grafana/loki'
    },
    {
      project: 'Terraform Module - AWS Cloud Network and instances',
      org: 'Terraform Registry',
      description: 'Published Terraform module for AWS infrastructure',
      link: 'https://registry.terraform.io'
    }
  ]

  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <h3>{exp.title}</h3>
              <span className="period">{exp.period}</span>
            </div>
            <p className="company">{exp.company} - {exp.location}</p>
            <ul className="description">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="opensource-title">Open Source Contributions</h2>
      <div className="opensource-grid">
        {openSource.map((item, index) => (
          <div key={index} className="opensource-item">
            <h3>{item.project}</h3>
            <p className="org">{item.org}</p>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
