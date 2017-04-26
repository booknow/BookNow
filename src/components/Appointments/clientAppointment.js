import React, { Component } from "react";
import {Button, Checkbox, Table, Panel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper'
import './apptmnt.css'
import MyCalendar from './bookingCal';
// import './clientappt.css'



class ClientAppointment extends Component {

  constructor(props) {
    super(props)


    this.state = {
      servicetype: null,
      serviceamt: 0,
      extrasamt: 0,
      discountamt:0,
      tipamt:0,
      email: null,
      firstname: null,
      lastname: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      frequency: null,
      extraitem: null,
      paymentmethod: null,
      comments: null,
      totalamt: null,
      servicename:null,
      services : [ ]

    }

    console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){

axios.get("http://localhost:3000/servicesProvided").then(response => {
  console.log(response.data);

    this.setState({
      services: [...this.state.services, ...response.data]  //why ...response.data

    })
})

  }

  handleServiceChange(e){

      if(!e.target.value){
        this.setState({
          serviceamt:0,
          servicetype: ''
        })
      }

    this.setState({

      serviceamt: this.state.services[e.target.value].services_provided_price,
      servicetype:this.state.services[e.target.value].service_name

    })

  }

  handleChange(field, e) {

    this.setState({[field]: e.target.value})

  }


  handleSubmit(e) {
    e.preventDefault()

    console.log(this.state);

    const booking = axios.post(API_BASE_URL + '/api/book', this.state).then(function(response) {console.log(response);})
    .catch(function(err) {console.log(err);})

    return booking;

  }



  render() {

    let { serviceamt
      , extrasamt
      , discountamt
      , tipamt
      , services} = this.state
    let total = parseInt(serviceamt, 10) + parseInt(extrasamt, 10) - parseInt(discountamt, 10) + parseInt(tipamt, 10)

    const serviceOptions = services.map((service, index) => (
        <option value={index}>{service.service_name}</option>
    ))


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
            <h1 style={topHeading}>Client, Book Me!</h1>
            <p>Complete the fields below to get my awesome services</p>
          </Col>

          <Col sm={8}>
          <Form horizontal onSubmit={this.handleSubmit}>
          <h2 style={headingMargin}>Your Info</h2>
            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>
               Email
             </Col>
             <Col sm={9}>
               <FormControl type="email" onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
             </Col>
            </FormGroup>

            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>
               Name
             </Col>
             <Col sm={4}>
               <FormControl onChange={this.handleChange.bind(this, 'firstname')} type="text" placeholder="First Name" />
             </Col>
             <Col sm={5}>
               <FormControl onChange={this.handleChange.bind(this, 'lastname')} type="text" placeholder="Last Name" />
             </Col>
            </FormGroup>

            <h2 style={headingMargin}>Booking Location</h2>

            <FormGroup>

              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Location</ControlLabel>
              </Col>


              <Col className="extras" sm={7} onChange={ this.handleChange.bind(this, 'extraitem') }>
                <Checkbox value="Extra Item 1">
                  Not Applicable
                </Checkbox>
                <Checkbox value="Extra Item 2">
                  Specific Location
                </Checkbox>
              </Col>
            </FormGroup>


            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>
               Address
             </Col>
             <Col sm={9}>
               <FormControl onChange={this.handleChange.bind(this, 'address')} type="text" placeholder="Street" />
             </Col>
            </FormGroup>

            <FormGroup >
            <Col componentClass={ControlLabel} sm={3}>

             </Col>
             <Col sm={4}>
               <FormControl onChange={this.handleChange.bind(this, 'city')} type="text" placeholder="City" />
             </Col>

             <Col sm={2}>

               <FormControl onChange={this.handleChange.bind(this, 'state')} componentClass="select" placeholder="ST">
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
               <FormControl onChange={this.handleChange.bind(this, 'zip')} type="text" placeholder="Zip" />
             </Col>
            </FormGroup>

            <h2 style={headingMargin}>Service Info</h2>

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Service</ControlLabel>
              </Col>

              <Col sm={7}>
                <FormControl componentClass="select" placeholder="select" onChange={ this.handleServiceChange.bind(this) } >
                  <option></option>
                  {serviceOptions}
                </FormControl>
              </Col>
            </FormGroup>


            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Frequency</ControlLabel>
              </Col>

              <Col sm={7}>
                <FormControl componentClass="select" placeholder="select" onChange={ this.handleChange.bind(this, 'frequency') }>
                  <option></option>
                  <option value="One Time">One Time</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Biweekly</option>
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup>

              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Extras</ControlLabel>
              </Col>


              <Col className="extras" sm={7} onChange={ this.handleChange.bind(this, 'extraitem') }>
                <Checkbox value="Extra Item 1">
                  Extra Item 1
                </Checkbox>
                <Checkbox value="Extra Item 2">
                  Extra Item 2
                </Checkbox>
                <Checkbox value="Extra Item 3">
                  Extra Item 3
                </Checkbox>
                <Checkbox value="Extra Item 4">
                  Extra Item 4
                </Checkbox>
                <Checkbox value="Extra Item 5">
                  Extra Item 5
                </Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>

            <Col sm={4} smOffset={3} className="addservice">
              <Button block>Add Service</Button>
            </Col>

            </FormGroup>


            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Payment</ControlLabel>
              </Col>

              <Col sm={7}>
                <FormControl componentClass="select" placeholder="ST" onChange={this.handleChange.bind(this, 'paymentmethod')}>
                  <option value="Cash">Cash</option>
                  <option value="Check">Check</option>
                  <option value="Online">Online</option>
                  </FormControl>
              </Col>
            </FormGroup>

            <h2 style={headingMargin}>When</h2>

            <Col sm={12}>
              <MyCalendar />
            </Col>

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Date / Time</ControlLabel>
              </Col>

              <Col sm={7}>

              </Col>
            </FormGroup>

            <h2 style={headingMargin}>Additional Info</h2>

            <FormGroup controlId="formControlsTextarea">


              <Col sm={12}>


                  <FormControl componentClass="textarea" placeholder="Comments" onChange={this.handleChange.bind(this, 'comments')}/>

              </Col>
            </FormGroup>

            <Button onClick = { () => this.createAppt(this.state)} className="panel-underbtn" bsSize="large" block type='submit'>Create Appointment</Button>


          </Form>
        </Col>
        <Col className="summary-col" sm={4}>
          <Panel header={title} style={blueBg}>

            <Table responsive>
            <tbody>
              <tr>
                <td>Service</td>

                <td>{this.state.serviceamt} </td>
              </tr>

              <tr>
                <td>Extras</td>

                <td>{this.state.extrasamt}</td>
              </tr>

              <tr>
                <td>Discount</td>

                <td>{this.state.discountamt}</td>
              </tr>


              <tr>
                <td style={beforeTot}>Tip</td>
                <td>{this.state.tipamt}</td>
              </tr>

              <tr>
                <td style={totalSt}>Total</td>
                <td style={totalSt}>$ {total}</td>
              </tr>

              </tbody>
            </Table>
          </Panel>
        </Col>
      </Row>
    </Grid>
    )

  }

}

export default ClientAppointment;
