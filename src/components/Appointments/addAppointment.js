import React, { Component } from "react";
import {Panel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap'
import './apptmnt.css'
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

    const topHeading = {
      marginBottom: '0px',
    }

    const headingMargin = {
      textAlign: 'left',
      marginBottom: '25px',
      marginTop: '55px'
    }

    const blueBg = {
      backgroundColor: '#00AD9A',
      color: 'white'
    }

    const title = (
      <h3>Summary</h3>
    )

    const titleSt = {
      backgroundColor: '#00AD9A',
      color: 'white'
    }

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h1 style={topHeading}>New Appointment</h1>
          </Col>

          <Col sm={8}>
          <Form horizontal>
          <h2 style={headingMargin}>Client Info</h2>
            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
               Email
             </Col>
             <Col sm={10}>
               <FormControl type="email" placeholder="Email" />
             </Col>
            </FormGroup>

            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
               Name
             </Col>
             <Col sm={5}>
               <FormControl type="text" placeholder="First Name" />
             </Col>
             <Col sm={5}>
               <FormControl type="text" placeholder="Last Name" />
             </Col>
            </FormGroup>

            <h2 style={headingMargin}>Appointment Service</h2>

            <FormGroup controlId="formControlsSelect">

              <Col componentClass={ControlLabel} sm={2}>
                <ControlLabel>Type of Service</ControlLabel>
              </Col>
              <Col sm={10}>
              <FormControl componentClass="select" placeholder="select">
                <option value="WebAppDev">Web App Development</option>
                <option value="socialMedia">Social Media</option>
                <option value="consulting">Consulting</option>
                <option value="simpleWebsite">Simple Website</option>
              </FormControl>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={2}>
                <ControlLabel>Final Price</ControlLabel>
              </Col>
              <Col sm={5}>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl type="text" />
                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>


          </Form>
        </Col>
        <Col className="summary-col" sm={4}>
          <Panel header={title} style={blueBg}>

            <p>Service</p>
            <p>Extras</p>
            <p>Discount</p>
            <p>Adjustment</p>
            <p>Tip</p>
            <p>Total</p>
          </Panel>


        </Col>
      </Row>
    </Grid>



    )
  }
}

export default AddAppointment;
