module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
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
        type: Sequelize.STRING,
        allowNull: false
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

    });
  
    return Users;
  };
 