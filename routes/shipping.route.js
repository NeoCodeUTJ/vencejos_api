module.exports = app => {
    const router = require('express').Router();
    const Shippings = require('../controllers/shipping.controller');
    // este middleware es para que no se haga la peticion si no tiene token
    const { Auth } = require('../middlewares/auth');

    router.post('/', Shippings.createShipping);
    router.get('/', Auth('admin', 'employee'), Shippings.getShippings);
    router.get('/:id', Auth('admin', 'employee'), Shippings.getShippingById);
    router.put('/:id', Shippings.deleteShipping);
    router.put('/edit/:id', Shippings.updateShipping);

    app.use('/api/shippings', router);
}
