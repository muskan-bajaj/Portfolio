import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <form className='contactPage' id="contactPage" action='https://formspree.io/f/mvonnaza' accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
        <div className="contactLeft">
            <div className="contactHeading">
                Got a project in <span>mind?</span>
            </div>
        </div>
        <div className="contactRight">
            <div className="NameEmail">
                <div className="contactName">
                    <label htmlFor="name">Your name</label>
                    <br />
                    <input type="text" id="name" placeholder="Name" name="name"/>
                </div>
                <div className="contactEmail">
                    <label htmlFor="email">Your email</label>
                    <br />
                    <input type="email" id="email" placeholder='Email' name='email' />
                </div>
            </div>
            <div className="message">
                <div className="contactMssg">
                    <label htmlFor="mssg">Your Message</label>
                    <br />
                    <textarea cols={64} rows={13} id="mssg" placeholder="Message" name='message' />
                </div>
            </div>
            <div className="button">
                <button type='submit' className='buttonMssg'>
                    Send Message
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_25_10046)">
                    <path d="M25 2.5L14 13.5" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 2.5L18 22.5L14 13.5L5 9.5L25 2.5Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_25_10046" x="-1" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_10046"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_10046" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
                </button>
            </div>
        </div>
    </form>
  )
}
