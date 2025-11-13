const express = require('express');
const { registerUser, loginUser } = require('../../controllers/auth/auth.Controller')

const route = express.Router();

route.post('/register', registerUser);
route.post('/login', loginUser);

// 8000/api/auth/register

module.exports = route;