import React, { useState } from 'react'
import search from '../images/search.png'
import placeholder from '../images/placeholder.png'
import './searchbar.css'


export default function SearchBar(props) {

 
  return (

    <div className='searchbar-body'>

      <form className='searchbar-body' onSubmit={props.HandleSubmit} >
        <input type='text' className='searchbar-button' value={props.address} placeholder='Search for locations... or press pin to open maps' onChange={(e) => {props.setAddress(e.target.value)}}/>
        <img alt='' src={search} width='15px' className='search' onClick={props.toggle} />
        <img alt='' src={placeholder} width='15px' className='placeholder' onClick={props.toggle} />
        <input type='submit' className='searchbar-submit' value='Search'/>
        </form>
       
    </div>
  )
}
