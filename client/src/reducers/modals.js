import { actionTypes } from '../constants';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SESSION_MODAL:
      return {
        showingSessionModal: true,
      };
    case actionTypes.HIDE_SESSION_MODAL:
      return {
        showingSessionModal: false,
      };
    default:
      return state;
  }
}