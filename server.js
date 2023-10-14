const express = require('express');
const app = express();

app.listen(8080, function(err) {
    if (err) console.log('Could not connect to server');
    console.log('Connect to server on port 8080');
});


