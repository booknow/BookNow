import React, { Component } from "react";
import {Button, Checkbox, Table, Panel, Form, Grid, Col, Row, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import axios from 'axios'

import './apptmnt.css'
import MyCalendar from './bookingCal';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';



class ClientAppointment extends Component {

  constructor(props) {
    super(props)

    this.state = {
      servicetype: null,
      serviceamt: 0,
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
      startDate: moment(),
      time: null,
      totalamt: null,
      servicename:null,
      services : [ ],
      provider: null

    }

    // console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  componentWillMount(){
    // console.log('this is the id?', this.props.match.params.id);
    // this.setState({exported_id: this.props.match.params.id})
    // console.log("/api/setup/services/" + this.props.match.params.id);



    axios.get("/api/setup/services/" + this.props.match.params.id).then(response =>{
      console.log(response);
      const serviceArr = response.data.map(service=> {

        return {name: service.service_name, price: service.services_provided_price, provider: service.first_name}
      })



      this.setState({
        services: [...this.state.services, ...serviceArr],  //why ...response.data,
        provider: serviceArr[0].provider
      })

      console.log(this.state.provider);

        // const provider = this.state.services[0].provider;

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


  handleServiceChange(e){

      if(!e.target.value){
        this.setState({
          serviceamt: 0,
          servicetype: ''
        })
      }

    this.setState({

      serviceamt: this.state.services[e.target.value].price,
      servicetype: this.state.services[e.target.value].name,


    })

  }

  handleChange(field, e) {

    this.setState({[field]: e.target.value})

  }


  handleSubmit(e) {
    e.preventDefault()

    console.log(this.state);

    const booking = axios.post('/api/book', this.state).then(function(response) {console.log(response);})
    .catch(function(err) {console.log(err);})

    return booking;

  }



  render() {

    const user_id = this.props.match.params.id



    let { serviceamt
      , services}=this.state
    let total=parseInt(serviceamt, 10)

    const serviceOptions=services.map((service, index) => (
        <option value={index}>{service.name}</option>
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

    // const provider = {
    //   name: this.state.services[0].provider
    // }


    return (
      <Grid className="apptcon">
        <Row>
          <Col md={12}>
            <h1 style={topHeading}>Book {this.state.provider}</h1>
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
              <MyCalendar
              useridfromparent={user_id} />
            </Col>

            <FormGroup controlId="formControlsSelect">

              <Col componentClass={ControlLabel} sm={3}>
                  <ControlLabel>Date / Time</ControlLabel>
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

            <h2 style={headingMargin}>Additional Info</h2>

            <FormGroup controlId="formControlsTextarea">


              <Col sm={12}>


                  <FormControl componentClass="textarea" placeholder="Comments" onChange={this.handleChange.bind(this, 'comments')}/>

              </Col>
            </FormGroup>

            <Button onClick={ () => this.createAppt(this.state)} className="panel-underbtn" bsSize="large" block type='submit'>Create Appointment</Button>


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
