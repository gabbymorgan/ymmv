import { showSessionModal, hideSessionModal, showFormModal, hideFormModal } from './modal';
import { checkUsername, register, login, logout } from './session';
import { searchCompany, createCompany } from './company';
import { searchProducts, createProduct } from './product';
import { searchReports } from './report';

export {
  // MODALS
  showSessionModal,
  hideSessionModal,
  showFormModal,
  hideFormModal,
  // USER
  checkUsername,
  register,
  login,
  logout,
  // COMPANY
  searchCompany,
  createCompany,
  // PRODUCTS
  searchProducts,
  createProduct,
  // REPORTS
  searchReports,
}