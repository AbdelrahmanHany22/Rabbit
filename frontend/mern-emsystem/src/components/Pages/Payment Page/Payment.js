import React, { useEffect, useState } from 'react'
import './payment.css'
import cod from '../../images/cod.png'
import Cart from '../../Cart/Cart'
import Map from '../../SearchBar/Map'
import mappin from '../../images/map-pin.png'
import { Link } from 'react-router-dom'

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

                    <div className='payment-text-button'>

                        <p className='payment-text'>{address}</p>
                        <Link to={'/Change-Address'} className='payment-button'>Change Address</Link>

                    </div>

                </div>

                <div className='payment-inputs'>

                    <button className='payment-input'>mastercard</button>
                    <Link to={'/Reciept'} className='payment-input image'><img alt='' src={cod} width='40px' className='cod'/>Cash On Delivery</Link>
                
                </div>

            </div>
        
        </div>

        <div className='payment-price'>

            Total: 75 EGP

        </div>

    </div>
  )
}
