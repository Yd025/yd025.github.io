import { useState } from 'react';
import data from '../data/projectsData.json';
import { DetailModal } from '../components/DetailModal';

export type ProjectType = 'all' | 'data' | 'hackathon' | 'class' | 'personal' | 'club';

const TYPE_LABELS: Record<ProjectType, string> = {
  all: 'All',
  data: 'Data',
  hackathon: 'Hackathon',
  class: 'Class',
  personal: 'Personal',
  club: 'Club',
};

export function Projects() {
  const [filter, setFilter] = useState<ProjectType>('all');
  const [modalProject, setModalProject] = useState<(typeof data)[0] | null>(null);

  const filtered =
    filter === 'all'
      ? data
      : data.filter((p) => (p as { type?: string }).type === filter);

  const links = (p: (typeof data)[0]) =>
    (p.links || []).filter((l: { url?: string }) => l.url);
  const embedUrl = (p: (typeof data)[0]) =>
    (p as { embedUrl?: string }).embedUrl || (p as { videoUrl?: string }).videoUrl;

  return (
    <section className="container projects-page">
      <div className="page-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-filter" role="tablist" aria-label="Filter projects by type">
        {(Object.keys(TYPE_LABELS) as ProjectType[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`projects-filter-btn ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {TYPE_LABELS[key]}
          </button>
        ))}
      </div>

      <div className="projects-grid projects-grid-cards">
        {filtered.map((project, index) => {
          const type = (project as { type?: string }).type ?? 'personal';
          const projectLinks = links(project);
          return (
            <article
              className="project-card-v2 project-card-clickable"
              key={`${project.title}-${index}`}
              onClick={() => setModalProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setModalProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
            >
              <span className="project-card-type" data-type={type}>
                {TYPE_LABELS[type as ProjectType] || type}
              </span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-card-tech">
                {project.technologies.slice(0, 5).map((tech: string, i: number) => (
                  <span className="project-tech-pill" key={i}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="project-tech-more">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
              {projectLinks.length > 0 && (
                <div className="project-card-links" onClick={(e) => e.stopPropagation()}>
                  {projectLinks.map((link: { text: string; url: string }, i: number) => (
                    <a
                      href={link.url}
                      className="project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                    >
                      {link.text || 'Link'}
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="projects-empty">No projects in this category yet.</p>
      )}

      <DetailModal
        open={!!modalProject}
        onClose={() => setModalProject(null)}
        title={modalProject?.title ?? ''}
        subtitle={modalProject ? TYPE_LABELS[(modalProject as { type?: string }).type as ProjectType] : undefined}
      >
        {modalProject && (
          <>
            {embedUrl(modalProject) && (
              <div className="detail-embed">
                <iframe
                  src={embedUrl(modalProject)}
                  title={modalProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <p className="detail-modal-desc">{modalProject.description}</p>
            <div className="detail-modal-tech">
              <strong>Technologies:</strong>{' '}
              {modalProject.technologies.join(', ')}
            </div>
            {links(modalProject).length > 0 && (
              <div className="detail-modal-links">
                <strong>Links:</strong>
                <div className="detail-modal-links-list">
                  {links(modalProject).map((link: { text: string; url: string }, i: number) => (
                    <a
                      href={link.url}
                      className="project-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.text || 'Link'}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </DetailModal>
    </section>
  );
}
