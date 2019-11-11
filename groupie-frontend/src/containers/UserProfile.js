import React from "react";
import AddWallet from "../components/AddWallet.js";
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

  render() {
    return (
      <div className="profile_background">
        <>
          <>
            Profile:
            <h1>{this.state.user.name}</h1>
            <h4>{this.state.user.email}</h4>
            wallet amount: <h4>${this.state.user.wallet} </h4>{" "}
            <AddWallet wallet={this.state.wallet} userid={this.state.user.id} />
          </>
          Bands followed <h1>{this.state.bands.length}</h1>
          <ul>
            {this.state.bands.map(band => {
              return <li>{band.name}</li>;
            })}
          </ul>
        </>
      </div>
    );
  }
}
export default UserProfile;
