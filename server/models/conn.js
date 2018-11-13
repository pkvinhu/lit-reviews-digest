if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , conn = null

  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    // the application is executed on Heroku ... use the postgres database
    conn = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
	conn = new Sequelize(process.env.DATABASE_URL, { logging: false });
}

module.exports = conn;