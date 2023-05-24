import React from 'react'
import Card from '../AboutMeCard/Card'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='aboutMePage' id="aboutMePage">
        <div className="aboutMe">
            <div className="aboutMeHeading">About <span>me</span></div>
            <Card/>
        </div>
    </div>
  )
}
