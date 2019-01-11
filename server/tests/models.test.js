const loadCompany = require('./company/loadCompany');
const loadProducts = require('./products/loadProducts');
const loadSensitivities = require('./sensitivities/loadSensitivities');
const loadUsers = require('./users/loadUsers');
const loadReports = require('./reports/loadReports');

const loadDummyData = async() => {
    await loadCompany();
    await loadProducts();
    await loadUsers();
    await loadSensitivities();
    await loadReports();
};

loadDummyData();