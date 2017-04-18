import React, { Component } from "react";
import {FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap'

class AddAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {



    return (
      <div>
      <div>
        <h1>Add Appointment</h1>
        <p>Here</p>
      </div>

      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
      </div>



    )
  }
}

export default AddAppointment;
