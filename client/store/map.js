import axios from 'axios';

const initialState = {
  "lat" : 40.7048321,
  "lng" : -74.0089692,
  locations: []
}

const SET_LAT_LNG = 'SET_LAT_LNG';

const setLocation = (lat, lng) => ({
  type: SET_LAT_LNG,
  lat,
  lng
})

export const _getLocation = (search) => async dispatch => {
  const response = axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search.replace(/s/gi, '+'))}&key=AIzaSyByU4bW7h9R5-RGODV_2E5EN1hCkca-DeM`)
  const location = response.data.candidates
  const topLocation = response.data.candidates[0].geometry.location
}

export const mapReducer = (state=initalState, action) => {
  switch(action.type){
  	case SET_LAT_LNG:
  	  return state={ 'lat': action.lat, 'lng': action.lng }

  	default:
  	  return state;
  }
}
