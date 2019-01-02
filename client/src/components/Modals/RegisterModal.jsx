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
    passwordLengthOK: false,
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

  checkUsername(event) {
    event.preventDefault();
    alert('Nice username!')
    // this.props.checkUsername();
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      description,
      passwordMatch,
      passwordLengthOK
    } = this.state;
    if (!passwordMatch) {
      // TODO: replace with nested modal
      alert('Passwords do not match');
    }
    else if (!passwordLengthOK) {
      // TODO: replace with nested modal
      alert('Password is too short.');
    }
    this.props.register({ email, password, firstName, lastName, description });
  }

  render() {
    return (
      <ModalBody>
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Label to="email">Email*</Label>
        <Input name="email" onChange={this.inputHandler.bind(this)} />
        <Label to="firstName">Last Name*</Label>
        <Input name="firstName" onChange={this.inputHandler.bind(this)} />
        <Label to="lastName">Last Name*</Label>
        <Input name="lastName" onChange={this.inputHandler.bind(this)} />
        <Label to="description">About Me</Label>
        <Input type="textarea" name="description" onChange={this.inputHandler.bind(this)} />
        {/* <Label to="username">Username</Label>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button onClick={this.checkUsername.bind(this)}>Check Availability</Button></InputGroupAddon>
          <Input name="username" onChange={this.inputHandler.bind(this) } />
        </InputGroup> */}
        <Label to="password">Password/Confirm*</Label>
        <Input type="password" name="password" onChange={this.inputHandler.bind(this)} />
        <Input type="password" name="confirmPassword" onChange={this.inputHandler.bind(this)} />
        <Button onClick={this.handleSubmit.bind(this)}>Sign Up</Button>
      </Form>
    </ModalBody>
    );
  }
}

export default connect(null, { register, checkUsername })(RegisterModal);