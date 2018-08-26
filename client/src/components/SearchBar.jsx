import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchProducts } from '../actions';
import { Input, Form } from '../styles';

class SearchBar extends Component {
  handleChange({ target }) {
    const { value } = target;
    this.props.searchProducts('name', value);
  }

  render() {
    return (
      <Form>
        <Input
          name="string"
          placeholder="this is where the searching happens"
          onChange={this.handleChange.bind(this)}
        />
        <input type="radio" name="queryType1" value="name"/>Product Name<br/>
        <input type="radio" name="queryType2" value="companyName"/>Company Name
      </Form>
    );
  }
}

export default connect(null, {searchProducts})(SearchBar);