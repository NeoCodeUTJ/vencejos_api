module.exports = app => {
    const Users = require("../controllers/user.controller");

    const router = require('express').Router();

    // Create a new User
    router.post('/', Users.create);


    app.use('/api/users', router);
}
