const dbConfig = require('../config/db');
const Sequelize = require('sequelize');

const UserSchema = require('./users');
const MunicipalitiesSchema = require('./municipalities');
const SitesSchema = require('./sites');
const AdressesSchema = require('./adresses');
const ShippingsSchema = require('./shippings');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

//sequelize.authenticate().then(() => console.log("Conectado")).catch(err => console.log("error al conectarse" + err))

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Users = UserSchema(sequelize, Sequelize);
db.Municipalities = MunicipalitiesSchema(sequelize, Sequelize);
db.Sites = SitesSchema(sequelize, Sequelize);
db.Adresses = AdressesSchema(sequelize, Sequelize);
db.Shippings = ShippingsSchema(sequelize, Sequelize);

/*
 *
 * Relations
 * 
*/

// municipalities to adresses
db.Municipalities.hasMany(db.Adresses);

// adresses to municipalities
db.Adresses.belongsTo(db.Municipalities);

// users to municipality
db.Municipalities.hasMany(db.Users);

//municipality to users
db.Users.belongsTo(db.Municipalities);

// shippings to users
db.Users.hasMany(db.Shippings);

//users to shippings CLIENT
db.Shippings.belongsTo(db.Users, {
    foreignKey: {
        name: 'id_user_client',
        allowNull: false
    }
});

// shippings to users
db.Users.hasMany(db.Shippings);

//users to shippings EMPLOYEE
db.Shippings.belongsTo(db.Users, {
    foreignKey: {
        name: 'id_user_employee',
        allowNull: false
    }
});

// RELACIONES TABLA SITES Y SHIPPINGS
// id origen
db.Sites.hasMany(db.Shippings);

db.Shippings.belongsTo(db.Sites, {
    foreignKey: {
        name: 'id_origin_site',
        allowNull: true,
    }
});

// id destino 
db.Sites.hasMany(db.Shippings);

db.Shippings.belongsTo(db.Sites, {
    foreignKey: {
        name: 'id_destination_site',
        allowNull: true,
    }
});


module.exports = db;