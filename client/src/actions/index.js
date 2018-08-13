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
                    type: actionTypes.GET_FOODS.SUCCESS,
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

export const showRegisterModal = dispatch => {
    return { type: actionTypes.REGISTER.SHOW_MODAL };
}

export const hideRegisterModal = dispatch => {
    return { type: actionTypes.REGISTER.HIDE_MODAL};
}

export const register = user => {
    return dispatch => {
        dispatch({ type: actionTypes.REGISTER.IN_PROGRESS });
        return axios
            .post('users/register/', user)
            .then(response => {
                const { user, token } = response.data;
                localStorage.setItem({ token });
                dispatch({ type: actionTypes.REGISTER.SUCCESS, user });
            }).catch(error => {
                dispatch({
                    type: actionTypes.REGISTER.ERROR,
                    error,
                });
            });
    }
};

export const showLoginModal = dispatch => {
    return { type: actionTypes.LOGIN.SHOW_MODAL };
}

export const hideLoginModal = dispatch => {
    return { type: actionTypes.LOGIN.HIDE_MODAL};
}

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