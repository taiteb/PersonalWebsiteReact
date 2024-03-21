import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Recent from './pages/Recent'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import './App.css'

function App() {

  const handleScroll = () => {
    const p5sketch = document.getElementById('p5sketch');
    const navbar = document.getElementById('navbar');
    let scrollBlur;
    let opacity;
    // locks blur to stop tracking past an effective point so it doesn't get blown out
    if (window.scrollY < 200) {
      scrollBlur = window.scrollY / (140);
      opacity = (100 - (window.scrollY/2)) / 100;
    } 
    p5sketch.style.filter = `blur(${scrollBlur}px)`;
    navbar.style.backgroundColor = `rgba(60, 42, 60, ${opacity})`;
    navbar.style.backdropFilter = `blur(${scrollBlur}px)`;
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <>
      <nav className='links' id='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/portfolio'>Portfolio</Link>
        {/* <Link to='/contact'>Contact</Link> */}
        <Link to='/recent'>Projects</Link>
      </nav>
      <header role='banner' id='header'>
        <h1>Taite McGrady</h1>
        <iframe src="https://taiteb.github.io/gradientSweep" scrolling='no' id='p5sketch'></iframe>
      </header>
      
      
      

      <Routes>
        <Route path='/' element={<Home handleScroll={handleScroll} />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        {/* <Route path='/Contact' element={<Contact />} /> */}
        <Route path='/recent' element={<Recent />} />
      </Routes>

      <iframe src="https://taiteb.github.io/Truchet/" scrolling='no' className='background'></iframe>
    </>
  )
}

export default App
