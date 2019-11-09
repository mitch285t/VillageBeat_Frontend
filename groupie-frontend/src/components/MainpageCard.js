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
        // this.props.time(data.shows);
      });
  }

  // linkToBand = event => {
  //   window.localStorage.setItem("bandID", event.target.id);
  //   window.location.assign(`http://localhost:3001/BandProfile`);
  // };

  // handleLink = (event, lat, lng) => {
  //   console.log(event.target);
  //   console.log(lat);
  //   console.log(lng);
  // };
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
                <br></br>{" "}
                {this.state.venuedet.map(venue => {
                  return (
                    <li>
                      {venue.name} | {venue.location}
                      {this.state.showdet.map(show => {
                        if (show.venue_id === venue.id)
                          return moment(show.time).format(
                            " hh:mm A, MMMM Do, YYYY "
                          );
                      })}{" "}
                      <Button
                        variant="outline-dark"
                        onClick={event =>
                          this.props.handleLink(
                            event,
                            venue.lat,
                            venue.lng,
                            venue.location
                          )
                        }
                        size="sm"
                      >
                        Where is it?
                      </Button>
                    </li>
                  );
                })}
                <br></br>
              </ul>
            </Card.Text>
            <Card.Footer>
              <Button
                variant="outline-dark"
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
