import React, {Component} from "react";
// var ReactDOM = require('react-dom');
import { Grid, Row, Col } from "react-bootstrap";



import './BookingsHome.css';

class BookingsHome extends Component {
    render() {
        return (np
          <Grid>
              <Row>
                   <Col xs={12} md={8}>
                        <h1 className="active_bookings_text">0 Active Bookings</h1>

                   </Col>

                   <Col xs={6} md={4}>
                     <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Help
                            <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                            <li><a href="#">Test 1</a></li>
                            <li><a href="#">Test 2</a></li>
                            <li><a href="#">Test 3</a></li>

                            </ul>
                      </div>
                   </Col>
              </Row>
        </Grid>
        )
    }
}
export default BookingsHome;
