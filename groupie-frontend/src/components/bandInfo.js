import React from "react";
import Card from "react-bootstrap/Card";
const bandURL = "http://localhost:3000/bands/";
const country = require("../country.jpg");
const blues = require("../blues.jpg");
const classical = require("../classical.jpg");
const electronic = require("../electronic.jpeg");
const hiphop = require("../hiphop.jpeg");
const latin = require("../latin.jpg");
const reggae = require("../reggae.jpg");
const rock = require("../rock.jpg");
const soul = require("../soul.jpg");
const world = require("../world.jpg");
const stageandscreen = require("../music.jpg");
const music = require("../music.jpg");
const genresarray = {
  country: require("../country.jpg"),
  folk: require("../blues.jpg"),
  jazz: require("../blues.jpg"),
  classical: require("../classical.jpg"),
  pop: require("../electronic.jpeg"),
  rap: require("../hiphop.jpeg"),
  hiphop: require("../hiphop.jpeg"),
  funk: require("../latin.jpg"),
  reggae: require("../reggae.jpg"),
  rock: require("../rock.jpg"),
  soul: require("../soul.jpg"),
  world: require("../world.jpg"),
  stageandscreen: require("../music.jpg"),
  music: require("../music.jpg")
};

class BandInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      bandName: "",
      genres: ""
    };
  }
  componentDidMount() {
    fetch(`${bandURL}${this.props.band.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bandName: data.band.name,
          genres: data.genres
        });
      });
  }
  genrearrayEmpty = name => {
    if (this.state.genres.length > 0) {
      let cardgenre = this.state.genres[0].name
        .replace(/\s/g, "")
        .toLowerCase();
      return genresarray[cardgenre];
    } else {
      return genresarray.music;
    }
  };

  render() {
    return (
      <div
        id={this.props.band.id}
        onClick={event => this.props.handleClick(event)}
      >
        <Card
          id={this.props.band.id}
          style={{ width: "10rem", height: "5rem" }}
          // background-color=" rgb(0, 0, 0, 0.1)"
          className="card-footer"
          border="dark"
          text="white"
          key={this.props.band.id}
        >
          <Card.Img
            id={this.props.band.id}
            variant="top"
            className="card-img-top"
            src={`${this.genrearrayEmpty()}`}
          />
          <Card.Body id={this.props.band.id}>
            <Card.Text id={this.props.band.id}>
              {this.props.band.name}
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
      </div>
    );
  }
}
export default BandInfo;
