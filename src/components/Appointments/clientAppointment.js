import React, { Component } from "react";
import {Button, Checkbox, Table, Panel, InputGroup, Form, Grid, Col, Row, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper'
import './apptmnt.css'


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
      extraitem: null,
      paymentmethod: null,
      comments: null,
      totalamt: null
    }

    // console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

}
