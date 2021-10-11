require('dotenv').config()
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./models/index');





const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
db.sequelize.sync();
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});




