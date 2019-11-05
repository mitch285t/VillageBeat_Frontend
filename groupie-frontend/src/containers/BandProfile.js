import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const BandShowURL = "http://localhost:3000/bands/";
const userbandsURL = "http://localhost:3000/userbands";
class BandProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      band: [],
      venues: [],
      shows: [],
      genres: []
    };
  }
  componentDidMount() {
    fetch(`${BandShowURL}${window.localStorage.getItem("bandID")}`, {
      method: "GET",
      headers: {
        Authorization: `"Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          band: data.band,
          venues: data.venues,
          shows: data.shows,
          genres: data.genres
        });
      });
  }
  followFunction = event => {
    event.preventDefault();
    let body = this.state;
    body.band_id = parseInt(this.state.band.id);
    body.user_id = parseInt(window.localStorage.getItem("id"));
    const configOBJ = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify(body)
    };
    fetch(userbandsURL, configOBJ)
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => console.log(error));
    window.location.assign("http://localhost:3001/MainPage");
  };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     let body = this.state;
  //     body.user_id = parseInt(window.localStorage.getItem("id"));
  //     body.round_id = parseInt(this.props.round.id);
  //     const configObj = {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         accept: "application/json",
  //         Authorization: `Bearer ${window.localStorage.getItem("token")}`
  //       },
  //       body: JSON.stringify(body)
  //     };
  //     fetch(betsURL, configObj)
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log(json);
  //       })
  //       .catch(error => console.log(error));
  //     this.props.viewRound();
  //   };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>{this.state.band.name}</Col>
            <Col>
              {this.state.genres.map(genre => {
                return genre.name;
              })}
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                {this.state.venues.map(venue => {
                  return <li> {venue.name}</li>;
                })}
              </ul>
            </Col>
            <Col>
              {this.state.shows.map(show => {
                return show.time;
              })}
            </Col>
          </Row>
        </Container>
        <Button
          variant="outline-dark"
          onClick={event => this.followFunction(event)}
        >
          Follow!
        </Button>
      </div>
    );
  }
}
export default BandProfile;
