import React from 'react'
import { Link } from 'react-router-dom'
import sample from '../sample (1).json'

export default function CategoryDetails() {

      const array = sample.map(item => {
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
