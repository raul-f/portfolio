const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname + 'main')));

app.get('/', (req, res) => {
    res.sendFile('./main/index.html');
});

app.listen(3000);