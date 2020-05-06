const knex = require("knex");
const { DB_ENV } = require("../env");

const config = require("../knexfile");

const environment = DB_ENV || "development";

const db = knex(config[environment]);

module.exports = db;
