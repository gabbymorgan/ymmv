import { combineReducers } from 'redux';
import modals from './modals';
import products from './products';
import reports from './reports';
import user from './user';

export default combineReducers({
  modals,
  products,
  reports,
  user,
});