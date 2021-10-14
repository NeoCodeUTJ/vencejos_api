const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const UserSchema = require('./users');
const MunicipalitiesSchema = require('./municipalities');
const SitesSchema = require('./sites');
const AdressesSchema = require('./adresses');

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

sequelize.authenticate().then(() => console.log("Conectado")).catch(err => console.log("error al conectarse" + err))

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = UserSchema(sequelize, Sequelize);
db.Municipalities = MunicipalitiesSchema(sequelize, Sequelize);
db.Sites = SitesSchema(sequelize, Sequelize);
db.Adresses = AdressesSchema(sequelize, Sequelize);

//assosiations

//municipalities to adresses
db.Adresses.hasMany(db.Municipalities);

//adresses to municipalities
db.Municipalities.belongsTo(db.Adresses);

//users


module.exports = db;
