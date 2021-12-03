const Shippings = require('../config/database/models').Shippings;
const { Op } = require("sequelize");

/**
 * Create Shipping - POST
 */
const createShipping = async (req, res) => {
    const shipping = {
        delivery_address: req.body.delivery_address,
        start_address: req.body.start_address,
        status: req.body.status,
        quantity: req.body.quantity,
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
                res.status(400).send(error);
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

/**
 * Edit Shipping By Id - PUT
*/
const updateShipping = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    return await Shippings.update({ status: status }, {
        where: { is_active: true, id: id }
    }).then(shipping => res.status(200).send({
        msg: 'Shipping Edited',
        data: shipping
    }))
        .catch(error => res.status(400).send(error));
}


// const updateShipping = async (req, res) => {
//     const { id } = req.params;
//     const {
//         delivery_address,
//         start_address,
//         tracking_code,
//         status,
//         quantity,
//         payment_type,
//         total_amount,
//         received,
//         comments,
//         id_user_client,
//         id_user_employee } = req.body
//     return await Shippings.update({
//         delivery_address,
//         start_address,
//         tracking_code,
//         status,
//         quantity,
//         payment_type,
//         total_amount,
//         received,
//         comments,
//         id_user_client,
//         id_user_employee
//     }, { where: { id: id, is_active: true } })
//         .then(shipping => {
//             if (shipping == 0) {
//                 res.status(400).send({
//                     msg: 'Shipping not found'
//                 })
//             }
//             res.tatus(200).json({
//                 msg: 'Shipping Edited',
//                 data: shipping
//             })
//         })
//         .catch(error => {
//             res.status(400).json(error)
//         })
// }

/**
 * Change Status DELIVERED Shipping By Id - PUT
 */
const deliveredShipping = async (req, res) => {
    const { id } = req.params;
    return await Shippings.update({ status: 'Delivered' }, {
        where: {
            id: id,
            [Op.or]: [{ status: 'In Progress' }, { status: 'On the way' }],
        }
    }).then(shipping => {
        if (shipping == 0) {
            res.status(400).send({
                msg: 'Shipping not found',
            })
        }
        res.status(200).send({
            msg: 'Shipping Delivered',
            data: shipping
        })
    })
        .catch(error => res.status(400).send(error));
}

/**
 * Change Status IN PROGRESS Shipping By Id - PUT
 */
const progressShipping = async (req, res) => {
    const { id } = req.params;
    return await Shippings.update({ status: 'In Progress' }, {
        where: {
            id: id,
            [Op.or]: [{ status: 'Delivered' }, { status: 'On the way' }],
        }
    }).then(shipping => {
        if (shipping == 0) {
            res.status(400).send({
                msg: 'Shipping not found',
            })
        }
        res.status(200).send({
            msg: 'Shipping In Progress',
            data: shipping
        })
    })
        .catch(error => res.status(400).send(error));
}

/**
 * Change Status IN PROGRESS Shipping By Id - PUT
 */
 const onthewayShipping = async (req, res) => {
    const { id } = req.params;
    return await Shippings.update({ status: 'On the way' }, {
        where: {
            id: id,
            [Op.or]: [{ status: 'Delivered' }, { status: 'In Progress' }],
        }
    }).then(shipping => {
        if (shipping == 0) {
            res.status(400).send({
                msg: 'Shipping not found',
            })
        }
        res.status(200).send({
            msg: 'Shipping On the way',
            data: shipping
        })
    })
        .catch(error => res.status(400).send(error));
}


module.exports = {
    createShipping,
    getShippingById,
    getShippings,
    deleteShipping,
    updateShipping,
    deliveredShipping,
    progressShipping,
    onthewayShipping,
}