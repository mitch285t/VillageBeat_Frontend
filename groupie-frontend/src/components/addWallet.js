import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Form from "react-bootstrap/Form";
const usersURL = "http://localhost:3000/users/";
class AddWallet extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      wallet: 0
    };
  }
  componentDidMount() {
    this.setState({
      wallet: this.props.wallet
    });
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  };

  handleChange = event => {
    event.persist();
    this.setState({
      wallet: event.target.value
    });
  };
  handleSubmit = event => {
    let body = this.state;
    body.wallet = parseInt(this.state.wallet);
    body.id = parseInt(window.localStorage.getItem("id"));
    let configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify(body)
    };

    fetch(`${usersURL}${window.localStorage.getItem("id")}`, configObj)
      .then(res => res.json())
      .then(json => {
        this.setState({
          wallet: json.wallet
        });
      });
    return this.toggleModal;
  };

  render() {
    console.log(this.state.modalIsOpen);
    return (
      <div>
        <div>
          <Button onClick={this.toggleModal}>hello</Button>
        </div>
        <Modal show={this.state.modalIsOpen}>
          <ModalHeader>Add Funds</ModalHeader>
          <ModalBody>
            <form onSubmit={event => this.handleSubmit(event)}>
              <Form.Control
                type="integer"
                name="wallet"
                onChange={event => this.handleChange(event)}
                value={this.state.wallet}
                placeholder="wallet"
              />
              <Form.Label>Wallet Amount</Form.Label>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={event => this.handleSubmit(event)}>submit</Button>
            <Button onClick={this.toggleModal}>back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default AddWallet;
