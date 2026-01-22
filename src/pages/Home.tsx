import { useTypewriter } from '../hooks/useTypewriter';
import { Reveal } from '../components/Reveal';
import data from '../data/currentInvolvementData.json';

// Step 1: Import your images from the assets folder
import heroBg from '../assets/images/Untitled_Artwork.jpg';
import heroImage from '../assets/images/DSC_6679.jpg';

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
        <br />
        <section className="container">
          <div className="page-header">
            <h1>Current Involvements</h1>
          </div>
          {data.involvements.map((item, index) => (
            <div className="experience-tab" key={`involvement-${index}`}>
              <h3>{item.title}</h3>
              <div className="experience-tab-header">
                <div className="experience-tab-organization">{item.organization}</div>
                <div className="experience-tab-date">{item.date}</div>
              </div>
              <ul>
                {item.points.map((point, pIndex) => (
                  <li key={`involvement-point-${pIndex}`}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="about">
          <div className="container">
            <div className="page-header">
              <h1>Skills</h1>
            </div>
            {/* Updated Skills Section */}
            <div className="skills-section">
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
        </section>
      </Reveal>
    </>
  );
}