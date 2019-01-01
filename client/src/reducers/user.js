import actionTypes from '../constants/actionTypes';

const defaultState = {
  isLoggedIn: false,
  profile: {},
  searchResults: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN.IN_PROGRESS:
      return {
        ...state,
        inProgress: true,
      }
    case actionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        inProgress: false,
        isLoggedIn: true,
        profile: action.profile,
      }
    case actionTypes.LOGOUT:
      return {
        ...defaultState
      }
    default:
      return state
  }
}