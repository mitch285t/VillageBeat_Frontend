import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.js";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {};
const getMapOptions = {
  disableDefaultUI: true,
  mapTypeControl: true,
  streetViewControl: true,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "on" }]
    }
  ]
};
class Goggle extends Component {
  static defaultProps = {
    center: {
      lat: 30.268702,
      lng: -97.736243
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_KEY
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={getMapOptions}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <Marker
            lat={this.props.lat}
            lng={`-${this.props.lng}`}
            text="My Marker"
            color="blue"
          />

          {console.log(this.props.lat)}
          {console.log(this.props.lng)}
        </GoogleMapReact>
        <h1>{this.props.location}</h1>
      </div>
    );
  }
}

export default Goggle;
