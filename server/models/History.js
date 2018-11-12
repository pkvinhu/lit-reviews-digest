const Sequelize = require('sequelize');
const conn = require('./conn');

const History = conn.define('history', {
  date: Sequelize.DATE,
  link: Sequelize.STRING,
  snippet: Sequelize.TEXT,
  source: Sequelize.STRING,
  logo: Sequelize.STRING,
  stars: Sequelize.DECIMAL(10,1)
})

module.exports = History;