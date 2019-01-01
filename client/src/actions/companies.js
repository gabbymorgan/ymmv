
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const search_companies = (queryType, string) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_COMPANIES.IN_PROGRESS });
  if (!string) {
    return dispatch({
      type: actionTypes.SEARCH_COMPANIES.SUCCESS,
      searchResults: []
    });
  }
  return axios
    .get(`companies?queryType=${queryType}&string=${string}`)
    .then(response => {
      dispatch({
        type: actionTypes.SEARCH_COMPANIES.SUCCESS,
        searchResults: response.data
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.SEARCH_COMPANIES.ERROR,
        error
      });
    });
};