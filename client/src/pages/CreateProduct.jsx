import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Input } from 'reactstrap';

import { createProduct } from '../actions';
import { handleChange, handleSubmit } from '../constants/methods';
import { Button } from '../styles';

class CreateProduct extends Component {

    handleSubmit = (action) => {
        const product = {};
        Object.keys(this.state).forEach(key => {
            product[key] = this.state.key;
        });
        this.props[action](product);
    };
    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target; ''.to
        if (this['validate' + name.toUpperCase()]) {
            this.setState({
                [name]: value
            });
        }
    }

    validateCOMPANYNAME() {

    }

    validateNAME() {

    }

    validateDESCRIPTION() {

    }

    render() {
        return (
            <Row>
                <Form onSubmit={() => handleSubmit('createProduct')}>
                    <Input name="companyName" placeholder="Company Name" onChange={(e) => handleChange(e)} />
                    <Input name="name" placeholder="Product Name" onChange={(e) => handleChange(e)} />
                    <Input name="description" placeholder="Description" onChange={(e) => handleChange(e)} />
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