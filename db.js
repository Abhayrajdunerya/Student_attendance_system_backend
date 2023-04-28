const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config()

// const connection = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     port: process.env.DATABASE_PORT,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE,
//     // ssl: {
//     //     rejectUnauthorized: true,
//     // }
// })

const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

module.exports = connection