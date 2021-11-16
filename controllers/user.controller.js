const bcryptjs = require('bcryptjs');

const Users = require('../config/database/models').Users;

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
    .then(user => res.status(200).send({
      msg: 'User created',
      data: user
    }))
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

// include: [
//   {model: Author, as: Author.tableName}
// ]

/**
 * List User By Id - GET
 */
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

/**
 * Delete User By Id - PUT
 */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  return await Users.update({ status: false }, {
    where: { status: true, id: id }
  }).then(user => res.status(200).send({
    msg: 'User Deleted',
    data: user,
  }))
    .catch(error => {
      res.status(400).send({
        error
      })
    })
}

/**
 * Update User By Id - PUT
 */
const updateUser = async (req, res) => {
  const { id } = req.params;
  return await Users.update({
    name: req.body.name,
    first_surname: req.body.first_surname,
    second_surname: req.body.second_surname,
    phone: req.body.phone,
    email: req.body.email,
    role: req.body.role,
    id_municipio: req.body.id_municipio
  }, { where: { status: true, id: id } })
    .then(user => {
      res.status(200).send({
        msg: 'User edited',
        data: user
      })
        .catch(error => {
          res.status(400).send({
            error
          })
        })
    })

}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
}