const env = process.env.NODE_ENV || "development_bq3k";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

module.exports = knex;