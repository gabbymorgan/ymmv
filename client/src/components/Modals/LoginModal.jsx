import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, ModalBody, Form, Input, Label } from '../../styles';
import { login } from '../../actions';

class RegisterModal extends Component {
  state = {
    email: '',
    username: '',
    password: '',
  }

  handleChange({ target }) {
    const { value, name } = target;
    let theChosenOne = 'username';
    let notTheChosenOne = 'email';

    // checking for email vs username
    if (name === 'emailOrUsername') {
      if (value.match(/.*@.*\..*/)) {
        theChosenOne = 'email';
        notTheChosenOne = 'username';
      }
      this.setState({
        [theChosenOne]: value,
        [notTheChosenOne]: null,
      })   
    }
    else {
      this.setState({
        [name]: value,
      });      
    }
  }

  handleSubmit() {
    const { email, username, password } = this.state;
    this.props.login(email, username, password);
  }

  render() {
    return (
      <ModalBody>
      <Form>
        <Label to="emailOrUsername">Email/Username</Label>
        <Input name="emailOrUsername" onChange={ this.handleChange.bind(this) } />
        <Label to="password">Password</Label>
        <Input type="password" name="password" onChange={this.handleChange.bind(this) } />
      </Form>
      <Button onClick={() => this.handleSubmit() }>Sign In</Button>
    </ModalBody>
    );
  }
}

export default connect(null, { login })(RegisterModal);