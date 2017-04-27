import React, {Component} from "react";
import {
    Button,
    Checkbox,
    ButtonToolbar,
    Form,
    Grid,
    Col,
    Row,
    FormGroup
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';

export default class BusinessInfo3 extends Component {
    constructor() {
        super()
        this.state = {
            sun: 0,
            mon: 0,
            tus: 0,
            wed: 0,
            thur: 0,
            fri: 0,
            sat: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e, field) {
        console.log(e.target.value)
        this.setState({[field]: e.target.value})
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={8}>
                        <Form horizontal>
                            <h2>AVAILABILITY</h2>
                            <h4>Select the days you provide service</h4>
                            <FormGroup >
                                <Checkbox value={this.state.sun} onChange={(e) => this.handleChange(e, "sun")} inline>
                                    {'Sunday'}
                                </Checkbox>

                                <Checkbox value={this.state.mon} onChange={(e) => this.handleChange(e, "mon")}>
                                    {'Monday'}
                                </Checkbox>

                                <Checkbox value={this.state.tus} onChange={(e) => this.handleChange(e, "tus")}>
                                    {'Tuesday'}
                                </Checkbox>

                                <Checkbox value={this.state.wed} onChange={(e) => this.handleChange(e, "wed")}>
                                    {'Wednesday'}
                                </Checkbox>

                                <Checkbox value={this.state.thur} onChange={(e) => this.handleChange(e, "thur")}>
                                    {'Thursday'}
                                </Checkbox>

                                <Checkbox value={this.state.fri} onChange={(e) => this.handleChange(e, "fri")}>
                                    {'Friday'}
                                </Checkbox>

                                <Checkbox value={this.state.sat} onChange={(e) => this.handleChange(e, "sat")}>
                                    {'Saturday'}
                                </Checkbox>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="next-btn" md={4} mdOffset={4}>

                        <ButtonToolbar>

                            {this.state.sun || this.state.mon || this.state.tus || this.state.wed || this.state.thur || this.state.fri || this.state.sat

                                ? <Button bsStyle="success" bsSize="large" block href="/setup/4">Next</Button>
                                : <Button disabled bsStyle="success" bsSize="large" block href="/setup/4">Next</Button>
}

                            <Button bsStyle="success" bsSize="large" block href="/setup/2">Previous</Button>

                        </ButtonToolbar>

                    </Col>
                </Row>
            </Grid>
        )
    }
}
