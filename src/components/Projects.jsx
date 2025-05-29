import { useState } from 'react';
import { 
  GitHub, 
  Launch, 
  KeyboardArrowDown,
  Code,
  Psychology,
  SportsBasketball
} from '@mui/icons-material';

const Projects = () => {
  const [expandedRepos, setExpandedRepos] = useState({});

  const projects = [
    {
      title: "KronosAI",
      description: "A study over Long Tail Problem of AI for E-commerce. Developed a comprehensive solution to address the challenges of long-tail product recommendations in e-commerce using advanced AI techniques.",
      techStack: ["Python", "React", "Django", "Machine Learning", "LangChain"],
      icon: <Psychology sx={{ color: '#00f3ff', fontSize: 28 }} />,
      repos: [
        {
          name: "Kronos-Client",
          url: "https://github.com/nishant-ai/Kronos-Client"
        },
        {
          name: "Kronos-Server",
          url: "https://github.com/nishant-ai/Kronos-Server"
        },
        {
          name: "Kronos-Dashboard",
          url: "http://github.com/nishant-ai/Kronos-Dashboard"
        }
      ]
    },
    {
      title: "BERT-tuned-AGNews",
      description: "Fine-tuning BERT models over AGNews Dataset for improved text classification and news categorization. Implemented state-of-the-art NLP techniques for better accuracy.",
      techStack: ["Python", "PyTorch", "Transformers", "BERT", "NLP"],
      icon: <Code sx={{ color: '#00f3ff', fontSize: 28 }} />,
      repos: [
        {
          name: "BERT-tuned-AGNews",
          url: "https://github.com/nishant-ai/BERT-tuned-AGNews"
        }
      ]
    },
    {
      title: "Pickup WebApp",
      description: "A hackathon project that shows Pickup Games in your area using ML-based algorithms. Helps users find and join local sports games and activities.",
      techStack: ["React", "Node.js", "Machine Learning", "Google Maps API"],
      icon: <SportsBasketball sx={{ color: '#00f3ff', fontSize: 28 }} />,
      repos: [
        {
          name: "pick-up-web-app",
          url: "https://github.com/nishant-ai/pick-up-web-app"
        },
        {
          name: "Pickup-ML",
          url: "https://github.com/nishant-ai/Pickup-ML"
        }
      ]
    }
  ];

  const toggleRepos = (index) => {
    setExpandedRepos(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="projectsSection">
      <h2 className="sectionTitle">Featured Projects</h2>
      <div className="projectsContainer">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="projectContent">
              <div className="projectHeader">
                {project.icon}
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="techStack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="projectLinks">
              <button 
                className={`toggleRepos ${expandedRepos[index] ? 'expanded' : ''}`}
                onClick={() => toggleRepos(index)}
              >
                <GitHub sx={{ fontSize: 20 }} />
                {expandedRepos[index] ? 'Hide Repos' : 'View Repos'}
                <KeyboardArrowDown sx={{ fontSize: 20 }} />
              </button>
            </div>
            <div className={`repoList ${expandedRepos[index] ? 'expanded' : ''}`}>
              {project.repos.map((repo, repoIndex) => (
                <div key={repoIndex} className="repoItem">
                  <GitHub sx={{ fontSize: 18 }} />
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                  <Launch sx={{ fontSize: 18 }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 