import React, { Component } from "react";
import { connect } from "react-redux";
import { FormFeedback, FormText } from "reactstrap";
import proptypes from "prop-types";

import * as actions from "../actions";
import { Button, Label, Row, Form, Col, DataInputGroup } from "../styles";
import * as contracts from "../contracts";
import * as validators from "../constants/validators";
import * as inputComponents from "../styles/inputComponents";
import AutoComplete from "./AutoComplete";

let reduxProps = [];
let docType = "";

class FormComponent extends Component {
  state = {};

  componentDidMount() {
    docType = this.props.docType;
    Object.keys(contracts[docType + "Contract"]).forEach(field => {
      reduxProps.push(field);
    });
  }

  handleChange = async e => {
    const { name, value } = e.target;
    const validation = await this.validate(name, value);
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

  validate = async (name, value) => {
    const validator = validators[name];
    return validator ? validator(value) : { success: true, error: "" };
  };

  handleSubmit(e) {
    e.preventDefault();
    const document = {};
    const actionBase = this.props.isNew ? "create" : "update";
    Object.keys(this.state).forEach(key => {
      document[key] = this.state[key];
    });
    this.props[actionBase + this.props.docType](document);
    this.props.hideFormModal();
  }

  render() {
    const { docType } = this.props;
    const contract = contracts[docType + "Contract"];
    return (
      <Col xs="12">
        <Form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
          {Object.keys(contract).map(fieldName => {
            let field = contract[fieldName];
            if (Array.isArray(field)) field = { ...field[0], isArray: true };
            const { search, inputType, isArray } = field;
            if (!inputType) return null;
            const Element = inputComponents[docType][fieldName];
            const valid =
              this.state[fieldName] && !this.props[fieldName + "Error"];
            const invalid = !valid && this.state[fieldName] != null;
            return (
              <DataInputGroup key={docType + "_" + fieldName}>
                <Col xs="12" md="2">
                  <Label for={fieldName}>
                    {fieldName
                      .split(/(?=[A-Z])/)
                      .join(" ")
                      .toLowerCase()}
                  </Label>
                </Col>
                <Col xs="12" md="4">
                  <Element
                    value={this.state[fieldName] || this.props[fieldName] || ""}
                    valid={valid}
                    invalid={invalid}
                    key={fieldName}
                    name={fieldName}
                    onChange={e => this.handleChange(e)}
                  />
                  {search ? (
                    <AutoComplete
                      fieldName={fieldName}
                      collection={search.collection}
                      subField={search.subField}
                      string={this.state[fieldName]}
                      handleSelect={this.handleSelect.bind(this)}
                    />
                  ) : null}
                  <FormText>
                    {isArray ? "Please use commas to separate." : ""}
                  </FormText>
                  <FormFeedback valid>Good to go!</FormFeedback>
                  <FormFeedback invalid>
                    {this.state[fieldName + "Error"]}
                  </FormFeedback>
                </Col>
              </DataInputGroup>
            );
          })}
          <Button>Submit</Button>
        </Form>
      </Col>
    );
  }
}

FormComponent.proptypes = {
  isNew: proptypes.bool,
  docType: proptypes.string,
  validator: proptypes.object
};

const mapStateToProps = state => {
  let newProps = {};
  Object.keys(reduxProps).forEach(propName => {
    if (state[propName]) newProps[propName] = state[docType][propName];
  });
  return newProps;
};

export default connect(
  mapStateToProps,
  { ...actions }
)(FormComponent);
