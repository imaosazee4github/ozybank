const express = require('express');
const bankAccountController = require('../controller/bankAccountController');

const router = express.Router();

router.post('/create', bankAccountController.createAccount);

router.get('/resolve/:accountNumber', bankAccountController.resolveAccount);

router.get('/fetchAll', bankAccountController.fetchAllAccounts);




module.exports = router;