import { actionTypes } from '../constants';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_SESSION_MODAL:
      return {
        ...state,
        showingSessionModal: true,
      };
    case actionTypes.HIDE_SESSION_MODAL:
      return {
        ...state,
        showingSessionModal: false,
      }
    case actionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        showingSessionModal: false,
      };
    case actionTypes.REGISTER.SUCCESS:
      return {
        ...state,
        showingSessionModal: false,
      }
    case actionTypes.SHOW_FORM_MODAL:
      return {
        ...state,
        showingFormModal: true,
        formModalType: action.formModalType,
      }
    case actionTypes.HIDE_FORM_MODAL:
      return {
        ...state,
        showingFormModal: false,
      }
    default:
      return state;
  }
}