module.exports = (sequelize, Sequelize) => {
  const Adresses = sequelize.define("adress", {
    street: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    suburb: {
      type: Sequelize.STRING,
      allowNull: false,
      home_number: Sequelize.STRING,
      home_unit_number: Sequelize.STRING,
    },
    postal_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    exterior_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    interior_number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM(['origin', 'destination']),
      allowNull: false,
    }
  });

  return Adresses;
};
