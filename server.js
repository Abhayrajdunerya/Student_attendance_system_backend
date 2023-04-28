const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { error } = require('console');
require('dotenv').config();
const connection = require('./db');

// app
const app = express();

// connection to database
// connection.query(
//     "USE " + process.env.DATABASE
// )


// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '2mb'}));
app.use(cors());

// routes middleware
fs.readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// connection.end()