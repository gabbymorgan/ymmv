import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from '../styles';

import { Result } from '../components';

class SearchResults extends Component {
  render() {
    if (!this.props.searchResults) return (
      <h1>No results</h1>
    );
    return (
      <Row>
        {this.props.searchResults.map(product => {
          return <Result key={product._id} product={product} />
        })}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.products.searchResults,
  }
}

export default connect(mapStateToProps)(SearchResults);