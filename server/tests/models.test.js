const loadCompanies = require('./companies/loadCompanies');
const loadProducts = require('./products/loadProducts');
const loadSensitivities = require('./sensitivities/loadSensitivities');
const loadUsers = require('./users/loadUsers');
const loadReports = require('./reports/loadReports');

const loadDummyData = async() => {
    await loadCompanies();
    await loadProducts();
    await loadUsers();
    await loadSensitivities();
    await loadReports();
};

loadDummyData();