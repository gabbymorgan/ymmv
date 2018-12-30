import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Input, Col } from 'reactstrap';
import proptypes from 'prop-types';

import * as actions from '../actions';
import { Button } from '../styles';
import contracts from '../contracts';
import * as inputComponents from '../styles/inputComponents';

let reduxProps;
class CreateProduct extends Component {

    componentDidMount() {
        reduxProps = this.props.reduxProps;
    }

    handleSubmit(e) {
        e.preventDefault();
        const document = {};
        Object.keys(this.state).forEach(key => {
            document[key] = this.state.key;
        });
        this.props['create' + action](document);
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
        contract,
      } = this.props;
        return (
            <Row>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    {
                        Object.keys(contract).map(field => {
                            if (!contract[field].inputType) return null;
                            const Element = styledContracts[contract][field];
                            return <Element
                                key={field}
                                name={field}
                                placeholder={field}
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
  reduxProps: proptypes.arrayOf(proptypes.string),
  newDocument: proptypes.bool,
};

const mapStateToProps = state => {
    props = {};
    Object.keys(reduxProps).forEach(propName => {
        if (state[propName]) newProps[propName] = state[propName];
    });
    return newProps;
};

export default connect(mapStateToProps, { ...actions })(CreateProduct);