const Sequelize = require('sequelize');
const bcryptjs = require('bcryptjs');

const Users = require('../models').Users;

/**
 * Create User - POST
 */
const createUser = async (req, res) => {

  const user = {
    name: req.body.name,
    first_surname: req.body.first_surname,
    second_surname: req.body.second_surname,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };

  // encrypt constraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(user.password, salt);

  return await Users.create(user)
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error))
}

module.exports = {
  createUser,
}