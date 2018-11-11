import axios from 'axios';
import queryString from 'query-string';

const inititalState = {
  input: '',
  reviews: [],
  google: [],
  nytimes: [],
  penguin: []
};

const CHANGE_INPUT = 'CHANGE_INPUT'
const GET_BOOKS_REVIEWS = 'GET_BOOKS_REVIEWS';
const GET_BOOKS_GOOGLE = 'GET_BOOKS_GOOGLE';
const GET_BOOKS_NYTIMES = 'GET_BOOKS_NYTIMES';
const GET_BOOKS_PENGUIN = 'GET_BOOKS_PENGUIN';

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
})
const getBooksWithReviews = books => ({
  type: GET_BOOKS_REVIEWS,
  books
});

const getBooksGoogle = books => ({
  type: GET_BOOKS_GOOGLE,
  books
})

const getBooksNYTimes = books => ({
  type: GET_BOOKS_NYTIMES,
  books
})

const getBooksPenguin = books => ({
  type: GET_BOOKS_PENGUIN,
  books
})


//thunk
export const _getBooksWithReviews = (input, type) => async dispatch => {
console.log(queryString.stringify(input))
  const response = await axios.get(`http://idreambooks.com/api/books/reviews.json?q=${input.split(' ').join('%20')}&key=0bc660067b1ad29675af79d0faa2188a455238e1`)
//const response2 = await axios.get(`http://idreambooks.com/api/publications/recent_recos.json?key=0bc660067b1ad29675af79d0faa2188a455238e1&slug=${input.split(' ').join('%20')}`)

  const reviews = response
  						.data
  						.book
  						.critic_reviews
  						.map(each => {return {date: each.review_date,
  											 link: each.review_link,
  											 snippet: each.snippet,
  											 source: each.source,
  											 logo: each.source_logo,
  											 stars: each.star_rating}})
  const iDreamBooks = [{title: response.data.book.title,
  						author: response.data.book.author,
  						reviews}]
  console.log(iDreamBooks)
  const action = getBooksWithReviews(iDreamBooks);
  dispatch(action)
}

export const _getBooksGoogle = (input, type) => async dispatch => {
	const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input.split(' ').join('%20')}`)
	const googleBooks = response
  							.data
  							.items
  							.slice(0,1)
  							.map(each=>{return {title: each.volumeInfo.title, 
	  											purchase: each.saleInfo.buyLink || 'Not Available', 
	  											//price: each.saleInfo.retailPrice.amount,
	  											authors: each.volumeInfo.authors,
	  											description: each.volumeInfo.description,
	  											imgLink: each.volumeInfo.imageLinks.thumbnail,
	  											previewLink: each.volumeInfo.previewLink}});
	  console.log(googleBooks)
	const action = getBooksGoogle(googleBooks);
  	dispatch(action);
}

export const _getBooksNYTimes = (input, type) => async dispatch => {
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=${input.split(' ').join('%20')}&api-key=bdef3e6f92844718b67f85768af0d87b`)
  const data = response
					.data
					.results
					.slice(0,1)
					.map(each => {return {author: each.book_author,
										  title: each.book_title,
										  byline: each.byline,
										  summary: each.summary,
										  link: each.url } });
  const nytimesBooks = data.length > 3 ? data.slice(0, 3) : data;
    console.log(nytimesBooks)
  const action = getBooksNYTimes(nytimesBooks);
  dispatch(action);
}

export const _getBooksPenguin = (input, type) => async dispatch => {
  const response = await axios.get(`https://reststop.randomhouse.com/resources/works/?search=${input.split(' ').join('%20')}`) 
  const penguinBooks = response
  							.data
  							// .map(each => { return {author: each.author}})
    console.log(penguinBooks)
  const action = getBooksPenguin(penguinBooks)
  dispatch(action)
}


export const booksReducer = (state=inititalState, action) => {
  switch(action.type){
  	case CHANGE_INPUT:
  	  return {
  	    ...state,
  	    input: action.input
  	  }

  	case GET_BOOKS_REVIEWS:
  	console.log(action.books)
  	  return {
  	  	...state,
  	  	reviews: action.books
  	  };

  	case GET_BOOKS_GOOGLE:
  	  return {
  	  	...state,
  	  	google: action.books
  	  }

  	case GET_BOOKS_NYTIMES:
  	  return {
  	  	...state,
  	  	nytimes: action.books
  	  }

  	case GET_BOOKS_PENGUIN:
  	console.log(action.books)
  	  return {
  	  	...state,
  	  	penguin: [action.books]
  	  }

  	default:
  	return state;
  }
}

