import data from '../data/projectsData.json';

export function Projects() {
  return (
    <section className="container">
      <div className="page-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {data.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span className="project-technology" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link, linkIndex) => (
                  <a 
                    href={link.url} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={linkIndex}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
