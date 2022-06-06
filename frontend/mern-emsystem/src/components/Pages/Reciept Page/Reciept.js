import React, { useEffect, useState } from 'react'
import './reciept.css'

export default function Reciept({address}) {

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
            <div className='reciept-item'>
                <div className='reciept-item-name'> {item.name} </div>
                <div className='reciept-item-price'>EGP {item.price} </div>
            </div>
        )
    })

  return (
    <div className='reciept-body'>

        <div className='reciept-item-body'>
        
            {component}
        
        </div>

        <div className='reciept-address'>

            <div>Shipping Address</div>
        
            <div>{address}</div>
            
        </div>
        
        <div className='reciept-details'>

            <div className='reciept-item'>
                <div>Order ID</div>
                <div>288887485</div>
            </div>
            <div className='reciept-item'>
                <div>Payment Method</div>
                <div>Cash On Delivery</div>
            </div>
            <div className='reciept-item'>
                <div>SubTotal</div>
                <div>EGP 100</div>
            </div>
            <div className='reciept-item'>
                <div>Delivery Fee</div>
                <div>EGP 20</div>
            </div>
            <div className='reciept-item'>
                <div>Total</div>
                <div>EGP 120</div>
            </div>
            <div className='reciept-item'>
                <div>Delivery Time</div>
                <div>20 Minutes</div>
            </div>

        </div>

    </div>
  )
   }
}
