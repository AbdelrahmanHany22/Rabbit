import React from 'react'
import { Link } from 'react-router-dom'
import iyaddata from '../sample (1).json'
import './cart.css'

export default function Cart() {

    const data = iyaddata.map(item => {
        return(
            <div className='cartpage-item'>
                <img alt='' src={item.picture} />
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
        )
    })

  return (
    <div className='cartpage-body'>

        <div className='cartpage-card'>

            {data}

        </div>


    </div>
  )
}
