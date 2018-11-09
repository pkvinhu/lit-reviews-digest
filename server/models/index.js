const conn = require('./conn');
const Book = require('./books')
const Author = require('./authors');

const init = () => conn.sync();

module.exports = { Book, Author, init };