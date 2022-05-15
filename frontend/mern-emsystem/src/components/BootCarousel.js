import React from 'react'
import Categories from './Categories'
import dummydata from './dummydata'
import {Carousel, Row, Col} from 'react-bootstrap'

export default function BootCarousel() {

    const data = dummydata.map( obj => {
        return(

        <Carousel.Item className='carousel-item'>

            <Categories 
                {...obj}
            />

        </Carousel.Item>

        )
      })

  return (
    
    <div className='carousel-body'>
        <Carousel interval={5000} indicators={false}>

            {data}

        </Carousel>
    </div>
  )
}
