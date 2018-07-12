import actionTypes from '../constants/actionTypes';

const initialState = {
  session: false,
  registerFailed: false,
  loginFailed: false,
}

export default(state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPORTS.IN_PROGRESS:
      const inProgress = true;
      return { ...state, inProgress }
    case actionTypes.GET_REPORTS.SUCCESS:
      const { session } = action;
      return { ...state, session };
    case actionTypes.GET_REPORTS.ERROR:
      const { error } = action;
      return { ...state, error };
    default:
      return state
  }
}