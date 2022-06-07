import React, { useEffect, useState } from 'react'

import './cart.css'

export default function Cart() {

  const [data, setData] = useState(null);

  useEffect(() => {
    
  setData(JSON.parse(localStorage.getItem("Cart")))
  
    
  }, [])
 
   if(data !== null){

    const component = data.map(item => {

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

            {component}

        </div>


    </div>
  )
   }
}
