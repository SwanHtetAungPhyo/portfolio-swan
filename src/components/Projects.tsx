import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'DevOps Engineering Portfolio',
      tech: ['Go', 'Docker', 'AWS', 'Terraform', 'Pulumi', 'Ansible'],
      description: 'Comprehensive DevOps projects covering Infrastructure as Code, container orchestration, and CI/CD automation. Built Docker log agent for real-time monitoring, event-driven microservices with NATS, and custom SCL configuration language.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'GitHub Agent',
      tech: ['Hono', 'Mastra AI', 'AWS'],
      description: 'Built an AI agent for GitHub management using Hono and Mastra AI agent framework. Contributing this template to the Mastra AI project. Deployed to AWS cloud.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'AWS KYC Verification API',
      tech: ['Go', 'Fiber', 'AWS Textract', 'AWS Rekognition', 'Docker'],
      description: 'Go-based REST API for automated Know Your Customer verification. Leverages AWS Textract for ID document analysis and AWS Rekognition for facial comparison with 70% minimum similarity threshold.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'TBlang - Infrastructure as Code Language',
      tech: ['Go', 'gRPC', 'AWS'],
      description: 'Modern infrastructure management language built in Go with gRPC plugin architecture. Declarative syntax with automatic dependency resolution, loops, and state tracking via .tbstate files.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'Custom API Gateway',
      tech: ['Go', 'Docker', 'YAML'],
      description: 'Built a scalable API Gateway using Go, Docker, and YAML configurations. Implemented fault-tolerant routing and robust request handling for microservices.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'Blockchain with Go',
      tech: ['Go', 'Blockchain', 'Cryptography'],
      description: 'Implemented a basic blockchain system using Go, following Ethereum\'s signature standards. Built signature verification mechanisms and integrated a Merkle tree for data integrity.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'Multi-Tenant CMS for LMS',
      tech: ['Go', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Terraform'],
      description: 'Led 10 developers in building a microservices-based Content Management System. Features multi-tenant support, MFA, certificate signing, Elasticsearch integration, and comprehensive DevOps practices.',
      link: 'https://github.com/SwanHtetAungPhyo'
    },
    {
      title: 'Marketplace Platform',
      tech: ['Go', 'gRPC', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets'],
      description: 'Led a 4-member team building a decentralized freelance marketplace with blockchain integration. Architected complete backend with microservices, real-time chat, and blockchain-based review verification.',
      link: 'https://github.com/SwanHtetAungPhyo'
    }
  ]

  return (
    <section className="projects">
      <h2>Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
