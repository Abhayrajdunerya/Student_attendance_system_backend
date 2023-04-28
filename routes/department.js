const express = require("express");
const router = express.Router();

// middlewares
// const {authCheck, adminCheck} = require('../middlewares/auth');

// controllers
const {getDepartments} = require('../controllers/department');

// router.get('/admin/orders', authCheck, adminCheck, orders);
// router.put('/admin/order-status', authCheck, adminCheck, orderStatus);


router.get('/get-departments', getDepartments);


module.exports = router;