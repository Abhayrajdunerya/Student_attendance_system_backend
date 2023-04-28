const express = require("express");
const router = express.Router();

// // middlewares
const {authCheck, adminCheck, teacherCheck, studentCheck} = require('../middlewares/auth');

// // controllers
const {getRole} = require('../controllers/auth');

router.post('/current-student', authCheck, studentCheck);
router.post('/current-teacher', authCheck, teacherCheck);
router.post('/current-admin', authCheck, adminCheck);

router.post('/get-role', getRole);


module.exports = router;