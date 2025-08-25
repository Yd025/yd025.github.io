import { useTypewriter } from '../hooks/useTypewriter';
import { Reveal } from '../components/Reveal';

// Step 1: Import your images from the assets folder
import heroBg from '../assets/images/Untitled_Artwork.jpg';
import heroImage from '../assets/images/DSC_6679.jpg';

const GREETINGS = [
  "Hello,\nI am Adelin",
  "你好，\n我是马一丹"
];

export function Home() {
  const typewriterText = useTypewriter(GREETINGS);

  return (
    <>
      {/* Step 2: Apply the hero background image using an inline style */}
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
            {/* Step 3: Apply the second background image here */}
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
                I am currently a student at the University of Washington, pursuing a double degree in Computer Engineering at the Paul G Allen School of Computer Science and Engineering and Mathematics at the College of Arts and Sciences. I am deeply fascinated by the intersection of technology and innovation, particularly in the fields of space technology and medical technology. I was born and raised in Singapore, but I am currently based in Seattle, Washington.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="about">
          <div className="container">
            <div className="page-header">
              <h1>Skills</h1>
            </div>
            <div className="about-content">
              <p>
                Technical: Java, Python, MATLAB, SQL, HTML, CSS, JavaScript.
              </p>
              <p>
                Laboratory: Computer Aided Design (OnShape), 3-D printing, soldering, data cleaning and visualization with Python.
              </p>
              <p>
                Language: Native fluency in English and Mandarin; working proficiency in Korean; elementary proficiency in French.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}