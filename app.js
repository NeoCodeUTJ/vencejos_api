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


const db = require('./models');
db.sequelize.sync();

// routes declarations
require('./routes/user.route')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});

app.post('/register', (req, res)=>{
        
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const phone = req.body.phone
        const role = req.body.role
        const mail = req.body.mail
        const password = req.body.password

        //Inserts new user
        db.query("INSERT INTO USERS (name, lastname, phone, role, phone, mail, password) VALUES (?,?,?,?,?,?)", 
        [firstName, lastName, phone, role, mail, password],
        (err, result)=>{
            console.log(err);
        }
    );
});

app.post('/login', (req,res)=>{
        const EmailLog = req.body.mail
        const passwordLog = req.body.password

        //Inserts new user
        db.query("SELECT * FROM USERS WHERE mail = ? AND password = ?", 
        [ EmailLog, passwordLog],
        (err, result)=>{
            if(err){
                res.send({err: err});
            }



            if(result.length > 0){
                res.send(result)
            }else{
                res.send({message: "Combinación de usuario y contraseña inexistente!"})
            }
            
        }
    );
});