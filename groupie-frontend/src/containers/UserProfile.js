import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditProfile from "../components/editProfile.js";
const UserprofileURL = "http://localhost:3000/profile";
const BandShowURL = "http://localhost:3000/bands/";
class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      bands: []
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
          bands: data.bands
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            Profile:
            <h1>{this.state.user.name}</h1>
            <h4>{this.state.user.email}</h4>
            wallet amount: <h4>{this.state.user.wallet}</h4>
          </div>
          Bands followed <h1>{this.state.bands.length}</h1>
          <ul>
            {this.state.bands.map(band => {
              return <li>{band.name}</li>;
            })}
          </ul>
        </div>

        <EditProfile />
      </div>
    );
  }
}
export default UserProfile;
