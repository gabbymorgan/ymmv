import React, { Component } from 'react';
import { SearchBar } from '../components';
import { SearchResults } from '../containers';
import { Row } from 'reactstrap';

class Search extends Component {
  render() {
    return (
      <Row>
        <SearchBar/>
        <SearchResults/>
      </Row>
    );
  }
}

export default Search;