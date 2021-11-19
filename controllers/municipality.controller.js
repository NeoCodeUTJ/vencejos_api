const Municipalities = require('../config/database/models').Municipalities;

const getMunicipalities = async (req, res) => {
    return await Municipalities.findAndCountAll()
        .then(municipalities => {
            res.status(200).send({
                data: municipalities
            })
        })
        .catch(error => {
            res.status(400).send({ error })
        })
}

module.exports = {
    getMunicipalities,
}