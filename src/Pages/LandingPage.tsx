import React from 'react'
import About from '../Components/About'
import Hero from '../Components/Hero'

import Contact from '../Components/Contact'
import Projects from '../Components/Projects'

const LandingPage :React.FC= () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        

    </div>
  )
}

export default LandingPage