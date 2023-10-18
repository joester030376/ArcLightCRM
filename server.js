const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database.");
});

app.use(cors());

app.use('/login', (req,res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(8080, function(err) {
    if (err) console.log('Could not connect to server');
    console.log('Connect to server on port 8080');
});


