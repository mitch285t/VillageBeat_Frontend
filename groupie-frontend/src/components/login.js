import React, { Component } from "react";

import Form from "react-bootstrap/Form";
const authURL = "http://localhost:3000/login";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: ""
    };
  }
  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(this.state)
    };
    console.log(this.state);
    fetch(authURL, configObj)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        window.localStorage.setItem("token", json.jwt);
        window.localStorage.setItem("name", json.user.name);
        window.localStorage.setItem("email", json.user.email);
        window.localStorage.setItem("id", `${json.user.id}`);
        window.localStorage.setItem("wallet", `${json.user.wallet}`);
        window.location.assign("http://localhost:3001/MainPage");
      })
      .catch(error => console.log(error));
    this.setState({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <Form.Group>
            <div>
              <Form.Control
                type="text"
                name="name"
                onChange={event => this.handleChange(event)}
                value={this.state.name}
                placeholder="name"
              />
              <Form.Label htmlFor="name">name</Form.Label>
            </div>
            <div>
              <Form.Control
                type="password"
                name="password"
                onChange={event => this.handleChange(event)}
                value={this.state.password}
                placeholder="Password"
              />
              <Form.Label htmlFor="password">Password</Form.Label>
            </div>
            <input type="submit" value="Log in" />
          </Form.Group>
        </form>
      </div>
    );
  }
}
export default Login;
