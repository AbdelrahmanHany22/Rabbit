import React, { useState } from 'react'
import './mobileapp.css'
import app from '../images/app.jpeg'
import appstore from '../images/appstore.png'
import googleplay from '../images/googleplay.png'

export default function MobileApp() {
  
    const [toggle,setToggle] = useState(true)

    const Page = (
        <div className='mobileapp-body'>

        <p className='toggle' onClick={() => {setToggle(!toggle)}}>X</p>

        <p className='mobileapp-text'>Download Our Mobile App</p>

        <img alt='' src={app} className='mobileapp-img'/>
        
        <div className='mobileapp-links'>

            <a target='_blank' href={'https://apps.apple.com/eg/app/rabbit-20-mins-delivery/id1588565838'} >{<img className='mobileapp-link' alt='' src={appstore} />}</a>
            <a target='_blank' href={'https://play.google.com/store/apps/details?id=com.rabbit.mart&hl=en&gl=EG'} >{<img className='mobileapp-link' alt='' src={googleplay} />}</a>

        </div>
        
    </div>
    )
  
    return (
    <>

        {toggle && Page}
    
    </>
  )
}
