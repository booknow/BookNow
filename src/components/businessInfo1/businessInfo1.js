import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    Checkbox,
    Table,
    ButtonToolbar,
    Panel,
    ControlLabel,
    InputGroup,
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    FormGroup
} from 'react-bootstrap';

import '../businessInfoStart/businessInfoStart.css';
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper';

export default class BusinessInfo1 extends Component {

    componentWillMount() {

    }

    constructor() {

        super()

        this.state = {
          services: []
        }

        axios.get(API_BASE_URL + '/api/setup/services').then((response) => {
          this.setState({services: response.data})
          console.log(this.state.services);
        })
        .catch(function(err) {console.log(err);})


    }

    render() {


      const services = this.state.services.map(function(service){
          return (
            <Checkbox>
              {service.service_name}
            </Checkbox>

          )
        });

        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>SERVICE TYPE</h2>
                            <h4>What service do you offer? Please select from the list below</h4>

                            <div className="setup-col">
                              <FormGroup >
                                  {services}
                              </FormGroup>
                            </div>
                          </Form>
                      </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>
                            <Col md={4} mdOffset={4}>
                                <Button className="" bsStyle="success" bsSize="large">
                                    <Link to="/businessInfo/2">Next</Link>
                                </Button>
                            </Col>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
