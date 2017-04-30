import React, {Component} from "react";

import { Switch, Route } from 'react-router-dom';
import './businessInfo.css';
import BusinessInfoStart from "../businessInfoStart/businessInfoStart"
import BusinessInfo1 from "../businessInfo1/businessInfo1";
import BusinessInfo2 from "../businessInfo2/businessInfo2";
import BusinessInfo3 from "../businessInfo3/businessInfo3";

class BusinessInfo extends Component {
  render() {
      return (
          <div>
          <Switch>
            <Route exact path="/setup" component={BusinessInfoStart}/>
            <Route exact path="/setup/1" component={BusinessInfo1} />
            <Route exact path="/setup/2" component={BusinessInfo2} />
            <Route exact path="/setup/3" component={BusinessInfo3} />
          </Switch>
        </div>
      )
  }
}

export default BusinessInfo ;
