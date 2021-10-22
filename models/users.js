module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        name: {
            type: Sequelize.STRING,
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
            type: Sequelize.INTEGER,
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
        role: {
            type: Sequelize.ENUM(
                ['admin', 'employee', 'client']
            ),
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
