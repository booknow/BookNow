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
                    <button className="sign_in_button"> Sign In </button>
                    <button className ="sign_up_button"> Sign Up </button>
                </div>
            </div>
        )
    }
}
export default LogIn;
