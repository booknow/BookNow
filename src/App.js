import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import LogIn from './components/LogIn/LogIn';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav / >
        <LogIn / >
      </div>
    );
  }
}

export default App;
