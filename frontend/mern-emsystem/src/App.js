import React from 'react'
import Navbar from './components/Navbar';
import Market from './components/Pages/Market'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import CategoryDetails from './components/Pages/CategoryDetails';
import CategoryPage from './components/Pages/CategoryPage';
import Footer from './components/Footer/Footer';
import ProductPage from './components/Pages/ProductPage';
import ScrollToTop from './ScrollToTop';
import Payment from './components/Pages/Payment';


export default function App() {
  return (
    <Router>
    <ScrollToTop>

      <Navbar />

        <Routes>

                <Route path='/' element={<Market />} />

                <Route path='/All-Categories' element={<CategoryDetails />} />

                <Route path='/CategoryPage/:name' element={<CategoryPage />} />

                <Route path='/Product/:name' element={<ProductPage />} />

                <Route path='/Payment' element={<Payment />} />

        </Routes>

        <Footer />
    </ScrollToTop>
    </Router>
  )
}
