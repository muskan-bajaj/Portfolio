import React from 'react'
import Card from '../ProjectCard/Card'
import './Projects.css'

export default function AboutMe() {
  return (
    <div className='projectPage'>
        <div className="project">
            <div className="projectHeading">My recent <span>works</span></div>
            <Card/>
        </div>
    </div>
  )
}
