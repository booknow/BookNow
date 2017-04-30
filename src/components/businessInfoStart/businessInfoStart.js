import React, {Component} from "react";
import {
    Button,
    ButtonToolbar,
    ControlLabel,
    Panel,
    Form,
    Grid,
    Col,
    Row,
    FormControl,
    FormGroup
} from 'react-bootstrap'
import './businessInfoStart.css';

export default class BusinessInfoStart extends Component {


    constructor() {
         super()
         this.state = {
           email: ""
         }
         this.handleChange = this.handleChange.bind(this)
     }

     handleChange(e) {
       // console.log(e.target.value)
       this.setState({email: e.target.value})

     }




    render() {
        return (
            <Grid>
              <Panel className="bi-panel">
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>FIRST THINGS FIRST</h2>
                            <h4>Where does your customer email their questions?</h4>
                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email
                                </Col>
                                <Col sm={9}>
                                    <FormControl value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email"/>
                                </Col>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>

                          {
                            this.state.email && this.state.email.includes('@') && this.state.email.includes('.')
                            ?


                            <Button bsStyle="success" bsSize="large" block href="/setup/1">
                                Next
                            </Button>

                            :
                            <Button disabled bsStyle="success" bsSize="large" block href="/setup/1">
                                Next
                            </Button>
                          }

                        </ButtonToolbar>
                    </Col>

                </Row>
                </Panel>
                <div className="steps">
                  <p> 1 of 4</p>
                </div>
            </Grid>

        )
    }
}
