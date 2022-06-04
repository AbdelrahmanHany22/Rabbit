import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import dataiyad from '../../sample (1).json'
import './productpage.css'

export default function ProductPage() {

    const [number, setNumber] = useState(0)

    function add(){
        setNumber(number+1)
    }
    function subtract(){
        if(number != 0){
            setNumber(number-1)
        }else{
            setNumber(0)
        }
    }

    const { name } = useParams()

    const data = dataiyad.map(item => {
        console.log(item.name.toLowerCase());
        if(item.name.toLowerCase() == name.toLowerCase()){
        return(
            <div className='productpage-item'>
                <img alt='' src={item.picture} className='product-image'/>

                <div className='item-name'>{item.name}</div>
                
                <div className='price-body'>
                    <div className='item-price'>{item.price}</div>
                    <div className='price-buttons'>
                        <button className='item-button' onClick={subtract} >-</button>
                        {number}
                        <button className='item-button' onClick={add} >+</button>
                    </div>
                </div>
                
            </div>
        )}
    })

  return (
    <div className='productpage-body'>
        {data}
    </div>
  )
}
