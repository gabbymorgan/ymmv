import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroupAddon } from 'reactstrap';

import {
  Button,
  Form,
  Input,
  InputGroup, 
  ModalBody,
  Modal,
  ModalHeader,
  ModalFooter,
  Label,
} from '../../styles';
import { register, checkUsername } from '../../actions';

class RegisterModal extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    passwordLengthOK: true,
    passwordMatch: true,
  }

  inputHandler({ target }) {
    const { name, value } = target;
    let { password, confirmPassword, passwordLengthOK, passwordMatch } = this.state;
    switch(name) {
      case 'password':
        password = value;
        break;
      case 'confirmPassword':
        confirmPassword = value;
        break;
    };

    passwordLengthOK = password.length >= 8;
    passwordMatch = password === confirmPassword;

    this.setState({
      [name]: value,
      passwordLengthOK,
      passwordMatch,
    });
  }

  checkUsername() {
    this.props.checkUsername();
  }

  render() {
    return (
      <ModalBody>
      <Form>
        <Label to="email">Email</Label>
        <Input name="email" onChange={ this.inputHandler.bind(this) } />
        <Label to="username">Username</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button onClick={() => this.checkUsername() }>Check Availability</Button></InputGroupAddon>
          <Input name="username" onChange={this.inputHandler.bind(this) } />
        </InputGroup>
        <Label to="password">Password/Confirm</Label>
        <Input type="password" name="password" onChange={this.inputHandler.bind(this) } />
        <Input type="password" name="confirmPassword" onChange={this.inputHandler.bind(this) } />
      </Form>
    </ModalBody>
    );
  }
}

export default connect(null, { register, checkUsername })(RegisterModal);