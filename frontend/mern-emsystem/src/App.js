<<<<<<< HEAD
import React from 'react';

import axios from 'axios'
import Stripe from "react-stripe-checkout"


const App = () => {

  const handleToken = (totalAmount, token) => {
    try {
      axios.post("http://localhost:5000/api/stripe/pay", {
        token: token.id,
        amount:totalAmount
      });
    } catch(error) {
      console.log(error);
    };
  }
  const tokenHandler = (token) => {
    handleToken(100,token);

  }
  return (
    <div>
      <Stripe
          stripeKey="pk_test_51KzozhA6b4UJVtQR3LBjFExUOXSBwYA1yqHhR8Cwx9Ede3trQ2lpuTFj54RkmNHufAM561gjF7F26060YsmBFAmn00VfcahP53"
          token={tokenHandler}
          />
    </div>
  );
}
export default App;
=======
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
>>>>>>> 01de36654a03cbbbe1297c1ca6ff0ccb98956aff
