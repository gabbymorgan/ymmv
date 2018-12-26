import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Input } from 'reactstrap';

import { createProduct } from '../actions';
import { handleChange, handleSubmit } from '../constants/methods';
import { Button } from '../styles';

class CreateProduct extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const product = {};
        Object.keys(this.state).forEach(key => {
            product[key] = this.state.key;
        });
        this.props.createProduct(product);
    };

    handleChange(e) {
        const { name, value } = e.target;
        if (this['validate' + name.toUpperCase(value)]) {
            this.setState({
                [name]: value
            });
        }
    }

    validateCOMPANYNAME(value) {
        const validators
        return true;
    }

    validateNAME(value) {
        return true;
    }

    validateDESCRIPTION(value) {
        return true;
    }

    render() {
        return (
            <Row>
                <Form onSubmit={this.handleSubmit.bind(this)}>
                    <Input name="companyName" placeholder="Company Name" onChange={this.handleChange.bind(this)} />
                    <Input name="name" placeholder="Product Name" onChange={this.handleChange.bind(this)} />
                    <Input name="description" placeholder="Description" onChange={this.handleChange.bind(this)} />
                    <Button>Save</Button>
                </Form>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    similarCompanies: state.products.similarCompanies,
});

export default connect(mapStateToProps, { createProduct })(CreateProduct);