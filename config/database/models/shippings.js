module.exports = (sequelize, Sequelize) => {
    const Shippings = sequelize.define("shippings", {
        delivery_address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        start_address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM(['In Progress', 'On the way', 'Delivered']),
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
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
    return Shippings;
}