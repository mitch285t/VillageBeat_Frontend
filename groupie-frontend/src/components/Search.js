import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = props => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search"
        input="text"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={props.value}
        onChange={event => props.handleChange(event)}
      />
    </InputGroup>
  );
};
export default Search;
