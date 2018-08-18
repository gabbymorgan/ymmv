import axios from 'axios';
import actionTypes from '../constants/actionTypes';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const showSessionModal = () => dispatch => {
  dispatch({ type: actionTypes.SHOW_SESSION_MODAL });
}

export const hideSessioModal = () => dispatch => {
  dispatch({ type: actionTypes.HIDE_SESSION_MODAL });
}
