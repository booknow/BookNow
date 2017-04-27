import React, {Component} from "react";
import {Link} from "react-router-dom"
import {
    Button,
    ButtonToolbar,
    InputGroup,
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    Checkbox,
    FormGroup
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';
import axios from 'axios'
import API_BASE_URL from '../../utils/api-helper'

export default class BusinessInfo2 extends Component {
  constructor(props) {
    super(props)

    // console.log(this.state)



    // axios.get(API_BASE_URL + '/api/setup/services').then((response) => {
    //   response.data.map( service => {
    //     this.setState({selectableServices: [...this.state.selectableServices, {name: service.service_name, id: service.service_id, selected: false}]})
    //   })
    //   this.setState({services: response.data})
    //
    // })
    // .catch(function(err) {console.log(err)});
    this.state = {
      desc:''
     ,price:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e, field) {
    this.setState({ [field]: e.target.value })
  }

  componentWillMount(){

    axios.get(API_BASE_URL + '/api/user')

  }

    render() {
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
                                    <Col xs={12} md={8}><FormControl value={this.state.desc} onChange={(e)=>this.handleChange(e, "desc")} type='text' placeholder="Description"/></Col>
                                    <Col xs={6} md={4}>
                                        <InputGroup>
                                            <InputGroup.Addon>$</InputGroup.Addon>
                                            <FormControl value={this.state.price} onChange={(e)=>this.handleChange(e, "price")} type="number" placeholder="Price"/>
                                            <InputGroup.Addon>.00</InputGroup.Addon>
                                        </InputGroup>
                                    </Col>
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
                  { this.state.desc && this.state.price
                  ?
                  <Button bsStyle="success" bsSize="large" block><Link to="/setup/3">Next</Link></Button>
                  :
                  <Button disabled bsStyle="success" bsSize="large" block><Link to="/setup/3">Next</Link></Button>
                  }
                  <Button bsStyle="success" bsSize="large" block><Link to="/setup/1">Previous</Link></Button>
                </ButtonToolbar>

            </Col>
          </Row>
            </Grid>
        )
    }
}
