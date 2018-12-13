import { actionTypes } from "../constants";

const defaultState = {
  products: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.IN_PROGRESS:
      return {
        ...state,
        inProgress: true,
      }
    case actionTypes.SEARCH_PRODUCTS.SUCCESS:
      return {
        ...state,
        inProgress: false,
        searchResults: action.searchResults,
      }
    default:
      return state
  }
}