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
            type: Sequelize.BIGINT,
            validate: {
                len: {
                    args: [10, 10],
                    msg: "Phone is invalid"
                }
            },
            allowNull: false,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: { msg: 'Email is invalid' }
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 100],
                    msg: "Password minimum 6 characters"
                }
            }
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
