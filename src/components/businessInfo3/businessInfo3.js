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


    componentWillMount() {
       this.selectedCheckboxes = [];
     }

     toggleCheckbox = label => {
       if (this.selectedCheckboxes.includes(label)) {
         this.selectedCheckboxes.splice(this.selectedCheckboxes.indexOf(label), 1)
       } else {
         this.selectedCheckboxes.push({label, bool: true})
       }
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
      return axios.post(API_BASE_URL + '/api/setup/dates', this.selectedCheckboxes)
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log(this.selectedCheckboxes);
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



            </Grid>
        )
    }
}
