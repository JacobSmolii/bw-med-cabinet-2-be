// const knex = require('knex');
//
// const knexConfig = require('../knexfile')
//
// module.exports = knex(knexConfig.development);

// const environment = process.env.ENVIRONMENT || 'development';
//
// const config = require('../knexfile')[environment];
//
// module.exports = require('knex')(config);

const knex = require("knex");

const knexfile = require("../knexfile.js");

const env = process.env.DB_ENV || "development";

module.exports = knex(knexfile[env]); //test