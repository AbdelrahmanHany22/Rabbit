
import React, { useLayoutEffect, useState } from 'react'
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
import KommunicateChat from './chat';

export default function App() {

  const [lng, setLng] = useState(31.2355);
  const [lat, setLat] = useState(30.0444);
  const [zoom, setZoom] = useState(15);
  const [address, setAddress] = useState('Tahrir Square ميدان التحرير, Tahrir Square, Cairo, Cairo 11, Egypt')


  return (
    <Router>

      <Navbar />

        <Routes>

                <Route path='/' element={<Market lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} address={address} setAddress={setAddress}/>} />

                <Route path='/All-Categories' element={<CategoryDetails />} />

                <Route path='/CategoryPage/:name' element={<CategoryPage />} />

                <Route path='/Product/:name' element={<ProductPage />} />

                <Route path='/Change-Address' element={<ChangeAddress lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} address={address} setAddress={setAddress}/>} />

                <Route path='/Payment' element={<Payment lng={lng} setLng={setLng} lat={lat} setLat={setLat} zoom={zoom} setZoom={setZoom} address={address} />} />

                <Route path='/Reciept' element={<Reciept address={address} />} />

        </Routes>

        

      <Footer />     



    </Router>
  )
}

