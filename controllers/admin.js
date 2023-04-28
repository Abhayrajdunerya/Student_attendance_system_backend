const connection = require('../db');

exports.getAdminByEmail = async (req, res) => {
    const email = req.params.email;
    connection.query("SELECT name, email, phone_no, gender, dept_name FROM `Admin` a, `Department` d WHERE a.dept_id = d.dept_id AND `email`=?", [email], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}

exports.getAdmins = async (req, res) => {
    connection.query("SELECT * FROM `Admin`", [], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}