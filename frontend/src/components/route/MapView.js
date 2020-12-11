import React, { useState } from 'react';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
  useLoadScript,
} from '@react-google-maps/api';
import MapStyles from '../../commons/MapStyles';
import styled from 'styled-components/macro';
import { IoMdList } from 'react-icons/io';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function MapView({ route, toggleView }) {
  const startLat = Number(route.legs[0].startWaypoint.latitude);
  const startLng = Number(route.legs[0].startWaypoint.longitude);
  const [selected, setSelected] = useState(null);

  const routing = route.legs.map((leg) => ({
    lat: Number(leg.endWaypoint.latitude),
    lng: Number(leg.endWaypoint.longitude),
  }));

  routing.unshift({ lat: startLat, lng: startLng });

  const center = {
    lat: startLat,
    lng: startLng,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <p>Error loading map</p>;
  }
  if (!isLoaded) {
    return <p>Loading map</p>;
  }
  if (isLoaded) {
    return (
      <MapContainer>
        <h1>{route.routeName}</h1>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={options}
        >
          {routing.map((leg) => (
            <Marker
              key={routing.indexOf(leg)}
              position={leg}
              label={labelMarker(routing, leg)}
              onClick={() => {
                setSelected({ leg: leg, index: routing.indexOf(leg) });
              }}
            />
          ))}
          <Polyline path={routing} />
          {selected ? (
            <InfoWindow
              position={selected.leg}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>{nameWaypoint(selected?.index)}</h2>
                <p>Latitude: {selected?.leg.lat}</p>
                <p>Longitude: {selected?.leg.lng}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
        <button onClick={toggleView}>
          <IoMdList />
        </button>
      </MapContainer>
    );
  }

  function labelMarker(collection, item) {
    if (collection.indexOf(item) === 0) {
      return 'Start';
    }
    if (collection.indexOf(item) + 1 === collection.length) {
      return 'End';
    }
    return String(collection.indexOf(item));
  }

  function nameWaypoint(index) {
    if (index === 0) {
      return 'Start';
    }
    if (index + 1 === routing.length) {
      return 'End';
    }
    return index + '. Waypoint';
  }
}

const MapContainer = styled.section`
  width: 100vw;
  height: 100vh;

  h1 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;
    margin: 0;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    border: none;
    background: none;
  }

  svg {
    width: 27px;
    height: 27px;
  }
`;
