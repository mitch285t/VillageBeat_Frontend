import React from "react";
import Card from "react-bootstrap/Card";

class BandInfo extends React.Component {
  render() {
    return (
      <div
        id={this.props.band.id}
        onClick={event => this.props.handleClick(event)}
      >
        <Card key={this.props.band.id}>
          <Card.Body id={this.props.band.id}>
            <Card.Text>{this.props.band.name}</Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        {console.log(this.props.band.id)}
      </div>
    );
  }
}
export default BandInfo;
