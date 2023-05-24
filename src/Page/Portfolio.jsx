import React from 'react'
import Home from '../component/Home/Home'
import AboutMe from '../component/AboutMe/AboutMe'
import Projects from '../component/Projects/Projects'
import Contact from '../component/Contact/Contact'
import Footer from '../component/Footer/Footer'

export default function portfolio() {
  return (
    <div>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}
