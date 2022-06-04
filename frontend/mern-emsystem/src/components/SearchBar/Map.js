import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import './searchbar.css'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmZnktbWVraHRpayIsImEiOiJjbDM4c3kxenQwMGRzM29vNmRkNWF0eTJwIn0.Amc42hu7HcVM7SAf9Fzhqw';

function Map({lng,setLng, lat,setLat, zoom, setZoom,inter,style}) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom,
    interactive: inter?true:false
    });
    });


    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));

      });
    });

    let css
    let sidebar

    if (style == 'payment') {

      css = 'payment-map'
      sidebar = 'payment-sidebar'
      
    } else if(style == 'location') {
      
      css = 'map-body'
      sidebar = 'sidebar'

    } else if (style == 'change'){

      css = 'change-map'
      sidebar = 'change-sidebar'
    }

    return (
      <div className={css}>
        <div className={sidebar}>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    );
}

export default Map;
