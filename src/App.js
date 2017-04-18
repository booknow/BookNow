import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import LogIn from './components/LogIn/LogIn';
import AddAppointment from './components/Appointments/addAppointment'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav / >
        <LogIn / >
        <AddAppointment />
      </div>
    );
  }
}

export default App;
