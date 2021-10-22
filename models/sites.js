module.exports = (sequelize, Sequelize) => {
  const Sites = sequelize.define("sites", {
    type: {
      type: Sequelize.ENUM(['origin', 'destination']),
      allowNull: false
    }

  });

  return Sites;
};