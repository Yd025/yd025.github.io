import { useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { Reveal } from '../components/Reveal';
import { DetailModal } from '../components/DetailModal';
import { ImageCarousel } from '../components/ImageCarousel';
import data from '../data/currentInvolvementData.json';

import heroBg from '../assets/images/Untitled_Artwork.jpg';
import heroImage from '../assets/images/DSC_6679.jpg';

/* Carousel: add more images to src/assets/images and list them here (6–10 recommended). */
const CAROUSEL_IMAGES = [
  { src: heroBg, alt: 'Artwork' },
  { src: heroImage, alt: 'Portrait' },
  { src: heroBg, alt: 'Artwork' },
  { src: heroImage, alt: 'Portrait' },
  { src: heroBg, alt: 'Artwork' },
  { src: heroImage, alt: 'Portrait' },
  { src: heroBg, alt: 'Artwork' },
  { src: heroImage, alt: 'Portrait' },
];

const GREETINGS = [
  "Hello,\nI am Adelin",
  "你好，\n我是马一丹"
];

const skills = {
  technical: ["Java", "Python", "MATLAB", "SQL", "HTML", "CSS", "JavaScript", "UI/UX", "ReactJS", "React Native", "Git", "Figma", "Excel"],
  libraries: ["Pandas", "Seaborn", "NumPy", "Matplotlib", "Scikit-learn", "SciPy", "XGBoost", "Plotly", "YOLO", "FastAPI"],
  laboratory: ["CAD (OnShape)", "3D printing", "Soldering", "Data science", "Data management", "Data visualization", "Version control"],
  language: ["English (Native)", "Mandarin (Native)", "Korean (Working)", "French (Elementary)", "Japanese (Elementary)"]
};

export function Home() {
  const typewriterText = useTypewriter(GREETINGS);
  const [modalInvolvement, setModalInvolvement] = useState<typeof data.involvements[0] | null>(null);

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <div className="typewriter-text">
                  <span>{typewriterText}</span>
                  <span className="cursor"></span>
                </div>
              </h1>
              <p className="hero-description">
                <div className="pin">
                  and I am an engineer, creator, designer and many more.
                </div>
              </p>
            </div>

            <div 
              className="hero-image" 
              style={{ backgroundImage: `url(${heroImage})` }}
            ></div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="about">
          <div className="container">
            <div className="page-header">
              <h1>About Me</h1>
            </div>
            <div className="about-content">
              <p>
                I am currently a student at the University of Washington, pursuing a double degree in Computer Engineering at the Paul G Allen School of Computer Science and Engineering and Mathematics at the College of Arts and Sciences. 
                <br /><br />
                At a high level, I'm interested in how structure shapes behavior. Many of the systems I care about—hardware architectures, cyber-physical systems, large software platforms—are complex not because their components are complicated, but because of how those components interact. My academic and research interests center on modeling these interactions using graphs, optimization techniques, scalable simulation, and structure-aware AI. I enjoy working on systems where understanding why something behaves a certain way matters as much as making it work.
                <br /><br />
                Before college, I spent nine months working full-time at a nonprofit deploying technology for elderly communities. Communicating technical ideas to non-technical audiences and seeing technology's real-world impact fundamentally shaped how I think about engineering.
                <br /><br />
                I'm currently planning to apply to UW's BS/MS program, with long-term goals of becoming a research-focused software engineer or research scientist in industry. I value depth, interpretability, and rigor—and I'm most motivated by problems that reward careful thinking about structure, scale, and emergence.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <ImageCarousel images={CAROUSEL_IMAGES} duration={50} />
      </Reveal>

      <Reveal>
        <section className="container involvements-section">
          <div className="page-header">
            <h1>Current Involvements</h1>
          </div>
          <div className="involvements-grid">
            {data.involvements.map((item, index) => (
              <article
                className="involvement-card involvement-card-compact"
                key={`involvement-${index}`}
                onClick={() => setModalInvolvement(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setModalInvolvement(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.title}`}
              >
                <h3 className="involvement-title">{item.title}</h3>
                <p className="involvement-meta">{item.organization} · {item.date}</p>
                <span className="involvement-view-hint">View details →</span>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <DetailModal
        open={!!modalInvolvement}
        onClose={() => setModalInvolvement(null)}
        title={modalInvolvement?.title ?? ''}
        subtitle={modalInvolvement ? `${modalInvolvement.organization} · ${modalInvolvement.date}` : undefined}
      >
        {modalInvolvement && (
          <ul className="detail-modal-points">
            {modalInvolvement.points.map((point, pIndex) => (
              <li key={pIndex}>{point}</li>
            ))}
          </ul>
        )}
      </DetailModal>

      <Reveal>
        <section className="about section-with-photo">
          <div className="container">
            <div className="page-header">
              <h1>Skills</h1>
            </div>
            <div className="section-with-photo-inner">
              <div className="section-photo section-photo-left">
                {/* Replace with your image: <img src={yourImage} alt="You" /> or use style={{ backgroundImage: `url(${yourImage})` }} */}
                <div className="section-photo-placeholder" aria-hidden>Your photo</div>
              </div>
              <div className="section-content skills-section">
                <div className="skill-category">
                  <h4>Technical</h4>
                  <div className="skill-tags">
                    {skills.technical.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Libraries & Frameworks</h4>
                  <div className="skill-tags">
                    {skills.libraries.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Laboratory & Methodologies</h4>
                  <div className="skill-tags">
                    {skills.laboratory.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Languages</h4>
                  <div className="skill-tags">
                    {skills.language.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}