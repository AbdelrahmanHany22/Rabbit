import React, {useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import LocationCard from '../SearchBar/LocationCard';
import SearchBar from '../SearchBar/SearchBar';
import '../../style.css'
import Products from '../Products/Products';
import BootCarousel from '../Carousel/BootCarousel'
import MobileApp from '../MobileApp/MobileApp';

export default function Market() {
  return (

    <div className='app-body' >

      <MobileApp />

      <BootCarousel />

      <Categories />

      <Products />

    </div>

  );
}

