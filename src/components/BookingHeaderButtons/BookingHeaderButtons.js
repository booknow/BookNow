import React, { Component } from "react";
import '../BookingsHome/BookingsHome.css';


class BookingHeaderButtons extends Component {
  render(){
    return (


      <Grid>
            <Row>
                 <Col xs={12} md={8}>

                          <h1 className="active_bookings_text"> <span className="active_number"> 0</span> Active Bookings</h1>

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
                <FormGroup>
                   <InputGroup>
                     <InputGroup.Addon><button className="fa fa-search"></button></InputGroup.Addon>
                     <FormControl type="text" placeholder="Search Bookings ..." />
                   </InputGroup>
                 </FormGroup>
              </Col>
            </Row>
      </Grid>


    )
  }
}

export default BookingHeaderButtons;
