import * as React from "react";
import Map, { NavigationControl } from "react-map-gl";
import { Pins } from "./StationPin";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmF5cmVkZ29vc2UiLCJhIjoiY2s1aWV6YWp3MDBhZjNrbmoza21zM2xnYSJ9.pobIjWmc_InU_zmap2lguQ";

interface Props {
  lat: number;
  lng: number;
}

const navStyle: React.CSSProperties = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

export function StationMap(props: Props) {
  return (
    <Map
      initialViewState={{
        longitude: props.lng,
        latitude: props.lat,
        zoom: 17,
      }}
      style={{ width: 400, height: 400, position: "relative" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Pins lat={props.lat} lng={props.lng} />
      <div style={navStyle}>
        <NavigationControl showZoom={true} />
      </div>
    </Map>
  );
}
