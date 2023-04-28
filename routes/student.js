const express = require("express");
const router = express.Router();

// middlewares
const {authCheck, adminCheck} = require('../middlewares/auth');

// controllers
const {getStudents, getStudentByRollNo, getStudentByEmail, addStudent, removeStudentByEmail, removeStudentByRollNo} = require('../controllers/student');

// router.get('/admin/orders', authCheck, adminCheck, orders);
// router.put('/admin/order-status', authCheck, adminCheck, orderStatus);


router.get('/student-by-rollno/:rollNo', authCheck, getStudentByRollNo);
router.get('/student-by-email/:email', authCheck, getStudentByEmail);

router.post('/get-students', authCheck, getStudents);
router.post('/add-student', authCheck, adminCheck, addStudent);

router.delete('/student-by-rollno/:rollNo', authCheck, adminCheck, removeStudentByRollNo);
router.delete('/student-by-email/:email', authCheck, adminCheck, removeStudentByEmail);

module.exports = router;