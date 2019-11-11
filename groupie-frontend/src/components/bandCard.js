import React from "react";
import BandInfo from "./bandInfo.js";
import Pagination from "react-bootstrap/Pagination";
import CardGroup from "react-bootstrap/CardGroup";

class BandCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.bands.map(band => (
          <BandInfo band={band} handleClick={this.props.handleClick} />
        ))}
      </div>
    );
  }
}
export default BandCard;
