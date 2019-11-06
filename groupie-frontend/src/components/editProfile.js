import React from "react";
import Form from "react-bootstrap/Form";
class EditProfile extends React.Component {
  render() {
    return (
      <form>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            onChange={event => this.handleChange(event)}
            value={this.state.name}
            placeholder={this.state.name}
          />
        </Form.Group>
      </form>
    );
  }
}
export default EditProfile;
