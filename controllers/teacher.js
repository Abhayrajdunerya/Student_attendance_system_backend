const connection = require('../db');

exports.getTeachers = async (req, res) => {
    const {deptId} = req.body;
    connection.query("SELECT name, email, dept_name, phone_no, gender FROM `Teacher` s,  `Department` d WHERE s.dept_id=? AND s.dept_id=d.dept_id;", [deptId], (err, results, fields) => {
 
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getTeacherByPhoneNo = async (req, res) => {
    const phoneNo = parseInt(req.params.phone);
    connection.query("SELECT name, email, dept_name, phone_no, gender FROM `Teacher` s, `Department` d WHERE s.dept_id = d.dept_id AND s.phone_no=?", [phoneNo], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getTeacherByEmail = async (req, res) => {
    const email = req.params.email;
    connection.query("SELECT name, email, dept_name, phone_no, gender FROM `Teacher` s, `Department` d WHERE s.dept_id = d.dept_id AND s.email=?", [email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.addTeacher = async (req, res) => {
    const {email, name, deptId, phoneNo, gender} = req.body;
    connection.query("INSERT INTO `Teacher` (email, name, dept_id, phone_no, gender) VALUES(?, ?, ?, ?, ?)", [email, name, deptId, phoneNo, gender], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.removeTeacherByPhoneNo = async (req, res) => {
    const phoneNo = parseInt(req.params.phone);
    connection.query("DELETE FROM `Teacher` WHERE `phone_no`=?", [phoneNo], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.removeTeacherByEmail = async (req, res) => {
    const email = req.params.email;
    connection.query("DELETE FROM `Teacher` WHERE `email`=?", [email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}