import { useState } from 'react'
import nidhiPic from './assets/nidhi.png'
import project1 from './assets/studyshala1.png'

import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import InfoSection from './components/InfoSection'
import Certificates from './components/Certificates'
import Footer from './components/Footer'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <InfoSection />
      <Certificates />
      <Footer/>
    </>
  );
}

export default App;
