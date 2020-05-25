var PORT = process.env.PORT || 5000
const express = require('express');
const server = require('./server')


server.listen(PORT, () => console.log('Server is running on port 5000'));
