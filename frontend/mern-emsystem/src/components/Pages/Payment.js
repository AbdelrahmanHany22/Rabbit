import React from 'react'
import './payment.css'
import cod from '../images/cod.png'
import Cart from '../Cart/Cart'
import Map from '../SearchBar/Map'
import mappin from '../images/map-pin.png'

export default function Payment({lng,setLng,lat,setLat,zoom,setZoom, address}) {
  return (
    <div className='payment-body'>

        <div className='payment-details'>

            <div className='payment-cart'>
                <Cart />
            </div>

            <div className='payment-info'>

                <div className='payment-address'>

                    <img alt='' src={mappin} className='payment-pin'/>

                    <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} inter={false} style='payment'/>

                    <p className='payment-text'>{address}</p>

                </div>

                <div className='payment-inputs'>

                    <button className='payment-input'>mastercard</button>
                    <button className='payment-input image'><img alt='' src={cod} width='40px' className='cod'/>Cash On Delivery</button>
                
                </div>

            </div>
        
        </div>

        <div className='payment-price'>

            Total: 75 EGP

        </div>

    </div>
  )
}
