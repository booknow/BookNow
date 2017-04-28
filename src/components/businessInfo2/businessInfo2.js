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
    FormGroup
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper'

export default class BusinessInfo2 extends Component {

  constructor() {
    super()
    this.state = {
      id: null,
      servicesProvided: [],
      servicesPrices: []

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
              services_provided_price: +e.target.value
            }
          }
          else return c
        });
        this.setState( { servicesProvided: stateArr } )
        setTimeout(()=>{console.log(this.state.servicesProvided)},1000)

    }

    handleSubmit() {

      const prices = []
      this.state.servicesPrices.forEach(price=>{
        if (price) {
          prices.push({price});
        }
      })
      axios.put(API_BASE_URL + '/api/setup/services/:id', prices).then((response) =>{
        console.log(response);
      })

      console.log(this.state);

    }

    render() {
        const servicesProList = this.state.servicesProvided.map((service, idx) => {
          console.log(service);
          return (
            <FormGroup key={idx}>
              <Col componentClass={ControlLabel} sm={4}>
                <ControlLabel value={idx}>{service.service_name}</ControlLabel>
              </Col>
              <Col sm={8}>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>

                  <FormControl type="number" placeholder="enter price" onChange={this.handleChange.bind(this, service.service_name)}/>

                  <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
              </Col>
            </FormGroup>

          )
        });

        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>Please enter your Service Prices</h2>
                            <h3>Please enter the types of Services you offer and at what price</h3>
                            <h4>Example: Hourly ABC Service - $99</h4>
                            <FormGroup >
                                <Row className="show-grid">
                                    {servicesProList}
                                </Row>
                                <Checkbox inline>
                                    {'This is hourly service'}
                                </Checkbox>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                  <Col className="next-btn" md={4} mdOffset={4}>



                <ButtonToolbar>



                  {
                  this.state.servicesPrices.length
                  ?
                  <Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit} href="/setup/3">Next</Button>
                  :
                  <Button disabled bsStyle="success" bsSize="large" block>Next</Button>
                  }

                  <Button bsStyle="success" bsSize="large" block href="/setup/1">Previous</Button>
                </ButtonToolbar>


                  </Col>
                </Row>
            </Grid>
        )
    }
}
