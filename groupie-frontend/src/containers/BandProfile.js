import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tip from "../components/Tip.js";
const BandShowURL = "http://localhost:3000/bands/";
const userbandsURL = "http://localhost:3000/userbands";
class BandProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      band: [],
      venues: [],
      shows: [],
      genres: [],
      userbands: [],
      love: false
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
        this.props.getstate(data);
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

  render() {
    return (
      <div className="band_profile">
        <div>
          <Container>
            <Jumbotron className="band-jumbotron">
              {" "}
              <Row>
                <Col className="info-back">
                  {this.state.band.name}
                  <br></br>
                  {this.state.band.desc}
                </Col>
                <Col className="genre-back">
                  {this.state.genres.map(genre => {
                    return genre.name;
                  })}
                </Col>
              </Row>
              <Row>
                <Col className="venue-back">
                  <ul>
                    {this.state.venues.map(venue => {
                      return (
                        <li key={venue.id}>
                          {venue.name}{" "}
                          {this.state.shows.map(show => {
                            if (show.venue_id === venue.id) {
                              return moment(show.time).format(
                                " hh:mm A, MMMM Do, YYYY "
                              );
                            }
                          })}
                        </li>
                      );
                    })}
                  </ul>
                  {`Love given $ ${this.state.band.wallet}`}
                  <Tip
                    userbands={this.state.userbands}
                    band={this.state.band}
                    followFunction={this.followFunction}
                  />
                </Col>
              </Row>
            </Jumbotron>
          </Container>
        </div>
        <div></div>
      </div>
    );
  }
}
export default BandProfile;
