module.exports = ( sequelize, Sequelize) => {
    const Clients = sequelize.define("clients", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true
        },
        
    });
    return Clients;
}