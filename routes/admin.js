const express = require("express");
const router = express.Router();

// // middlewares
const {authCheck, adminCheck} = require('../middlewares/auth');

// // controllers
const {getAdminByEmail, getAdmins} = require('../controllers/admin');

router.get('/get-admins', authCheck, adminCheck, getAdmins);
router.get('/get-admin-by-email/:email', authCheck, adminCheck, getAdminByEmail);


module.exports = router;