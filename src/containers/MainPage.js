import React, { Component } from "react";
import Goggle from "../components/Goggle.js";
import CardDeck from "react-bootstrap/CardGroup";
import MainpageCard from "../components/MainpageCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Testing from "../components/Testing.js";
import moment from "moment";
import _ from "lodash";
import date from "date-and-time";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const profileURL = "http://localhost:3000/profile";
const BandShowURL = "http://localhost:3000/bands/";
let arrays = [];
class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: [],
      Clicked: false,
      lat: 0,
      lng: 0,
      location: "",
      shows: [],
      venues: []
    };
  }
  handleHide = event =>
    this.setState({
      Clicked: !this.state.Clicked
    });
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

  render() {
    return (
      <div className="main_page_color">
        {this.state.Clicked === true ? (
          <Goggle
            handleHide={this.handleHide}
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
          <h1 className="welcome">
            Welcome back, {window.localStorage.getItem("name")}!
          </h1>

          <div>
            {/* {this.state.bands.map(band => {
                {
                }
                return (
                  <MainpageCard
                    band={band.id}
                    handleLink={this.handleLink}
                    // time={this.getshowtimes}
                  /> */}
            <Testing
              bands={this.state.bands}
              venues={this.state.venues}
              handleLink={this.handleLink}
            />
            {/* );
              })} */}
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
