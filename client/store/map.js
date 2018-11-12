import axios from 'axios';
import Geocode from "react-geocode";

const initialState = {
  lat : 40.7048321,
  lng : -74.0089692,
  location: ''
}

const SET_LAT_LNG = 'SET_LAT_LNG';

const setLocation = (lat, lng, address) => ({
  type: SET_LAT_LNG,
  lat,
  lng,
  address
})

export const _getLocation = (search) => async dispatch => {
  Geocode.setApiKey("AIzaSyByU4bW7h9R5-RGODV_2E5EN1hCkca-DeM");
  //const response = axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${search.replace(/s/gi,'+')}&key=AIzaSyByU4bW7h9R5-RGODV_2E5EN1hCkca-DeM`)
  //const location = response.data.candidates
  //const topLocation = response.data.candidates[0].geometry.location
  Geocode.enableDebug();
  Geocode.fromAddress(search).then(
  response => {
  	console.log(response.results.slice(0,3))
    const { lat, lng } = response.results[0].geometry.location;
    const { formatted_address } = response.results[0];
    console.log(lat, lng, formatted_address);
    const action = setLocation(lat, lng, formatted_address)
    dispatch(action)
  },
  error => {
    console.error(error);
  }
);
  //console.log(location)
}

export const mapReducer = (state=initialState, action) => {
  switch(action.type){
  	case SET_LAT_LNG:
  	  return state={ lat: action.lat, 
  	  				 lng: action.lng,
  	  				 location: action.address }

  	default:
  	  return state;
  }
}
