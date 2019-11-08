import React, { Component } from "react";
import Goggle from "../components/Goggle.js";
import CardDeck from "react-bootstrap/CardGroup";
import MainpageCard from "../components/MainpageCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const profileURL = "http://localhost:3000/profile";
const BandShowURL = "http://localhost:3000/bands/";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: [],
      Clicked: false,
      lat: 0,
      lng: 0,
      location: ""
    };
  }
  componentDidMount() {
    fetch(profileURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data.user,
          bands: data.bands
        });
      });
  }
  handleLink = (event, lat, lng, location) => {
    this.setState({
      Clicked: !this.state.Clicked,
      lat: lat,
      lng: lng,
      location: location
    });
    console.log(this.state.lat);
    console.log(this.state.lng);
  };
  getshowtimes = times => {
    console.log(times);
  };
  render() {
    return (
      <div>
        {this.state.Clicked === true ? (
          <Goggle
            lat={this.state.lat}
            lng={this.state.lng}
            location={this.state.location}
          />
        ) : (
          console.log("what up nerd")
        )}
        <br></br>
        <br></br>
        <div>
          <h1>Welcome back, {window.localStorage.getItem("name")}!</h1>

          <div>
            <CardDeck>
              {this.state.bands.map(band => {
                {
                }
                return (
                  <MainpageCard
                    band={band.id}
                    handleLink={this.handleLink}
                    time={this.getshowtimes}
                  />
                );
              })}
            </CardDeck>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
