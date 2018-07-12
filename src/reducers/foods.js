import actionTypes from '../constants/actionTypes';

const initialState = {
  foods: [],
  inProgress: false,
  error: false,
}

export default(state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOODS.IN_PROGRESS:
      const inProgress = true;
      return { ...state, inProgress }
    case actionTypes.GET_FOODS.SUCCESS:
      const { foods } = action;
      return { ...state, foods };
    case actionTypes.GET_FOODS.ERROR:
      const { error } = action;
      return { ...state, error };
    default:
      return state
  }
}