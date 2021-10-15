module.exports = (sequelize, Sequelize) => {
    const Shippings_information = sequelize.define("shippings_information", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoincrement: true,
            primaryKey: true
        },
    });
    return Shippings_information;
}