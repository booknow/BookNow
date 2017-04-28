import React, {Component} from "react";
import {
    Button,
    ButtonToolbar,
    InputGroup,
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    ControlLabel,
    Checkbox,
    FormGroup,
    Panel
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper'

export default class BusinessInfo2 extends Component {

  constructor() {
    super()
    this.state = {
      id: null,
      servicesProvided: []


    }



    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  componentWillMount(){


    axios.get(API_BASE_URL + '/api/user')
    .then(response => {
      this.setState({id: response.data})
      axios.get(API_BASE_URL + '/api/setup/services/' + this.state.id).then(response=>{
        this.setState({servicesProvided: response.data})
        })
      })
    }

    handleChange(field, e) {

        let stateArr = this.state.servicesProvided.map(c=>{
          if (c.service_name === field) {
            return {
              service_id: c.service_id,
              service_name: c.service_name,
              services_provided_price: +e.target.value,
              sprovider_id: this.state.id
            }
          }
          else return c
        });
        this.setState( { servicesProvided: stateArr } )


    }

    handleSubmit() {



      axios.put(API_BASE_URL + '/api/setup/services/:id', this.state.servicesProvided).then((response) =>{
        console.log(response);
      })

      console.log(this.state);

    }

    render() {
        const servicesProList = this.state.servicesProvided.map((service, idx) => {

          return (
            <FormGroup key={idx}>
              <Col componentClass={ControlLabel} sm={3}>
                <ControlLabel value={idx}>{service.service_name}</ControlLabel>
              </Col>
              <Col sm={6}>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>

                  <FormControl type="number" required placeholder="enter price" onChange={this.handleChange.bind(this, service.service_name)}/>

                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>

          )
        });

        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                      <Panel className="bi-panel">
                        <Form horizontal>
                            <h2>Please enter your Service Prices</h2>
                            <p>Please enter the types of Services you offer and at what price. Example: Hourly ABC Service - $99</p>
                            <FormGroup >
                                <Row className="show-grid">
                                    {servicesProList}
                                </Row>

                            </FormGroup>
                        </Form>
                        <ButtonToolbar>
                          <Col sm={6}>

                          <Button bsStyle="primary" bsSize="large" block href="/setup/1">Previous</Button>
                          </Col>
                          <Col sm={6}>
                          <Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit} href="/setup/3">Next</Button>
                          </Col>


                        </ButtonToolbar>

                      </Panel>
                    </Col>
                </Row>

            </Grid>
        )
    }
}
