import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const BandShowURL = "http://localhost:3000/bands/";

class MainpageCard extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      banddet: [],
      venuedet: [],
      showdet: [],
      genredet: []
    };
  }
  componentDidMount() {
    fetch(`${BandShowURL}${this.props.band}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          details: data,
          banddet: data.band,
          showdet: data.shows,
          venuedet: data.venues,
          genredet: data.genres
        });
      });
  }
  // showund = () => {
  //   let arr = [];
  //   const Moment = require("moment");
  //   console.log(this.state.showdet);
  //   arr = this.state.showdet.sort(
  //     (a, b) =>
  //       new Moment(a.time).format("DDYYYYMM") -
  //       new Moment(b.time).format("DDYYYYMM")
  //   );
  //   console.log(arr);
  // };
  linkToBand = event => {
    window.localStorage.setItem("bandID", event.target.id);
    window.location.assign(`http://localhost:3001/BandProfile`);
  };
  render() {
    return (
      <div>
        <Card id={this.state.banddet.id}>
          <Card.Body>
            <Card.Title>{this.state.banddet.name}</Card.Title>
            <Card.Subtitle>
              {this.state.genredet.map(genre => {
                return genre.name;
              })}
            </Card.Subtitle>
            <Card.Text>
              <ul>
                {this.state.venuedet.map(venue => {
                  return (
                    <li>
                      {venue.name} | {venue.location}
                      {console.log(venue.lat, venue.lng)}
                      <br></br>
                      {this.state.showdet.map(show => {
                        if (show.venue_id === venue.id)
                          return moment(show.time).format(
                            " hh:mm A, MMMM Do, YYYY "
                          );
                      })}
                    </li>
                  );
                })}
              </ul>
            </Card.Text>
            <Card.Footer>
              <Button
                id={this.state.banddet.id}
                onClick={event => this.linkToBand(event)}
              >
                Band Profile page
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default MainpageCard;
