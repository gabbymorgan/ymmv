
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const searchReports = (queryType, string) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_REPORTS.IN_PROGRESS });
  return axios
    .get(`products?queryType=${queryType}&string=${string}`)
    .then(response => {
      dispatch({
        type: actionTypes.SEARCH_REPORTS.SUCCESS,
        searchResults: response.data
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.SEARCH_REPORTS.ERROR,
        error
      });
    });
};