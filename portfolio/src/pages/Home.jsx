import {Outlet, Link} from 'react-router-dom'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiNestjs, SiMongodb, SiDjango, SiFlask, SiGraphql, SiPostgresql, SiPython, SiJavascript } from 'react-icons/si';

function Greet() {
    return (
        <>
        <div className = "overall">
        <div className = "greet">
            <div className = "greet2">
            <h4>Hello, I am a Backend Developer.</h4>
            <p>I love software development and simplicity.</p>
            </div>
        </div>
        <div className = "move">
            <img src = "\images\saly.png"/>
        </div>
        <div className = "about">
            <div className = "text1">
            <h3>My name is Amanda Ene Adoyi...</h3>
            <p> I’m a backend developer with a love for solving problems and building tools that make life easier. 
              I work mostly with Node.js, MongoDB, and relational databases, and I enjoy turning complex challenges into clean, working code. 
              When I’m coding, it feels like painting with logic - it’s where I'm most at home.
           </p>
            </div>
        </div>

  <div className="stack">
  <div className="tools">
    <h3>The Tools of my Trade...</h3>
    <p>I’m very familiar with the following technologies:</p>

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
  </div>
</div>
        <div className = "projects" id = "projects">
            <h3> Some of my Work </h3>
        <div className='proj'>
    <a href = "https://11plc.netlify.app"><div class="container">
  <img src="\images\mobil.jpg" alt="11plc site" class="image"/>
  <div class="overlay">
    <div class="text">My Version of the 11PLC Website</div>
  </div>
</div></a>

<a href = "https://lonercoder.pythonanywhere.com"><div class = "container">
<img src="\images\write.jpg" alt="freelance Site" class="image"/>
  <div class="overlay">
    <div class="text">My Freelance Writer Website</div>
  </div>
</div></a>

<a href = "https://penpalclassmate.pythonanywhere.com"><div class = "container">
<img src="\images\translate.jpg" alt="Language translation" class="image"/>
  <div class="overlay">
    <div class="text">Translate Ninja Website</div>
  </div>
</div></a>


<a href = "https://techscape.pythonanywhere.com/"><div class = "container">
<img src="\images\float.jpg" alt="Personal blog" class="image"/>
  <div class="overlay">
    <div class="text">Techscape Blog</div>
  </div>
</div></a>


<a href = "https://customemojis.netlify.app/"><div class = "container">
<img src="\images\emojis.jpg" alt="custom Emojis" class="image"/>
  <div class="overlay">
    <div class="text">Custom Emojis Site</div>
  </div>
</div></a>

        </div>
        </div>
        </div>
        </>
    )
}

function Home(){
    return (
        <>
        <Greet/>
        </>
    )
}

export default Home