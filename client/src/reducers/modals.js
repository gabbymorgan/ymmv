import { actionTypes } from '../constants';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SESSION_MODAL:
      return {
        showingSessionModal: true,
      };
    case actionTypes.LOGIN.SUCCESS:
      return {
        showingSessionModal: false,
      };
    case actionTypes.REGISTER.SUCCESS:
      return {
        showingSessionModal: false,
      }
    default:
      return state;
  }
}