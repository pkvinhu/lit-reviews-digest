const Sequelize = require('sequelize');
const conn = require('./conn');

const Book = conn.define('book', {
  name: Sequelize.STRING,
  genre: Sequelize.STRING,
  authorId: Sequelize.INTEGER
})

module.exports = Book;