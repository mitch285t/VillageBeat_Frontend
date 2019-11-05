import React from "react";
import BandInfo from "./bandInfo.js";
import CardGroup from "react-bootstrap/CardGroup";
class BandCard extends React.Component {
  render() {
    return (
      <div>
        <CardGroup>
          {this.props.bands.map(band => (
            <BandInfo band={band} handleClick={this.props.handleClick} />
          ))}
        </CardGroup>
      </div>
    );
  }
}
export default BandCard;
