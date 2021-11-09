const { request, response } = require("express");

const validateRole = (...roles) => {
    return (req = request, res = response, next) => {
        console.log(req.user);
        if (!req.user) {
            return res.status(500).json({
                msg: 'Se quiere verificar el rol sin validar el token primero'
            });
        }
        if (!roles.includes(req.user.role)) {
            returnres.status(401).json({
                msg: `El servicio require uno de los siguientes roles: ${roles}`
            })
        }
        next();
    }
}

module.exports = {
    validateRole
}