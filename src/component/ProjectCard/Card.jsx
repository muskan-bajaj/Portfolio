import React from 'react'
import './Card.css'

import {project} from '../../data/Project'

export default function Card() {
  return (
    <div className='projectCard'>
        {project.map((data)=>{
            return(
                <div className='PcardParent'>
                    <div className='Pcard'>
                        <a href={data.link}><img src={data.img} alt=''></img></a>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
