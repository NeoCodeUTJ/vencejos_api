const Shippings = require('../config/database/models').Shippings;

/**
 * Create Shipping - POST
 */
const createShipping = async (req, res) => {
    const shipping = {
        delivery_address: req.body.delivery_address,
        start_address: req.body.start_address,
        tracking_code: '12345', //generar código en automatico
        status: req.body.status,
        quantity: req.body.quantity,
        payment_type: req.body.payment_type,
        total_amount: req.body.total_amount,
        received: req.body.received,
        comments: req.body.comments,
        id_user_client: req.body.id_user_client,
        id_user_employee: req.body.id_user_employee,
    };
    return await Shippings.create(shipping)
        .then(shipping => res.status(200).send(shipping))
        .catch(error => res.status(400).send(error));
}

/**
 * List Shipping By Id - GET
 */
const getShippingById = async (req, res) => {
    return await Shippings.findOne({ where: { id: req.params.id } })
        .then(shipping => {
            res.status(200).send({
                msg: 'Found Shipping',
                data: shipping
            })
                .catch(error => send.status(400).send(error));
        });
}

/**
 * List Shippings - GET
 */
const getShippings = async (req, res) => {
    return await Shippings.findAndCountAll({
        where: { is_active: true },
    }).then(shipping => {
        res.status(200).send({
            msg: 'Found All Shippings',
            data: shipping
        })
            .catch(error => {
                send.status(400).send(error);
            });
    })
}

/**
 * Delete Shipping By Id - PUT
 */
const deleteShipping = async (req, res) => {
    const { id } = req.params;
    return await Shippings.update({ is_active: false }, {
        where: { is_active: true, id: id }
    }).then(shipping => res.status(200).send({
        msg: 'Shipping Deleted',
        data: shipping
    }))
        .catch(error => res.status(400).send(error));
}


module.exports = {
    createShipping,
    getShippingById,
    getShippings,
    deleteShipping,
}