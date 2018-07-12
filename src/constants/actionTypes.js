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

export default actionTypes;
