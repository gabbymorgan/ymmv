const actionTypes = {
    LOGIN: {},
    LOGOUT: {},
    REGISTER: {},
    GET_USERS: {},
    GET_FOODS: {},
    CREATE_FOOD: {},
    GET_REPORTS: {},
    CREATE_REPORT: {},
    UPDATE_REPORT: {},
}

Object.keys(actionTypes).forEach(type => {
    actionTypes[type].SUCCESS = `${type}_SUCCESS`;
    actionTypes[type].ERROR = `${type}_ERROR`;
    actionTypes[type].IN_PROGRESS = `${type}_IN_PROGRESS`;
});

actionTypes.LOGIN.SHOW_MODAL = 'LOGIN_SHOW_MODAL';
actionTypes.LOGIN.HIDE_MODAL = 'LOGIN_HIDE_MODAL';
actionTypes.REGISTER.SHOW_MODAL = 'REGISTER_SHOW_MODAL';
actionTypes.REGISTER.HIDE_MODAL = 'REGISTER_HIDE_MODAL';

export default actionTypes;
