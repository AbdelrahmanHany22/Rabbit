import React, { useEffect, useState } from 'react'
import './products.css'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

export default function Products() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/products")
     .then((response) => response.json())
     .then(datatest => {

       if(datatest !== undefined){
       setData(datatest.data.data);
       
      }
      
     })

    
   }, []);
 
   if(data !== null){


    const datajsonkitchen =  data.map(item => {
        if(item.category.toLowerCase() == 'kitchen consumables'){
        return(
            <ProductItem item={item}/>
        )}
    })
    const datajsonbeverages =  data.map(item => {
        if(item.category.toLowerCase() == 'beverages'){
        return(
            <ProductItem item={item}/>
        )}
    })
    const datajsoncheese = data.map(item => {
        if(item.category.toLowerCase() == 'cheese'){
        return(
            <ProductItem item={item}/>
        )}
    })

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

  return (
    <div className='products-body'>
        <Carousel 
        responsive={responsive}
        draggable={false}
        autoPlay={false}
        infinite={false}
        autoPlaySpeed={1000000}
        >
            <Link to={`/CategoryPage/${'kitchen Consumables'}`} className='products-category1 products-item'>Kitchen Consumables</Link>
            {datajsonkitchen}
            
        </Carousel>

        <Carousel 
        responsive={responsive}
        draggable={false}
        autoPlay={false}
        infinite={false}
        autoPlaySpeed={1000000}
        >
            <Link to={`/CategoryPage/${'Beverages'}`}  className='products-category2 products-item'>Beverages</Link>
            {datajsonbeverages}
            
        </Carousel>
        
        <Carousel 
        responsive={responsive}
        draggable={false}
        autoPlay={false}
        infinite={false}
        autoPlaySpeed={1000000}
        >
            <Link to={`/CategoryPage/${'Cheese'}`}  className='products-category3 products-item'>Cheese</Link>
            {datajsoncheese}
            
        </Carousel>
    </div>
 )
  }
}
