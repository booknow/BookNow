import React, { Component } from "react";
import {Button, Checkbox, Table, Panel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup, HelpBlock, ControlLabel} from 'react-bootstrap'
import './apptmnt.css'
class AddAppointment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      servicetype: ""
    }

    console.log('this is the log', this.state);

  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }






  render() {

    const topHeading = {
      marginBottom: '0px',
      textAlign: 'left'
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

    const beforeTot = {
      paddingBottom: '20px'
    }

    const totalSt = {
        fontWeight: 'bold',
        fontSize: '1.25em',
        paddingTop: '30px',
        borderTop:'2px solid #00B29E'
    }

    return (
      <Grid className="apptcon">
        <Row>
          <Col md={12}>
            <h1 style={topHeading}>New Appointment</h1>
          </Col>

          <Col sm={8}>
          <Form horizontal>
          <h2 style={headingMargin}>Who</h2>
            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>
               Email
             </Col>
             <Col sm={9}>
               <FormControl type="email" placeholder="Email" />
             </Col>
            </FormGroup>

            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>
               Name
             </Col>
             <Col sm={4}>
               <FormControl type="text" placeholder="First Name" />
             </Col>
             <Col sm={5}>
               <FormControl type="text" placeholder="Last Name" />
             </Col>
            </FormGroup>

            <h2 style={headingMargin}>Where</h2>

            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>
               Address
             </Col>
             <Col sm={9}>
               <FormControl type="text" placeholder="Street" />
             </Col>
            </FormGroup>

            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>

             </Col>
             <Col sm={4}>
               <FormControl type="text" placeholder="City" />
             </Col>

             <Col sm={2}>

               <FormControl componentClass="select" placeholder="ST">
                <option value="ST"></option>
                 <option value="Arkansas">AK</option>
                 <option value="Alaska">AL</option>
                 <option value="Alaska">AR</option>
                 <option value="Alaska">AL</option>
                 <option value="Alaska">CA</option>
                 <option value="Alaska">CO</option>
                 <option value="Alaska">CT</option>
                 <option value="Alaska">DC</option>
                 <option value="Alaska">DE</option>
                 <option value="Arizona">FL</option>
               </FormControl>
             </Col>
             <Col sm={3}>
               <FormControl type="text" placeholder="Zip" />
             </Col>
            </FormGroup>

            <h2 style={headingMargin}>What</h2>

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Service</ControlLabel>
              </Col>

              <Col sm={7}>
                <FormControl componentClass="select" placeholder="select" value={this.state.servicetype} onChange={ this.handleChange.bind(this) } >
                  <option value=""></option>
                  <option value="Web Development">Web App Development</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="consulting">Consulting</option>
                  <option value="simpleWebsite">Simple Website</option>
                </FormControl>
              </Col>
            </FormGroup>


            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Frequency</ControlLabel>
              </Col>

              <Col sm={7}>
                <FormControl componentClass="select" placeholder="select">
                  <option value="valueHere">One Time</option>
                  <option value="valueHere">Monthly</option>
                  <option value="valueHere">Weekly</option>
                  <option value="valueHere">Biweekly</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup>

              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Extras</ControlLabel>
              </Col>


              <Col className="extras" sm={7}>
                <Checkbox>
                  Extra Item 1
                </Checkbox>
                <Checkbox>
                  Extra Item 2
                </Checkbox>
                <Checkbox>
                  Extra Item 3
                </Checkbox>
                <Checkbox>
                  Extra Item 4
                </Checkbox>
                <Checkbox>
                  Extra Item 5
                </Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>

            <Col sm={4} smOffset={3} className="addservice">
              <Button block>Add Service</Button>
            </Col>

            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Tips</ControlLabel>
              </Col>
              <Col sm={5}>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl type="text" />
                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>


            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
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

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Payment Method</ControlLabel>
              </Col>

              <Col sm={7}>
                <FormControl componentClass="select" placeholder="ST">
                  <option value="Cash">Cash</option>
                  <option value="Check">Check</option>
                  <option value="Online">Online</option>
                  </FormControl>
              </Col>
            </FormGroup>

            <h2 style={headingMargin}>When</h2>

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Date / Time</ControlLabel>
              </Col>

              <Col sm={7}>

              </Col>
            </FormGroup>

            <h2 style={headingMargin}>Comments</h2>

            <FormGroup controlId="formControlsTextarea">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>By Staff</ControlLabel>
              </Col>

              <Col sm={9}>


                  <FormControl componentClass="textarea" placeholder="Comments" />

              </Col>
            </FormGroup>

          </Form>
        </Col>
        <Col className="summary-col" sm={4}>
          <Panel header={title} style={blueBg}>

            <Table responsive>
              <tr>
                <td>Service</td>
                <td>$</td>
              </tr>



              <tr>
                <td>Extras</td>
                <td>$</td>
              </tr>

              <tr>
                <td>Discount</td>
                <td>$</td>
              </tr>

              <tr>
                <td>Adjustment</td>
                <td>$</td>
              </tr>

              <tr>
                <td style={beforeTot}>Tip</td>
                <td>$</td>
              </tr>

              <tr>
                <td style={totalSt}>Total</td>
                <td style={totalSt}>$</td>
              </tr>



            </Table>
          </Panel>

          <Button className="panel-underbtn" bsSize="large" block>Save Changes</Button>



        </Col>
      </Row>
    </Grid>



    )


    }

    handleChange(e) {
      this.setState({ servicetype: e.target.value }, () => {
        console.log( this.state.servicetype );
      });
    }

  }



export default AddAppointment;
