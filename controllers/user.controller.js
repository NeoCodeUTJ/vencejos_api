const db = require("../models");
const Users = db.Users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
// Create a User
const user = {
    name: req.body.name,
    first_surname: req.body.first_surname,
    second_surname: req.body.second_surname,
    phone: req.body.phone,
    mail: req.body.mail,
    password: req.body.password,
    role: req.body.role
};

console.log(user, 'USERRRR');
  
    // Save User in the database
    Users.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
