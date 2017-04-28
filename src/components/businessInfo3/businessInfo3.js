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
import Checkbox from '../../utils/Checkbox'

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
            sun: null,
            mon: null,
            tus: null,
            wed: null,
            thur: null,
            fri: null,
            sat: null
        }
       
    }

    componentWillMount = () => {
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

    postToServer(){

    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        // for (const checkbox of this.selectedCheckboxes) {
        //   console.log(checkbox, 'is selected.');
        // }
        console.log(this.selectedCheckboxes);
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


                            <a onClick={this.handleFormSubmit}>Next</a>
                            <ButtonToolbar>
                              <Col sm={6}>

                                {this.state.sun || this.state.mon || this.state.tus || this.state.wed || this.state.thur || this.state.fri || this.state.sat

                                    ? <Button bsStyle="success" bsSize="large" block href="/setup/4">Next</Button>
                                    : <Button disabled bsStyle="success" bsSize="large" block href="/setup/4">Next</Button>
    }
                              </Col>
                              <Col sm={6}>
                                <Button bsStyle="success" bsSize="large" block href="/setup/2">Previous</Button>
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
