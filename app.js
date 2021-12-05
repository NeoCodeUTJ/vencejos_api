require('dotenv').config()
const express = require('express');
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const db = require('./config/database/models');
db.sequelize.sync();

/**
 * Routes declarations
 */

// Users
require('./routes/user.route')(app);
// Login
require('./routes/auth.route')(app);
// Shippings
require('./routes/shipping.route')(app);
// Municipalities
require('./routes/municipality.route')(app);
// Reports
require('./routes/reports.route')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});