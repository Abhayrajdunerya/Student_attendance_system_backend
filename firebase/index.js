var admin = require("firebase-admin");

var serviceAccount = require("../config/student-attendance-syste-1362a-firebase-adminsdk-onzs5-38f8a9bf05.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
