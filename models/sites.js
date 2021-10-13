module.exports = (sequelize, Sequelize) => {
    const Sites = sequelize.define("sites", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true,
        autoincrement:true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
  
    return Sites;
  };
 