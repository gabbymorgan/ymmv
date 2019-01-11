import React, { Component } from 'react';

import { Container } from '../styles';
import { Routes } from '../constants';
import { Nav, SessionModal } from '../containers';
import './App.css';
import FormModal from './FormModal';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Nav/>
        <SessionModal/>
        <FormModal/>
        <Routes/>
      </Container>
    );
  }
}

export default App;
