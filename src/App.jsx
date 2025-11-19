// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home'
import Navigation from './components/navbar'
import About from './components/about'
import Contact from './components/contact';
import Gallery from './components/gallery'
import Footer from './components/footer'


function App() {


  return (
    <div>
    <Navigation/>
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>

    <Footer/>
    </div>

  )
}

export default App