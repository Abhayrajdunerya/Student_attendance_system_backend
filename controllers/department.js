const connection = require('../db');

exports.getDepartments = async (req, res) => {
    connection.query("SELECT * FROM `Department`", [], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}