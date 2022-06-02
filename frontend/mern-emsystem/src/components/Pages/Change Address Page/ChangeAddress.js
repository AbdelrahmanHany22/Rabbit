import React, { useEffect } from 'react'
import './changeaddress.css'
import Map from '../../SearchBar/Map'
import { Link } from 'react-router-dom'
import mappin from '../../images/map-pin.png'

export default function ChangeAddress({lng,setLng,lat,setLat,zoom,setZoom, address, setAddress}) {

  useEffect(() => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoicmFmZnktbWVraHRpayIsImEiOiJjbDM4c3kxenQwMGRzM29vNmRkNWF0eTJwIn0.Amc42hu7HcVM7SAf9Fzhqw`)
    .then((res) => res.json())
    .then((data) => {
      const datajs = data.features[0].place_name
      setAddress(datajs)
    })

  })


  return (
    <div className='change-body'>

    <img alt='' src={mappin} className='change-pin'/>

      <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} inter={true} style='change'/>

      <p className='change-text'>{address}</p>

      <Link to={'/Payment'} className='change-button'>Confirm Location</Link>

    </div>
  )
}
