import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './categorypage.css'
import CategoryPageProducts from './CategoryPageProducts'

export default function CategoryPage() {

  const { name } = useParams()

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/v1/products?category=${name}`)
     .then((response) => response.json())
     .then(datatest => {

       if(datatest !== undefined){
       setData(datatest.data.data);
       
      }
      
     })

    
   }, []);
 
   if(data !== null){

  const datajson = data.map(item => {

    if(item.category.toLowerCase() == name.toLowerCase() ){
     
    return(
          <CategoryPageProducts item={item} />
    )}
    
  })


  return (
    <div className='categorypage-body'>
      
        {datajson}
    </div>
  )
   }
}
