import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormFeedback, FormText } from 'reactstrap';
import proptypes from 'prop-types';

import * as actions from '../actions';
import { Button, Label, Row, Form, Col, DataInputGroup } from '../styles';
import * as contracts from '../contracts';
import * as validators from '../contracts/validators';
import * as inputComponents from '../styles/inputComponents';
import AutoComplete from './AutoComplete';

let reduxProps = [];
let docType = '';

class FormComponent extends Component {
  state = {}

  componentDidMount() {
    docType = this.props.docType;
    Object.keys(contracts[docType + 'Contract']).forEach(field => {
      reduxProps.push(field);
    });
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    const validation = await this.callValidator(name, value);
    this.setState({
      [name]: value,
      [name + 'Error']: validation.error,
    });
  }

  handleSelect(fieldName, selectionName) {
    this.setState({
      [fieldName]: selectionName,
    });
  }

  callValidator = async (name, value) => {
    const validator = validators[name];
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
          <Form autocomplete="off" onSubmit={this.handleSubmit.bind(this)}>
            {
              Object.keys(contract).map(fieldName => {
                let field = contract[fieldName];
                if (Array.isArray(field)) field = { ...field[0], isArray: true };
                const { search, inputType, isArray } = field;
                if (!inputType) return null;
                const Element = inputComponents[docType][fieldName];
                const valid = this.state[fieldName] && !this.props[fieldName + 'Error'];
                const invalid = !valid && this.state[fieldName];
                return (
                  <DataInputGroup key={docType + '_' + fieldName}>
                    <Label for={fieldName}>{fieldName.split(/(?=[A-Z])/).join(' ').toLowerCase()}</Label>
                    <Element
                      value={this.state[fieldName] || this.props[fieldName] || ''}
                      valid={valid}
                      invalid={invalid}
                      key={fieldName}
                      name={fieldName}
                      onChange={(e) => this.handleChange(e) }
                    />
                    {
                      search
                        ? <AutoComplete
                          fieldName={fieldName}
                          collection={search.collection}
                          subField={search.subField}
                          string={this.state[fieldName]}
                          handleSelect={this.handleSelect.bind(this)}
                        />
                        : null
                    }
                    <FormFeedback valid>Good to go!</FormFeedback>
                    <FormFeedback invalid>{this.state[fieldName + 'Error']}</FormFeedback>
                    <FormText>{isArray ? 'Please use commas to separate.' : ''}</FormText>
                  </DataInputGroup>
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

FormComponent.proptypes = {
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

export default connect(mapStateToProps, { ...actions })(FormComponent);