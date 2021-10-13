module.exports = (sequelize, Sequelize) => {
    const Adresses = sequelize.define("adress", {
        //FK from municipalities model
      id_municipalitie: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true,
        autoincrement:true
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      suburb:{
          type: Sequelize.STRING,
          allowNull: false,
          home_number: Sequelize.STRING,
          home_unit_number: Sequelize.STRING

      },
      postal_code:{
          type: Sequelize.STRING,
          allowNull:false
      }

    });
  
    return Adresses;
  };
 