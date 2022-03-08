import React, { useRef, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import mapboxgl from '!mapbox-gl';// eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ5YW5nIiwiYSI6ImNrenF2ZHZ5MzB6NjIycHBlZWc2ZW83b3AifQ.DEEXxBXZc1aZfSly6kgtaQ';
const Map = ({setCoordinates}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  // const[bound,setBounds]=useState();
  useEffect(()=>{
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
   });

  // useEffect(()=>{
  //   if (!map.current) return;
  //   map.current.on('moveend', () => {
  //     setCoordinates(map.current.getBounds());
  //     console.log(map.current.getBounds());
  //     });
  // },[setCoordinates]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('moveend', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    console.log(map.current.getBounds());
    setCoordinates(map.current.getBounds()); 
    });
    },[]);
    
  

  return (
    <Col xs={8} className='mt-4 ml-8'> 
      <div>
     
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
        <div ref={mapContainer} className="map-container" style={{height:'80vh'}}  />
      </div>
    </Col>
  )
}

export default Map