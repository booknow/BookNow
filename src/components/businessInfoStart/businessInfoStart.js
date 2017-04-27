import React, {Component} from "react";
import {
    Button,
    ButtonToolbar,
    ControlLabel,
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
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>

                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>

                          {
                            this.state.email
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

            </Grid>
        )
    }
}
