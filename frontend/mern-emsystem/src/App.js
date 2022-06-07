import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Navbar from './components/Navbar';
import Market from './components/Pages/Market'
import CategoryDetails from './components/Pages/Category Page/CategoryDetails';
import Footer from './components/Footer/Footer';
import Payment from './components/Pages/Payment Page/Payment';
import ChangeAddress from './components/Pages/Change Address Page/ChangeAddress';
import CategoryPage from './components/Pages/Category Page/CategoryPage';
import ProductPage from './components/Pages/Product Page/ProductPage';
import Reciept from './components/Pages/Reciept Page/Reciept';
import Signup from './components/Pages/Sign Up Page/Signup';
import GuestSignup from './components/Pages/Guest Sign Up Page/GuestSignup'
import Test from './test';


export default function App(){

  const [navLng, setNavLng] = useState(31.23717403273176)
  const [navLat, setNavLat] = useState(30.04515827528266)
        
       useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {

            setNavLng(position.coords.longitude)
            setNavLat(position.coords.latitude)

        })
      },[])
  
 
        useEffect(() => {

      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${navLng},${navLat}.json?access_token=pk.eyJ1IjoicmFmZnktbWVraHRpayIsImEiOiJjbDM4c3kxenQwMGRzM29vNmRkNWF0eTJwIn0.Amc42hu7HcVM7SAf9Fzhqw`)
      .then((res) => res.json())
      .then((data) => {
        const datajs = data.features[0].place_name
        setAddress(datajs)
      })
  
    },[navLat,navLng])

  const [zoom, setZoom] = useState(15);
  const [address, setAddress] = useState('')

  useEffect(() => {
  localStorage.setItem("Cart",JSON.stringify([]))
  localStorage.setItem("Total",0)
    
  }, [])
  


  return (
    <Router>

      <Navbar />

        <Routes>

                <Route path='/' element={<Market />} />

                <Route path='/All-Categories' element={<CategoryDetails />} />

                <Route path='/CategoryPage/:name' element={<CategoryPage />} />

                <Route path='/Product/:id' element={<ProductPage />} />

                <Route path='/Change-Address' element={<ChangeAddress lng={navLng} setLng={setNavLng} lat={navLat} setLat={setNavLat} zoom={zoom} setZoom={setZoom} address={address} setAddress={setAddress}/>} />

                <Route path='/Payment' element={<Payment lng={navLng} setLng={setNavLng} lat={navLat} setLat={setNavLat} zoom={zoom} setZoom={setZoom} address={address} />} />

                <Route path='/Reciept' element={<Reciept address={address} />} />

                <Route path='/Signup' element={<Signup />} />

                <Route path='/test' element={<Test />} />

                <Route path='/GuestSignUp' element={<GuestSignup />} />

        </Routes>

      <Footer />


    </Router>
  )
}
