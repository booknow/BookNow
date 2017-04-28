import React, {Component} from "react";
import {
    Button,
    ButtonToolbar,
    Form,
    Grid,
    Col,
    Row,
    Panel
} from 'react-bootstrap'
import '../businessInfoStart/businessInfoStart.css';
import Checkbox from '../../utils/Checkbox';
import axios from 'axios';
import API_BASE_URL from '../../utils/api-helper';

const items = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export default class BusinessInfo3 extends Component {
    constructor() {
      super()
      this.state = {
        selectedCheckboxes: []
      }
    }
    componentWillMount() {
     }

     toggleCheckbox = label => {
       let selectedCheckboxes = this.state.selectedCheckboxes.slice();
       if (selectedCheckboxes.includes(label)) {
         selectedCheckboxes.splice(selectedCheckboxes.indexOf(label), 1)
       } else {
         selectedCheckboxes.push(label)
       }
       this.setState({selectedCheckboxes})
     }
    createCheckbox = label => (
      <Checkbox
        label={label}
        handleCheckBoxChange={this.toggleCheckbox}
        key={label}
      />
    )

    createCheckboxes = () => (
      items.map(this.createCheckbox)
    )

    postToServer() {
      return axios.post(API_BASE_URL + '/api/setup/dates', this.state.selectedCheckboxes)
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log(this.state.selectedCheckboxes);
        this.postToServer()
      }

    render() {
        return (
            <Grid>
                <Row>
                  <Panel className="bi-panel">
                    <Col sm={12}>
                        <Form horizontal>
                            <h2>AVAILABILITY</h2>

                            <h4>Select the days you provide service</h4>


                            {this.createCheckboxes()}


                            <a onClick={this.handleFormSubmit.bind(this)}>Next</a>

                            <ButtonToolbar>

                              <Col sm={6}>
                                <Button bsStyle="primary" bsSize="large" block href="/setup/2">Previous</Button>
                              </Col>
                              <Col sm={6}>




                                    <Button disabled bsStyle="success" bsSize="large" block href="/setup/4">Next</Button>

                              </Col>
                            </ButtonToolbar>
                        </Form>
                    </Col>
                      </Panel>
                </Row>

                <div className="steps">
                  <p> 4 of 7</p>
                </div>

            </Grid>
        )
    }
}
