const connection = require('../db');

exports.getStudents = async (req, res) => {
    const {deptId, sem, section} = req.body;
    connection.query("SELECT name, email, roll_no, dept_name, year, sem, section, phone_no, gender FROM `Student` s,  `Department` d WHERE s.dept_id=? AND s.sem=? AND s.section=? AND s.dept_id=d.dept_id;", [deptId, sem, section], (err, results, fields) => {
 
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getStudentByRollNo = async (req, res) => {
    const rollNo = req.params.rollNo;
    connection.query("SELECT name, email, roll_no, dept_name, year, sem, section, phone_no, gender FROM `Student` s, `Department` d WHERE s.dept_id = d.dept_id AND s.roll_no=?", [rollNo], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {
            console.log(results);
            res.json(results);
        }
    })
}

exports.getStudentByEmail = async (req, res) => {
    const email = req.params.email;
    connection.query("SELECT name, email, roll_no, dept_name, year, sem, section, phone_no, gender FROM `Student` s, `Department` d WHERE s.dept_id = d.dept_id AND s.email=?", [email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.addStudent = async (req, res) => {
    const {email, name, rollNo, deptId, year, sem, section, phoneNo, gender} = req.body;
    connection.query("INSERT INTO `Student` (email, name, roll_no, dept_id, year, sem, section, phone_no, gender) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)", [email, name, rollNo, deptId, year, sem, section, phoneNo, gender], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.removeStudentByRollNo = async (req, res) => {
    const rollNo = parseInt(req.params.rollNo);
    connection.query("DELETE FROM `Student` WHERE `roll_no`=?", [rollNo], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.removeStudentByEmail = async (req, res) => {
    const email = req.params.email;
    connection.query("DELETE FROM `Student` WHERE `email`=?", [email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

