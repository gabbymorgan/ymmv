
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const register = ({...details}) => (dispatch) => {
  dispatch({ type: actionTypes.REGISTER.IN_PROGRESS });
  return axios
    .post('users/register/', { ...details })
    .then(response => {
      const profile = response.data;
      dispatch({ type: actionTypes.REGISTER.SUCCESS, profile });
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
      const profile = response.data;
      dispatch({ type: actionTypes.LOGIN.SUCCESS, profile });
    }).catch(error => {
      dispatch({
        type: actionTypes.LOGIN.ERROR,
        error,
      });
    });
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: actionTypes.LOGOUT });
};