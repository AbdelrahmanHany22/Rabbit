import React from 'react'
import './reciept.css'
import dataiyad from '../../sample (1).json'

export default function Reciept({address}) {

    const data = dataiyad.map(item => {
        return(
            <>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </>
        )
    })

  return (
    <div className='reciept-body'>

        <div>{data}</div>

        <div></div>
        
        <div></div>

    </div>
  )
}
