
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const register = user => (dispatch) => {
  dispatch({ type: actionTypes.REGISTER.IN_PROGRESS });
  return axios
    .post('users/register/', user)
    .then(response => {
      dispatch({ type: actionTypes.REGISTER.SUCCESS });
    }).catch(error => {
      dispatch({
        type: actionTypes.REGISTER.ERROR,
        error,
      });
    });
};

export const login = (email, username, password) => (dispatch) => {
  dispatch({ type: actionTypes.LOGIN.IN_PROGRESS });
  return axios
    .post('users/login/', { email, username, password })
    .then(response => {
      dispatch({ type: actionTypes.LOGIN.SUCCESS });
    }).catch(error => {
      dispatch({
        type: actionTypes.LOGIN.ERROR,
        error,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT.IN_PROGRESS });
  return axios
  .post('users/login/')
  .then(response => {
    dispatch({ type: actionTypes.LOGOUT.SUCCESS });
  }).catch(error => {
    dispatch({
      type: actionTypes.LOGOUT.ERROR,
      error,
    });
  });
};