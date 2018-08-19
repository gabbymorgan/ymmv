
import axios from 'axios';
import { actionTypes } from '../constants';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const searchProducts = (query) => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCTS.IN_PROGRESS });
  return axios
    .get(`foods?query=${query}`)
    .then(response => {
      dispatch({
        type: actionTypes.GET_PRODUCTS.SUCCESS,
        foods: response.data
      });
    }).catch(error => {
      dispatch({
        type: actionTypes.GET_PRODUCTS.ERROR,
        error
      });
    });
};