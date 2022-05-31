import React from 'react'
import './payment.css'
import cod from '../images/cod.png'

export default function Payment() {
  return (
    <div className='payment-body'>

        <div className='payment-details'>

            <div className='payment-cart'>
                item
            </div>

            <div className='payment-inputs'>

                <button className='payment-input'>MasterCard</button>
                <button className='payment-input'>PayPal</button>
                <button className='payment-input image'><img alt='' src={cod} width='40px' className='cod'/>Cash On Delivery</button>

            </div>
        
        </div>

        <div className='payment-price'>

            Total: 75 EGP

        </div>

    </div>
  )
}
