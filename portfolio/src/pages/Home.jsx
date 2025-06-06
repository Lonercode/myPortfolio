import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import {
  SiExpress, SiNestjs, SiMongodb, SiDjango, SiFlask,
  SiGraphql, SiPostgresql, SiPython, SiJavascript
} from 'react-icons/si';

function Greet() {
  return (
    <div className="home">
      {/* Intro */}
      <section className="intro">
        <div className="intro-text">
          <h1>Hello, I’m a Backend Developer.</h1>
          <p>I love software development and clean, simple code.</p>
        </div>
        <div className="intro-img">
          <img src="/images/saly.png" alt="Floating man" />
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>My name is Amanda Ene Adoyi</h2>
        <p>
          I’m a backend developer with a love for solving problems and building tools that make life easier.
          I mostly work with Node.js, MongoDB, and relational databases, and I enjoy turning complex challenges
          into clean, working code. When I’m coding, it feels like painting with logic — it’s where I'm most at home.
        </p>
      </section>

      {/* Stack */}
      <section className="stack">
  <h2>Tech Stack</h2>
  <p>Tools I work with regularly:</p>
  <div className="tech-grid">
    <div className="tech-item"><FaReact /> ReactJS</div>
    <div className="tech-item"><FaNodeJs /> NodeJS</div>
    <div className="tech-item"><SiExpress /> Express</div>
    <div className="tech-item"><SiNestjs /> NestJS</div>
    <div className="tech-item"><SiDjango /> Django</div>
    <div className="tech-item"><SiFlask /> Flask</div>
    <div className="tech-item"><SiMongodb /> MongoDB</div>
    <div className="tech-item"><SiPostgresql /> PostgreSQL</div>
    <div className="tech-item"><FaDatabase /> REST APIs</div>
    <div className="tech-item"><SiPython /> Python</div>
    <div className="tech-item"><SiJavascript /> JavaScript</div>
    <div className="tech-item"><SiGraphql /> GraphQL</div>
  </div>
</section>


      {/* Projects */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          {[
            {
              href: "https://11plc.netlify.app",
              src: "/images/mobil.jpg",
              title: "My Version of the 11PLC Website"
            },
            {
              href: "https://lonercoder.pythonanywhere.com",
              src: "/images/write.jpg",
              title: "My Freelance Writer Website"
            },
            {
              href: "https://penpalclassmate.pythonanywhere.com",
              src: "/images/translate.jpg",
              title: "Translate Ninja Website"
            },
            {
              href: "https://techscape.pythonanywhere.com/",
              src: "/images/float.jpg",
              title: "Techscape Blog"
            },
            {
              href: "https://customemojis.netlify.app/",
              src: "/images/emojis.jpg",
              title: "Custom Emojis Site"
            }
          ].map(({ href, src, title }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="project" key={title}>
              <img src={src} alt={title} />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function Home() {
  return <Greet />;
}

export default Home;
