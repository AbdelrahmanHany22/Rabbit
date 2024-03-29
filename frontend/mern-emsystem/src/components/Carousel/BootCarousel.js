import React from 'react'
import Carouselmg from './Carouselmg'
import picturedummydata from './picturedummydata'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './carousel.css'


export default function BootCarousel() {

    const data = picturedummydata.map( obj => {
        return(


            <Carouselmg 
                {...obj}
            />


        )
      })

      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

  return (
        <Carousel  
        className='carousel-body'
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={['mobile','tablet','desktop','superLargeDesktop']}
        showDots={true}
        >
            {data}
      </Carousel>
  )
}
