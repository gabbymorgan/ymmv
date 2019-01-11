import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';

import { AutoCompleteItem, AutoCompleteContainer, Modal } from '../styles';
import * as actions from '../actions';
import * as FormComponents from '../components/FormComponents';

let collection = '';
class AutoComplete extends Component {
  state = {
    showCreateDocument: false,
  }
  componentDidMount() {
    collection = this.props.collection;
  }

  componentDidUpdate(prevProps) {
    const { collection, subField, string } = this.props;
    if (prevProps.string !== string) {
      this.props['search' + collection](subField, string);
    }
  }

  handleSelect(clickedItem) {
    if (clickedItem === 'new') {
      this.props.showFormModal("Create" + this.props.collection);
    }
    this.props.handleSelect(this.props.fieldName, clickedItem);
  }

  render() {
    const { searchResults } = this.props;
    if (!searchResults || searchResults.length <= 1) return <div></div>
    return (
      <AutoCompleteContainer>
        {
          this.props.searchResults.map(result => {
            return (
              <AutoCompleteItem
                key={result.name}
                onClick={() => this.handleSelect(result.name)}
              >{result.name}</AutoCompleteItem>
            )
          })
        }
        <AutoCompleteItem onClick={() => this.handleSelect('new')}>new {this.props.fieldName} </AutoCompleteItem>
      </AutoCompleteContainer>
    );
  }
}

AutoComplete.proptypes = {
  collection: proptypes.string,
  subField: proptypes.string,
};

const mapStateToProps = (state) => {
  if (!collection) return {};
  return {
    searchResults: state[collection.replace(/^\w/, c => c.toLowerCase())].searchResults,
  }
}

export default connect(mapStateToProps, { ...actions })(AutoComplete);