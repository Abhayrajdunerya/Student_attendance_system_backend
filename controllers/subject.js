const connection = require('../db');

// exports.getSubjects = async (req, res) => {
//     const {sem, deptId} = req.body.searchData;
//     connection.query("SELECT sd.subject_code, s.subject_name FROM `sem_dept_subject` sd INNER JOIN `Subject` s ON sd.subject_code = s.subject_code WHERE sd.sem=? AND sd.dept_id=?", [sem, deptId], (err, results, fields) => {
//         if (err) {
//             res.status(400).json({
//                 err: err.message
//             })
//         } else {

//             res.json(results);
//         }
//     })
// }

exports.getSubjects = async (req, res) => {
    const {sem, deptId, teacherEmail} = req.body.searchData;
    // console.log(req.body.searchData);
    connection.query("SELECT DISTINCT sdt.subject_code, s.subject_name FROM sub_dept_teacher as sdt, sem_dept_subject as sds, Subject s WHERE sdt.teacher_email=? AND sds.sem=? AND sds.dept_id=? AND sdt.subject_code=sds.subject_code AND sdt.subject_code=s.subject_code", [teacherEmail, sem, deptId], (err, results, fields) => {
        if (err) {
            res.status(400).json({
                err: err.message
            })
        } else {

            res.json(results);
        }
    })
}