import proptypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormFeedback, FormText } from "reactstrap";

import { createProduct } from "../../actions";
import AutoComplete from "./AutoComplete";
import { Product } from "../../contracts";
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

class FormComponent extends Component {
  state = {};

  handleChange = e => {
    const { name, value } = e.target;
    const warnings = this.validate(name, value);
    this.setState({
      [name]: value,
      [name + "Warnings"]: warnings
    });
  };

  validate(name, value) {
    const { isShorterThan } = validators;
    const productValidators = {
      name() {
        return [isShorterThan(value, 128, true)];
      },
      description() {
        return [isShorterThan(value, 256, true)];
      },
      company() {
        return [];
      }
    };
    return productValidators[name]();
  }

  handleSelect(fieldName, selectionName) {
    this.setState({
      [fieldName]: selectionName
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProduct(this.state);
  }

  render() {
    return (
      <Col xs="6">
        <Row>
          <Form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
            <Label to="name" />
            <Input
              valid
              name="name"
              placeholder="name"
              onChange={this.handleChange.bind(this)}
            />
            <FormFeedback valid>Good to go!</FormFeedback>
            <FormFeedback invalid>{this.state.nameError}</FormFeedback>
            <Label to="description" />
            <Input
              valid
              name="description"
              placeholder="description"
              onChange={this.handleChange.bind(this)}
            />
            <FormFeedback valid>Good to go!</FormFeedback>
            <FormFeedback invalid>{this.state.descriptionError}</FormFeedback>
            <Button>Submit</Button>
            <Label to="company" />
            <Input name="company" onChange={this.handleChange.bind(this)} />
            <AutoComplete
              collection="Company"
              string={this.state.company}
              fieldName="company"
              subField="name"
              handleSelect={this.handleSelect.bind(this)}
            />
            <FormFeedback valid>Good to go!</FormFeedback>
            <FormFeedback invalid>{this.state.nameError}</FormFeedback>
          </Form>
        </Row>
      </Col>
    );
  }
}

FormComponent.proptypes = {
  searchResults: proptypes.arrayOf(proptypes.string)
};

const mapStateToProps = state => ({
  searchResults: state.company.searchResults
});

export default connect(
  mapStateToProps,
  { createProduct }
)(FormComponent);
