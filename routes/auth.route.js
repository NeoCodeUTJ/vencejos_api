module.exports = app => {
    const Login = require('../controllers/auth.controller');
    const router = require('express').Router();

    router.post('/', Login.signIn);

    app.use('/api/auth/login', router);
}