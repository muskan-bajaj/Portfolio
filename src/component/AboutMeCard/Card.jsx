import React from 'react'
import './Card.css'

import {aboutMe} from '../../data/AboutMe'

export default function Card() {
  return (
    <div className='aboutMeCard'>
        {aboutMe.map((data)=>{
            return(
                <div className='AcardParent'>
                <div className='AcardIcon'>{data.img}</div>
                <div className="AcardText">
                    <div className="AcardHeading">{data.title}</div>
                    <div className="AcardDetails">
                        {/* <ul>
                            <li>
                                {data.des.d2}
                            </li>
                            <li>
                                {data.des.d1}
                            </li>
                            <li>
                                {data.des.d3}
                            </li>
                            <li>
                                {data.des.d4}
                            </li>
                        </ul> */}
                        {data.des.d2}
                        <br/>
                        {data.des.d1}
                        <br/>
                        {data.des.d3}
                        <br/>
                        {data.des.d4}
                    </div>
                </div>
                </div>
            )
        })}
    </div>
  )
}
