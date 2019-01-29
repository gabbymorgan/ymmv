import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaPlusCircle } from 'react-icons/fa';

import { searchProducts } from '../actions';
import { SearchBarRow, SearchInput, SearchForm, Button, Link, ButtonGroup } from '../styles';

class SearchBar extends Component {
  state = {
    queryType: 'name',
    string: '',
  }

  handleQueryString({ target }) {
    this.props.searchProducts(this.state.queryType, target.value);
    this.setState({
      string: target.value,
    })
  }

  handleQueryType(queryType) {
    this.setState({
      queryType,
    });
    this.props.searchProducts(queryType, this.state.string);
  }

  render() {
    return (
      <SearchBarRow>
        <SearchForm type="filter">
          <SearchInput
            color="primary"
            name="string"
            placeholder="this is where the searching happens"
            onChange={this.handleQueryString.bind(this)}
          />
          <ButtonGroup>
            <Button
              color="primary"
              active={this.state.queryType === 'name'}
              onClick={() => this.handleQueryType('name')}
            >Product Name</Button>
            <Button
              color="primary"
              active={this.state.queryType === 'companyName'}
              onClick={() => this.handleQueryType('companyName')}
            >Company Name</Button>
          </ButtonGroup>
          {
            this.props.isLoggedIn
              ? (
                <Link to="/new/product">
                  <FaPlusCircle size="30" color="gray" style={{ margin: "1rem" }} />
                </Link>
              )
              : null
          }
        </SearchForm>
      </SearchBarRow>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
});

export default connect(mapStateToProps, { searchProducts })(SearchBar);