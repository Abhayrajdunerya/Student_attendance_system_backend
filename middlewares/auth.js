const admin = require('../firebase');
const connection = require('../db');

// Validation of auth token
exports.authCheck = async (req, res, next) => {
    // console.log(req.headers); // token
    try {
        const firebaseUser = await admin
        .auth()
        .verifyIdToken(req.headers.authtoken);
        // console.log('FIREBASE USER IN AUTH CHECK', firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (error) {
        res.status(401).json({
            error: 'Invalid or expired token',
        });
    }
};

exports.adminCheck = async (req, res,  next) => {
    const {email} = req.user;
    connection.query('SELECT * FROM `Admin` WHERE email = ?', [email], (err, results, field) => {
        if (err) {
            throw new Error(err);
        } else {
            if (results.length === 0) {
                res.status(403).json({
                    err: 'Admin resource. Access denied.',
                });
            } else {
                // next();
                res.json(results)
            }
        }
    })
}

exports.teacherCheck = async (req, res,  next) => {
    const {email} = req.user;
    connection.query('SELECT * FROM `Teacher` WHERE email = ?', [email], (err, results, field) => {
        if (err) {
            throw new Error(err);
        } else {
            if (results.length === 0) {
                res.status(403).json({
                    err: 'Teacher resource. Access denied.',
                });
            } else {
                // next();
                res.json(results)
            }
        }
    })

}

exports.studentCheck = async (req, res,  next) => {
    const {email} = req.user;
    connection.query('SELECT * FROM `Student` WHERE email = ?', [email], (err, results, field) => {
        if (err) {
            throw new Error(err);
        } else {
            if (results.length === 0) {
                res.status(403).json({
                    err: 'Student resource. Access denied.',
                });
            } else {
                // next();
                res.json(results)
            }
        }
    })

}

