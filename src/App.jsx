import { useState } from 'react'
import nidhiPic from './assets/nidhi.png'
import project1 from './assets/studyshala1.png'

import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Stats from './components/Stats'
import About from './components/About'
import Journey from "./components/Journey";
import Projects from './components/Project'
import Certificates from './components/Certificates'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Intro />
      <Stats />
      <About />
      <Journey />
      <Projects />
      <Certificates />

      <ScrollToTop />
    </>
  );
}

export default App;
