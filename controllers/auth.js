const connection = require('../db');

exports.getRole = async (req, res) => {
    console.log(req.body);
    const {email} = req.body;
    const studentQry = "SELECT * FROM `Student` WHERE `email`=?";
    const teacherQry = "SELECT * FROM `Teacher` WHERE `email`=?";
    const adminQry = "SELECT * FROM `Admin` WHERE `email`=?";

    connection.query(studentQry, [email], (err, result, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {
            if (result.length > 0) {
                res.json({role: 'student'});
                return;
            } 
        }
        // if (result.length > 0) {
        //     res.json({role: 'student'});
        //     return;
        // } 
    })

    connection.query(teacherQry, [email], (err, result, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {
            if (result.length > 0) {
                res.json({role: 'teacher'});
                return;
            } 
        }
        // if (result.length > 0) {
        //     res.json({role: 'teacher'});
        //     return;
        // } 
    })

    connection.query(adminQry, [email], (err, result, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {
            if (result.length > 0) {
                res.json({role: 'admin'});
                return;
            } else {
                // res.json({role: 'user'});
            }
        }
        // if (result.length > 0) {
        //     res.json({role: 'admin'});
        //     return;
        // } else {
        //     // res.json({role: 'user'});
        // }
    })

}