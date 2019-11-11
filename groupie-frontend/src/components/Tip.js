import React from "react";
import Button from "react-bootstrap/Button";
import TipModal from "./TipModal.js";
const userbandsURL = "http://localhost:3000/userbands";
const BandShowURL = "http://localhost:3000/bands/";
const userURL = "http://localhost:3000/users/";
class Tip extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      userwallet: 0,
      modal: false
    };
  }
  componentWillMount() {
    fetch(`${userURL}${window.localStorage.getItem("id")}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data.user,
          userwallet: data.user.wallet
        });
      });
  }
  handleClick = event => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button
          onClick={event => this.handleClick(event)}
          variant="outline-dark"
        >
          Show Your Support!
        </Button>
        {this.state.modal === false ? (
          console.log("cheap bastard")
        ) : (
          <TipModal
            userWallet={this.state.userwallet}
            followFunction={this.props.followFunction}
            user={this.state.user}
            band={this.props.band}
          />
        )}
      </div>
    );
  }
}
export default Tip;
