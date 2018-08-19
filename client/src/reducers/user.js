import actionTypes from '../constants/actionTypes';

const defaultState = {
  isLoggedIn: false,
  profile: {},
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
    default:
      return state
  }
}