const express = require('express');

const { signupUser, loginUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', signupUser);

router.post('/login' ,loginUser);

module.exports = { userRouter : router };