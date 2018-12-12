const actionTypes = {
  LOGIN: {},
  LOGOUT: 'LOGOUT',
  SHOW_SESSION_MODAL: 'SHOW_SESSION_MODAL',
  HIDE_SESSION_MODAL: 'HIDE_SESSION_MODAL',
  REGISTER: {},
  GET_USERS: {},
  SEARCH_PRODUCTS: {},
  CREATE_PRODUCT: {},
  SEARCH_REPORTS: {},
  CREATE_REPORT: {},
  UPDATE_REPORT: {},
  SEARCH_COMPANIES: {},
};

Object.keys(actionTypes).forEach(type => {
  if (typeof actionTypes[type] === "object") {
    actionTypes[type].SUCCESS = `${type}_SUCCESS`;
    actionTypes[type].ERROR = `${type}_ERROR`;
    actionTypes[type].IN_PROGRESS = `${type}_IN_PROGRESS`;    
  }
});


export default actionTypes;