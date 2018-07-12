import actionTypes from '../constants/actionTypes';

const initialState = []

export default(state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOODS:
      const { foods } = action;
      return { ...state, foods }
    default:
      return state
  }
}