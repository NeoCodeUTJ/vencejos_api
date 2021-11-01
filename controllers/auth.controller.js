const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const authConfig = require('../config/auth');

const Users = require('../models').Users;

// Login
const signIn = async (req, res) => {
    let { email, password } = req.body;

    Users.findOne({
        where: { email: email },
    }).then(user => {
        if (!user) {
            res.status(404).json({
                msg: 'User not found'
            })
        } else {
            const validatePass = bcryptjs.compareSync(password, user.password);
            if (validatePass) {
                //return jwt
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.status(200).json({
                    msg: 'Login succesfully',
                    data: user,
                    token: token
                });

            } else {
                res.status(401).json({
                    msg: 'Unauthorized Access'
                })
            }
        }
    }).catch(error => {
        res.status(500).json(error)
    })

}

module.exports = {
    signIn
}