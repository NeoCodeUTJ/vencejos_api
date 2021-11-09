const { validateRole } = require("../middlewares/validateRol");

module.exports = app => {
    const Users = require("../controllers/user.controller");
    const router = require('express').Router();

    // este middleware es para que no se haga la peticion si no tiene token
    const { Auth } = require('../middlewares/auth');

    // Create a new User
    router.post('/', Users.createUser);
    router.get('/', Auth('employee'), Users.getUsers);
    router.get('/:id', Users.getUserById);

    app.use('/api/users', router);
}
