import React from 'react'
import { HashLink } from "react-router-hash-link";

import "../NavBar/NavBar.css"

export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='name'>
            Muskan Bajaj
        </div>
        <div className='links'>
            <ul className='linksList'>
                <li><HashLink smooth to='/#homePage' className='linksListItem'>Home</HashLink></li>
                <li><HashLink smooth to='/#aboutMePage' className='linksListItem'>About Me</HashLink></li>
                <li><HashLink smooth to='/#footer' className='linksListItem'>Contact</HashLink></li>
            </ul>
        </div>
    </div>
  )
}
