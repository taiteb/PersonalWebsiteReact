import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Recent from './pages/Recent'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <>
    <nav className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          {/* <Link to='/contact'>Contact</Link> */}
          <Link to='/recent'>Recent Projects</Link>
        </nav>
      <header role='banner'>
        <h1>Taite McGrady</h1>
        <iframe src="https://taiteb.github.io/gradientSweep" scrolling='no' ></iframe>
        
      </header>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        {/* <Route path='/Contact' element={<Contact />} /> */}
        <Route path='/recent' element={<Recent />} />
      </Routes>
    </>
  )
}

export default App
