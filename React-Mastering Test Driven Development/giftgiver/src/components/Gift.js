import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: ""
    };
  }

  onInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={this.onInputChange}
              name="person"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className="input-present"
              onChange={this.onInputChange}
              name="present"
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Gift;
