import React, { Component } from 'react';
import { SearchBar } from '../components';
import { SearchResults } from '../containers';
import { Col } from 'reactstrap';

class Search extends Component {
  render() {
    return (
      <Col>
        <SearchBar/>
        <SearchResults/>
      </Col>
    );
  }
}

export default Search;