module.exports = (sequelize, Sequelize) => {
  const Municipalities = sequelize.define("municipalities", {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });

  return Municipalities;
};
