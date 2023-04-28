const connection = require('../db');

exports.createLecture = async (req, res) => {
    const {sem, year, deptId, section, subjectCode, teacherEmail, date, lectureId} = req.body;
    connection.query("INSERT INTO `Lecture` (lecture_id, teacher_email, dept_id, subject_code, year, sem, section, date) VALUES (?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE dept_id=?, subject_code=?, year=?, sem=?, section=?, date=?", [lectureId, teacherEmail, deptId, subjectCode, year, sem, section, date, deptId, subjectCode, year, sem, section, date], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.takeAttendance = async (req, res) => {
    const {lectureId, email, attendanceStatus} = req.body;
    
    connection.query("REPLACE INTO `Attendance` (lecture_id, student_email, attendance_status) VALUES (?,?,?)", [lectureId, email, attendanceStatus], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.updateAttendance = async (req, res) => {
    const {email, lectureId, attendance} = req.body;
    console.log(req.body);
    connection.query("UPDATE `Attendance` SET `attendance_status`=? WHERE `lecture_id`=? AND `student_email`=?", [attendance, lectureId, email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getLectureData = async (req, res) => {
    const {teacherEmail, deptId, subjectCode, sem, section, fromDate, toDate} = req. body;
    const query = "SELECT lecture_id, sem, section, date, d.dept_name, s.subject_name FROM `Lecture` l, `Department` d, `Subject` s WHERE `teacher_email`=? AND l.`dept_id`=? AND l.`subject_code`=? AND `sem`=? AND `section`=? AND `date` between ? and ? AND l.dept_id = d.dept_id AND l.subject_code = s.subject_code ORDER BY `date` DESC";
    // const query = "SELECT * FROM `lecture` WHERE `teacher_email`=? OR `dept_id`=? OR `subject_code`=? OR `sem`=? OR `section`=? OR `date` between ? and ? ORDER BY `date` DESC";

    connection.query(query ,[teacherEmail, deptId, subjectCode, sem, section, fromDate, toDate], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getAttendanceReport = async (req, res) => {
    const {lectureId} = req. body;
    const query = "SELECT name, roll_no, attendance_status, email FROM `Student`, `Attendance` WHERE `lecture_id`=? AND `email` = `student_email`";

    connection.query(query ,[lectureId], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getAttendancePercentage = async (req, res) => {
    const email = req.params.email;
    const q1 = "SELECT sb.subject_name, (SELECT COUNT(attendance_status) FROM Attendance a, Lecture l WHERE a.attendance_status='P' AND l.subject_code=sds.subject_code AND s.dept_id=l.dept_id "
    const q2 = "AND s.sem=l.sem AND s.section=l.section AND s.email=a.student_email AND a.lecture_id=l.lecture_id) AS 'attendance', (SELECT COUNT(l.lecture_id) FROM Lecture l WHERE l.subject_code=sds.subject_code "
    const q3 = "AND sds.dept_id=l.dept_id AND s.sem=l.sem AND s.section=l.section) AS 'total' FROM sem_dept_subject sds, Student s, Subject sb WHERE s.dept_id=sds.dept_id AND s.sem=sds.sem AND s.email=? AND sb.subject_code=sds.subject_code GROUP BY(sb.subject_code)"
    const query = q1+q2+q3;
    connection.query(query ,[email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

