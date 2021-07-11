const express = require('express')
const path = require('path');
const server = express();

const PORT = process.env.PORT || 3030;

server.use('/static', express.static('public'));

server.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})

server.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html'));
})

server.get('/register', (req, res) => {
    res.sendFile(path.resolve('views/register.html'));
})

server.listen(PORT, function(){
    console.log('Running server in port ' + PORT)
})
