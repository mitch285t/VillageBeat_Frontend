import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditProfile from "../components/editProfile.js";
import Button from "react-bootstrap/Button";
import addWallet from "../components/addWallet.js";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";

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
          wallet: data.wallet
        });
      });
  }
  // handleChange = event => {
  //   event.persist();
  //   this.setState({
  //     [event.target.wallet]: event.target.value
  //   });
  // };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   let walletamount = this.state;
  //   walletamount.wallet = parseInt(this.state.wallet);
  //   const configOBJ = {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //       accept: "application/json",
  //       Authorization: `Bearer ${window.localStorage.getItem("token")}`
  //     },
  //     body: JSON.stringify(walletamount)
  //   };
  //   fetch(usersURL, configOBJ)
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json);
  //     });
  // };

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
      </div>
    );
  }
}
export default UserProfile;
