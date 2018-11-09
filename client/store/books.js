import axios from 'axios';
import queryString from 'query-string';

const inititalState = [];

const GET_BOOKS = 'GET_BOOKS';

const getBooks = books => ({
  type: GET_BOOKS,
  books
});

const _getBooks = input => async dispatch => {
console.log(queryString.stringify(input))
  const response1 = await axios.get(`http://idreambooks.com/api/books/reviews.json?q=${queryString.stringify(input.title)}&key=0bc660067b1ad29675af79d0faa2188a455238e1`)
  const response2 = await axios.get(`http://idreambooks.com/api/publications/recent_recos.json?key=0bc660067b1ad29675af79d0faa2188a455238e1&slug=${queryString.stringify(input.title)}
`)
  const response3 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${queryString.stringify(input.title)}`)
  const response4 = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${queryString.stringify(input)}&api-key=bdef3e6f92844718b67f85768af0d87b`)
  const books = [response1.data, response2.data, response3.data, response4.data];
  console.log(books)
  const action = getBooks(books);
  dispatch(action)
}

const booksReducer = (state=inititalState, action) => {
  switch(action.type){
  	case GET_BOOKS:
  	  return state = action.books
  	default:
  	return state;
  }
}

module.exports = { booksReducer, _getBooks }