import React from 'react'
import { useParams } from 'react-router-dom'
import './categorypage.css'
import CategoryPageProducts from './CategoryPageProducts'
import dataiyad from '../../sample (1).json'

export default function CategoryPage() {

  const { name } = useParams()

  const datajson = dataiyad.map(item => {
     console.log(item.category);

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
