import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Input, Col } from 'reactstrap';

import { createProduct, searchCompanies } from '../actions';
import { handleChange, handleSubmit } from '../constants/methods';
import { Button } from '../styles';
import productContract from '../contracts/ProductContract.js.json';

class CreateProduct extends Component {
    state = {
        companies: [],
    }

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
        if (this['validate' + name.toUpperCase()](value)) {
            this.setState({
                [name]: value
            });
        }
    }

    validateCOMPANYNAME = async (value) => {
        await this.props.searchCompanies('name', value);
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
                <Col xs="6">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        {
                            Object.keys(productContract).map(field => {
                                if (!productContract[field].inputType) return null;
                                return <Input key={field} name={field} placeholder={field} onChange={this.handleChange.bind(this)}/>;
                            })
                        }
                        <Button>Save</Button>
                    </Form>
                </Col>
                <Col xs="6">
                    {
                        this.props.companies.map(company => {
                            return <p key={company.name}>{company.name}</p>
                        })
                    }
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => ({
    companies: state.companies.searchResults,
});

export default connect(mapStateToProps, { createProduct, searchCompanies })(CreateProduct);