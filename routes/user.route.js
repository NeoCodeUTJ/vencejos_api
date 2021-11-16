module.exports = app => {
    const Users = require("../controllers/user.controller");
    const router = require('express').Router();

    // este middleware es para que no se haga la peticion si no tiene token
    const { Auth } = require('../middlewares/auth');

    // Create a new User
    router.post('/', Users.createUser);
    // Get all Users
    router.get('/', Auth('admin'), Users.getUsers);
    // Get User by id
    router.get('/:id', Auth('admin'), Users.getUserById);
    // Delete User
    router.put('/:id', Auth('admin'), Users.deleteUser);
    // Edit User
    router.put('/edit/:id', Auth('admin'), Users.updateUser);

    app.use('/api/users', router);
}
