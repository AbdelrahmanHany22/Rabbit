import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({item}) {


  return (

            <Link to={`/Product/${item.id}`} className='products-item'>

                <img className='products-image' alt='' src={item.picture} />

                

                <div className='product-details'>

                    <div className='products-price'>{item.price} EGP</div>
                    <div className='products-name'>{item.name}</div>
                    

                </div>
            </Link>
  )
}
