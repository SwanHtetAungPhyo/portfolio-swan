import './Header.css'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const sections = ['summary', 'skills', 'experience', 'projects', 'education']

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile">
          <h1>Swan Htet Aung Phyo</h1>
          <p className="title">Backend Engineer | DevOps Specialist</p>
          <div className="contact-info">
            <a href="mailto:swanhtetaungp@gmail.com">swanhtetaungp@gmail.com</a>
            <span>📍 Kraków, Poland</span>
            <a href="https://github.com/SwanHtetAungPhyo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/swan-htet-aung-phyo-317912273" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <nav className="nav">
          {sections.map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
