import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const usersURL = "http://localhost:3000/users";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
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
      password: "",
      password_confirmation: ""
    });
  };
  render() {
    return (
      <form className="background" onSubmit={event => this.handleSubmit(event)}>
        <Form.Group>
          <div>
            <Form.Control
              type="text"
              name="name"
              onChange={event => this.handleChange(event)}
              value={this.state.name}
              placeholder="name"
            />
            <Form.Label>name</Form.Label>
          </div>
          <div>
            <Form.Control
              type="text"
              name="email"
              onChange={event => this.handleChange(event)}
              value={this.state.email}
              placeholder="E-mail"
            />
            <Form.Label>E-mail</Form.Label>
          </div>
          <div>
            <Form.Control
              type="password"
              name="password"
              onChange={event => this.handleChange(event)}
              value={this.state.password}
              placeholder="Password"
            />
            <Form.Label>Password</Form.Label>
          </div>
          <div>
            <Form.Control
              type="password"
              name="password_confirmation"
              placeholder="Password confirmation"
              value={this.state.password_confirmation}
              onChange={event => this.handleChange(event)}
            />
            <Form.Label>Password confirmation</Form.Label>
          </div>
          <Button variant="secondary" type="submit" value="Sign up">
            Submit
          </Button>
        </Form.Group>
      </form>
    );
  }
}
export default Signup;
