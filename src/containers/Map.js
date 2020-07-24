import React from "react";
import GoogleMapReact from "google-map-react";

import { connect } from "react-redux";

import classes from './Map.module.scss';

const Map = (props) => {
  let marker = null;
  let center = { lat: 48.856614, lng: 2.352222 };

  if (props.selectedFlat) {
    marker = (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%"
        }}
        lat={props.selectedFlat.lat}
        lng={props.selectedFlat.lng}
      />
    );
    center = {
      lat: props.selectedFlat.lat,
      lng: props.selectedFlat.lng
    };
  }

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
};

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

export default connect(mapStateToProps)(Map);

