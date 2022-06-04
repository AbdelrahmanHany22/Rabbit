import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './categorypage.css'

export default function CategoryPageProducts({item}) {

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
        <div className='categorycart-body'>
            <button className='categorycart-minus' onClick={subtract}>-</button>
            
            {number}
            
            <button className='categorycart-plus' onClick={add}>+</button>
        
        </div>
    )
  return (
    <div className='categpage-link-body'>

    {empty?(<button className='categorybutton-empty' onClick={toggle}>+</button>):(Cart)}

    <Link className='categorypage-link' to={`/Product/${item.name}`}>
              <img className='categorypage-image' alt='' src={item.picture} />
              <div className='categorypage-price'>{item.price} EGP</div>
              <div className='categorypage-name'>{item.name}</div>
    </Link>
    </div>
  )
}
