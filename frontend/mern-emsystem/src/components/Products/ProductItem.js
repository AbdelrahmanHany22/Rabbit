import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({item}) {

    const [empty, setEmpty] = useState(true)

    const [number,setNumber] = useState(0)

    function add(){
        setNumber(number+1)
    }
    function subtract(){
        if(number != 1){
            setNumber(number-1)
        }else{
            toggle()
            setNumber(0)     
        }
    }

    function toggle(){
        setEmpty(!empty)
        add() 
    }

    const Cart = (
        <div className='cart-body'>
            <button className='cart-minus' onClick={subtract}>-</button>
            
            {number}
            
            <button className='cart-plus' onClick={add}>+</button>
        
        </div>
    )

  return (
    <>
            {empty?(<button className='button-empty' onClick={toggle}>+</button>):(Cart)}

            <Link to={`/Product/${item.name}`} className='products-item'>

                <img className='products-image' alt='' src={item.picture} />

                

                <div className='product-details'>

                    <div className='products-price'>{item.price} EGP</div>
                    <div className='products-name'>{item.name}</div>
                    

                </div>
            </Link>
            </>
  )
}
