import React from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";

export default function Map({ coordinates }) {
  const ck = require("ckey");
  const api_key = ck.REACT_APP_MAPS_API_KEY;

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: api_key }}
        defaultCenter={coordinates}
        defaultZoom={15}
      >
        <MapMarker
          lat={coordinates.lat}
          lng={coordinates.lng}
          text="Wild and the Moon"
        />
      </GoogleMapReact>
    </div>
  );
}
