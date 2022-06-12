import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Login from '../../Login/Login';
import './reciept.css'

export default function Reciept({address}) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const total = cookies.Total
    const cart = cookies.Cart
    const id = cookies.CartID
    const token = cookies.jwt

    useEffect( () => {

    async function asyncfunc() {
         const config = {

        "headers": { "Authorization": `Bearer ${token}` },


    };

    const body = {
        "cart": `${id}`,
        "price": `${total}`
    }

      const order = await axios.post('http://127.0.0.1:5005/api/v1/orders',body,config)


      const bodyship = {
        "order": `${order.data.data._id}`
    }


      try {
        const shipping = await axios.post('http://127.0.0.1:5002/api/v1/shipments',bodyship,config)

        console.log(shipping);
      } catch (error) {
          console.log(error);
      }

    

    } 
    
    asyncfunc()

    }, [])

    
    

    const component = cart.map(item => {
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
                <div>{total}</div>
            </div>
            <div className='reciept-item'>
                <div>Delivery Fee</div>
                <div>EGP 20</div>
            </div>
            <div className='reciept-item'>
                <div>Total</div>
                <div>{+total + +20}</div>
            </div>
            <div className='reciept-item'>
                <div>Delivery Time</div>
                <div>20 Minutes</div>
            </div>

        </div>

    </div>
  )
   
}
