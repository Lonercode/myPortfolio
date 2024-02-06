import {Outlet, Link} from 'react-router-dom'

function Greet() {
    return (
        <>
        <div className = "overall">
        <div className = "greet">
            <div className = "greet2">
            <h4>Hello, I am a Fullstack Developer.</h4>
            <p>I love Web Development. I love simplicity.</p>
            </div>
        </div>
        <div className = "move">
            <img src = "\images\saly.png"/>
        </div>
        <div className = "about">
            <div className = "text1">
            <h3>My name is Amanda Ene Adoyi...</h3>
            <p> I am Fullstack Developer with four years of experience building
                web pages. I am an IT Officer in the Council for the Regulation of
                Engineering in Nigeria (COREN) and have interned with Swizel Technologies
                Limited, delivering technological solutions to problems. I am passionate
                about web development. The world easily becomes my canvas when I code.
           </p>
            </div>
        </div>

        <div className = "stack">
            <div className='tools'>
            <h3>The Tools of my Trade...</h3>
            <p>I am very familiar with the following technologies: </p>
            <ul>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>NestJs</li>
                <li>Django Rest Framework (DRF)</li>
                <li>Django and Flask</li>
                <li>MongoDB</li>
                <li>API Architectures (REST and GraphQL)</li>
            </ul>
        </div>
        </div>

        <div className = "projects" id = "projects">
            <h3> My Work </h3>
            <p><b>Some of my work...</b></p>
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
<img src="\images\translate.jpg" alt="freelance Site" class="image"/>
  <div class="overlay">
    <div class="text">Translate Ninja Website</div>
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