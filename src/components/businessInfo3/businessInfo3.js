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
import Checkbox from '../Checkbox';
import axios from 'axios';

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
      return axios.post('/api/setup/dates', this.state.selectedCheckboxes)
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


                            <ButtonToolbar>

                              <Col sm={6}>
                                <Button bsStyle="primary" bsSize="large" block href="/setup/2">Previous</Button>
                              </Col>
                              { this.state.selectedCheckboxes.length
                                ?
                              <Col sm={6}>
                                    <Button  bsStyle="success" bsSize="large"  block href="/home">Finish</Button>
                              </Col>
                              :
                              <Col sm={6}>
                                    <Button disabled bsStyle="success" bsSize="large" block >Finish</Button>
                              </Col>
                            }
                            </ButtonToolbar>
                        </Form>
                    </Col>
                      </Panel>
                </Row>

                <div className="steps">
                  <p> 4 of 4</p>
                </div>

            </Grid>
        )
    }
}
//note
//there was this line onClick={this.handleFormSubmit.bind(this)} inside the finish buttons
