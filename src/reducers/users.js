import actionTypes from '../constants/actionTypes';

const initialState = {
  users: [],
  inProgress: false,
  error: false,
}

export default(state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS.IN_PROGRESS:
      const inProgress = true;
      return { ...state, inProgress }
    case actionTypes.GET_USERS.SUCCESS:
      const { users } = action;
      return { ...state, users };
    case actionTypes.GET_USERS.ERROR:
      const { error } = action;
      return { ...state, error };
    default:
      return state
  }
}