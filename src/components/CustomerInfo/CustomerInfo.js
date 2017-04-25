//TODO: Fix tags https://www.npmjs.com/package/react-tag-input

import React, {Component} from "react";
import axios from "axios";

import {Link} from 'react-router-dom';

import "./CustomerInfo.css";

import {WithContext as ReactTags} from 'react-tag-input';

import {
    Grid,
    Row,
    Col,
    MenuItem,
    DropdownButton,
    FormGroup,
    InputGroup,
    FormControl,
    Jumbotron,
    Button,
    Table
} from "react-bootstrap";

class CustomerInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tags: [
                {
                    id: 1,
                    text: "aggresive"
                }, {
                    id: 2,
                    text: "Intelligent"
                }
            ],
            suggestions: ["Greedy", "Angry"]
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        // console.log(this.state.tags.length)
        // console.log(i)
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.setState({tags: tags});
    }

    render() {
        const {tags, suggestions} = this.state;
        return (

            <Grid>

                <Row>
                    <Col sm={12}>
                        <h3>
                            Customers / First Name Last Name
                        </h3>
                    </Col>
                </Row>

                <Row>
                    <Col className="white-back" sm={4} xs={12}>
                        <div>
                            <legend className="legend-text customer-info-pad">Customer Info</legend>
                        </div>
                        <Col sm={12}>
                            <fieldset>
                                <div className="text-center">
                                    <strong>Qais La La
                                    </strong>
                                    <p className="margin-none">281 201 2910</p>
                                    <span>qais@gmail.com
                                    </span>
                                    <p className="customer-since">Customer since 2017
                                    </p>
                                </div>
                            </fieldset>

                            <fieldset className="addresses">
                                <div className="form-group">
                                    <p>

                                        <legend className="legend-text">Addresses</legend>
                                        <label>Default Address:</label>
                                        <br/>
                                        <span>500 S Ervay St, dallas, TX 75201
                                        </span>

                                    </p>
                                </div>
                            </fieldset>

                            <fieldset className="tags">
                                <legend className="legend-text">Tags</legend>
                                <label>
                                    "To attach a special tag to this Customer, type a tag name and press enter or select from available tags:"
                                </label>
                                <div>
                                    <ReactTags tags={tags}
                                      suggestions={suggestions}
                                      handleDelete={this.handleDelete}
                                      handleAddition={this.handleAddition}
                                      handleDrag={this.handleDrag}/>

                                </div>
                            </fieldset>

                            <fieldset classname="notes">
                                <legend className="legend-text">Notes
                                </legend>
                                <textarea rows="10" cols="44"></textarea>
                            </fieldset>

                            <fieldset className="Payment Method"></fieldset>
                        </Col>
                    </Col>

                    <Col sm={8} xs={12}>
                        <div className="white-back col2-padd">
                            <Row>
                                <Col sm={12}>
                                    <div>
                                        <button className="btn btn-lg btn-white dropdown-toggle">Completed Bookings</button>
                                        <button className="btn btn-lg btn-primary pull-right create-booking-btn">
                                            Create Booking
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="service-feedback">
                                    <Col lg={6}>
                                        <p>Service</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Feedback</p>
                                    </Col>
                                </div>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <strong className="address-title">500 S Ervay St, Dallas, TX 75201
                                    </strong>
                                </Col>
                            </Row>
                            <p>04/20/2017 4:00PM</p>
                            <p>
                                One Time
                            </p>
                            <strong>
                                Small Car
                            </strong>

                        </div>
                    </Col>
                </Row>

            </Grid>
        )
    }

}

export default CustomerInfo;
