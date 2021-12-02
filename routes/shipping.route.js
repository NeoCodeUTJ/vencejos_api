module.exports = app => {
    const router = require('express').Router();
    const Shippings = require('../controllers/shipping.controller');
    // este middleware es para que no se haga la peticion si no tiene token
    const { Auth } = require('../middlewares/auth');

    router.post('/', Shippings.createShipping);
    router.get('/', Shippings.getShippings);
    router.get('/:id', Shippings.getShippingById);
    router.put('/:id', Shippings.deleteShipping);
    router.put('/edit/:id', Shippings.updateShipping);
    router.put('/entregado/:id', Shippings.deliveredShipping);
    router.put('/progreso/:id', Shippings.progressShipping);
    router.put('/en_camino/:id', Shippings.onthewayShipping);

    app.use('/api/shippings', router);
}
