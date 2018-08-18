import React, { Component } from 'react';
import { Routes } from '../constants';
import { Container } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Routes/>
      </Container>
    );
  }
}

export default App;
