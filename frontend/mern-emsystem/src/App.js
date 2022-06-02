import React, { useLayoutEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Market from './components/Pages/Market'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
  } from "react-router-dom";
import CategoryDetails from './components/Pages/CategoryDetails';
import CategoryPage from './components/Pages/CategoryPage';
import Footer from './components/Footer/Footer';
import ProductPage from './components/Pages/ProductPage';
import Payment from './components/Pages/Payment';
import ChangeAddress from './components/Pages/ChangeAddress';


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

        </Routes>

      <Footer />


    </Router>
  )
}
