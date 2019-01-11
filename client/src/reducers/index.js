import { combineReducers } from 'redux';
import modals from './modal';
import products from './product';
import reports from './report';
import company from './company';
import session from './session';

export default combineReducers({
  modals,
  products,
  reports,
  company,
  session,
});