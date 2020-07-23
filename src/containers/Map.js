import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import classes from './Map.module.scss';
class Map extends Component {
   render() {
     let marker = null;
     let center = { lat: 48.856614, lng: 2.352222 };
     return (
     <div className={classes.Map}>
       <GoogleMapReact
       bootstrapURLKeys={{ key: "AIzaSyB829_BX3qp0M_knVkMzvCuGxDR4hS-qD8" }}
       center={center}
       defaultZoom={15}>
       {marker}
       </GoogleMapReact>
     </div>
     );
   }
}

export default Map;
