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
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <img src = "\images\logo.png" className = "navbar-brand"/>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects"><b>Projects</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="mailto:amandaadoyi@gmail.com"><b>Hello</b> &#128075;</a>
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
    <p id = "copyright"><b>&#169; 2024 Built by me</b></p>
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
