import React, {Component} from "react";
import axios from "axios"
// var ReactDOM = require('react-dom');
import { Grid, Row, Col, MenuItem, DropdownButton ,FormGroup, InputGroup,FormControl,Jumbotron ,Button, Table} from "react-bootstrap";


import { Link } from 'react-router-dom';

import MyComponent from "../DayPicker/DayPicker";


import './BookingsHome.css';

class BookingsHome extends Component {

    componentWillMount() {

      axios.get('http://localhost:3000/user', {withCredentials: true})
      .then(response => {
        // console.log(response)

      })

      axios.get("http://localhost:3000/getApptCount").then((response)=>{
        this.setState({ApptCount: response.data[0].count})
      })


    }
    constructor(){
      super()
      this.state = {
            appointments : [],
            ApptCount: 0,
            inputText: "",
            filteredAppointments: [],
            user: {
              first_name: null
            }
      }

      axios.get('http://localhost:3000/appointments').then((response)=>{
        this.setState({appointments: response.data})
      })
    }

    searchTestHandler(e){
      const searchText = this.state.inputText
      const filteredArray = this.state.appointments.filter((object)=>{
        for (var variable in object) {
          if (object[variable]) {
            if (object[variable].toString().toLowerCase() === searchText.toLowerCase()) {
              return object
            }
          }
        }
      })
      filteredArray.length > 0 ? this.setState({filteredAppointments: filteredArray}) : null
    }
    updateInputText(e, that){
      that.setState({inputText: e.target.value})
      if (e.target.value === "") {
        this.setState({filteredAppointments: []})
      }
    }

    render() {
      const self = this;
      const { ApptCount } = this.state;
      let { filteredAppointments } = this.state

      const appointments = this.state.appointments.map(function(appointment){
          return (
            <tr>
              <td>{appointment.address_city}</td>
              <td>{appointment.first_name} {appointment.last_name} </td>
              <td>{appointment.address_street}, {appointment.address_city}, {appointment.address_state} {appointment.address_zip}</td>
              <td>{appointment.frequency}</td>
              <td>{appointment.email}</td>
            </tr>

          )
      })
      filteredAppointments = filteredAppointments.map(function(appointment){
          return (
            <tr>
              <td>{appointment.address_city}</td>
              <td>{appointment.first_name} {appointment.last_name} </td>
              <td>{appointment.address_street}, {appointment.address_city}, {appointment.address_state} {appointment.address_zip}</td>
              <td>{appointment.frequency}</td>
              <td>{appointment.email}</td>
            </tr>

          )
      })
        return (
          <Grid>
              <Row>
                   <Col xs={12} md={8}>

                            <h1 className="active_bookings_text"> <span className="active_number"> {ApptCount}</span> Active Bookings</h1>

                   </Col>

                   <Col xs={6} md={4}>


                   </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <button className="schedule_username_buttons btn btn-default btn-lg send_schedule"> Send Schedule </button>

                <DropdownButton className="schedule_username_buttons btn btn-default btn-lg" title="All Active Bookings" id="bg-nested-dropdown">
                      <MenuItem eventKey="1">Upcoming Bookings</MenuItem>
                      <MenuItem eventKey="2">Completed Bookings</MenuItem>
                      <MenuItem eventKey="3">All Active Bookings</MenuItem>
                  </DropdownButton>
                </Col>

                <Col md={4} className="search-bookings">
                  <form onSubmit={self.searchTestHandler}>
                    <FormGroup>
                      <InputGroup onChange={(e)=>this.updateInputText(e, this)}>
                        <InputGroup.Addon><button onClick={()=>this.searchTestHandler()} className="fa fa-search"></button></InputGroup.Addon>
                        <FormControl type="text" placeholder="Search Bookings ..." />
                      </InputGroup>
                    </FormGroup>

                  </form>
                </Col>
              </Row>

<Row>

    <Col className="whole-table" sm={9}>

      {
        //If there are appointments show table appointment list
        this.state.appointments.length > 0  ?
          <Table responsive>
           <thead className="table-head">
             <tr>
               <th>Service Date</th>
               <th>Customer</th>
               <th>Service Location</th>
               <th>Frequency</th>
               <th>Total Price</th>
             </tr>
           </thead>

           <tbody className="table-body">
            {
              filteredAppointments.length > 0 ? filteredAppointments : appointments
            }
 </tbody>
</Table>



        :
        <Jumbotron className="jumbotron-booking">
          <h1>{0} Bookings found.</h1>
          <p>We couldn't find any bookings that matched your search.</p>
        <Link to="/book">  <p><Button bsStyle="info">Create a Booking</Button></p> </Link>
        </Jumbotron>
      }
    </Col>


{/*calendar-------------------------------------*/}

    <Col className="calendar-picker" sm={3}>
        <MyComponent />
    </Col>

</Row>
    <hr />
<Row>
    <Col sm={4}>
      &copy; 2017 Vernon Mullen , Qais Malik , Daanish Nasir
    </Col>
</Row>



          </Grid>

        )
    }
}
export default BookingsHome;
