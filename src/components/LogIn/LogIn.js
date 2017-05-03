import React, {Component} from "react";
import axios from 'axios'
import { Button } from 'react-bootstrap'
import './LogIn.css';
;

class LogIn extends Component {
    login(e) {
      e.preventDefault()
      console.log("Logging in")
      axios.get('/auth/facebook')
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }
    render() {
        return (
            <div className='LogIn_Container'>
                <div className="LogIn_Box">
                    <h1 className="signIn-text">
                        SKEMA
                      </h1>
                    <p>Sign in to track your Booking, Reschedule, manage Add-ons, and more</p>
                    <form>
                        <b>Username:</b>
                        <br/>
                        <input className="form_group" type="text" name="username"/>
                        <br/>
                        <b>Password:</b>
                        <br/>
                        <input className="form_group" type="text" name="password"/>
                    </form>
                    <Button className="btn btn-signIn"> Sign In </Button>
                    <Button href="/auth/facebook" className="btn btn-facebook" >Login with Facebook</Button>

                </div>
            </div>
        )
    }
}
export default LogIn;
