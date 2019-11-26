import React from "react";
import AddWallet from "../components/AddWallet.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const usersURL = "http://localhost:3000/users";
const UserprofileURL = "http://localhost:3000/profile";
const BandShowURL = "http://localhost:3000/bands/";
class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: [],
      wallet: 0
    };
  }

  componentDidMount() {
    fetch(UserprofileURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data.user,
          bands: data.bands,
          wallet: data.user.wallet
        });
      });
  }

  handleClick = event => {
    window.localStorage.setItem("bandID", event.target.id);
    console.log(window.localStorage.getItem("bandID"));
    window.location.assign("http://localhost:3001/BandProfile");
  };

  render() {
    return (
      <div className="profile_background">
        <div>
          <Container>
            <Col sm={3}>
              <Jumbotron className="jumbotron">
                {" "}
                <>
                  <h1>{this.state.user.name}</h1>
                  <h4>{this.state.user.email}</h4>
                  wallet amount: <h4>${this.state.user.wallet} </h4>{" "}
                  <AddWallet
                    wallet={this.state.wallet}
                    userid={this.state.user.id}
                  />
                </>
                Bands followed <h1>{this.state.bands.length}</h1>
                <ul>
                  {this.state.bands.map(band => {
                    return (
                      <li
                        id={band.id}
                        onClick={event => this.handleClick(event)}
                        variant="dark"
                      >
                        {band.name}
                      </li>
                    );
                  })}
                </ul>
              </Jumbotron>
            </Col>
          </Container>
          <Col sm={5}></Col>
          <Col sm={4}></Col>
        </div>
      </div>
    );
  }
}
export default UserProfile;
