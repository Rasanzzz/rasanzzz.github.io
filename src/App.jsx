import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import SystemStatus from './components/SystemStatus';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-primary selection:text-white font-sans">
        <Navbar />
        <SystemStatus />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
