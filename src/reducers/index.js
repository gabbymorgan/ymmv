import { combineReducers } from 'redux';

import foodsReducer from './foods';
import reportsReducer from './reports';
import sessionReducer from './session';
import usersReducer from './users';

export default combineReducers({ foodsReducer, reportsReducer, sessionReducer, usersReducer });