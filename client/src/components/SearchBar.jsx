import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchProducts } from '../actions';
import { Input, InputGroup, Form } from '../styles';

class SearchBar extends Component {
  state = {
    queryType: 'name',
  }

  handleQueryString({ target }) {
    this.props.searchProducts(this.state.queryType, target.value);
  }

  handleQueryType({ target }) {
    this.setState({
      queryType: target.value,
    });
  }

  render() {
    return (
      <Form>
        <Input
          name="string"
          placeholder="this is where the searching happens"
          onChange={this.handleQueryString.bind(this)}
        />
        <InputGroup>
          <input
            type="radio"
            name="queryType"
            value="name"
            checked={this.state.queryType === 'name'}
            onChange={this.handleQueryType.bind(this)}
          />
          <p>Product Name</p>
        </InputGroup>
        <InputGroup>
          <input
            type="radio"
            name="queryType"
            value="companyName"
            checked={this.state.queryType === 'name'}
            onChange={this.handleQueryType.bind(this)}
          />
          <p>Company Name</p>
        </InputGroup>
      </Form>
    );
  }
}

export default connect(null, { searchProducts })(SearchBar);