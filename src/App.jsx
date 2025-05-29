import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BlogPage from './pages/BlogPage';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CurrentWork from './components/CurrentWork';
import Projects from './components/Projects';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArticleIcon from '@mui/icons-material/Article';

// Assets
import cyberBotsWorking from "./assets/cyber-bots-working.gif";

const HomePage = () => (
  <div className="App">
    <div className="Hero">
      <div className="displaySpace">
        <div className="welcomeTyper">
          <ReactTypingEffect
            cursor="▊"
            typingDelay={1200}
            eraseDelay={1000}
            speed={50}
            eraseSpeed={50}
            text={["Hello World!", "Welcome to my portfolio!"]}
          />
        </div>

        <div className="imageHolderParent">
          <a
            href="https://www.linkedin.com/in/nishantsh20/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imageHolder"></div>
          </a>
        </div>

        <div className="locationInfo">
          <LocationOnIcon sx={{ fontSize: 24 }} />
          <span>New York, NY</span>
        </div>

        <div className="buttonGroup">
          <Link to="/blog" className="blogButton">
            <span>Read Blog</span>
            <ArrowOutwardIcon className="arrowIcon" />
          </Link>
          <a href="mailto:nishantsharma@nyu.edu" className="mailButton">
            <EmailIcon />
            <span>Mail Me</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resumeButton">
            <DescriptionIcon />
            <span>Get Resume</span>
          </a>
        </div>

        <div className="socialView">
          <a
            href="https://www.linkedin.com/in/nishantsh20/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <LinkedInIcon sx={{ fontSize: 25 }} />
            </div>
          </a>

          <a
            href="https://github.com/nishant-ai"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <GitHubIcon sx={{ fontSize: 25 }} />
            </div>
          </a>

          <a
            href="https://medium.com/@neeshant"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <ArticleIcon sx={{ fontSize: 25 }} />
            </div>
          </a>

          <a
            href="https://twitter.com/Nishant59625688"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <TwitterIcon sx={{ fontSize: 25 }} />
            </div>
          </a>
        </div>
      </div>

      <div className="contentSpace">
        <p className="terminalAccess">
          <b>
            root@
            <span
              style={{
                color: "#ffffffcc",
              }}
            >
              nishant
            </span>{" "}
            %{" "}
          </b>
          <span style={{ color: "yellow" }}>sudo</span> whoami
        </p>
        <h1 className="title">Know Me Yet?</h1>
        <div className="shortDescription">
          Hey there, I'm Nishant Sharma!
          I'm a Master's student in Computer Engineering at NYU Tandon, currently diving into Large Language Models and agentic AI applications at my startup, WortAI.
          Earlier, I co-founded Ingelt Board, a SaaS platform that connected over 5,000 students with global universities, accommodations, and educational financing options.
          With hands-on experience in full-stack development, deployment optimization, and complex problem-solving, I'm passionate about building impactful tech products. I'm seeking opportunities in Software Engineering, Machine Learning, and AI Development.
        </div>
      </div>
    </div>

    <div className="gifSpace">
      <h1>Constantly Creating Something New!</h1>
      <img src={cyberBotsWorking} alt="" className="coolGIF" />
      <p className="descriptionImg">
        Quoting the great Steve Jobs, "The only way to do great work is to love what you do."
      </p>
    </div>

    <div className="scrollDownArrow" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
      <div className="arrow">
        <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
      </div>
    </div>

    <CurrentWork />
    <Projects />

    <div className="abstractSection">
      <h2 className="sectionTitle">My Tech Stack</h2>
      
      <div className="skillsContainer">
        <div className="skillCategory">
          <div className="categoryHeader">
            <CodeIcon />
            <h3>Languages & Frameworks</h3>
          </div>
          <div className="skillsList">
            <span className="skillTag">C++</span>
            <span className="skillTag">Java</span>
            <span className="skillTag">SQL</span>
            <span className="skillTag">Python</span>
            <span className="skillTag">TypeScript</span>
            <span className="skillTag">JavaScript</span>
            <span className="skillTag">React</span>
            <span className="skillTag">Next.js</span>
            <span className="skillTag">Node.js</span>
            <span className="skillTag">Express</span>
            <span className="skillTag">FastAPI</span>
          </div>
        </div>

        <div className="skillCategory">
          <div className="categoryHeader">
            <StorageIcon />
            <h3>Databases & Storage</h3>
          </div>
          <div className="skillsList">
            <span className="skillTag">MongoDB</span>
            <span className="skillTag">PostgreSQL</span>
            <span className="skillTag">Redis</span>
            <span className="skillTag">Firebase</span>
            <span className="skillTag">S3</span>
            <span className="skillTag">DynamoDB</span>
          </div>
        </div>

        <div className="skillCategory">
          <div className="categoryHeader">
            <CloudIcon />
            <h3>Cloud & DevOps</h3>
          </div>
          <div className="skillsList">
            <span className="skillTag">AWS</span>
            <span className="skillTag">Docker</span>
            <span className="skillTag">Kubernetes</span>
            <span className="skillTag">CI/CD</span>
            <span className="skillTag">Git</span>
            <span className="skillTag">Linux</span>
          </div>
        </div>

        <div className="skillCategory">
          <div className="categoryHeader">
            <BoltIcon />
            <h3>AI & Machine Learning</h3>
          </div>
          <div className="skillsList">
            <span className="skillTag">LangChain</span>
            <span className="skillTag">LLMs</span>
            <span className="skillTag">OpenAI</span>
            <span className="skillTag">Transformers</span>
            <span className="skillTag">PyTorch</span>
            <span className="skillTag">TensorFlow</span>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer">
      <p>
        Made with ❤️ by Nishant Sharma
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} Nishant Sharma. All rights reserved.
      </p>
    </footer>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

