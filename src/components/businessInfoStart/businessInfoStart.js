import React, {Component} from "react";
import {Link} from "react-router-dom";
import {

    Button,
    ButtonToolbar,
    ControlLabel,
    Form,
    Grid,
    ButtonInput,
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

                              <Col componentClass={ControlLabel} sm={3}>
                                  Email
                              </Col>
                              <Col sm={9}>
                                  <FormControl value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email"/>
                              </Col>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>
                          {
                            this.state.email
                            ?
                            <Button bsStyle="success" bsSize="large" block>
                                <Link to="/setup/1">Next</Link>
                            </Button>
                            :
                            <Button disabled bsStyle="success" bsSize="large" block>
                                <Link to="/setup/1">Next</Link>
                            </Button>
                          }
                        </ButtonToolbar>

                    </Col>
                </Row>

            </Grid>
        )
    }
}
