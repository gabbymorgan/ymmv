import React, { Component } from "react";
import { connect } from "react-redux";
import { FormFeedback, FormText } from "reactstrap";
import proptypes from "prop-types";

import * as actions from "../../actions";
import {
  Button,
  Label,
  Row,
  Form,
  Col,
  DataInputGroup,
  Input
} from "../../styles";
import * as validators from "../../constants/validators";
import AutoComplete from "./AutoComplete";

class FormComponent extends Component {
  state = {};

  handleChange = async e => {
    const { name, value } = e.target;
    const validation = validators(name, value);
    this.setState({
      [name]: value,
      [name + "Error"]: validation.error
    });
  };

  handleSelect(fieldName, selectionName) {
    this.setState({
      [fieldName]: selectionName
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Col xs="6">
        <Row>
          <Form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
            <Input valid={true} placeholder="suuuuhhh" />
            <FormFeedback valid>Good to go!</FormFeedback>
            <FormFeedback invalid>
              {this.state.nameError}
            </FormFeedback>
            <Button>Submit</Button>
          </Form>
        </Row>
      </Col>
    );
  }
}

FormComponent.proptypes = {
  searchResults: proptypes.arrayOf(proptypes.string),
};

const mapStateToProps = state => ({
  searchResults: state.companies.searchResults
});

export default connect(
  mapStateToProps,
  { ...actions }
)(FormComponent);
