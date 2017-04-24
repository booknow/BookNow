import React, {Component} from "react";
import axios from "axios";

import { Link } from 'react-router-dom';

import "./CustomerInfo.css";


class CustomerInfo extends Component {

  constructor(){
          super()
          this.state{

            }

    }

render(){
  return(
    <Grid>
      <Row>
        <Col sm={12}>
            <h1> Customers / First Name Last Name </h1>

        </Col>
      </Row>


    </Grid>
  )
}

}


export default CustomerInfo;
