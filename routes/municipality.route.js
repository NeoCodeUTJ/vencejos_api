
module.exports = app => {
    const router = require('express').Router();
    const Municipalities = require('../controllers/municipality.controller');
    const { Auth } = require('../middlewares/auth');

    router.get('/', Auth('admin'), Municipalities.getMunicipalities);

    app.use('/api/municipalities', router);
}