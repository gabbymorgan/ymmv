import React, { Component } from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';

import * as actions from '../actions';
import { AutoCompleteItem, AutoCompleteContainer } from '../styles';

let collection = '';
class AutoComplete extends Component {
  componentDidMount() {
    collection = this.props.collection;
  }

  componentDidUpdate(prevProps) {
    const { collection, subField, string } = this.props;
    if (prevProps.string !== string) {
      this.props['search_' + collection](subField, string);
    }
  }

  handleSelect(clickedItem) {
    this.props.handleSelect(this.props.fieldName, clickedItem.name);
  }

  render() {
    const {searchResults} = this.props;
    if (!searchResults || searchResults.length <= 1) return <div></div>
    return ( 
      <AutoCompleteContainer>
        {
          this.props.searchResults.map(result => {
            return (
            <AutoCompleteItem
              key={result}
              onClick={() => this.handleSelect(result)}
            >{result.name}</AutoCompleteItem>
            )
          })
        }
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
    searchResults: state[collection].searchResults,
  }
}
 
export default connect(mapStateToProps, { ...actions })(AutoComplete);