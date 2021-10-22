module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
            autoincrement: true
        },
        // SE AGREGA EL CAMPO EN AUTOMATICO CON LA RELACION
        // FK from municipalities model
        // id_municipality: {
        // type: Sequelize.INTEGER,
        // allowNull: false,
        // },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.ENUM(
                ['admin', 'employee', 'client']
            ),
            allowNull: false
        },
        first_surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        second_surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        mail: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING(64),
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }

    });

    return Users;
};
