module.exports = app => {
    const Users = require("../controllers/user.controller");
    const router = require('express').Router();

    // Create a new User
    router.post('/', Users.createUser);
    router.get('/', Users.getUsers);
    router.get('/:id', Users.getUserById);

    app.use('/api/users', router);
}
