module.exports = (sequelize, Sequelize) => {
    const Shippings = sequelize.define("shippings", {
        tracking_code: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM(['In Progress', 'On the way', 'Delivered']),
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        payment_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        total_amount: {
            type: Sequelize.STRING,
            allowNull: false
        },
        received: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        comments: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return Shippings;
}