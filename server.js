const express = require('express');
const mysql = require('mysql');
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


app.listen(8080, function(err) {
    if (err) console.log('Could not connect to server');
    console.log('Connect to server on port 8080');
});


