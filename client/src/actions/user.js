
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const register = user => {
  return dispatch => {
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
  }
};

export const login = user => {
  return dispatch => {
    dispatch({ type: actionTypes.LOGIN.IN_PROGRESS });
    return axios
      .post('users/login/', user)
      .then(response => {
        dispatch({ type: actionTypes.LOGIN.SUCCESS });
      }).catch(error => {
        dispatch({
          type: actionTypes.LOGIN.ERROR,
          error,
        });
      });
  }
};