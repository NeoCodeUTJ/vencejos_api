const Shippings = require('../config/database/models').Shippings;
const {Op} = require("sequelize");


/**
 * List reports On the way - GET
 */
const getReportOntheway = async (req, res) => {
    return await Shippings.count({
        where: {
            status: "On the way"
        }
    }).then(shipping => {
        res.status(200).send({msg: 'Found Shipping', data: shipping}).catch(error => send.status(400).send(error));
    });
}
/**
 * List reports Delivered - GET
 */
 const getReportDelivered = async (req, res) => {
    return await Shippings.count({
        where: {
            status: "Delivered"
        }
    }).then(shipping => {
        res.status(200).send({msg: 'Found Shipping', data: shipping}).catch(error => send.status(400).send(error));
    });
}
/**
 * List reports Delivered - GET
 */
 const getReportInProgress = async (req, res) => {
    return await Shippings.count({
        where: {
            status: "In Progress"
        }
    }).then(shipping => {
        res.status(200).send({msg: 'Found Shipping', data: shipping}).catch(error => send.status(400).send(error));
    });
}

const getReports = async (req, res) => {
    return await Shippings.count({
        
    }).then(shipping => {
        res.status(200).send({msg: 'Found Shipping', data: shipping}).catch(error => send.status(400).send(error));
    });
}

module.exports = {
    getReportOntheway,
    getReportDelivered,
    getReportInProgress,
    getReports
}
