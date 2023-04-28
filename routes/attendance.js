const express = require("express");
const router = express.Router();

// // middlewares
const {authCheck, teacherCheck} = require('../middlewares/auth');

// // controllers
const {createLecture, takeAttendance, updateAttendance, getLectureData, getAttendanceReport, getAttendancePercentage} = require('../controllers/attendance');

// router.post('/create-lecture', authCheck, teacherCheck, createLecture);
// router.post('/take-attendance', authCheck, teacherCheck, takeAttendance);
// router.post('/update-attendance', authCheck, teacherCheck, updateAttendance);

// router.post('/get-lecture-data', authCheck, teacherCheck, getLectureData);
// router.post('/get-attendance-report', authCheck, teacherCheck, getAttendanceReport);

// router.get('/get-percentage/:email', authCheck, getAttendancePercentage);

router.post('/create-lecture', authCheck, createLecture);
router.post('/take-attendance', authCheck, takeAttendance);
router.post('/update-attendance', authCheck, updateAttendance);

router.post('/get-lecture-data', authCheck, getLectureData);
router.post('/get-attendance-report', authCheck, getAttendanceReport);

router.get('/get-percentage/:email', getAttendancePercentage);





module.exports = router;