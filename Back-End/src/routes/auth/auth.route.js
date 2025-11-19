const express = require('express');
const { registerUser, loginUser, forgotPassword, verifyOTP, changePassword } = require('../../controllers/auth/auth.Controller')

const route = express.Router();

route.post('/register', registerUser); // 8000/api/auth/register
route.post('/login', loginUser); // 8000/api/auth/login
route.post('/forgot-password', forgotPassword); // 8000/api/auth/forgot-password
route.post('/verify-otp', verifyOTP); // 8000/api/auth/verify-otp
route.post('/change-password', changePassword); // 8000/api/auth/change-password


// 8000/api/auth/register

module.exports = route;