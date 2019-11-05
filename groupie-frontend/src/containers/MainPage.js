import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardGroup";
import MainpageCard from "../components/MainpageCard.js";
const profileURL = "http://localhost:3000/profile";
const BandShowURL = "http://localhost:3000/bands/";
class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: []
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

  render() {
    return (
      <div>
        <h1>Welcome back, {window.localStorage.getItem("name")}!</h1>
        <CardDeck>
          {this.state.bands.map(band => {
            return <MainpageCard band={band.id} />;
          })}
        </CardDeck>
      </div>
    );
  }
}
export default MainPage;
