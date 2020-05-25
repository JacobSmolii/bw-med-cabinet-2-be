// const knex = require('knex');
//
// const knexConfig = require('../knexfile')
//
// module.exports = knex(knexConfig.development);

const environment = process.env.ENVIRONMENT || 'development';

const config = require('../knexfile')[environment];

module.exports = require('knex')(config);

