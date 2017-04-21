import React, { Component } from 'react';
import NavComponent from './components/Nav/Nav';
import router from "./router";
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
