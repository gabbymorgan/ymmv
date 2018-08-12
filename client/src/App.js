import React, { Component } from 'react';
import Routes from './constants/routes';
import Nav from './components/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
