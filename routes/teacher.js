const express = require("express");
const router = express.Router();

// middlewares
const {authCheck, adminCheck} = require('../middlewares/auth');

const {getTeacherByEmail, getTeacherByPhoneNo, getTeachers, addTeacher, removeTeacherByEmail, removeTeacherByPhoneNo} = require('../controllers/teacher');

router.get('/teacher-by-phone/:phone', authCheck, getTeacherByPhoneNo);
router.get('/teacher-by-email/:email', authCheck, getTeacherByEmail);

router.post('/get-teachers', authCheck, getTeachers);
router.post('/add-teacher', authCheck, adminCheck, addTeacher);

router.delete('/teacher-by-phone/:phone', authCheck, adminCheck, removeTeacherByPhoneNo);
router.delete('/teacher-by-email/:email', authCheck, adminCheck, removeTeacherByEmail);

module.exports = router;