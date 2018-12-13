import React, { Component } from 'react';
import { Row, Form, Input } from 'reactstrap';

import { createProduct } from '../actions';
import { Button } from '../styles';

class CreateProduct extends Component {
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(action) {
        const product = {};
        Object.keys(this.state).forEach(key => {
            product[key] = this.state.key;
        });
        this.props[action](product);
    }

    render() {
        return (
            <Row>
                <Form>
                    <Input name="companyName" placeholder="Company Name"/>
                    <Input name="name" placeholder="Product Name"/>
                    <Input name="description" placeholder="Description"/>
                    <Button>sup</Button>
                </Form>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    similarCompanies = state.products.similarCompanies,
});

export default CreateProduct;