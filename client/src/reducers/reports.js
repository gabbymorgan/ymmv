import actionTypes from '../constants/actionTypes';

const initialState = {
  reports: [],
  inProgress: false,
  error: false,
}

export default(state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPORTS.IN_PROGRESS:
      const inProgress = true;
      return { ...state, inProgress }
    case actionTypes.GET_REPORTS.SUCCESS:
      const { reports } = action;
      return { ...state, reports };
    case actionTypes.GET_REPORTS.ERROR:
      const { error } = action;
      return { ...state, error };
    default:
      return state
  }
}