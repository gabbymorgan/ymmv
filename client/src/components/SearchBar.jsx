import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchProducts } from '../actions';
import { Input } from '../styles';

class SearchBar extends Component {
  handleChange(event) {
    this.props.searchProducts(event.value);
  }

  render() {
    return (
      <div>
        <Input 
          placeholder="this is where the searching happens"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default connect(null, {searchProducts})(SearchBar);