import { combineReducers } from 'redux';
import products from './products';
import reports from './reports';
import user from './user';

export default combineReducers({
  products,
  reports,
  user,
})