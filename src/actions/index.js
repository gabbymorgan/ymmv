import axios from 'axios';
import actionTypes from '../constants/actionTypes';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getFoods = () => {
    return dispatch => {
        dispatch({ type: actionTypes.GET_FOODS.IN_PROGRESS });
        return axios
            .get('foods/')
            .then(response => {
                dispatch({ 
                    type: actionTypes.GET_FOODS,
                    foods: response.data
                });
            }).catch(error => {
                dispatch({ 
                    type: actionTypes.GET_FOODS.ERROR,
                    error
                });
            });
    };
};

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

export const register = user => {
    return dispatch => {
        dispatch({ type: actionTypes.REGISTER.IN_PROGRESS });
        return axios
            .post('users/register/', user)
            .then(response => {
                dispatch({ type: actionTypes.REGISTER.SUCCESS });
            }).catch(error => {
                dispatch({
                    type: actionTypes.REGISTER.ERROR,
                    error,
                });
            });
    }
};

export const login = user => {
    return dispatch => {
        dispatch({ type: actionTypes.LOGIN.IN_PROGRESS });
        return axios
            .post('users/login/', user)
            .then(response => {
                dispatch({ type: actionTypes.LOGIN.SUCCESS });
            }).catch(error => {
                dispatch({
                    type: actionTypes.LOGIN.ERROR,
                    error,
                });
            });
    }
};