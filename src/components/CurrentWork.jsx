import { GitHub, Launch, Email } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookIcon from '@mui/icons-material/Book';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CurrentWork = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDemoClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section className="currentWorkSection">
      <h2 className="sectionTitle">What's Going?</h2>
      <div className="currentWorkContainer">
        <div className="workCard">
          <h3 className="workTitle">Wort.AI</h3>
          <h4 className="workSubtitle">A Stealth AI Startup</h4>
          <p className="workDescription">
            I'm building a Stealth AI Startup based on Agentic AI and Large Language Models. The goal is to make life easier by creating necessary tools for the future that democratize the power of AI.
          </p>
          <div className="workLinks">
            <a href="#" className="workLink" onClick={handleDemoClick}>
              <Launch /> Live Demo
            </a>
            <a href="mailto:nishantsharma@nyu.edu?subject=Hey%20Nishant!%20I%20wanna%20chat%20about%20Wort.AI" className="workLink">
              <Email /> Let's Build Together
            </a>
          </div>
        </div>

        <div className="workCard">
          <h3 className="workTitle">Master of Science in Computer Engineering</h3>
          <h4 className="workSubtitle">New York University, Tandon School of Engineering</h4>
          <p className="workDescription">
            Currently pursuing my Master's degree with a focus on Artificial Intelligence and Machine Learning.
            Expected graduation: May 2026.
          </p>
          <ul className="workHighlights">
            <li>Specializing in Artificial Intelligence and Machine Learning</li>
            <li>Research focus on Large Language Models and Agentic AI</li>
            <li>Relevant coursework: Internet Architecture and Protocols, Machine Learning, Real-time Embedded Systems, Deep Learning, Machine Learning Systems Engineering and Operations, Modern ML Theory and Stochastic Systems, Advanced Computer Vision, Natural Language Processing</li>
          </ul>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              <CloseIcon />
            </button>
            <div className="popup-emoji">🚀</div>
            <h3 className="popup-title">Coming Soon!</h3>
            <p className="popup-message">
              We're crafting something extraordinary! The Wort demo is currently in development,
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CurrentWork; 