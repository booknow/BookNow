import React, { Component } from "react";
import {Button, Table, Panel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper'

import './apptmnt.css';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class AddAppointment extends Component {

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
      paymentmethod: null,
      comments: null,
      id: null,
      startDate: moment(),
      time:null,
      services: []
    }



    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);


  }

  componentWillMount(){

    axios.get(API_BASE_URL + '/api/user')
    .then(response => {
      this.setState({id: response.data})
    }).then(()=> {
      axios.get(API_BASE_URL + '/api/book/' + this.state.id ).then(response =>{

        const serviceArr = response.data.map(service => {
          return {name: service.service_name, price: service.services_provided_price}
        })




       this.setState({services: [...this.state.services, ...serviceArr]
       })

      })
    })

  }

  createAppt(e){
    e.preventDefault()

    let total = null;
    // console.log("IN createAppt: ", this.state)
    axios.post(API_BASE_URL + "/createAppointment", this.state)
    console.log(this.state);

    this.setState({firstname: ''})


  }



  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(field, e, service) {
    this.setState({[field]: e.target.value})

  }

  handleServiceChange(e) {
    if(!e.target.value){
      this.setState({
        serviceamt:0,
        servicetype: ''
      })
    }

  this.setState({

    serviceamt: this.state.services[e.target.value].price,
    servicetype:this.state.services[e.target.value].name

  })
  }

  handleDateChange(date){
    this.setState({
      startDate:date
    });
  }

  handleDateSelect(e) {
    console.log(e)
    this.setState({realDate: e._d})
  }


  handleSubmit(e) {
    e.preventDefault()

    console.log(this.state);
  }

  render() {


    let { serviceamt
      , extrasamt
      , discountamt
      , tipamt
      , services} = this.state
    let total = parseInt(serviceamt, 10) + parseInt(extrasamt, 10) - parseInt(discountamt, 10) + parseInt(tipamt, 10)

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

    const serviceOptions=services.map((service, index) => (
        <option value={index}>{service.name}</option>
    ))


    return (
      <Grid className="apptcon">
        <Row>
          <Col sm={8}>
          <Panel className="appt-panel">
          <h1 style={topHeading}>New Appointment</h1>

          <Form horizontal onSubmit={this.createAppt.bind(this)}>

          <h2 style={headingMargin}>Who</h2>
            <FormGroup>
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
               <FormControl onChange={this.handleChange.bind(this, 'firstname')} ref="firstname" type="text" placeholder="First Name" />
             </Col>
             <Col sm={5}>
               <FormControl onChange={this.handleChange.bind(this, 'lastname')} type="text" placeholder="Last Name" />
             </Col>
            </FormGroup>

            <h2 style={headingMargin}>Where</h2>


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

            <h2 style={headingMargin}>What</h2>

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

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Discount</ControlLabel>
              </Col>
              <Col sm={5}>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl type="number" onChange={this.handleChange.bind(this, 'discountamt')}/>
                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Tips</ControlLabel>
              </Col>
              <Col sm={5}>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl type="number" onChange={this.handleChange.bind(this, 'tipamt')}/>
                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>Payment Method</ControlLabel>
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

            <FormGroup controlId="formControlsSelect">

              <Col componentClass={ControlLabel} sm={3}>
                  <ControlLabel>Date/Time</ControlLabel>
              </Col>

              <Col md={3} sm={5}>

                <DatePicker
                  className='date-input'
                  selected={this.state.startDate}
                  onChange={this.handleDateChange.bind(this)}
                  onSelect={this.handleDateSelect.bind(this)}
                  />

              </Col>

               <div>
                 <Col sm={4}>
                   <FormControl onChange={this.handleChange.bind(this, 'time')} componentClass="select" placeholder="Time">
                    <option value="8:00am"></option>
                     <option value="9:00AM">9:00AM</option>
                     <option value="10:00AM">10:00AM</option>
                     <option value="11:00AM">11:00AM</option>
                     <option value="12:00PM">12:00PM</option>
                     <option value="1:00PM">1:00PM</option>
                     <option value="2:00PM">2:00PM</option>
                     <option value="3:00PM">3:00PM</option>
                     <option value="4:00PM">4:00PM</option>
                     <option value="5:00PM">5:00PM</option>
                     <option value="6:00PM">6:00PM</option>
                     <option value="7:00PM">7:00PM</option>
                     <option value="8:00PM">8:00PM</option>

                   </FormControl>
                 </Col>
               </div>
            </FormGroup>

            <h2 style={headingMargin}>Comments</h2>

            <FormGroup controlId="formControlsTextarea">
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel>By Staff</ControlLabel>
              </Col>

              <Col sm={9}>

                  <FormControl componentClass="textarea" placeholder="Comments" onChange={this.handleChange.bind(this, 'comments')}/>

              </Col>
            </FormGroup>

            <Row>              
              <Col sm={6}>
                <Button href="home" bsSize="large" block>Return Home</Button>
              </Col>
              <Col sm={6}>
                <Button className="panel-underbtn" bsSize="large" block type="submit">Create Appointment</Button>
              </Col>
            </Row>

          </Form>
          </Panel>
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

export default AddAppointment;
