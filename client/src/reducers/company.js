import { actionTypes } from "../constants";

const defaultState = {
  searchResults: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_COMPANY.IN_PROGRESS:
      return {
        ...state,
        inProgress: true,
      }
    case actionTypes.SEARCH_COMPANY.SUCCESS:
      return {
        ...state,
        inProgress: false,
        searchResults: action.searchResults,
      }
    default:
      return state
  }
}