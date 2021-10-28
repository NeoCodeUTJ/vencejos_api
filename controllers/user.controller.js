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
    role: req.body.role,
    id_municipio: req.body.id_municipio
  };

  // encrypt constraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(user.password, salt);

  return await Users.create(user)
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error))
}

/**
 * List Users - GET
 */
const getUsers = async (_, res) => {
  return await Users.findAndCountAll({
    where: { status: true },
    attributes: {
      exclude: ['password', 'municipalityId']
    }
  })
    .then(users => res.status(200).send({
      msg: 'Found all users',
      data: users
    }))
    .catch(error => res.status(400).send(error));
}

const getUserById = async (req, res) => {
  return await Users.findOne({
    where: { id: req.params.id },
    attributes: {
      exclude: ['password', 'municipalityId']
    }
  })
    .then(user => res.status(200).send({
      msg: 'Found User',
      data: user
    }))
    .catch(error => res.status(400).send(error));
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
}