import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(() => (
  <GoogleMap
    defaultCenter={{ lat: 56.219726, lng: 12.855983 }} // Koordinater för Åstorps sporthall
    defaultZoom={15}
  >
    <Marker position={{ lat: 56.219726, lng: 12.855983 }} />
  </GoogleMap>
));

const MapContacts = () => {
  return (
    <div className="Map-container">
      <Map
        containerElement={<div className="Map-element" />}
        mapElement={<div className="Map-element" />}
      />
    </div>
  );
};

export default MapContacts;
