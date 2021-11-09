const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth');

const Roles = require('../config/database/models').Roles;

const Auth = (...roles) => {
    return (req, res, next) => {

        // Comprobar is existe el token
        if (!req.headers.authorization) {
            res.status(401).json({ msg: 'Unauthorized' });
        } else {
            // Comprobar que el token es valido
            let token = req.headers.authorization.split(" ")[1];

            jwt.verify(token, authConfig.secret, (err, decoded) => {
                if (err) {
                    res.status(500).json({ msg: 'An error ocurred while decoding the toke, EXPIRED' })
                } else {
                    req.user = decoded;
                    console.log(req.user.user.role);
                    if (!roles.includes(req.user.user.role)) {
                        return res.status(401).json({
                            msg: `El servicio require uno de los siguientes roles: ${roles}`
                        })
                    }
                    next();
                }
            });
        }
    }
}

module.exports = {
    Auth
}