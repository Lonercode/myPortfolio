import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function NavOrSth(){
  return (
  <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="/images/plogo.png" alt="logo" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto"> {/* ms-auto pushes ul to right */}
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">
            <b>Home</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            <b>Projects</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto:amandaadoyi@gmail.com">
            <b>Hello</b> 👋
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
  )
}

function Footer(){
  return (
    <>
    <div className='overallFooter'>
    <div className = "footer">
      <h4>Let's talk sometime...</h4>
      <div className = "logos">
      <a href = "https://github.com/Lonercode"><img src="\images\github.png" id = "firstLogo"/></a>
      <a href = "https://www.linkedin.com/in/amanda-adoyi-83725a198?trk=contact-info"><img src="\images\linkedin.png"/></a>
      <a href = "https://www.twitter.com/amanda_adoyi"><img src="\images\x.png"/></a>
    </div>
    </div>
    <div className = "end">
    <p id = "copyright"><b>&#169; 2025 Lonercode</b></p>
    </div>
    </div>

    </>
  )
}

function App() {
  

  return (
    <>
    <NavOrSth/>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
