import React from 'react'
import './carousel.css'


export default function Carouselmg({image}) {

  return (
     <div className='carouselimg-body'>

        <img alt='' src={image} className='carouselimg-img'/>
        
     </div>
  )
}
