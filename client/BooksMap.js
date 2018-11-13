import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { TextField, Button, Typography } from '@material-ui/core';
import { _getLocation } from './store/map'

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: 'url("https://img.icons8.com/color/24/000000/marker.png")'
  }}>
  </div>
);

class BooksMap extends Component {
  constructor(){
  	super()
  	this.state={ searchInput: ''}
  	this.handleClick = this.handleClick.bind(this);
  	this.handleChange=this.handleChange.bind(this);
  }
  
  handleChange(e){
  	const { name, value } = e.target;
  	this.setState({ [name]: value })
  }

  handleClick(){
  	const { searchInput } = this.state;
  	this.props._getLocation(searchInput);
  }

  componentDidMount(){

  }

  render(){
  const { handleClick, handleChange } = this;
  const { lat, lng, location } = this.props;
  const { searchInput } = this.state;
  console.log(lat, lng);
  	return (
		<div style={{ height: '70vh', width: '70%', padding: '100px 0px 200px 125px' }}>
		<div style={{display:'flex'}}><TextField name="searchInput"
				   label="Search a Bookstore"
	          	   value={searchInput}
	               onChange={handleChange}
	               margin="normal"
	               variant="outlined"></TextField>
	    <Button onClick={handleClick}>Search</Button>
	    {location.length ? (<Typography variant="subtitle1" style={{padding: '35px 0px 0px 10px'}}>{location}</Typography>) : null}</div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyByU4bW7h9R5-RGODV_2E5EN1hCkca-DeM' }}
          defaultCenter={{lat, lng}}
          center={{lat, lng}}
          defaultZoom={16}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text={'Fullstack Academy'}
          />
        </GoogleMapReact>
      </div>
  	)
  }
}

const mapStateToProps = ({ map }, { history }) => {
  const { lat, lng, location } = map;
  console.log(lat, lng)
  return {
    lat,
	lng,
	location
  }
}

const mapDispatchToProps = (dispatch) => ({
  _getLocation: (search) => dispatch(_getLocation(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksMap);