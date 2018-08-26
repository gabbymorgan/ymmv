const actionTypes = {
  LOGIN: {},
  LOGOUT: {},
  REGISTER: {},
  GET_USERS: {},
  SEARCH_PRODUCTS: {},
  CREATE_PRODUCT: {},
  GET_REPORTS: {},
  CREATE_REPORT: {},
  UPDATE_REPORT: {},
};

Object.keys(actionTypes).forEach(type => {
  actionTypes[type].SUCCESS = `${type}_SUCCESS`;
  actionTypes[type].ERROR = `${type}_ERROR`;
  actionTypes[type].IN_PROGRESS = `${type}_IN_PROGRESS`;
});

actionTypes.SHOW_SESSION_MODAL = 'SHOW_SESSION_MODAL';
actionTypes.HIDE_SESSION_MODAL = 'HIDE_SESSION_MODAL';

export default actionTypes;