import { combineReducers } from 'redux';
import modals from './modals';
import products from './products';
import reports from './reports';
import companies from './companies';
import session from './session';

export default combineReducers({
  modals,
  products,
  reports,
  companies,
  session,
});