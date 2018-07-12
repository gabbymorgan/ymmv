import actionTypes from "../constants/actionTypes";

const initialState = {
  session: false,
  registerModal: false,
  registerProgres: false,
  registerSuccess: false,
  registerFailed: false,
  loginModal: false,
  loginProgress: false,
  loginSucess: false,
  loginFailed: false,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN.SHOW_MODAL:
      return {
        ...state,
        loginModal: true,
        loginProgress: false,
        loginFailed: false,
        loginSucess: false,
      };
    case actionTypes.LOGIN.HIDE_MODAL:
      return {
        ...state,
        loginModal: false
      };
    case actionTypes.LOGIN.IN_PROGRESS:
      return {
        ...state,
        loginProgress: true
      };
    case actionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        session: true,
        loginProgress: false,
        loginSuccess: true,
      };
    case actionTypes.LOGIN.ERROR:
      return {
        ...state,
        errorMessage: action.error,
        loginProgress: false,
        loginFailed: true,
      };
    case actionTypes.REGISTER.SHOW_MODAL:
      return {
        ...state,
        registerModal: true
      };
    case actionTypes.REGISTER.HIDE_MODAL:
      return {
        ...state,
        registerModal: false
      };
    case actionTypes.REGISTER.IN_PROGRESS:
      return {
        ...state,
        registerProgress: true
      };
    case actionTypes.REGISTER.SUCCESS:
      return {
        ...state,
        session: true,
        registerProgress: false
      };
    case actionTypes.REGISTER.ERROR:
      return {
        ...state,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
