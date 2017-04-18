import React, { Component } from 'react';
import NavComponent from './components/Nav/Nav';
import LogIn from './components/LogIn/LogIn';
import AddAppointment from './components/Appointments/addAppointment'
import router from "./router";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <NavComponent />
        { router }
      </div>
    );
  }
}

export default App;
