import axios from 'axios';
import actionTypes from '../constants/actionTypes';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getFoods = () => {
    return dispatch => {
        return axios
            .get('foods/')
            .then((response) => {
                dispatch({ type: actionTypes.GET_FOODS, foods: response.data });
            })
            .catch((error) => console.log(error))};
    }

export const getReports = () => {
    return dispatch => {
        return axios
            .get('reports/')
            .then((response) => {
                console.log('fetching');
                dispatch({ type: actionTypes.GET_REPORTS, reports: response.data });
            })
            .catch((error) => console.log(error))};
}