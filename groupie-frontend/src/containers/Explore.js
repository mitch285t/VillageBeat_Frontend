import React from "react";
import BandCard from "../components/bandCard.js";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Search from "../components/Search";
const bandsURL = "http://localhost:3000/bands";

class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: [],
      search: [],
      value: ""
    };
  }

  handleChange = e => {
    let result = [...this.state.bands];

    result =
      e.target.value === ""
        ? this.state.bands
        : result.filter(band => {
            return band.name.includes(e.target.value);
          });
    this.setState({
      search: result,
      value: e.target.value
    });
  };

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
        <Search
          handleChange={this.handleChange}
          bands={this.state.bands}
          search={this.state.search}
          value={this.state.value}
        />
        <BandCard
          handleClick={this.handleClick}
          bands={this.state.value === "" ? this.state.bands : this.state.search}
        />
      </div>
    );
  }
}
export default Explore;
