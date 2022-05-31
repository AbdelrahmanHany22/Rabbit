import React from 'react'
import CategoriesDataOuter from '../sample (1).json'
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './categories.css'

export default function Categories() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };
  
  const array = CategoriesDataOuter.map(item => {
    return(
      item.category
    )
  })

  const categories = [...new Set(array)];


  const data = categories.slice(0,6).map(value => {
    return (

    <Link to={`/CategoryPage/${value}`} className='categories-item'>
      {value}
    </Link>
    
    )
  })

  return (
    <div className='categories-body'>
      <Carousel 
        responsive={responsive}
        draggable={false}
        autoPlay={false}
        infinite={false}
        autoPlaySpeed={1000000}
        >
          {data}
          <Link className='categories-item categories-carousel' to='/All-Categories'>Show All Categories</Link>
            
      </Carousel>
    </div>
  )
}
