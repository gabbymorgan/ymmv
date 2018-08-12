import { combineReducers } from 'redux';

import foods from './foods';
import reports from './reports';
import session from './session';
import users from './users';

export default combineReducers({ foods, reports, session, users });