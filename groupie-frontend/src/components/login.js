import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Form from "react-bootstrap/Form";
const authURL = "http://localhost:3000/login";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      password: "",
      modal: true
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
        <Modal show={this.state.modal}>
          <form
            className="modal_color"
            onSubmit={event => this.handleSubmit(event)}
          >
            <ModalHeader>Login</ModalHeader>

            <Form.Group>
              <ModalBody>
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
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="outline-dark"
                  input
                  type="submit"
                  value="Log in"
                >
                  Log in!
                </Button>
              </ModalFooter>
            </Form.Group>
          </form>
        </Modal>
      </div>
    );
  }
}
export default Login;
