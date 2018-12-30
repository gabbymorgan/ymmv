import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Form, Input, Col } from 'reactstrap';

import { createProduct, searchCompanies } from '../actions';
import { Button } from '../styles';
import contracts from '../contracts';
import * as inputComponents from '../styles/inputComponents';

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
        if (this.validator(name, value)) {
            this.setState({
                [name]: value
            });
        }
    }

    validator = async (name, value) => {
        return true;
    }

    chooseCompany(companyId) {
        this.setState({
            companyId,
        });
    }

    render() {
        return (
            <Row>
                <Col xs="6">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        {
                            Object.keys(productContract).map(field => {
                                if (!productContract[field].inputType) return null;
                                const Element = styledContracts[field];
                                return <Element
                                key={field}
                                name={field}
                                placeholder={field}
                                onChange={this.handleChange.bind(this)}
                                />;
                            })
                        }
                        <Button>Save</Button>
                    </Form>
                </Col>
                <Col xs="6">
                    {
                        this.props.companies.map(company => {
                            return <p key={company.name} onClick={() => this.chooseCompany(company._id)}>{company.name}</p>
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