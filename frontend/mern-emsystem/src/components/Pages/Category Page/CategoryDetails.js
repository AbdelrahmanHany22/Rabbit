import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CategoryDetails() {

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

      const array = data.map(item => {
        return(
          item.category
        )
      })

      const categories = [...new Set(array)];

      const component = categories.map(item => {
        return(
          <Link to={`/CategoryPage/${item}`} className='categorydetails-item'>
              {item}
          </Link>
        )
      })

  return (
    <div className='categorydetails-body'>

      {component}
      
    </div>
  )
   }
}
