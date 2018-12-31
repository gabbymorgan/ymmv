import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormFeedback, FormText } from 'reactstrap';
import proptypes from 'prop-types';

import * as actions from '../actions';
import { Button, Label, Row, Form, Input, Col } from '../styles';
import * as contracts from '../contracts';
import * as validators from '../contracts/validators';
import * as inputComponents from '../styles/inputComponents';

let reduxProps = [];
let docType = '';

class CreateOrUpdateDoc extends Component {
  state = {}

  componentDidMount() {
    docType = this.props.docType;
    Object.keys(contracts[docType + 'Contract']).forEach(field => {
      reduxProps.push(field);
    });
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    const validation = await this.callValidator(name, value);
    this.setState({
      [name]: value,
      [name + 'Error']: validation.error,
    });
  }

  callValidator = async (name, value) => {
    const validator = validators[name];
    if (validator) console.log(validator(value));
    return validator ? validator(value)
      : { success: true, error: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const document = {};
    const actionBase = this.props.isNew ? 'create' : 'update';
    Object.keys(this.state).forEach(key => {
      document[key] = this.state[key];
    });
    this.props[actionBase + this.props.docType](document);
  };

  render() {
    const {
      docType,
    } = this.props;
    const contract = contracts[docType + 'Contract'];
    return (
      <Col xs="6">
        <Row>
          <Form style={{ width: "100%" }} onSubmit={this.handleSubmit.bind(this)}>
            {
              Object.keys(contract).map(fieldName => {
                if (!contract[fieldName].inputType) return null;
                const Element = inputComponents[docType][fieldName];
                const valid = this.state[fieldName] && !this.props[fieldName + 'Error'];
                const invalid = !valid && this.state[fieldName];
                return (
                  <div key={docType + '_' + fieldName}>
                    <Label for={fieldName}>{fieldName.split(/(?=[A-Z])/).join(' ').toLowerCase()}</Label>
                    <Element
                      value={this.state[fieldName] || this.props[fieldName] || ''}
                      valid={valid}
                      invalid={invalid}
                      key={fieldName}
                      name={fieldName}
                      placeholder={fieldName}
                      onChange={this.handleChange.bind(this)}
                    />
                    <FormFeedback valid>Good to go!</FormFeedback>
                    <FormFeedback invalid>{this.state[fieldName + 'Error']}</FormFeedback>
                  </div>
                )
              })
            }
            <Button>Submit</Button>
          </Form>
        </Row>
      </Col>
    );
  }
}

CreateOrUpdateDoc.proptypes = {
  isNew: proptypes.bool,
  docType: proptypes.string,
  validator: proptypes.object,
};

const mapStateToProps = state => {
  let newProps = {};
  Object.keys(reduxProps).forEach(propName => {
    if (state[propName]) newProps[propName] = state[docType][propName];
  });
  return newProps;
};

export default connect(mapStateToProps, { ...actions })(CreateOrUpdateDoc);