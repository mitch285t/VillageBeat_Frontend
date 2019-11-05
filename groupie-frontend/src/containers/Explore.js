import React from "react";
import BandCard from "../components/bandCard.js";
const bandsURL = "http://localhost:3000/bands";

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: []
    };
  }
  handleClick = event => {
    window.localStorage.setItem("bandID", event.target.id);
    console.log(window.localStorage.getItem("bandID"));
    window.location.assign("http://localhost:3001/BandProfile");
  };
  componentDidMount() {
    fetch(bandsURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: window.localStorage.getItem("id"),
          bands: data
        });
      });
  }

  render() {
    return (
      <div>
        <BandCard bands={this.state.bands} handleClick={this.handleClick} />
      </div>
    );
  }
}
export default Explore;
