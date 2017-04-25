import React, {Component} from "react";

import './LogIn.css';

class LogIn extends Component {
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
                          <button className="play-button btn btn-facebook"><a className="facebook-text"href="http://localhost:3000/auth/facebook">Login with Facebook</a></button>
                      </form>
                </div>
            </div>
        )
    }
}
export default LogIn;
