import React, { useEffect, useState } from 'react'

import './cart.css'

export default function Cart() {

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
