import axios from 'axios';

const initialState = []

const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
const GET_HISTORY = 'GET_HISTORY';

const addToHistory = review => ({
  type: ADD_TO_HISTORY,
  review
})

const getHistory = bookmarks => ({
  type: GET_HISTORY,
  bookmarks
})

export const _addToHistory = (review, user) => async dispatch => {
  const response = await axios.post(`/api/history/${user.id}`, review)
  const bookmark = response.data;
  const action = addToHistory(review);
  dispatch(action);
}

export const _getHistory = user => async dispatch => {
  const response = await axios.get(`/api/history/${user.id}`)
  const history = response.data;
  const action = getHistory(history)
  dispatch(action);
}

export const historyReducer = (state=initialState, action) => {
	switch(action.type){
	  case ADD_TO_HISTORY:
	    return state = [action.review]

	  case GET_HISTORY:
	    return state = action.bookmarks
	  default:
	    return state;
	}
}

