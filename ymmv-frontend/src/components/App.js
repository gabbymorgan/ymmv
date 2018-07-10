import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">YMMV</h1>
          <h3 className="App-subtitle">Crowdsourced reporting on food allergens.</h3>
          <p>Disclaimer: This app is for educational purposes only, and should not be used in place of medical or nutriritional advice from a licensed professional. As the title says, your mileage may vary.</p> 
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
