const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    console.log(`${req.method} request to ${req.url} has been received`);
    res.sendFile(path.join(__dirname, 'main/index.html'));
});

app.get('/project-collection', (req, res) => {
    console.log(`${req.method} request to ${req.url} has been received`);
    res.sendFile(path.join(__dirname, 'project-collection/index.html'));
});

app.listen(3000);