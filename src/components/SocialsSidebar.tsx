// Importing assets directly ensures they are processed by the build tool (Vite)
// and receive correct paths in the final output.
import gmailIcon from '../assets/images/gmail-old-svgrepo-com.svg';
import resumeIcon from '../assets/images/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg';
import linkedinIcon from '../assets/images/linkedin-svgrepo-com.svg';
import githubIcon from '../assets/images/github-142-svgrepo-com.svg';
import resumePdf from '../assets/resume/Yidan_Ma_Adelin_Resume_2025_10.pdf';


export function SocialsSidebar() {
  return (
    <div className="fixed-buttons">
      <a href="mailto:xiaoadelin@gmail.com? subject=Hello!" className="btn">
        <img src={gmailIcon} alt="Gmail Icon" className="icon" />
      </a>
      <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn">
        <img src={resumeIcon} alt="Resume Icon" className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/adelinmayidan" target="_blank" rel="noopener noreferrer" className="btn">
        <img src={linkedinIcon} alt="LinkedIn Icon" className="icon" />
      </a>
      <a href="https://github.com/Yd025" target="_blank" rel="noopener noreferrer" className="btn">
        <img src={githubIcon} alt="GitHub Icon" className="icon" />
      </a>
    </div>
  );
}
