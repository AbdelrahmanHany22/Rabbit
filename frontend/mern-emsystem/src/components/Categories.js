import React from 'react'

export default function Categories({title,type,description,filename,height,width,price,rating}) {

  return (
     <div className='category-body'>

        <h1>{title}</h1>
        <p>{description}</p>
        
     </div>
  )
}
