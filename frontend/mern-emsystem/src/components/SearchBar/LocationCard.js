import React, { useEffect, useState } from 'react'
import pin from '../images/pin.png'
import mappin from '../images/map-pin.png'
import Map from './Map'
import './searchbar.css'

export default function LocationCard({lng,setLng, lat,setLat, zoom, setZoom, address,toggle}) {

  return (
    <div className='locationcard-body'>

        <div className='locationcard-header'>

            <p className='locationcard-title'>Select your location</p>
            <p className='locationcard-close' onClick={toggle}>X</p>

        </div>

        <div className='locationcard-map'>

          <img alt='' src={mappin} className='map-pin'/>

          <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom}  />
        
        </div>

        <div className='locationcard-footer'>

            <div className='footer-address'>

                <img className='address-img' alt='' src={pin} width='10px'/>
                <p className='address-text'>{address}</p>

            </div>

            <button className='footer-button'>Confirm Location</button>

        </div>
    </div>
  )
}
