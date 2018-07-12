import actionTypes from '../constants/actionTypes';

const initialState = {}

export default(state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_REPORTS:
    const { reports } = action;
    return { ...state, reports }
    default:
      return state
  }
}