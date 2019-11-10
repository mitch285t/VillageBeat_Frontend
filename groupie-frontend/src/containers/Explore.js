import React from "react";
import BandCard from "../components/bandCard.js";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Search from "../components/Search";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

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
            return band.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
    this.setState({
      search: result,
      value: e.target.value
    });
  };

  sortByName = bands => {
    bands.sort(function(a, b) {
      let textA = a.name.toLowerCase();
      let textB = b.name.toLowerCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
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
        this.sortByName(data);
        this.setState({
          user: window.localStorage.getItem("id"),
          bands: data
        });
      });
  }

  render() {
    return (
      <div className="explore_background">
        <Search
          handleChange={this.handleChange}
          bands={this.state.bands}
          search={this.state.search}
          value={this.state.value}
          sortByName={this.sortByName}
        />
        <ButtonGroup></ButtonGroup>
        <BandCard
          handleClick={this.handleClick}
          bands={this.state.value === "" ? this.state.bands : this.state.search}
        />
      </div>
    );
  }
}
export default Explore;
