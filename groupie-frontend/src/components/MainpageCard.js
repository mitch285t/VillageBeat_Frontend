import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardGroup";
import moment from "moment";

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

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{this.state.banddet.name}</Card.Title>
            <Card.Subtitle>
              {this.state.genredet.map(genre => {
                return genre.name;
              })}{" "}
            </Card.Subtitle>
            <Card.Text>
              <ul>
                {this.state.venuedet.map(venue => {
                  return (
                    <li>
                      {venue.name} | {venue.location} <br></br>
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
            <Card.Footer> | bandprofile page</Card.Footer>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default MainpageCard;
