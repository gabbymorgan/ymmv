/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { login, showLoginModal, hideLoginModal } from "../../actions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
  Input
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nestedModal: false,
      closeAll: false,
      email: "",
      password: "",
      responseTitle: "",
      responseMessage: ""
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  handleNestedSubmit(event) {
    event.preventDefault();
    this.props.showLoginModal();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.loginModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <h2>Welcome back! Please sign in.</h2>
            <Form>
              <Label to="username">Username</Label>
              <Input
                type="text"
                name="username"
                onChange={this.handleChange.bind(this)}
              />
              <Label to="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={this.handleChange.bind(this)}
              />
              <Button onClick={this.handleSubmit.bind(this)}>
                Sign In
              </Button>
              <Button onClick={() => this.props.hideLoginModal()}>
                Cancel
              </Button>
            </Form>
            <Modal isOpen={this.props.loginSuccess || this.props.loginFailed}>
              <ModalHeader>{this.props.loginSuccess === true ? 'Login Successful' : 'Login failed.'}</ModalHeader>
              <ModalBody> {
                this.props.loginSuccess === true
                ? 'Good to see you again!'
                : 'Please check your username and password and try again.' 
              }
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleNestedSubmit.bind(this)}>
                  Ok
                </Button>{" "}
              </ModalFooter>
            </Modal>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loginModal, loginSuccess, loginFailed } = state.session;
  return {
    loginModal,
    loginSuccess,
    loginFailed
  };
};

export default connect(
  mapStateToProps,
  { login, showLoginModal, hideLoginModal }
)(Login);
