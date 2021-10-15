module.exports = (sequelize, Sequelize) => {
  const Adresses = sequelize.define("adress", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    // EL CAMPO SE CREA EN AUTOMATICO CON LA RELACION
    //FK from municipalities model
    // id_municipality: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   foreignKey: true
    // },
    street: {
      type: Sequelize.STRING,
      allowNull: false
    },
    suburb: {
      type: Sequelize.STRING,
      allowNull: false,
      home_number: Sequelize.STRING,
      home_unit_number: Sequelize.STRING

    },
    postal_code: {
      type: Sequelize.STRING,
      allowNull: false
    }

  });

  return Adresses;
};
