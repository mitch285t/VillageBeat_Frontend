import React from "react";
const usersURL = "http://localhost:3000/users";
class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      wallet: 1,
      profilepic: "",
      password: "",
      password_confirmation: ""
    };
  }
  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    let configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(this.state)
    };
    fetch(usersURL, configObj)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        window.location.assign("http://localhost:3001/login");
      })
      .catch(error => console.log(error));

    this.setState({
      name: "",
      email: "",
      wallet: 1,
      profilepic: "",
      password: "",
      password_confirmation: ""
    });
  };
}
export default Signup;
