import React, {Component} from "react";
import {
    Button,
    Checkbox,
    ButtonToolbar,
    Form,
    Grid,
    Col,
    Row,
    Panel,
    FormGroup
} from 'react-bootstrap';

import '../businessInfoStart/businessInfoStart.css';
import axios from 'axios'
;

export default class BusinessInfo1 extends Component {


    constructor() {

        super()

        this.state = {
          services: [],
          selectableServices: [],
          selected: []
        }

        axios.get('/api/setup/services').then((response) => {
          response.data.map( service => {
            this.setState({selectableServices: [...this.state.selectableServices, {name: service.service_name, id: service.service_id, selected: false}]})
          })
          this.setState({services: response.data})

        })
        .catch(function(err) {console.log(err)});

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, field) {
        console.log(e.target.value)
        this.setState({ [field]: e.target.value })
      }

    handleSubmit(e){
      const idArr = [];
      this.state.selectableServices.forEach(service=>{
        if (service.selected) {
          idArr.push(service.id);
        }
      })

        axios.post('/api/setup', {idArr}).then((response) =>{
          console.log(response);
        })
    }
    serviceClickHandler(str){
        const oldObj = this.state.selectableServices.filter((service, idx)=>(service.name === str)).pop()
        const newArr = this.state.selectableServices.filter((service, idx)=>!(service.name === str))
        this.setState({selectableServices: [...newArr, {name: str, id: oldObj.id, selected: !(oldObj.selected)}]})

    }


    render() {


      const services = this.state.services.map((service)=>{
          return (
            <Checkbox onClick={()=>this.serviceClickHandler(service.service_name)}>
              {service.service_name}
            </Checkbox>
          )
        });

        return (
            <Grid>
                <Row>
                    <Panel className="bi-panel">
                      <Col sm={12}>
                        <h2>SERVICE TYPE</h2>
                        <p>What service do you offer? Please select from the list below</p>

                        <Form horizontal>
                          <div className="setup-col">
                            <FormGroup >
                                {services}
                            </FormGroup>
                          </div>
                        </Form>
                        <ButtonToolbar>
                          <Col sm={6}>
                          <Button bsStyle="primary" bsSize="large" block href="/setup">Previous</Button>
                          </Col>
                                  { this.state.selectableServices.filter(service => service.selected).length
                                    ?
                                    <Col sm={6}>
                                    <Button onClick={this.handleSubmit} className="" bsStyle="success" bsSize="large" type="submit" href="/setup/2" block>
                                      Next
                                    </Button>
                                    </Col>
                                    :
                                  <Col sm={6}>
                                    <Button disabled onClick={this.handleSubmit} className="" bsStyle="success" bsSize="large" type="submit" href="/setup/2" block>
                                      Next
                                    </Button>
                                    </Col>
                                  }


                        </ButtonToolbar>
                    </Col>
                    </Panel>
                </Row>
                <div className="steps">
                  <p> 2 of 4</p>
                </div>
            </Grid>
        )
    }
}
