const express = require("express");
const router = express.Router();

// // middlewares
const {authCheck, adminCheck, teacherCheck} = require('../middlewares/auth');

// // controllers
const {getSubjects} = require('../controllers/subject');

router.post('/getSubjects', getSubjects);





module.exports = router;