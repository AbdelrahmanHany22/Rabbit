import React from 'react'
import './reciept.css'
import dataiyad from '../../sample (1).json'

export default function Reciept({address}) {

    const data = dataiyad.map(item => {
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
        
            {data}
        
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
