
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const searchCompany = (queryType, string) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_COMPANY.IN_PROGRESS });
  if (!string) {
    return dispatch({
      type: actionTypes.SEARCH_COMPANY.SUCCESS,
      searchResults: []
    });
  }
  return axios
    .get(`company?queryType=${queryType}&string=${string}`)
    .then(response => {
      dispatch({
        type: actionTypes.SEARCH_COMPANY.SUCCESS,
        searchResults: response.data
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.SEARCH_COMPANY.ERROR,
        error
      });
    });
};

export const createCompany = (company) => (dispatch) => {
  dispatch({ type: actionTypes.CREATE_PRODUCT.IN_PROGRESS });
  return axios
    .post('company', company)
    .then(response => {
      dispatch({
        type: actionTypes.CREATE_PRODUCT.SUCCESS,
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.CREATE_PRODUCT.ERROR,
        error
      });
    });
}