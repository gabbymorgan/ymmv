import axios from 'axios';
import actionTypes from '../constants/actionTypes';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getReports = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_REPORTS.IN_PROGRESS });
    return axios
      .get('reports/')
      .then(response => {
        dispatch({
          type: actionTypes.GET_REPORTS.SUCCESS,
          reports: response.data
        });
      }).catch(error => {
        dispatch({
          type: actionTypes.GET_REPORTS.ERROR,
          error,
        });
      });
  };
};