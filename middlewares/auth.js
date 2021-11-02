const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    console.log(req.headers);

    // Comprobar is existe el token
    if (!req.headers.authorization) {
        res.status(401).json({ msg: 'Unauthorized' });
    } else {
        // Comprobar que el token es valido
        let token = req.headers.authorization.split(" ")[1];
        console.log(token);

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                res.status(500).json({ msg: 'An error ocurred while decoding the token' })
            } else {
                req.user = decoded;
                next();
            }
        });
    }


}