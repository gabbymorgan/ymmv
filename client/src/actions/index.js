import { showSessionModal, hideSessionModal } from './modals';
import { checkUsername, register, login, logout } from './user';
import { searchCompanies } from './companies';
import { searchProducts, createProduct } from './products';
import { searchReports } from './reports';

export {
  // MODALS
  showSessionModal,
  hideSessionModal,
  // USER
  checkUsername,
  register,
  login,
  logout,
  // COMPANIES
  searchCompanies,
  // PRODUCTS
  searchProducts,
  createProduct,
  // REPORTS
  searchReports,
}