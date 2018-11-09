const Sequelize = require('sequelize');
const conn = require('./conn');

const Author = conn.define('author', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  authorId: Sequelize.INTEGER
})



module.exports = Author;