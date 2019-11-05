import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardGroup";
const profileURL = "http://localhost:3000/profile";
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
            return (
              <Card>
                <Card.Body>
                  <Card.Title>{band.name}</Card.Title>
                  <Card.Text>upcoming events will be here</Card.Text>
                </Card.Body>
                <Card.Footer>google will be here</Card.Footer>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    );
  }
}
export default MainPage;
