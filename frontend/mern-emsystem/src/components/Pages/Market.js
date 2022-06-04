import React, {useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import LocationCard from '../SearchBar/LocationCard';
import SearchBar from '../SearchBar/SearchBar';
import '../../style.css'
import Products from '../Products/Products';
import BootCarousel from '../Carousel/BootCarousel'
import MobileApp from '../MobileApp/MobileApp';

export default function Market({lng,setLng,lat,setLat,zoom,setZoom, address, setAddress}) {

  const [toggle, setToggle] = useState(false)

  

  function toggleFunc(){
      setToggle(!toggle)
  }
  
  
  const [togglesearch,setToggleSearch] = useState(false)

  const HandleSubmit = (e) => {
    e.preventDefault()
    setToggleSearch(!togglesearch)

  }

  useEffect(() => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoicmFmZnktbWVraHRpayIsImEiOiJjbDM4c3kxenQwMGRzM29vNmRkNWF0eTJwIn0.Amc42hu7HcVM7SAf9Fzhqw`)
    .then((res) => res.json())
    .then((data) => {
      const datajs = data.features[0].place_name
      setAddress(datajs)
    })

    

  },[lng,lat,zoom])

  useEffect(() => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?proximity=-31.235702,30.0444215&access_token=pk.eyJ1IjoicmFmZnktbWVraHRpayIsImEiOiJjbDM4c3kxenQwMGRzM29vNmRkNWF0eTJwIn0.Amc42hu7HcVM7SAf9Fzhqw`)
    .then((res) => res.json())
    .then((data) => {
      const center = data.features[0].center

      setLng(center[0])
      setLat(center[1])

    })
  },[togglesearch])
  
  
  return (

    <div className='app-body' >

      <MobileApp />

      <BootCarousel />

      <SearchBar toggle={toggleFunc} lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} setAddress={setAddress} address={address} HandleSubmit={HandleSubmit} />

      {toggle && <LocationCard toggle={toggleFunc} lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} address={address} />}

      <Categories />

      <Products />

    </div>

  );
}

