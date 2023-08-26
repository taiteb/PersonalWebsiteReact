import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Recent from './pages/recent'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import About from './pages/about'
import './App.css'

function App() {

  return (
    <>
      <header role='banner'>
        <h1>Taite McGrady</h1>
        <iframe src="https://taiteb.github.io/gradientSweep" scrolling='no' ></iframe>
        <nav className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Recent />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
