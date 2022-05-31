import React from 'react'
import { Link } from 'react-router-dom'
import appstore from '../images/appstore.png'
import googleplay from '../images/googleplay.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin-logo.png'

import './footer.css'

export default function Footer() {
  return (
    <div className='footer-body'>

        <div className='footer-redirect'>

            <div className='footer-top-redirects'> 

            <a target='_blank' href={'https://apps.apple.com/eg/app/rabbit-20-mins-delivery/id1588565838'} >{<img alt='' src={appstore} />}</a>
            <a target='_blank' href={'https://play.google.com/store/apps/details?id=com.rabbit.mart&hl=en&gl=EG'} >{<img alt='' src={googleplay} />}</a>
           
            </div>
            <div className='footer-bottom-redirects'>

            <a target='_blank' href={'https://www.facebook.com/rabbitmart.eg/'} >{<img alt='' src={facebook} />}</a>
            <a target='_blank' href={'https://www.instagram.com/rabbitmart.eg/'} >{<img alt='' src={instagram} />}</a>
            <a target='_blank' href={'https://twitter.com/rabbitmart_eg'} >{<img alt='' src={twitter} />}</a>
            <a target='_blank' href={'https://www.linkedin.com/company/rabbitmart/'} >{<img alt='' src={linkedin} />}</a>

            </div>
            
        
        </div>

        <div className='footer-company'>

            <div className='company-title'>

                Company

            </div>

            <div className='company-buttons'>

                <Link to={'/'} className='hover'>Home</Link>
                <a href={'https://www.rabbitmart.com/rabbit-blog/'} className='hover'>Our Blog</a>
                <a href={'https://www.rabbitmart.com/rabbit-values/'} className='hover'>Our Values</a>
                <a href={'https://rabbitmart.breezy.hr/'} className='hover'>Careers</a>

            </div>

        </div>

        <div className='footer-links'>

            <div className='links-title'>

                Important Links

            </div>

            <div className='links-buttons'>
                
                <a href={'https://www.rabbitmart.com/contact-us/'} className='hover'>Contact Us</a>
                <a href={'https://www.rabbitmart.com/privacy-policy/'} className='hover'>Privacy Policy</a>

            </div>
            
        </div>

    </div>
  )
}
