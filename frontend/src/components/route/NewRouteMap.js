import React, {useState} from "react";
import {GoogleMap, Marker, Polyline, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../../commons/MapStyles";
import styled from "styled-components/macro";
import {MdCancel, MdDone} from "react-icons/md";
import {useHistory} from "react-router-dom";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "100%",
};
const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function NewRouteMap({ latitude, longitude }) {

    const history = useHistory();

    const [waypoints, setWaypoints] = useState([]);
    const [newRoute, setNewRoute] = useState({});

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    if (loadError) {
        return (
            <p>Error loading map</p>
        );
    }
    if (!isLoaded) {
        return (
            <p>Loading map</p>
        );
    }
    if (isLoaded) {
        return (
            <MapContainer>
                <h1>some route name</h1>
                <GoogleMap mapContainerStyle={mapContainerStyle}
                           zoom={10} center={centerMap()} options={options}
                           onClick={clickHandler}>
                    {waypoints.map(waypoint =>
                        <Marker position={waypoint} key={waypoints.indexOf(waypoint)}
                                label={labelMarker(waypoints, waypoint)}
                        />)
                    }
                    <Polyline path={waypoints}/>
                </GoogleMap>
                <button className={"edit"}>edit</button>
                <button className={"cancel"} onClick={redirectBackToRoutes}><MdCancel/>Cancel</button>
                <button className={"done"} onClick={createRoute}><MdDone/>Done</button>
            </MapContainer>
        );
    }

    function centerMap() {
        if (waypoints.length === 0) {
            return {
                lat: latitude,
                lng: longitude,
            }
        }
        return {
            lat: waypoints[waypoints.length - 1].lat,
            lng: waypoints[waypoints.length - 1].lng,
        }
    }

    function clickHandler(event) {
        setWaypoints([...waypoints, {lat: event.latLng.lat(), lng: event.latLng.lng()}]);
    }

    function labelMarker(collection, item) {
        if ((collection.indexOf(item)) === 0) {
            return "Start";
        }
        if ((collection.indexOf(item) + 1) === collection.length) {
            return "End";
        }
        return String(collection.indexOf(item));
    }

    function redirectBackToRoutes() {
        history.push("/routes");
    }

    function createRoute() {
        const startWaypoint = {
            startLatitude: waypoints[0].lat,
            startLongitude: waypoints[0].lng,
        }
        const waypointsWithoutStart = waypoints.slice(1, waypoints.length);
        const legs = [];

        for (let i = 0; i < waypointsWithoutStart.length; i++) {
            if (i === 0) {
                legs[i] = {
                    startLatitude: startWaypoint.startLatitude,
                    startLongitude: startWaypoint.startLongitude,
                    endLatitude: waypointsWithoutStart[i].lat,
                    endLongitude: waypointsWithoutStart[i].lng,
                }
            }
            if (i > 0) {
                 legs[i] = {
                    startLatitude: waypointsWithoutStart[i-1].lat,
                    startLongitude: waypointsWithoutStart[i-1].lng,
                    endLatitude: waypointsWithoutStart[i].lat,
                    endLongitude: waypointsWithoutStart[i].lng,
                }
            }
        }
        setNewRoute({...newRoute, legs});
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
  
  svg {
  width: var(--size-xxl);
  height: var(--size-xxl);
  }
  
  button {
  position: absolute;
  z-index: 10;
  border: none;
  background: none;
  }
  
  .edit {
  top: 1rem;
  right: 1rem;
  }
  
  .cancel, .done {
  display: grid;
  justify-items: center;
  bottom: 2rem;
  }
  
  .cancel {
  left: 1rem;
  color: darkred;
  }
  
  .done {
  left: 6rem;
  }
`