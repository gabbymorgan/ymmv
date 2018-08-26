
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const searchProducts = (queryType, string) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_PRODUCTS.IN_PROGRESS });
  return axios
    .get(`products?queryType=${queryType}&string=${string}`)
    .then(response => {
      dispatch({
        type: actionTypes.SEARCH_PRODUCTS.SUCCESS,
        searchResults: response.data
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.SEARCH_PRODUCTS.ERROR,
        error
      });
    });
};