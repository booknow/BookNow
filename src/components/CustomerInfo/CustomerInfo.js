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
            customer: {
              email:null,
              address_city:null,
              address_state:null,
              address_street:null,
              first_name:null,
              last_name:null,
              frequency:null,
              service_name:null,
            },
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

    componentWillMount(){
      axios.get("http://localhost:3000/customer/" + this.props.match.params.id).then(response => {
        console.log(response.data);



        this.setState({
          customer:{
            email:response.data.email,
            address_city:response.data.address_city,
            address_state:response.data.address_state,
            address_street: response.data.address_street,
            address_zip:response.data.address_zip,
            first_name: response.data.first_name,
            last_name:response.data.last_name,
            frequency:response.data.frequency,
            service_name:response.data.service_name
          }
        })
      })
      console.log(this.props.match.params.id);
    }



    render() {
        const {tags, suggestions} = this.state;



        const {customer} = this.state;

        return (

            <Grid>

                <Row>
                    <Col sm={12}>
                        <h3>
                            Customers / {customer.first_name} {customer.last_name}
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
                                    <strong>
                                       {customer.first_name} {customer.last_name}
                                    </strong>
                                    <p className="margin-none">281 201 2910</p>
                                    <span>
                                      {customer.email}
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
                                        <span>
                                          {customer.address_street}, {customer.address_city}, {customer.address_state} {customer.address_zip}

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
                                      <Link to="/book">  <button className="btn btn-lg btn-primary pull-right create-booking-btn">
                                            Create Booking
                                        </button></Link>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="service-feedback">
                                    <Col lg={6}>
                                        <p>Service : {customer.service_name}</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p>Feedback</p>
                                    </Col>
                                </div>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <strong className="address-title">
                                        {customer.address_street}, {customer.address_city}, {customer.address_state} {customer.address_zip}
                                    </strong>
                                </Col>
                            </Row>
                            <p>04/20/2017 4:00PM</p>
                            <p>
                                {customer.frequency}
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
