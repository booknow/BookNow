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
      ,desc:''
      ,price:''
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
        console.log(this.state.servicesProvided);
        })
      })
    }

    handleChange(field, e) {
      this.setState({servicesPrices:[...this.state.servicesPrices, {
        [field]: e.target.value
      }]})


    }

    handleSubmit() {
      console.log(this.state);
      const prices = []
      this.state.servicesPrices.forEach(price=>{
        if (price) {
          prices.push({price});
        }
      })
      axios.put(API_BASE_URL + '/api/setup/services/:id', prices).then((response) =>{
        console.log(response);
      })
    }

    render() {
        const servicesProList = this.state.servicesProvided.map((service, idx) => {
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

                  <Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit}>Next</Button>



                  <Button bsStyle="success" bsSize="large" block href="/setup/1">Previous</Button>
                </ButtonToolbar>


                  </Col>
                </Row>
            </Grid>
        )
    }
}
