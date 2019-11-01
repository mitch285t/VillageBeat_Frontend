import React, { Component } from "react";
import Signup from "../components/signup.js";
class Welcome extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     name: "",
  //     email: "",
  //     wallet: 1,
  //     profilepic: "",
  //     password: "",
  //     password_confirmation: ""
  //   };
  // }

  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default Welcome;
