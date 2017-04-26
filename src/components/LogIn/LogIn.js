import React, {Component} from "react";
import axios from 'axios'

import './LogIn.css';

class LogIn extends Component {
    login(e) {
      e.preventDefault()
      console.log("Logging in")
      axios.get('http://localhost:3000/auth/facebook')
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
                    <button className="btn btn-signIn"> Sign In </button>
                      <form>
                          <button className="play-button btn btn-facebook" ><a href="http://localhost:3000/auth/facebook" className="facebook-text">Login with Facebook</a></button>
                      </form>
                </div>
            </div>
        )
    }
}
export default LogIn;
