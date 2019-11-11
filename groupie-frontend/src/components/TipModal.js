import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const BandShowURL = "http://localhost:3000/bands/";
const userURL = "http://localhost:3000/users/";
class TipModal extends React.Component {
  constructor() {
    super();
    this.state = {
      wallet: 0,
      TipAmount: 0,
      modal: true,
      userwallet: 0
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({
      TipAmount: event.target.value
    });
  };
  theuserfetch = () => {
    let tip = parseInt(this.state.TipAmount);
    let userwallet = parseInt(this.props.user.wallet);
    let total = parseInt(userwallet - tip);
    let body = this.state;
    body.wallet = parseInt(total);
    body.id = parseInt(this.props.user.id);
    let configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify(body)
    };
    fetch(`${userURL}${this.props.user.id}`, configObj)
      .then(res => res.json())
      .then(json => {
        this.setState({
          modal: !this.state.modal
        });
        console.log(json);
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(typeof this.state.TipAmount);
    // console.log(this.props.userWallet);
    this.theFetch();
    this.theuserfetch();
    this.props.followFunction(event);
    this.setState({
      modal: !this.state.modal
    });
  };

  theFetch = () => {
    if (this.props.userWallet >= this.state.TipAmount) {
      let tip = parseInt(this.state.TipAmount);
      let bandwallet = parseInt(this.props.band.wallet);
      let total = parseInt(tip + bandwallet);
      let body = this.state;
      body.wallet = parseInt(total);
      body.id = parseInt(this.props.band.id);
      let configObj = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        },
        body: JSON.stringify(body)
      };
      fetch(`${BandShowURL}${this.props.band.id}`, configObj)
        .then(res => res.json())
        .then(json => {
          console.log(json);
        });
    }
  };

  render() {
    return (
      <div>
        {console.log(this.state.TipAmount)}
        <Modal show={this.state.modal} animation={true}>
          <ModalHeader>Be Groovy send some Cash </ModalHeader>
          <Form.Group
            onSubmit={event => {
              this.handleSubmit(event);
            }}
          >
            {" "}
            <ModalBody>
              <Form onSubmit={event => this.handleSubmit(event)}>
                <Form.Control
                  type="integer"
                  name="tip"
                  onChange={event => this.handleChange(event)}
                  value={this.state.tipAmount}
                  placeholder="tip"
                />
                <Button variant="outline-dark" input type="submit" value="tip">
                  Tip!
                </Button>
                <Button>Close</Button>
              </Form>
            </ModalBody>{" "}
          </Form.Group>
        </Modal>
      </div>
    );
  }
}
export default TipModal;
