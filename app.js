require('dotenv').config()
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize } = require('sequelize');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const sequelize = new Sequelize(process.env.MYSQLDB_DATABASE, process.env.MYSQLDB_USER, process.env.MYSQLDB_ROOT_PASSWORD, {
//   host: 'localhost',
//   dialect: 'mysql'
// });