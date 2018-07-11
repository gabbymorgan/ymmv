import { combineReducers } from 'redux';

import foodsReducer from './foods';
import reportsReducer from './reports';
import sessionReducer from './session';
import usersReducer from './users';

export default rootReducer = combineReducers({ foodsReducer, reportsReducer, sessionReducer, usersReducer });