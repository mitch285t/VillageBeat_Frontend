import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker.js";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const handleApiLoaded = (map, maps) => {};
let modal = true;
var closed = false;
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
  handleClose = () => {
    window.location.reload(true);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <Modal size={"lg"} animation={true} show={modal}>
          <div
            className={"footer_color"}
            style={{ height: "50vh", width: "100%" }}
          >
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
            <ModalFooter className="font_color">
              <Button variant="outline-dark" onClick={this.handleClose}>
                close
              </Button>
              {this.props.location}
            </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Goggle;
