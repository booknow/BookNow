import React, { Component } from 'react';
import NavComponent from './components/Nav/Nav';
import router from "./router";
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';

import Test from './components/testing/testing'
class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Route path='/' exact component={Test}/>
          <Route path='/' component={NavComponent}/>
          </div>
        </BrowserRouter>
        { router }
      </div>
    );
  }
}

export default App;
