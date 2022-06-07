import React, { useEffect, useState } from 'react'
import './payment.css'
import cod from '../../images/cod.png'
import Cart from '../../Cart/Cart'
import Map from '../../SearchBar/Map'
import mappin from '../../images/map-pin.png'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { Link } from 'react-router-dom'

export default function Payment({lng,setLng,lat,setLat,zoom,setZoom, address}) {

  const [price, setPrice] = useState(0)
  const [cookies, setCookie, removeCookie] = useCookies(['user']);


  useEffect(() => {
    
    setPrice(JSON.parse(localStorage.getItem("Total")))
    
      
    }, [])

   async function handleClick(){

    
    const storageCart = JSON.parse(localStorage.getItem("Cart"))
    const storageTotal = JSON.parse(localStorage.getItem("Total"))
    
    const token = cookies.jwt
    const config = {

        "headers": { "Authorization": `Bearer ${token}` },


    };

        const user = await axios.get('http://127.0.0.1:5001/api/v1/guestusers/getcurrentuser',config)

        const cart = await axios.post(
            'http://127.0.0.1:5005/api/v1/cart',
            {
                "products":`${storageCart}`,
                "price":`${storageTotal}`
            },
            config
        )

        const id = cart.data.data._id

            localStorage.setItem("CartID",id)

            const payment = await axios.post(
                `http://127.0.0.1:5003/api/v1/payment/checkout-session/${id}`,
                {
                    "success_url": "http://127.0.0.1:3000/Reciept",
                    "failure_url": "https://www.google.com"
                }
                )

                setCookie("Cart",localStorage.getItem("Cart"))
                setCookie("Total",localStorage.getItem("Total"))
                setCookie("CartID",id)

                

                window.location.replace(payment.data.session.url)

    }
 
    
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

                    <button className='payment-input' onClick={ handleClick}>mastercard</button>

                    <Link to={'/Reciept'} className='payment-input image'><img alt='' src={cod} width='40px' className='cod'/>Cash On Delivery</Link>
                
                </div>

            </div>
        
        </div>

        <div className='payment-price'>

            {price} EGP

        </div>

    </div>
  )
}
