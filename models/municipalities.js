module.exports = (sequelize, Sequelize) => {
  const Municipalities = sequelize.define("municipalities", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });

  return Municipalities;
};
