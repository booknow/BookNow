import React, {Component} from "react";
import axios from "axios"
import {Checkbox, ControlLabel ,Grid,Panel,title,FieldGroup, Row, Col, MenuItem, DropdownButton ,FormGroup, InputGroup,FormControl,Jumbotron ,Button, Table} from "react-bootstrap";
import { Link, Switch, Route } from 'react-router-dom';
import './businessInfo.css';
import BusinessInfoStart from "../businessInfoStart/businessInfoStart"
import BusinessInfo1 from "../businessInfo1/businessInfo1";
import BusinessInfo2 from "../businessInfo2/businessInfo2";
import BusinessInfo3 from "../businessInfo3/businessInfo3";
import BusinessInfo4 from "../businessInfo4/businessInfo4";
import BusinessInfo5 from "../businessInfo5/businessInfo5";
import BusinessInfo6 from "../businessInfo6/businessInfo6";

class BusinessInfo extends Component {
  render() {
      return (
          <div>
          <Switch>
            <Route exact path="/setup" component={BusinessInfoStart}/>
            <Route exact path="/setup/1" component={BusinessInfo1} />
            <Route exact path="/setup/2" component={BusinessInfo2} />
            <Route exact path="/setup/3" component={BusinessInfo3} />
            <Route exact path="/setup/4" component={BusinessInfo4} />
            <Route exact path="/setup/5" component={BusinessInfo5} />
            <Route exact path="/setup/6" component={BusinessInfo6} />
          </Switch>
        </div>
      )
  }
}

export default BusinessInfo ;
