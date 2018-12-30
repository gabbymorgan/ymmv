import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Input, Col } from 'reactstrap';
import proptypes from 'prop-types';

import * as actions from '../actions';
import { Button } from '../styles';
import * as contracts from '../contracts';
import * as inputComponents from '../styles/inputComponents';

let reduxProps = [];
let docType = '';

class CreateProduct extends Component {

  componentDidMount() {
    docType = this.props.docType;
    Object.keys(contracts[docType + 'Contract']).forEach(field => {
      reduxProps.push(field);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const document = {};
    const actionBase = this.props.isNew ? 'create' : 'update';
    Object.keys(this.state).forEach(key => {
      document[key] = this.state.key;
    });
    this.props[actionBase + this.props.docType](document);
  };

  handleChange(e) {
    const { name, value } = e.target;
    if (this.validator(name, value)) {
      this.setState({
        [name]: value
      });
    }
  }

  validator = async (name, value) => {
    return true;
  }

  render() {
    const {
      docType,
      isNew,
    } = this.props;
    const contract = contracts[docType + 'Contract'];
    return (
      <Row>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          {
            Object.keys(contract).map(fieldName => {
              if (!contract[fieldName].inputType) return null;
              const Element = inputComponents[docType][fieldName];
              return <Element
                value={isNew ? null : this.props[fieldName]}
                key={fieldName}
                name={fieldName}
                placeholder={fieldName}
                onChange={this.handleChange.bind(this)}
              />;
            })
          }
          <Button>Submit</Button>
        </Form>
      </Row>
    );
  }
}

CreateProduct.proptypes = {
  isNew: proptypes.bool,
  docType: proptypes.string,
};

const mapStateToProps = state => {
  let newProps = {};
  Object.keys(reduxProps).forEach(propName => {
    if (state[propName]) newProps[propName] = state[docType][propName];
  });
  return newProps;
};

export default connect(mapStateToProps, { ...actions })(CreateProduct);