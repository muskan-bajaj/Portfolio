import React from 'react'
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom'

import "./Home.css"

export default function Home() {
  return (
    <div className="homePage" id="homePage">
        <div className='homeText'>
            <div className='homeHeading'>
                FULL STACK <span>DEVELOPER</span>
            </div>
            <div className="homeButtons">
                <button className='hireMe'>
                    <HashLink smooth to='/#contactPage' style={{textDecoration:'none', color:'white'}}>
                        Hire Me
                    </HashLink>
                </button>
                <button className='download'>
                    <Link to='https://drive.google.com/uc?id=1FSrQswN4-MhJN7Htn3p8YWGclPYL_lXT&export=download' style={{textDecoration:'none', color:'white'}}>
                        Download CV
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}
