import React, {Component} from "react";
var ReactDOM = require('react-dom');

import './LogIn.css';

class LogIn extends Component {
    render() {
        return (
            <div className='LogIn_Container'>
                <div className="LogIn_Box">
                    <h1 className="Sign_In_Box">
                        Sign In</h1>
                    <p>Sign in to track your Booking, Reschedule, manage Add-ons, and more</p>
                    <form>
                        <b>Username:</b>
                        <br/>
                        <input className="form_group" type="text" name="username"/>
                        <br/>
                        <b>Password:</b>
                        <br/>
                        <input className = "form_group" type="text" name="password"/>
                    </form>
                    <button> Sign In </button>
                      <form>
                          <button class="play-button"><a href="http://localhost:3000/auth/facebook">Login with Facebook</a></button>
                      </form>
                </div>
            </div>
        )
    }
}
export default LogIn;
