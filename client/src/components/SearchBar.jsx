import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonGroup } from 'reactstrap';
import { FaPlusCircle } from 'react-icons/fa';

import { searchProducts } from '../actions';
import { Input, Form, Button, Link } from '../styles';

class SearchBar extends Component {
  state = {
    queryType: 'name',
  }

  handleQueryString({ target }) {
    this.props.searchProducts(this.state.queryType, target.value);
  }

  handleQueryType(queryType) {
    this.setState({
      queryType,
    });
  }

  render() {
    return (
      <Form type="filter">
        <Input
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
              <Link to="/create/product">
                <FaPlusCircle size="30" color="gray" style={{ margin: "1rem" }} />
              </Link>
            )
            : null
        }
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps, { searchProducts })(SearchBar);