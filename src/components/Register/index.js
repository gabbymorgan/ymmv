/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { register, showRegisterModal, hideRegisterModal } from "../../actions";

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

class Register extends React.Component {
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
    this.props.register({ email, password });
  }

  handleNestedSubmit(event) {
    event.preventDefault();
    this.props.showRegisterModal();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.registerModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <h2>Welcom please register yes.</h2>
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
              <Button onClick={() => this.props.hideRegisterModal()}>
                Cancel
              </Button>
            </Form>
            <Modal isOpen={this.props.registerSuccess || this.props.registerFailed}>
              <ModalHeader>{this.props.registerSuccess === true ? 'Register Successful' : 'Register failed.'}</ModalHeader>
              <ModalBody> {
                this.props.registerSuccess === true
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
  const { registerModal, registerSuccess, registerFailed, registerInProgress } = state.session;
    return {
      registerModal, registerSuccess, registerFailed, registerInProgress
    }
  };

export default connect(
  mapStateToProps,
  { register, showRegisterModal, hideRegisterModal })(Register);
