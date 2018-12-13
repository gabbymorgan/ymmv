
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

//TODO: MUST PAGINATE
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

export const createProduct = (product) => (dispatch) => {
  dispatch({ type: actionTypes.CREATE_PRODUCT.IN_PROGRESS });
  return axios
    .post('products', product)
    .then(response => {
      dispatch({
        type: actionTypes.CREATE_PRODUCT.SUCCESS,
        searchResults: response.data
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.CREATE_PRODUCT.ERROR,
        error
      });
    });
}