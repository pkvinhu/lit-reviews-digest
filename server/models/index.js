const conn = require('./conn');
const Book = require('./books')
const Author = require('./authors');
const User = require('./User');

const init = () => conn.sync();

module.exports = { User, Book, Author, init };